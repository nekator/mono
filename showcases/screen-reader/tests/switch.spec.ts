import { getTest, testDefault } from '../default';

const test = getTest();

test.describe('DBSwitch', () => {
	testDefault({
		test,
		title: 'default',
		description: 'should toggle, should not toggle disabled',
		url: './#/03/switch?page=states',
		async testFn(voiceOver, nvda) {
			if (nvda) {
				await nvda?.next();
			}

			const screenReader = voiceOver ?? nvda;
			await screenReader?.clearSpokenPhraseLog();
			await screenReader?.previous(); // Focus "switch 1"
			await screenReader?.act(); // Interact "switch 1"
			await screenReader?.next(); // Focus "switch 1 inline text"
			await screenReader?.next(); // Focus "switch 2"
			await screenReader?.act(); // Interact "switch 1"
			await screenReader?.next(); // Focus "switch 2 inline text"
			await screenReader?.next(); // Focus "switch 3"
			await screenReader?.act(); // Interact "switch 1"
			await screenReader?.next(); // Focus "switch 3 inline text"
		}
	});
	testDefault({
		test,
		title: 'icon',
		description: 'should not announce icons',
		url: './#/03/switch?page=visual+aid',
		async testFn(voiceOver, nvda) {
			if (nvda) {
				await nvda?.next();
			}

			const screenReader = voiceOver ?? nvda;
			await screenReader?.clearSpokenPhraseLog();
			await screenReader?.previous(); // Focus "switch 1"
			await screenReader?.next(); // Focus "switch 1 inline text"
			await screenReader?.next(); // Focus "switch 2"
			await screenReader?.act(); // Interact "switch 2"
			await screenReader?.next(); // Focus "switch 2"
		}
	});
});
