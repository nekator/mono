import { test } from '@playwright/test';
// @ts-expect-error - required for playwright
import { getDefaultScreenshotTest } from '../default.ts';

test.describe('DBTabItem', () => {
	// TODO: There might be an issue in axe-core: https://github.com/dequelabs/axe-core/issues/4431
	// So we disabled "aria-allowed-role"
	getDefaultScreenshotTest({
		path: '04/tab-item',
		disableRules: ['aria-allowed-role']
	});
});
