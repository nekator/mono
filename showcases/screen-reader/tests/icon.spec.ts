import { getTest, testDefault } from '../default';

const test = getTest();

test.describe('DBIcon', () => {
	testDefault({
		test,
		title: 'default',
		description: 'should not mention icon (next())',
		url: './#/04/icon?page=density',
		async testFn(voiceOver, nvda) {
			if (nvda) {
				await nvda?.next();
			}

			const screenReader = voiceOver ?? nvda;
			await screenReader?.clearSpokenPhraseLog();
			await screenReader?.previous(); // Infotext "Functional"
			await screenReader?.next(); // Infotext "(Default) Regular"
		}
	});
});
