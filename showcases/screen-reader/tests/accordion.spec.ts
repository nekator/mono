import { getTest, testDefault } from '../default';

const test = getTest();

test.describe('DBAccordion', () => {
	testDefault({
		test,
		title: 'should open two items while both remain unfolded (next)',
		url: './#/04/accordion?page=behaviour',
		async testFn(voiceOver, nvda) {
			const screenReader = voiceOver ?? nvda;
			await screenReader?.clearSpokenPhraseLog();
			await screenReader?.next(); // Focus: "item 1"
			await screenReader?.act(); // Interact: "item 1"
			await screenReader?.next(); // Focus: "content 1"
			await screenReader?.next(); // Focus: "item 2"
			await screenReader?.act(); // Interact: "item 2"
			await screenReader?.next(); // Focus: "content 2"
			await screenReader?.previous(); // Focus: "item 2"
			await screenReader?.previous(); // Focus: "content 1"
			await screenReader?.previous(); // Focus: "item 1"
		}
	});
	testDefault({
		test,
		title: 'one item should open, then the next, whereby the first should then close automatically (next)',
		url: './#/04/accordion?page=behaviour',
		async testFn(voiceOver, nvda) {
			const screenReader = voiceOver ?? nvda;
			await screenReader?.next();
			await screenReader?.next();
			await screenReader?.next();
			await screenReader?.next();
			await screenReader?.clearSpokenPhraseLog();
			await screenReader?.next(); // Focus example "Single","Item 1"
			await screenReader?.act(); // Interact: "item 1"
			await screenReader?.next(); // Focus: "content 1"
			await screenReader?.next(); // Focus: "item 2"
			await screenReader?.act(); // Interact: "item 2"
			await screenReader?.next(); // Focus: "content 2"
			await screenReader?.previous(); // Focus: "item 2"
			await screenReader?.previous(); // Focus: "item 1"
		}
	});
});
