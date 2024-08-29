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
				await nvda?.press('Tab'); // Focus select
				await nvda?.act(); // Open select
				await nvda?.next(); // Option 1
				await nvda?.next(); // Option 2
			} else if (voiceOver) {
				await voiceOver?.clearSpokenPhraseLog();
				await voiceOver?.next(); // Focus select
				await voiceOver?.act(); // Open select
				await voiceOver?.press('ArrowDown'); // Move to "Option 1"
				await voiceOver?.press('ArrowDown'); // Move to "Option 2"
				await voiceOver?.act(); // Select "Option 2"
			}
		}
	});
});
