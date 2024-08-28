import { getTest, testDefault } from '../default';

const test = getTest();

test.describe('DBTabs', () => {
	testDefault({
		test,
		title: 'default',
		description:
			'should select tab and announce corresponding tab panel content',
		url: './#/04/tabs?page=tonality',
		async testFn(voiceOver, nvda) {
			if (nvda) {
				await nvda?.next();
			}

			const screenReader = voiceOver ?? nvda;
			await screenReader?.next(); //
			await screenReader?.clearSpokenPhraseLog();
			await screenReader?.next(); // Focus "tab 1"
			await screenReader?.next(); // Focus "tab 1 inline-text"
			await screenReader?.next(); // Focus "tab 2"
			await screenReader?.act(); // Select "tab 2"
			await screenReader?.next(); // Focus "tab 2 inline-text"
			await screenReader?.next(); // Focus "tab 3"
			await screenReader?.next(); // Focus "tab 3 inline-text"
			await screenReader?.next(); // Focus "tab panel 3"
			await screenReader?.next(); // Focus "tab panel 3 inline-text"
		}
	});
});
