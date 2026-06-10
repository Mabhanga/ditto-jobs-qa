# Ditto Jobs QA — Playwright Test

## Bug Summary
A broken job vacancy link was found on [Ditto Jobs](https://www.ditto.jobs) during exploratory testing.

Job listings from page 8 onwards return a **404 error** when clicked.

## Steps to Reproduce
1. Go to https://www.ditto.jobs
2. Search "Service Consultant" in Pretoria
3. Navigate to page 8 or beyond
4. Click any vacancy and click **Read More**

## Expected Result
Full job description page loads successfully.

## Actual Result
404 — page not found.

## Impact
Job seekers browsing beyond page 8 cannot view or apply for any vacancies,
making a large portion of job listings completely inaccessible.

## Automated Test
Bug verified using **Playwright** across Chrome, Firefox and Safari.

## How to Run
```bash
npm install
npx playwright install
npx playwright test tests/ditto-404.spec.js
```

## Tech Stack
- [Playwright](https://playwright.dev/)
- JavaScript
