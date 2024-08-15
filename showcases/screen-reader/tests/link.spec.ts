import { getTest, testDefault } from '../default';

const test = getTest();

test.describe('DBLink', () => {
	testDefault({
		test,
		title: 'default',
		description:
			'should not mention icon, should have link and dimmed link (next())',
		url: './#/02/link?page=interaction-states',
		async testFn(voiceOver, nvda) {
			if (nvda) {
				await nvda?.next();
			}

			const screenReader = voiceOver ?? nvda;
			await screenReader?.clearSpokenPhraseLog();
			await screenReader?.previous(); // Link "Enabled (Default)/Hover/Pressed"
			await screenReader?.next(); // Link dimmed "Disabled"
		}
	});
});
