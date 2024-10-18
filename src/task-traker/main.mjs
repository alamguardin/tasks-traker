import { CliApp } from './src/cliApp.mjs';
import * as fs from 'node:fs/promises';

async function main(args) {
	const FILENAME = './db.json';
	const FILE_PATH = new URL(FILENAME, import.meta.url);

	const cli = new CliApp();

	try {
		await fs.access('db.json', fs.constants.F_OK);
		const content = await fs.readFile(FILE_PATH, { encoding: 'utf-8' });
		cli.tasksList.tasks = JSON.parse(content);
	} catch (err) {
		console.log('> No se encontro ningun archivo');
	}

	cli.parser(args);

	fs.writeFile(FILE_PATH, JSON.stringify(cli.getTasks()), 'utf-8');
}

main(process.argv.slice(2));
