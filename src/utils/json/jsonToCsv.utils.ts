interface IJsonToCsvOptions {
	json: string;
	indentSize: number;
}

const jsonToCsv = (options: IJsonToCsvOptions): string => {
	const input = JSON.parse(options.json);
	const array = Array.isArray(input) ? input : [input];

	let csv = "";
	const headers = JSON.stringify(Object.keys(array[0]));
	csv += `${headers.substring(1, headers.length - 1)}\n`;

	for (const obj of array) {
		const objValues = Object.values(obj);
		const output = [];
		for (const value of objValues) {
			if (JSON.stringify(value) === String(value) || typeof value === "string") {
				output.push(value);
			} else {
				output.push(JSON.stringify(value));
			}
		}
		const values = JSON.stringify(output);
		csv += `${values.substring(1, values.length - 1)}\n`;
	}

	return csv;
};

export default jsonToCsv;
