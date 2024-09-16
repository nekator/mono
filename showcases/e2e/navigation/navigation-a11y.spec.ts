import { test } from '@playwright/test';
// @ts-expect-error - required for playwright
import { getA11yTest, hasWebComponentSyntax } from '../default.ts';

test.describe('DBNavigation', () => {
	getA11yTest({
		path: '05/navigation',
		skipA11y: hasWebComponentSyntax()
	});
});
