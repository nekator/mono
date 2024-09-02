import { defineConfig, devices } from '@playwright/experimental-ct-react';

/**
 * See https://playwright.dev/docs/test-configuration.
 */
const config = defineConfig({
	testDir: './src/components',
	// Example: __snapshots__/notification/showcase/chromium/functional/neutral-0/DBNotification-should-match-screenshit.png
	snapshotPathTemplate:
		'{snapshotDir}/{testFileDir}/component/{projectName}/{testName}{ext}',
	/* The base directory, relative to the config file, for snapshot files created with toMatchSnapshot and toHaveScreenshot. */
	snapshotDir: './../../__snapshots__',
	/* Run tests in files in parallel */
	fullyParallel: true,
	/* Fail the build on CI if you accidentally left test.only in the source code. */
	forbidOnly: Boolean(process.env.CI),
	/* Retry on CI only */
	retries: process.env.CI ? 1 : 0,
	/* Opt out of parallel tests on CI. */
	workers: process.env.CI ? 1 : undefined,
	/* Reporter to use. See https://playwright.dev/docs/test-reporters */
	reporter: process.env.CI ? 'blob' : [['list'], ['html', { open: 'never' }]],
	/* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
	use: {
		/* Port to use for Playwright component endpoint. */
		ctPort: 3100,

		/* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
		trace: process.env.CI ? 'on-first-retry' : 'on',

		/* Collect video when retrying the failed test. */
		video: process.env.CI ? 'on-first-retry' : 'on'
	},
	/* Configure projects for major browsers */
	projects: [
		{
			name: 'chromium',
			use: {
				...devices['Desktop Chrome']
			}
		},
		{
			name: 'firefox',
			use: {
				...devices['Desktop Firefox']
			}
		},
		// TODO: There are issues with webkit and out icon-fonts we disable webkit for now
		/*		{
			name: 'webkit',
			use: {
				...devices['Desktop Safari']
			}
		},*/
		/* Test against mobile viewports. */
		{
			name: 'mobile_chrome',
			use: {
				...devices['Pixel 5']
			}
		}
		/*		{
			name: 'mobile_safari',
			use: {
				...devices['iPhone 12']
			}
		}*/
	]
});

export default config;
