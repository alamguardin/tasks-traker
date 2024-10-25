import { expect, beforeEach, it } from 'vitest';
import { CliApp } from '../src/cliApp.mjs';

beforeEach(async (context) => {
	context.cli = new CliApp();
});

it('command: add - should add task correctly', ({ cli }) => {
	const args = ['add', 'This is my task'];
	cli.parser(args);

	const tasks = cli.getTasks();

	console.log(tasks);
	expect(tasks.length).toBe(1);
	expect(tasks[0].text).toBe(args[1]);
});

it('commad: update - should update task value correctly', ({ cli }) => {
	// add task to be updated later
	const argsOne = ['add', 'This is my task'];
	cli.parser(argsOne);
	// update previously added task
	const argsTwo = ['update', '0', 'Update my task'];
	cli.parser(argsTwo);

	const tasks = cli.getTasks();

	console.log(tasks);
	expect(tasks[0].id).toBe(0);
	expect(tasks[0].text).toBe(argsTwo[2]);
});

it('command: delete - should delete a task correctly', ({ cli }) => {
	// add task to be updated later
	const argsOne = ['add', 'This is my task'];
	cli.parser(argsOne);
	// update previously added task
	const argsTwo = ['delete', '0'];
	cli.parser(argsTwo);

	const tasks = cli.getTasks();

	console.log(tasks);
	expect(tasks.length).toBe(0);
});

it('command: mark-in-progress - the status should change to in progress', ({
	cli,
}) => {
	// add task to be updated later
	const argsOne = ['add', 'This is my task'];
	cli.parser(argsOne);
	// update previously added task
	const argsTwo = ['mark-in-progress', '0'];
	cli.parser(argsTwo);

	const tasks = cli.getTasks();

	console.log(tasks);
	expect(tasks[0].status).toBe('in progress');
});

it('command: mark-in-progress - the status should change to done', ({
	cli,
}) => {
	// add task to be updated later
	const argsOne = ['add', 'This is my task'];
	cli.parser(argsOne);
	// update previously added task
	const argsTwo = ['mark-done', '0'];
	cli.parser(argsTwo);

	const tasks = cli.getTasks();

	console.log(tasks);
	expect(tasks[0].status).toBe('done');
});
