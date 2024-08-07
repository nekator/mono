import { getTest, testDefault } from '../default';

const test = getTest();

test.describe('DBBadge', () => {
	testDefault({
		test,
		title: 'should ...',
		url: './#/06/badge?page=placement',
		async testFn(voiceOver, nvda) {
			if (nvda) {
				await nvda?.next();
			}

			const screenReader = voiceOver ?? nvda;
			await screenReader?.clearSpokenPhraseLog();
			// Todo: add test
			// await screenReader?.previous();
			// await screenReader?.next();
			// await screenReader?.next();
		}
	});
});
