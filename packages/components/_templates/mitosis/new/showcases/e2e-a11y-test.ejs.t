---
to: "<%= showcases ? `../../showcases/e2e/${name}/${name}-a11y.spec.ts` : null %>"
---
import { test } from '@playwright/test';
// @ts-expect-error - required for playwright
import { getA11yTest } from '../default.ts';

test.describe('DB<%= h.changeCase.pascal(name) %>', () => {
	getA11yTest({ path: '<%= name %>' });
});

