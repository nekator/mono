// @ts-ignore
import inquirer from 'inquirer';

const ask = () =>
	inquirer.prompt([
		{
			type: 'input',
			message: 'Whats the name of the project',
			name: 'name',
			default: 'dbux-project',
			validate(answer) {
				if (answer.length === 0) {
					return 'Please provide a name';
				}

				return true;
			}
		}
	]);

export default ask;
