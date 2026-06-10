import { test, expect } from '@playwright/test';

test('Job vacancy link on page 13 returns 404', async ({ page }) => {
  await page.goto('https://www.ditto.jobs/jobs/622441854666091255');
  await expect(page.getByRole('img', { name: '404' })).toBeVisible();
});

test('Job vacancy link on page 1 loads successfully', async ({ page, browserName }) => {
  await page.goto('https://www.ditto.jobs/search-list?job_title=service+consultant&location=4261&cityName=Pretoria&page_number=1');
  await page.waitForTimeout(3000);
  await page.screenshot({ path: `ditto-page1-${browserName}.png`, fullPage: true });
});