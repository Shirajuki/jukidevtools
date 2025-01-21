interface ICsvToJsonOptions {
	csv: string;
	indentSize: number;
}

const CsvToJson = (options: ICsvToJsonOptions): string => {
	const input = options.csv;
	const inputKeys = input.split("\n")[0];

	const output = [];

	// Parse out the keys
	let i = -2;
	let start = -1;
	const keys: string[] = [];
	while (i < inputKeys.length && i !== -1) {
		const newIndex = inputKeys.indexOf('"', i);
		if (newIndex < i) {
			break;
		}
		i = newIndex;
		if (inputKeys[i - 1] === "\\") {
			// skip
		} else if (start !== -1 && inputKeys[i] === '"') {
			keys.push(inputKeys.slice(start + 1, i));
			start = -1;
		} else if (start < i && inputKeys[i] === '"') start = i;
		i += 1;
	}
	console.log(keys);

	// Parse out the values, specifically parsing out the strings, then map the values to the keys using fromEntries
	const inputValues = input.split("\n").slice(1);
	for (const value of inputValues) {
		if (value.trim().length === 0) continue;
		let i = -2;
		let start = -1;
		let end = -1;
		const parsedValues = [];
		while (i < value.length && i !== -1) {
			const newIndex = value.indexOf('"', i);
			if (newIndex < i) {
				break;
			}
			i = newIndex;
			if (value[i - 1] === "\\") {
				// skip
			} else if (start !== -1 && value[i] === '"') {
				if (start !== 0 && parsedValues.length === 0) {
					parsedValues.push({ data: value.slice(0, start), type: "raw" });
				} else if (end !== start) {
					parsedValues.push({ data: value.slice(end + 1, start), type: "raw" });
				}
				parsedValues.push({ data: value.slice(start + 1, i), type: "string" });
				start = -1;
				end = i;
			} else if (start < i && value[i] === '"') start = i;
			i += 1;
		}
		if (end !== value.length - 1) {
			parsedValues.push({ data: value.slice(end + 1, value.length), type: "raw" });
		}

		const replaceValues = parsedValues
			.map((value, index) => {
				if (value.type === "string") {
					parsedValues[index] = "#REPLACED#";
					return JSON.stringify(value.data);
				}
				parsedValues[index] = value.data;
			})
			.filter((value) => value !== undefined);
		let index = 0;
		const values = parsedValues
			.join("")
			.split(",")
			.map((value) => {
				console.log(value);
				if (value.trim() === "#REPLACED#") {
					return replaceValues[index++] ?? "";
				}
				return value;
			});
		console.log(values, values.length);
		output.push(Object.fromEntries(values.map((value, index) => [keys[index], JSON.parse(value)])));
		console.log(output);
	}

	const json = JSON.stringify(output, null, " ".repeat(options.indentSize));
	return json;
};

export default CsvToJson;
