import { useRef } from "react";
import { Button, Select, Space } from "antd";
import { CopyOutlined } from "@ant-design/icons";
import type * as monaco from "monaco-editor";
import useCopyText from "../../hooks/useCopyText.hooks";
import InputOutputLayout from "../../layouts/InputOutputLayout.component";
import CodeEditor from "../../components/CodeEditor.component";
import textSample from "../../data/text-sample.original.txt?raw";
import shuffleArray from "../../utils/text/shuffleArray.utils";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_text/list-sorter-randomizer")({
	component: ListSorterRandomizer,
});

type IOrderType = "none" | "ascending" | "descending" | "reversed" | "random";

export interface IOptionTypes {
	text: string;
	order: IOrderType;
}

function ListSorterRandomizer() {
	const copyText = useCopyText();

	const codeEditorRef = useRef<monaco.editor.IStandaloneCodeEditor>(null);
	const outputCodeEditorRef = useRef<monaco.editor.IStandaloneCodeEditor>(null);

	const options = useRef<IOptionTypes>({
		text: "",
		order: "none",
	});

	const generateSample = () => {
		onTextChange(textSample);
		codeEditorRef.current?.setValue(options.current.text);
	};

	const convertedText = useRef<string>("");

	const copyOutput = () => {
		copyText(convertedText.current);
	};

	const onTextChange = (text: string) => {
		options.current.text = text;
		convert(options.current);
	};

	const onOrderChange = (order: IOrderType) => {
		options.current.order = order;
		convert(options.current);
	};

	const convert = (options: IOptionTypes) => {
		let lines = options.text.split("\n").filter((line) => line);

		switch (options.order) {
			case "ascending": {
				lines = lines.sort();
				break;
			}

			case "descending": {
				lines = lines.sort((a, b) => (a > b ? -1 : 1));
				break;
			}

			case "reversed": {
				lines = lines.reverse();
				break;
			}

			case "random": {
				lines = shuffleArray(lines);
				break;
			}

			default: {
				break;
			}
		}

		convertedText.current = lines.join("\n");
		outputCodeEditorRef.current?.setValue(convertedText.current);
	};

	const splitString = () => {
		const lines = options.current.text.split(",").filter((line) => line);
		const splittedText = lines.map((line) => line).join("\n");
		onTextChange(splittedText);
	};

	return (
		<InputOutputLayout
			InputToolbar={
				<Space>
					<Button size="large" onClick={generateSample}>
						Sample
					</Button>
					<Button size="large" onClick={splitString}>
						Split
					</Button>
				</Space>
			}
			InputView={
				<CodeEditor
					ref={codeEditorRef}
					code={options.current.text}
					language="text"
					onChange={onTextChange}
				/>
			}
			OutputToolbar={
				<Space>
					<Select
						defaultValue={options.current.order}
						options={[
							{ value: "none", label: <>None</> },
							{ value: "ascending", label: <>Ascending</> },
							{ value: "descending", label: <>Descending</> },
							{ value: "reversed", label: <>Reversed</> },
							{ value: "random", label: <>Random</> },
						]}
						onChange={onOrderChange}
					/>
					<Button icon={<CopyOutlined />} onClick={copyOutput}>
						Copy
					</Button>
				</Space>
			}
			OutputView={
				<CodeEditor ref={outputCodeEditorRef} code={convertedText.current} language="text" />
			}
		/>
	);
}
