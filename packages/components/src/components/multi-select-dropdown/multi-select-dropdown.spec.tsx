import { test, expect } from '@playwright/experimental-ct-react';
import AxeBuilder from '@axe-core/playwright';

import { DBMultiSelectDropdown } from "./index";
// @ts-ignore - vue can only find it with .ts as file ending
import { DEFAULT_VIEWPORT } from '../../shared/constants.ts';

const comp: any = <DBMultiSelectDropdown>Test</DBMultiSelectDropdown>;

const testComponent = () =>{
	test('should contain text', async ({ mount }) => {
		const component = await mount(comp);
		await expect(component).toContainText('Test');
	});

	test('should match screenshot', async ({ mount }) => {
		const component = await mount(comp);
		await expect(component).toHaveScreenshot();
	});
}

const testA11y = () =>{
	test('should not have any A11y issues', async ({
		page,
		mount
	}) => {
		await mount(comp);
		const accessibilityScanResults = await new AxeBuilder({ page })
			.include('.db-multi-select-dropdown')
			.analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});
}

test.describe('DBMultiSelectDropdown', () => {
	test.use({ viewport: DEFAULT_VIEWPORT });
	testComponent();
	testA11y();
});

