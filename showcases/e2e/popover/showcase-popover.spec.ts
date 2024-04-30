/* eslint-disable no-await-in-loop,unicorn/prefer-dom-node-dataset */
import { test } from '@playwright/test';
// @ts-expect-error - required for playwright
import { getDefaultScreenshotTest } from '../default.ts';

const pre = async (page) => {
	const popovers = await page.locator('main').locator('.db-popover').all();
	for (const popover of popovers) {
		await popover.evaluate((pop) =>
			pop.setAttribute('data-testing-hover', 'true')
		);
	}

	// Wait for animations
	await page.waitForTimeout(1000);
};

test.describe('DBPopover', () => {
	getDefaultScreenshotTest({
		path: '01/popover',
		preScreenShot: pre,
		preA11y: pre
	});
});
