# AI-playwright-testing | AI + Azure DevOps + Playwright

> Final Year SQA Project by Iqra Afzal - CI/CD Green ✅

## 📌 Project Overview
This project automates testing for automationexercise.com using Playwright with AI-powered test generation (Groq gpt-oss-20b) and CI/CD.

## 🚀 Tech Stack
- Framework: Playwright
- AI Model: Groq gpt-oss-20b for AI test generation
- Language: JavaScript / Node.js
- CI/CD: GitHub Actions + Azure DevOps
- API: DummyJSON - 200 OK

## 🤖 AI Testing Proof
- Login Status: 200 OK - Token Saved
- Product Created: id 195, title 'Iqra Test Product' - Passed
- Fix: All 3 AI files fixed for CI green

## ✅ CI/CD Pipeline Proof - Alhamdulillah Success

### 1. GitHub Actions (My Repo - Permanent Proof)
- Latest Run: #5 - final fix: increase timeout and retries for CI
- Status: Success ✅ - Duration: 11m 20s
- Commit: 9714dcd on main branch
- File: .github/workflows/playwright.yml
- Fix: timeout 90000, retries 2, navigationTimeout 60000

### 2. Azure DevOps (Via Talha's Org - talhachaudhary395)
- Project: SQA-Playwright-Project
- Pipeline: Iqra3719.playwright-test
- Run: #20260923.8 - Success ✅ - 6m 9s
- Run By: Iqra Ch
- Repo: Iqra3719/playwright-test main

## 📁 Structure
.github/workflows/ - CI
test/ - Playwright tests
azure-pipelines.yml - Azure pipeline
playwright.config.js - Config with final fix

## ▶️ How to Run
npm ci
npx playwright install --with-deps
npm test

Completed by Iqra3719 - Oct 2026
