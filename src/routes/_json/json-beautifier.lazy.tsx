import { useRef } from "react";
import { Button, Select, Space } from "antd";
import { ArrowRightOutlined, CopyOutlined } from "@ant-design/icons";
import type * as monaco from "monaco-editor";
import { useAppDispatch } from "../../store/hooks";
import { success, error } from "../../store/message/message.slice";
import useCopyText from "../../hooks/useCopyText.hooks";
import InputOutputLayout from "../../layouts/InputOutputLayout/InputOutputLayout.component";
import CodeEditor from "../../components/CodeEditor.component";
import jsonSample from "../../data/json-sample.minified.json?raw";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_json/json-beautifier")({
	component: JsonBeautifier,
});

export interface IOptionTypes {
	json: string;
	formattedJson: string;
	lastUsed: "format" | "minify";
	tabSize: number;
}

function JsonBeautifier() {
	const dispatch = useAppDispatch();
	const copyText = useCopyText();

	const codeEditorRef = useRef<monaco.editor.IStandaloneCodeEditor>(null);
	const outputCodeEditorRef = useRef<monaco.editor.IStandaloneCodeEditor>(null);

	const options = useRef<IOptionTypes>({
		json: "",
		formattedJson: "",
		lastUsed: "format",
		tabSize: 2,
	});

	const generateSample = async () => {
		options.current.json = jsonSample;
		codeEditorRef.current?.setValue(options.current.json);
	};

	const format = (trigger: boolean) => {
		options.current.lastUsed = "format";
		const json = trigger ? options.current.json : options.current.formattedJson;
		try {
			const formattedJson = JSON.stringify(
				JSON.parse(json),
				null,
				" ".repeat(options.current.tabSize),
			);
			outputCodeEditorRef.current?.setValue(formattedJson);
			if (trigger) dispatch(success());
		} catch (err) {
			dispatch(error());
		}
	};

	const minify = (trigger: boolean) => {
		options.current.lastUsed = "minify";
		const json = trigger ? options.current.json : options.current.formattedJson;
		try {
			const minifiedJson = JSON.stringify(JSON.parse(json));
			outputCodeEditorRef.current?.setValue(minifiedJson);
			if (trigger) dispatch(success());
		} catch (err) {
			dispatch(error());
		}
	};

	const copyOutput = () => {
		const formattedJson = options.current.formattedJson;
		if (formattedJson.trim().length === 0) return;
		copyText(formattedJson);
	};
	const onTabSizeChange = (tabSize: number) => {
		options.current.tabSize = tabSize;
		if (options.current.lastUsed === "format") format(false);
	};

	return (
		<InputOutputLayout
			InputToolbar={
				<Space>
					<Button size="large" onClick={generateSample}>
						Sample
					</Button>
					<Button
						type="primary"
						icon={<ArrowRightOutlined />}
						size="large"
						onClick={() => format(true)}
					>
						Format
					</Button>
					<Button
						type="primary"
						icon={<ArrowRightOutlined />}
						size="large"
						onClick={() => minify(true)}
					>
						Minify
					</Button>
				</Space>
			}
			InputView={
				<CodeEditor
					ref={codeEditorRef}
					code={options.current.json}
					language="json"
					onChange={(json) => {
						options.current.json = json;
					}}
				/>
			}
			OutputToolbar={
				<Space>
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
					code={options.current.formattedJson}
					language="json"
					onChange={(json) => {
						options.current.formattedJson = json;
					}}
				/>
			}
		/>
	);
}
