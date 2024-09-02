import { test, expect } from '@playwright/experimental-ct-react';
import AxeBuilder from '@axe-core/playwright';

import { DBTabs } from './index';
// @ts-ignore - vue can only find it with .ts as file ending
import { DEFAULT_VIEWPORT } from '../../shared/constants.ts';
import { DBTabList } from '../tab-list';
import { DBTabItem } from '../tab-item';
import { DBTabPanel } from '../tab-panel';

const comp: any = (
	<DBTabs>
		<DBTabList>
			<DBTabItem data-testid="test">Test 1</DBTabItem>
			<DBTabItem data-testid="test2">Test 2</DBTabItem>
			<DBTabItem>Test 3</DBTabItem>
		</DBTabList>

		<DBTabPanel>TestPanel 1</DBTabPanel>

		<DBTabPanel>TestPanel 2</DBTabPanel>

		<DBTabPanel>TestPanel 3</DBTabPanel>
	</DBTabs>
);

const testComponent = () => {
	test('should contain text', async ({ mount }) => {
		const component = await mount(comp);
		await expect(component).toContainText('Test');
	});

	test('should match screenshot', async ({ mount }) => {
		const component = await mount(comp);
		await expect(component).toHaveScreenshot();
	});
};

const testActions = () => {
	test('should be clickable', async ({ mount }) => {
		const component = await mount(comp);
		await component
			.getByTestId('test2')
			// VUE: .getByRole('tab')
			.check({ force: true });
		const tabChecked = await component
			.getByTestId('test')
			// VUE: .getByRole('tab')
			.isChecked();
		expect(!tabChecked).toBeTruthy();
	});
};

const testA11y = () => {
	test('should not have A11y issues', async ({ page, mount }) => {
		await mount(comp);
		const accessibilityScanResults = await new AxeBuilder({ page })
			// TODO: There might be an issue in our implementation of which elements get which roles
			// So we disabled "aria-allowed-role" for now
			.include('.db-tabs')
			.disableRules(['aria-allowed-role'])
			.analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});
};

test.describe('DBTabs', () => {
	test.use({ viewport: DEFAULT_VIEWPORT });
	testComponent();
	testA11y();
	testActions();
});
