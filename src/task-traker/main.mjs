import { CliApp } from './src/cliApp.mjs';
import * as fs from 'node:fs/promises';

async function main() {
	try {
		await fs.access('db.json', fs.constants.F_OK);
		const filePath = new URL('./db.json', import.meta.url);
		const content = await fs.readFile(filePath, { encoding: 'utf-8' });
		console.log(JSON.parse(content));
	} catch (err) {
		const filePath = new URL('./db.json', import.meta.url);
		const newFile = await fs.writeFile(filePath, '[]', 'utf-8');
	}
}

main();
