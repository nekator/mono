/* eslint-disable unicorn/prefer-top-level-await */
import childProcess from 'node:child_process';
import inquirer from 'inquirer';

inquirer
	.prompt([
		{
			type: 'checkbox',
			message: 'Select frameworks to develop with:',
			name: 'frameworks',
			choices: [
				{
					name: 'plain-html',
					checked: true
				},
				{
					name: 'angular'
				},
				{
					name: 'react'
				},
				{
					name: 'next'
				},
				{
					name: 'vue'
				},
				{
					name: 'nuxt'
				}
			],
			validate(answer) {
				if (answer.length === 0) {
					return 'You must choose at least one framework.';
				}

				return true;
			}
		}
	])

	.then((answers) => {
		if (!answers?.frameworks) {
			return;
		}

		let startCommand = 'npm-run-all -p start:foundations dev:sass';

		const isPlainHtmlSelected = answers.frameworks.includes('plain-html');

		const currentAnswers = isPlainHtmlSelected
			? answers.frameworks.filter((a) => a !== 'plain-html')
			: answers.frameworks;

		if (isPlainHtmlSelected) {
			startCommand += ' dev:plain-html';
		}

		const answersFrameworkPairs = [
			{
				answers: ['vue', 'nuxt'],
				framework: 'vue'
			},
			{
				answers: ['react', 'next'],
				framework: 'react'
			},
			{
				answers: ['angular', 'angular-ssr'],
				framework: 'angular'
			}
		];

		for (const { framework, answers } of answersFrameworkPairs) {
			const isAnswerSelected = currentAnswers.some((currentAnswer) =>
				answers.includes(currentAnswer)
			);

			if (isAnswerSelected) {
				startCommand += ` dev:${framework}-components`;
			}
		}

		for (const currentAnswer of currentAnswers) {
			startCommand += ` start-showcase:${currentAnswer}`;
		}

		// To-do: Handle child process better
		childProcess.execSync(startCommand, { stdio: 'inherit' });
	});
