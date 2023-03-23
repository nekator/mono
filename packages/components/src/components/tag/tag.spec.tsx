import { test, expect } from '@playwright/experimental-ct-react';
import AxeBuilder from '@axe-core/playwright';

import { DBTag } from './index';
// @ts-ignore - vue can only find it with .ts as file ending
import { TESTING_VIEWPORTS, VARIANTS } from '../../shared/constants.ts';

const comp = <DBTag>Test</DBTag>;

const testComponent = (viewport) => {
	test('DBTag should contain text', async ({ mount }) => {
		const component = await mount(comp);
		await expect(component).toContainText('Test');
	});

	test('DBTag should match screenshot', async ({ mount }) => {
		const component = await mount(comp);
		await expect(component).toHaveScreenshot();
	});
};

const testVariants = (viewport) => {
	for (const variant of VARIANTS) {
		test(`should match screenshot for variant ${variant} and device ${viewport.name}`, async ({
			mount
		}) => {
			const component = await mount(
				<DBTag variant={variant}>Test</DBTag>
			);
			await expect(component).toHaveScreenshot();
		});
	}
};

test.describe('DBTag component', () => {
	TESTING_VIEWPORTS.forEach((viewport) => {
		test.use({ viewport });
		testComponent(viewport);
		testVariants(viewport);
	});
});

test.describe('DBTag component A11y', () => {
	test('DBTag should not have any automatically detectable accessibility issues', async ({
		page,
		mount
	}) => {
		await mount(comp);
		const accessibilityScanResults = await new AxeBuilder({ page })
			.include('.db-tag')
			.analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});
});
