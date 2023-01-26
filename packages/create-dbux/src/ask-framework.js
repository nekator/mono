// @ts-ignore
import inquirer from 'inquirer';

const ask = () =>
	inquirer.prompt([
		{
			type: 'list',
			message: 'Select a framework',
			name: 'framework',
			default: 'react',
			choices: [
				{
					name: 'angular'
				},
				{
					name: 'react'
				},
				{
					name: 'vue'
				}
			],
			validate(answer) {
				if (answer.length === 0) {
					return 'You must choose at least one framework.';
				}

				return true;
			}
		}
	]);

export default ask;
