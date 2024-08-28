import { getTest, testDefault } from '../default';

const test = getTest();

test.describe('DBTooltip', () => {
	testDefault({
		test,
		title: 'default',
		description: 'should have buttons with tooltips (next())',
		url: './#/04/tooltip?page=density',
		async testFn(voiceOver, nvda) {
			if (nvda) {
				await nvda?.next();
			}

			const screenReader = voiceOver ?? nvda;
			await screenReader?.clearSpokenPhraseLog();
			await screenReader?.previous(); // Focus "button 1 with tooltip"
			await screenReader?.next(); // Focus "button 2 with tooltip"
		}
	});
});
