import { CliApp } from './src/cliApp.mjs';
import * as fs from 'node:fs/promises';

async function main(args) {
	const cli = new CliApp();

	try {
		await fs.access('db.json', fs.constants.F_OK);
		const filePath = new URL('./db.json', import.meta.url);
		const content = await fs.readFile(filePath, { encoding: 'utf-8' });
		cli.tasksList.tasks = JSON.parse(content);
		console.log(JSON.parse(content));
	} catch (err) {
		const filePath = new URL('./db.json', import.meta.url);
		await fs.writeFile(filePath, '[]', 'utf-8');
	}

	cli.parser(args);

	const filePath = new URL('./db.json', import.meta.url);
	fs.writeFile(filePath, JSON.stringify(cli.getTasks()), 'utf-8');
}

main(process.argv.slice(2));
