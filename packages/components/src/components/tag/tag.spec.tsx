import { test, expect } from '@playwright/experimental-ct-react';
import AxeBuilder from '@axe-core/playwright';

import { DBTag } from './index';

const comp = <DBTag>Test</DBTag>;

// TODO: Get variants from https://github.com/db-ui/mono/blob/feat-unify-showcases/packages/components/src/shared/constants.ts when feat-unify branch is merged
const colorVariants = ['critical', 'success', 'warning', 'information'];

const testDefaultTag = () => {
	test('DBTag should contain text', async ({ mount }) => {
		const component = await mount(comp);
		await expect(component).toContainText('Test');
	});

	test('DBTag should match screenshot', async ({ mount }) => {
		const component = await mount(comp);
		await expect(component).toHaveScreenshot();
	});
};

const testTagColorVariants = () => {
	for (const colorVariant of colorVariants) {
		test(`DBCard should match screenshot for color variant ${colorVariant}`, async ({
			mount
		}) => {
			const component = await mount(
				<DBCard colorVariant={colorVariant}>Test</DBCard>
			);
			await expect(component).toHaveScreenshot();
		});
	}
};

test.describe('DBTag component on desktop', () => {
	// Old-school CRT monitor screensize
	test.use({ viewport: { width: 1024, height: 768 } });
	testDefaultTag();
});

test.describe('DBTag component on mobile', () => {
	// iPhone 13 / portrait screen size
	test.use({ viewport: { width: 390, height: 884 } });
	testDefaultTag();
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
