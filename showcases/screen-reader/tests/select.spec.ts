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
				await voiceOver?.next(); // Focus select
				await voiceOver?.act(); // Open select
				await voiceOver?.act(); // Open select
			}
		}
	});
});
