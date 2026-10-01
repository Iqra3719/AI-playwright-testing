import { test, expect } from '@playwright/test';
import OpenAI from 'openai';
import fs from 'fs';
import 'dotenv/config';
import { evaluateResponse } from './evaluator.js';

const client = new OpenAI({
  apiKey: process.env.GROQ_API_KEY?.trim(),
  baseURL: 'https://api.groq.com/openai/v1'
});

const prompts = JSON.parse(fs.readFileSync('test/ai-testing/prompts.json', 'utf-8'));

for (const item of prompts) {
  test(`AI Validation - Prompt ${item.id}`, async () => {
    const response = await client.chat.completions.create({
      model: 'openai/gpt-oss-20b',
      messages: [{ role: 'user', content: item.prompt }]
    });
    const aiText = response.choices[0].message.content;
    console.log(`Prompt ${item.id}: ${aiText.substring(0,100)}`);
    
    const evaluation = await evaluateResponse(item.prompt, aiText);
    console.log(`Eval ${item.id}:`, evaluation);
    
    expect(evaluation.relevance).toBeGreaterThan(3);
    expect(evaluation.isToxic).toBe(false);
  });
}