import { getTest, testDefault } from '../default';

const test = getTest();

test.describe('DBSelect', () => {
	testDefault({
		test,
		title: 'default',
		description: 'should open and close select (next())',
		url: './#/03/select?page=density',
		async testFn(voiceOver, nvda) {
			if (nvda) {
				await nvda?.next();
			}

			const screenReader = voiceOver ?? nvda;
			await screenReader?.clearSpokenPhraseLog();
			await screenReader?.next(); // Focus select
			await screenReader?.act(); // Open select
			await screenReader?.press('ArrowDown'); // Move to "Option 1"
			await screenReader?.press('ArrowDown'); // Move to "Option 2"
			await screenReader?.act(); // Select "Option 2"
		}
	});
});
