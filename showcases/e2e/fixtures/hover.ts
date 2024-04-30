/* eslint-disable no-await-in-loop,unicorn/prefer-dom-node-dataset */
import { type Page } from '@playwright/test';

export const hoverPre = async (page: Page, selector: string) => {
	const components = await page.locator('main').locator(selector).all();
	for (const component of components) {
		await component.evaluate((comp: HTMLElement) => {
			comp.setAttribute('data-testing-hover', 'true');
		});
	}

	// Wait for animations
	await page.waitForTimeout(1000);
};
