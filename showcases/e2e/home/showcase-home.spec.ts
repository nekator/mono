import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('Home', () => {
	test('has title', async ({ page }) => {
		await page.goto('./');
		await expect(page).toHaveTitle('Showcase');
	});

	test('should not have any A11y issues', async ({ page }) => {
		await page.goto('./');
		const accessibilityScanResults = await new AxeBuilder({
			page
		}).analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});
});
