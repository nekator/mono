import { devices, type PlaywrightTestConfig } from '@playwright/test';
import showcaseConfig from './playwright.showcase';

/**
 * See https://playwright.dev/docs/test-configuration.
 */

// TIMINGS (chromium, firefox): 15m/4.2m

const config: PlaywrightTestConfig = {
	testDir: './e2e',
	// Example: __snapshots__/notification/showcase/chromium/functional/neutral-0/DBNotification-should-match-screenshot.png
	snapshotPathTemplate:
		'{snapshotDir}/{testFileDir}/showcase/{projectName}/{arg}/{testName}{ext}',
	snapshotDir: './../__snapshots__',
	expect: {
		timeout: 10_000
	},
	/* Run tests in files in parallel */
	fullyParallel: true,
	/* Fail the build on CI if you accidentally left test.only in the source code. */
	forbidOnly: Boolean(process.env.CI),
	/* Opt out of parallel tests on CI. */
	workers: process.env.CI ? 1 : undefined,
	/* Reporter to use. See https://playwright.dev/docs/test-reporters */
	reporter: process.env.CI ? 'blob' : [['list'], ['html', { open: 'never' }]],
	/* Configure projects for major browsers */
	projects: [
		{
			name: 'chromium',
			use: {
				...devices['Desktop Chrome']
			}
		},
		{
			name: 'chromium-highContrast',
			use: {
				browserName: 'chromium',
				colorScheme: 'dark',
				contextOptions: { forcedColors: 'active' }
			}
		},
		{
			name: 'firefox',
			use: {
				...devices['Desktop Firefox']
			}
		},
		{
			name: 'webkit',
			use: {
				...devices['Desktop Safari']
			}
		},
		/* Test against mobile viewports. */
		{
			name: 'mobile_chrome',
			use: {
				...devices['Pixel 5'],
				isMobile: true
			}
		},
		{
			name: 'mobile_safari',
			use: {
				...devices['iPhone 12'],
				isMobile: true,
				deviceScaleFactor: 2
			}
		}
	],
	...showcaseConfig
};

export default config;
