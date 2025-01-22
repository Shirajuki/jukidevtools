import { useReducer, useRef } from "react";
import { Button, Select, Space } from "antd";
import { ArrowRightOutlined, CopyOutlined } from "@ant-design/icons";
import type * as monaco from "monaco-editor";
import { useAppDispatch } from "../../store/hooks";
import { success, error } from "../../store/message/message.slice";
import useCopyText from "../../hooks/useCopyText.hooks";
import InputOutputLayout from "../../layouts/InputOutputLayout/InputOutputLayout.component";
import CodeEditor from "../../components/CodeEditor.component";
import jsonSample from "../../data/json-sample.json?raw";
import xmlSample from "../../data/xml-sample.xml?raw";
import yamlSample from "../../data/yaml-sample.yaml?raw";
import jsonToYaml from "../../utils/jsonToYaml.utils";
import { createFileRoute } from "@tanstack/react-router";
import jsonToXml from "../../utils/jsonToXml.utils";
import jsonToCsv from "../../utils/jsonToCsv.utils";
import xmlToJson from "../../utils/xmlToJson.utils";
import yamlToJson from "../../utils/yamlToJson.utils";
import CsvToJson from "../../utils/csvToJson.utils";

export const Route = createFileRoute("/_json/json-conversions")({
	component: JsonConversions,
});

export interface IOptionTypes {
	input: string;
	output: string;
	selectedInput: "json" | "xml" | "yaml" | "csv";
	selectedOutput: "json" | "xml" | "yaml" | "csv";
	tabSize: number;
}

const combinations = [
	{
		input: "json",
		output: "yaml",
		method: (input: string, indentSize: number) => jsonToYaml({ json: input, indentSize }),
	},
	{
		input: "json",
		output: "xml",
		method: (input: string, indentSize: number) =>
			jsonToXml({ json: input, indentSize: indentSize }),
	},
	{
		input: "json",
		output: "csv",
		method: (input: string, indentSize: number) =>
			jsonToCsv({ json: input, indentSize: indentSize }),
	},
	{
		input: "xml",
		output: "json",
		method: (input: string, indentSize: number) =>
			xmlToJson({ xml: input, indentSize: indentSize }),
	},
	{
		input: "yaml",
		output: "json",
		method: (input: string, indentSize: number) =>
			yamlToJson({ yaml: input, indentSize: indentSize }),
	},
	{
		input: "csv",
		output: "json",
		method: (input: string, indentSize: number) =>
			CsvToJson({ csv: input, indentSize: indentSize }),
	},
];

function JsonConversions() {
	const refresh = useReducer((num) => num + 1, 0)[1];
	const dispatch = useAppDispatch();
	const copyText = useCopyText();

	const codeEditorRef = useRef<monaco.editor.IStandaloneCodeEditor>(null);
	const outputCodeEditorRef = useRef<monaco.editor.IStandaloneCodeEditor>(null);

	const options = useRef<IOptionTypes>({
		input: "",
		output: "",
		selectedInput: "json",
		selectedOutput: "yaml",
		tabSize: 2,
	});

	const generateSample = async () => {
		if (options.current.selectedInput === "json") {
			options.current.input = jsonSample;
		} else if (options.current.selectedInput === "xml") {
			options.current.input = xmlSample;
		} else if (options.current.selectedInput === "yaml") {
			options.current.input = yamlSample;
		} else if (options.current.selectedInput === "csv") {
			options.current.input =
				'"id","name","price","active"\n1,"Item 1",10.99,true\n2,"Item 2",25.5,false';
		}
		codeEditorRef.current?.setValue(options.current.input);
	};

	const convert = () => {
		const isSame = options.current.selectedInput === options.current.selectedOutput;
		try {
			let output = "";
			const selectedInput = options.current.selectedInput;
			const selectedOutput = options.current.selectedOutput;
			const combination = combinations.find(
				({ input, output }) => input === selectedInput && output === selectedOutput,
			);
			if (combination) {
				output = combination.method(options.current.input, options.current.tabSize);
			} else if (!isSame) {
				// Convert to JSON first, then to the desired output
				const jsonCombination = combinations.find(
					({ input, output }) => input === selectedInput && output === "json",
				);
				const json = jsonCombination?.method(options.current.input, options.current.tabSize) ?? "";

				const newCombination = combinations.find(
					({ input, output }) => input === "json" && output === selectedOutput,
				);
				output = newCombination?.method(json, options.current.tabSize) ?? "";
			} else {
				output = options.current.input;
			}

			if (
				output.trim() === "null" ||
				output.trim() === "" ||
				(output.trim() === options.current.input.trim() && !isSame)
			) {
				throw new Error();
			}
			outputCodeEditorRef.current?.setValue(output);
			dispatch(success());
		} catch (err) {
			dispatch(error("Invalid data"));
		}
	};

	const copyOutput = () => {
		const output = options.current.output;
		if (output.trim().length === 0) return;
		copyText(output);
	};

	const onTabSizeChange = (tabSize: number) => {
		options.current.tabSize = tabSize;
		convert();
	};

	return (
		<InputOutputLayout
			InputToolbar={
				<Space>
					<Select
						defaultValue={"json"}
						options={[
							{ value: "json", label: <>JSON</> },
							{ value: "xml", label: <>XML</> },
							{ value: "yaml", label: <>YAML</> },
							{ value: "csv", label: <>CSV</> },
						]}
						onChange={(value: "json" | "xml" | "yaml" | "csv") => {
							options.current.selectedInput = value;
							refresh();
						}}
					/>
					<Button size="large" onClick={generateSample}>
						Sample
					</Button>
					<Button type="primary" icon={<ArrowRightOutlined />} size="large" onClick={convert}>
						Convert
					</Button>
				</Space>
			}
			InputView={
				<CodeEditor
					ref={codeEditorRef}
					code={options.current.input}
					language={options.current.selectedInput}
					onChange={(value) => {
						options.current.input = value;
					}}
				/>
			}
			OutputToolbar={
				<Space>
					<Select
						defaultValue={"yaml"}
						options={[
							{ value: "json", label: <>JSON</> },
							{ value: "xml", label: <>XML</> },
							{ value: "yaml", label: <>YAML</> },
							{ value: "csv", label: <>CSV</> },
						]}
						onChange={(value: "json" | "xml" | "yaml" | "csv") => {
							options.current.selectedOutput = value;
							refresh();
						}}
					/>
					<Select
						defaultValue={2}
						options={[
							{ value: 2, label: <>2 spaces</> },
							{ value: 4, label: <>4 spaces</> },
						]}
						onChange={onTabSizeChange}
					/>
					<Button icon={<CopyOutlined />} onClick={copyOutput}>
						Copy
					</Button>
				</Space>
			}
			OutputView={
				<CodeEditor
					ref={outputCodeEditorRef}
					code={options.current.output}
					language={options.current.selectedOutput}
					onChange={(value) => {
						options.current.output = value;
					}}
				/>
			}
		/>
	);
}
