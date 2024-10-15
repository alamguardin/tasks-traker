import { TaskTraker } from './tasksTraker.mjs';

const COMMANDS_LIST = [
	'add',
	'list',
	'update',
	'delete',
	'mark-in-progress',
	'mark-done',
];

class CliApp {
	constructor() {
		this.commands = [...COMMANDS_LIST];
		this.tasksList = new TaskTraker();
	}

	getTasks() {
		return this.tasksList.tasks;
	}

	parser(args) {
		if (this.commands.some((command) => command === args[0])) {
			if (args[0] === 'add' && args[1] !== undefined) {
				this.tasksList.add(args[1]);
			}

			if (args[0] === 'list') {
				if (args[1] === undefined) {
					this.tasksList.list();
				} else if (args[1] === '--pending') {
					this.tasksList.filterList('pending');
				} else if (args[1] === '--in-progress') {
					this.tasksList.filterList('in progress');
				} else if (args[1] === '--done') {
					this.tasksList.filterList('done');
				}
			}

			if (args[0] === 'update') {
				const idTask = Number(args[1]);
				const newValue = args[2];

				if (!Number.isNaN(idTask) && newValue) {
					this.tasksList.update(idTask, newValue);
				}
			}

			if (args[0] === 'delete') {
				const idTask = Number(args[1]);

				if (!Number.isNaN(idTask)) {
					this.tasksList.delete(idTask);
				}
			}

			if (args[0] === 'mark-in-progress') {
				const idTask = Number(args[1]);

				if (!Number.isNaN(idTask)) {
					this.tasksList.markInProgress(idTask);
				}
			}

			if (args[0] === 'mark-done') {
				const idTask = Number(args[1]);

				if (!Number.isNaN(idTask)) {
					this.tasksList.markDone(idTask);
				}
			}
		}
	}
}

export { CliApp };
