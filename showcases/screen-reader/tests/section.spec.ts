import { getTest, testDefault } from '../default';

const test = getTest();

test.describe('DBSection', () => {
	testDefault({
		test,
		title: 'default',
		description: 'should have ...? (next())',
		url: './#/01/section?page=width',
		async testFn(voiceOver, nvda) {
			if (nvda) {
				await nvda?.next();
			}

			const screenReader = voiceOver ?? nvda;
			await screenReader?.clearSpokenPhraseLog();
			await screenReader?.next(); // Section 1
			await screenReader?.next(); // Section 2
		}
	});
});
