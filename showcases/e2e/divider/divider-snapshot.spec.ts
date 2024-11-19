import { test } from '@playwright/test';
// @ts-expect-error - required for playwright
import { getDefaultScreenshotTest, runAriaSnapshotTest } from '../default.ts';

const path = '01/divider';
const fixedHeight = 1500;
test.describe('DBDivider', () => {
	getDefaultScreenshotTest({ path, fixedHeight });
	runAriaSnapshotTest({ path, fixedHeight });
});
