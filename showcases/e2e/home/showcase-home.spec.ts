import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { getDefaultScreenshotTest, waitForDBPage } from '../default';

test.describe('Home', () => {
	test('has title', async ({ page }) => {
		await page.goto('./');
		await expect(page).toHaveTitle('Showcase');
	});

	test('should not have any A11y issues', async ({ page }) => {
		const isAngular = process.env.showcase.startsWith('angular');

		if (isAngular) {
			test.skip();
		}

		await page.goto('./', {
			waitUntil: 'domcontentloaded'
		});

		await waitForDBPage(page);
		const accessibilityScanResults = await new AxeBuilder({
			page
		})
			// TODO: Currently disable till we solved https://github.com/db-ui/mono/issues/2587
			// TODO: There might be an issue in axe-core: https://github.com/dequelabs/axe-core/issues/4431
			.disableRules(['color-contrast', 'aria-allowed-role'])
			.analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});
});
