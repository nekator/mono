import { test } from '@playwright/test';
// @ts-expect-error - required for playwright
import { getDefaultScreenshotTest } from '../default.ts';

test.describe('DBInput', () => {
	getDefaultScreenshotTest({
		path: '03/input'
	});
});
