import { parse } from "yaml";

interface IYamlToJsonOptions {
	yaml: string;
	indentSize: number;
}

const yamlToJson = (options: IYamlToJsonOptions): string => {
	const yamlObject = parse(options.yaml);

	return JSON.stringify(yamlObject, null, " ".repeat(options.indentSize));
};

export default yamlToJson;
