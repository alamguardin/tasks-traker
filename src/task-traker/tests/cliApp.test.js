import { expect, beforeEach, it } from 'vitest';
import { CliApp } from '../src/cliApp.mjs';

beforeEach(async (context) => {
	context.cli = new CliApp();
});

it('Should add commands correctly', () => {
	function gretting(name) {
		return `Hello ${name}`;
	}

	cli.create({
		name: 'add',
		flags: [],
		hasValue: true,
		type: 'string',
		invoke: gretting,
	});

	const commandsList = cli.getCommands();

	expect(commandsList.length).toBe(1);
	expect(commandsList[0].invoke('Alam')).toBeTypeOf('string');
	expect(commandsList[0].invoke('Alam')).toBe('Hello Alam');
});
