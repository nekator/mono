import { test } from '@playwright/test';
// @ts-expect-error - required for playwright
import { getDefaultScreenshotTest } from '../default.ts';

test.describe('DBSwitch', () => {
	getDefaultScreenshotTest({
		path: '03/switch'
	});
});
