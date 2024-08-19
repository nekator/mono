import { getTest, testDefault } from '../default';

const test = getTest();

test.describe('DBNotification', () => {
	testDefault({
		test,
		title: 'default',
		description:
			'should have texts inline or as data-label attributes (next())',
		url: './#/06/notification?page=density',
		async testFn(voiceOver, nvda) {
			if (nvda) {
				// Skip functional notification
				await nvda?.next();
				await nvda?.next();
				await nvda?.clearSpokenPhraseLog();
				await nvda?.next(); // Headline "Headline"
				await nvda?.next(); // Text "regular"
				await nvda?.next(); // Button "Close"
			} else if (voiceOver) {
				await voiceOver?.next(); // Headline "Headline"
				await voiceOver?.next(); // Text "functional"
				await voiceOver?.next(); // Button "Close"
				await voiceOver?.next(); // Article end
			}
		}
	});
});
