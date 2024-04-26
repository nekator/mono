import { test } from '@playwright/test';
// @ts-expect-error - required for playwright
import { getDefaultScreenshotTest } from '../default.ts';

test.describe('DBTabs', () => {
	// TODO: There might be an issue in axe-core: https://github.com/dequelabs/axe-core/issues/4431
	// So we disabled "aria-allowed-role"
	getDefaultScreenshotTest('04/tabs', undefined, ['aria-allowed-role']);
});
