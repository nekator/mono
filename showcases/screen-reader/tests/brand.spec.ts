import { getTest, testDefault } from '../default';

const test = getTest();

test.describe('DBBrand', () => {
	testDefault({
		test,
		title: 'should have inline texts, no icons, but the custom logo as image (next())',
		url: './#/04/brand?page=variants',
		async testFn(voiceOver, nvda) {
			if (nvda) {
				await nvda?.next();
			}

			const screenReader = voiceOver ?? nvda;
			await screenReader?.clearSpokenPhraseLog();
			await screenReader?.previous(); // Label 1
			await screenReader?.next(); // Label 2
			await screenReader?.next(); // Logo image
			await screenReader?.next(); // Label 3
		}
	});
});
