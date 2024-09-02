import { expect, type Page, test } from '@playwright/test';
import Components from '../data/components.json' with { type: 'json' };

const getDefaultScreenshotTest = async (
	name: string,
	type: string,
	path: string,
	fn: (page: Page) => Promise<void>
) => {
	test(`${type} should match screenshot`, async ({ page }) => {
		await page.goto(`${path}`, {
			waitUntil: 'domcontentloaded',
			timeout: 20_000
		});
		await fn(page);
		await expect(page).toHaveScreenshot([name, 'patternhub.png']);
	});
};

for (const group of Components) {
	for (const component of group.subNavigation) {
		test.describe(component.name, async () => {
			await getDefaultScreenshotTest(
				component.name,
				`docs`,
				`./components/${component.name}/docs/Angular`,
				async (page) => {
					expect(await page.locator('h2').first().isVisible());
				}
			);
		});
		test.describe(component.name, async () => {
			await getDefaultScreenshotTest(
				component.name,
				`overview`,
				`./components/${component.name}/overview?page=density`,
				async (page) => {
					const functionalCount = await page
						.getByText('Functional')
						.first()
						.isVisible();
					expect(functionalCount);
				}
			);
		});
		test.describe(component.name, async () => {
			await getDefaultScreenshotTest(
				component.name,
				`properties`,
				`./components/${component.name}/properties?fullscreen=true&noh1=true`,
				async (page) => {
					expect(await page.locator('h2').first().isVisible());
				}
			);
		});
	}
}
