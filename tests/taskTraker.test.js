import { expect, beforeEach, it } from 'vitest';
import { TaskTraker } from '../src/tasksTraker.mjs';

beforeEach(async (context) => {
	context.app = new TaskTraker();
});

it('add id correctly', ({ app }) => {
	const list = ['go shopping', 'do exercise', 'study session'];

	for (const task of list) {
		app.add(task);
	}

	const tasksList = app.getTasks();

	expect(tasksList[0].id).toBeTypeOf('number');
	expect(tasksList[0].id).toBe(0);
	expect(tasksList[1].id).toBe(1);
	expect(tasksList[2].id).toBe(2);
});

it('add text correctly', ({ app }) => {
	const list = ['go shopping', 'do exercise', 'study session'];

	for (const task of list) {
		app.add(task);
	}

	const tasksList = app.getTasks();

	expect(tasksList[0].text).toBe(list[0]);
	expect(tasksList[1].text).toBe(list[1]);
	expect(tasksList[2].text).toBe(list[2]);
});

it('Update task correctly', ({ app }) => {
	const list = ['do exercise', 'study session'];

	for (const task of list) {
		app.add(task);
	}

	const newValue = 'meditate';
	app.update(0, newValue);

	const tasksList = app.getTasks();

	expect(tasksList[0].text).toBe(newValue);
	expect(tasksList[1].text).toBe(list[1]);
});

it('Remove task correctly', ({ app }) => {
	const list = ['go shopping', 'do exercise', 'study session'];

	for (const task of list) {
		app.add(task);
	}

	app.delete(1);

	const tasksList = app.getTasks();

	expect(tasksList.length).toBe(2);
	expect(tasksList[0].id).toBe(0);
	expect(tasksList[1].id).toBe(2);
});

it('Mark task as in progress and done', ({ app }) => {
	const list = ['go shopping', 'do exercise', 'study session'];

	for (const task of list) {
		app.add(task);
	}

	app.setStatus(2, 'in progress');
	app.setStatus(1, 'done');

	const tasksList = app.getTasks();

	expect(tasksList[2].status).toBe('in progress');
	expect(tasksList[1].status).toBe('done');
	expect(tasksList[0].status).toBe('pending');
});

it('Show filtered list correctly', ({ app }) => {
	const list = [
		'go shopping',
		'do exercise',
		'study session',
		'build new app',
		'meditate',
		'clean the house',
		'play piano',
	];

	for (const task of list) {
		app.add(task);
	}

	app.setStatus(0, 'done');
	app.setStatus(5, 'done');
	app.setStatus(2, 'done');
	app.setStatus(1, 'in progress');
	app.setStatus(4, 'in progress');

	app.filterList('pending');
	console.log('--------------');
	app.filterList('in progress');
	console.log('--------------');
	app.filterList('done');
	console.log('--------------');
});
