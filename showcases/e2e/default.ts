import { expect, type Page, test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
// @ts-expect-error - required for playwright
import { COLORS, DENSITIES } from './fixtures/variants.ts';
// @ts-expect-error - required for playwright
import { setScrollViewport } from './fixtures/viewport.ts';

const gotoPage = async (
	page: Page,
	path: string,
	density: string,
	color: string,
	fixedHeight?: number
) => {
	await page.goto(`./#/${path}?density=${density}&color=${color}`, {
		waitUntil: 'domcontentloaded'
	});

	const dbPage = page.locator('.db-page');
	await expect(dbPage).toHaveAttribute('data-fonts-loaded', 'true');
	await expect(page.locator('html')).toHaveCSS('overflow', 'hidden');
	await setScrollViewport(page, fixedHeight)();
};

export const getDefaultScreenshotTest = (
	path: string,
	fixedHeight?: number,
	disableRules?: string[]
) => {
	for (const density of DENSITIES) {
		for (const color of COLORS) {
			test(`should match screenshot`, async ({ page }, testInfo) => {
				const isWebkit =
					testInfo.project.name === 'webkit' ||
					testInfo.project.name === 'mobile_safari';
				const showcase = process.env.showcase;
				const diffPixel = process.env.diff;
				const maxDiffPixelRatio = process.env.ratio;
				const isAngular = showcase.startsWith('angular');

				const config: any = {};

				if (maxDiffPixelRatio ?? diffPixel) {
					if (maxDiffPixelRatio) {
						config.maxDiffPixelRatio = Number(maxDiffPixelRatio);
					}

					if (diffPixel) {
						config.maxDiffPixels = Number(diffPixel);
					}
				} else if (isAngular) {
					config.maxDiffPixels = 1000;
				} else if (isWebkit) {
					config.maxDiffPixels = 120;
				} else {
					config.maxDiffPixels = 1;
				}

				await gotoPage(page, path, density, color, fixedHeight);

				const header = await page.locator('header');

				config.mask = [header];

				await expect(page).toHaveScreenshot(
					[density, `${color}.png`],
					config
				);
			});

			test('should not have any A11y issues', async ({ page }) => {
				await gotoPage(page, path, density, color, fixedHeight);
				const accessibilityScanResults = await new AxeBuilder({
					page
				})
					.include('main')
					.disableRules(disableRules ?? [])
					.analyze();

				expect(accessibilityScanResults.violations).toEqual([]);
			});
		}
	}
};
