#!/usr/bin/env node

/* eslint-disable no-console */

import { program } from 'commander';

import askForName from './ask-name.js';
import ask from './ask-framework.js';

program
	.name('@db-ui')
	.description('CLI to create starter templates for DB UX Design System')
	.option('--dry-run', 'prints the output of the template generator')
	.option('-n, --name <name>', 'project name')
	.option('-f, --framework <framework>', 'framework to set')
	.action(async (string_, options) => {
		let values = options._optionValues;
		console.log('options:', values);
		if (!values.name) {
			values = { ...values, ...(await askForName()) };
		}

		if (!values.framework) {
			values = { ...values, ...(await ask()) };
		}

		console.log('values:', values);
	});

program.parse();
