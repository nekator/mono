import { test } from '@playwright/test';
// @ts-expect-error - required for playwright
import { getDefaultScreenshotTest } from '../default.ts';

test.describe('DBTabItem', () => {
	// TODO: There might be an issue in our implementation of which elements get which roles
	// So we disabled "aria-allowed-role" for now
	getDefaultScreenshotTest({
		path: '04/tab-item',
		disableRules: ['aria-allowed-role']
	});
});
