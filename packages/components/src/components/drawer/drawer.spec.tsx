import { expect, test } from '@playwright/experimental-ct-react';
import AxeBuilder from '@axe-core/playwright';

import { DBDrawer } from './index';
// @ts-ignore - vue can only find it with .ts as file ending
import { TESTING_VIEWPORTS } from '../../shared/constants.ts';
import { DBButton } from '../button';

const comp: any = <DBDrawer open={true}>Test</DBDrawer>;

const testComponent = (viewport) => {
	test(`should contain text for device ${viewport.name}`, async ({
		mount
	}) => {
		const component = await mount(comp);
		await expect(component).toContainText('Test');
	});

	test.fixme(
		`should match screenshot for device ${viewport.name}`,
		async ({ mount }) => {
			const component = await mount(comp);
			// TODO: Screenshots are not captured for top-layer
			await expect(component).toHaveScreenshot();
		}
	);
};

const testA11y = () => {
	test('should not have A11y issues', async ({ page, mount }) => {
		await mount(comp);
		const accessibilityScanResults = await new AxeBuilder({ page })
			.include('.db-drawer')
			.analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});
};

const testAction = () => {
	test(`should open and close drawer`, async ({ mount, page }) => {
		let test: string = '';
		const drawer: any = (
			<DBDrawer onClose={() => (test = 'close')}>
				<span data-testid="test">Test</span>
			</DBDrawer>
		);
		const component = await mount(drawer);
		await page.evaluate(() => {
			const selector = document.querySelector('dialog');
			selector.showModal();
		});
		const testSpan = component.getByTestId('test');
		await expect(testSpan).toBeVisible();
		await component.getByRole('button').click();
		expect(test).toEqual('close');
	});
};

test.describe('DBDrawer', () => {
	TESTING_VIEWPORTS.forEach((viewport) => {
		test.use({ viewport });
		testComponent(viewport);
		if (viewport.name === 'mobile') {
			testA11y();
			testAction();
		}
	});
});
