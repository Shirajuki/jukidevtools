import { useRef, useState } from "react";
import { Button, Radio, type RadioChangeEvent, Space } from "antd";
import { CopyOutlined } from "@ant-design/icons";
import type * as monaco from "monaco-editor";
import useCopyText from "../../hooks/useCopyText.hooks";
import InputOutputLayout from "../../layouts/InputOutputLayout.component";
import CodeEditor from "../../components/CodeEditor.component";
import textSample from "../../data/text-sample.txt?raw";
import unicodeToHex from "../../utils/text/unicodeToHex.utils";
import { createLazyFileRoute } from "@tanstack/react-router";
import hexToUnicode from "../../utils/text/hexToUnicode.utils";

export const Route = createLazyFileRoute("/_encoding/unicode-to-hex-converter")({
	component: UnicodeToHexConverter,
});

type IMode = "encode" | "decode";
export interface IOptionTypes {
	text: string;
	outputText: string;
}

function UnicodeToHexConverter() {
	const copyText = useCopyText();
	const codeEditorRef = useRef<monaco.editor.IStandaloneCodeEditor>(null);
	const outputCodeEditorRef = useRef<monaco.editor.IStandaloneCodeEditor>(null);
	const options = useRef<IOptionTypes>({
		text: "",
		outputText: "",
	});
	const [mode, setMode] = useState<IMode>("encode");

	const generateSample = () => {
		options.current.text = textSample;
		codeEditorRef.current?.setValue(options.current.text);
		outputCodeEditorRef.current?.setValue(unicodeToHex(options.current.text));
	};

	const copyOutput = () => {
		if (options.current.outputText.trim().length === 0) return;
		copyText(options.current.outputText);
	};

	return (
		<InputOutputLayout
			InputToolbar={
				<Space>
					<Radio.Group
						value={mode}
						onChange={(event: RadioChangeEvent) => {
							setMode(event.target.value);
						}}
					>
						<Radio value="encode">Unicode2Hex</Radio>
						<Radio value="decode">Hex2Unicode</Radio>
					</Radio.Group>
					<Button size="large" onClick={generateSample}>
						Sample
					</Button>
				</Space>
			}
			InputView={
				<CodeEditor
					ref={codeEditorRef}
					code={options.current.text}
					language="text"
					onChange={(text) => {
						options.current.text = text;
						options.current.outputText =
							mode === "encode" ? unicodeToHex(text) : hexToUnicode(text);
						outputCodeEditorRef.current?.setValue(options.current.outputText);
					}}
				/>
			}
			OutputToolbar={
				<Space>
					<Button icon={<CopyOutlined />} onClick={copyOutput}>
						Copy
					</Button>
				</Space>
			}
			OutputView={
				<CodeEditor
					ref={outputCodeEditorRef}
					code={options.current.outputText}
					language="text"
					onChange={(text) => {
						options.current.outputText = text;
					}}
				/>
			}
		/>
	);
}
