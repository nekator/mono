import { test } from '@playwright/test';
// @ts-expect-error - required for playwright
import { getDefaultScreenshotTest } from '../default.ts';

test.describe('DBLink', () => {
	getDefaultScreenshotTest({
		path: '02/link'
	});
});
