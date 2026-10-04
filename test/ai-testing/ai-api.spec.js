import { test, expect } from '@playwright/test';
import OpenAI from 'openai';
import 'dotenv/config';

test.skip(!process.env.GROQ_API_KEY, 'No GROQ_API_KEY in CI');

const client = new OpenAI({
  apiKey: process.env.GROQ_API_KEY || 'dummy-key-for-ci',
  baseURL: 'https://api.groq.com/openai/v1'
});

test('AI API - Basic Response Test', async () => {
  const response = await client.chat.completions.create({
    model: 'openai/gpt-oss-20b', // <-- NEW MODEL - yehi ab live hai
    messages: [{ role: 'user', content: 'What is software testing? One sentence.' }]
  });

  const text = response.choices[0].message.content;
  console.log('AI Response:', text);
  expect(text.length).toBeGreaterThan(10);
});