import { getTest, testDefault } from '../default';

const test = getTest();

test.describe('DBAccordion', () => {
	testDefault({
		test,
		title: 'should ... (next)',
		url: './#/04/accordion?page=behaviour',
		async testFn(voiceOver, nvda) {
			if (nvda) {
				await nvda?.next();
			}

			const screenReader = voiceOver ?? nvda;
			await screenReader?.clearSpokenPhraseLog();
			await screenReader?.previous();
			await screenReader?.next();
			await screenReader?.next();
		}
	});
});
