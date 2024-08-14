import { getTest, testDefault } from '../default';

const test = getTest();

test.describe('DBCard', () => {
	testDefault({
		test,
		title: 'default',
		description: 'should have texts inline (next())',
		url: './#/01/card?page=density',
		async testFn(voiceOver, nvda) {
			if (nvda) {
				await nvda?.next();
			}

			const screenReader = voiceOver ?? nvda;
			await screenReader?.clearSpokenPhraseLog();
			await screenReader?.previous(); // Card "Functional"
			await screenReader?.next(); // Card "(Default) Regular"
			await screenReader?.next(); // Card "Expressive"
		}
	});
});
