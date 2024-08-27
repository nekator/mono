import { getTest, testDefault } from '../default';

const test = getTest();

test.describe('DBSelect', () => {
	testDefault({
		test,
		title: 'default',
		description:
			'should have texts inline or as data-label attributes (next())',
		url: './#/03/select?page=density',
		async testFn(voiceOver, nvda) {
			if (nvda) {
				await nvda?.next();
			}

			const screenReader = voiceOver ?? nvda;
			await screenReader?.clearSpokenPhraseLog();
			await screenReader?.next(); //
			await screenReader?.act(); //
			await screenReader?.press('ArrowDown'); //
			await screenReader?.press('ArrowDown'); //
			await screenReader?.act(); //
			// await screenReader?.next(); //
			// await screenReader?.next(); //
		}
	});
});
