class CliApp {
	constructor() {
		this.commands = [];
	}

	getCommands() {
		return this.commands;
	}

	create(obj) {
		const properties = ['name', 'flags', 'hasValue', 'type', 'invoke'];
		let hasAllProperties;

		for (const property of properties) {
			// biome-ignore lint/suspicious/noPrototypeBuiltins: <explanation>
			hasAllProperties = obj.hasOwnProperty(property);
		}

		if (hasAllProperties) {
			this.commands.push(obj);
		}

		console.log(`${hasAllProperties ? 'Has all' : 'Dont has'}`);
	}
}

export { CliApp };
