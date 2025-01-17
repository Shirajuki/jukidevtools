import { useCallback, useEffect, useRef, useState } from "react";
import { Button, Radio, type RadioChangeEvent, Space } from "antd";
import { CopyOutlined } from "@ant-design/icons";
import type * as monaco from "monaco-editor";
import useCopyText from "../../hooks/useCopyText.hooks";
import InputOutputLayout from "../../layouts/InputOutputLayout/InputOutputLayout.component";
import CodeEditor from "../../components/CodeEditor.component";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_encoding/url-encoder-decoder")({
	component: UrlEncoderDecoder,
});

type IMode = "encode" | "decode";
export interface IOptionTypes {
	text: string;
}

function UrlEncoderDecoder() {
	const copyText = useCopyText();

	const codeEditorRef = useRef<monaco.editor.IStandaloneCodeEditor>(null);
	const outputCodeEditorRef = useRef<monaco.editor.IStandaloneCodeEditor>(null);

	const options = useRef<IOptionTypes>({
		text: "",
	});

	const [mode, setMode] = useState<IMode>("encode");

	const onModeChange = (event: RadioChangeEvent) => {
		setMode(event.target.value);
	};

	const generateSample = useCallback(() => {
		const sampleUrl = "https://example.com?title=Lorem ipsum dolor sit";
		if (mode === "decode") {
			onTextChange(encodeURI(sampleUrl), mode);
		} else {
			onTextChange(sampleUrl, mode);
		}
		codeEditorRef.current?.setValue(options.current.text);
	}, [mode]);

	const output = useRef<string>("");

	const copyOutput = () => {
		copyText(output.current);
	};

	const onTextChange = useCallback((text: string, mode: IMode) => {
		if (outputCodeEditorRef.current === null) return;
		options.current.text = text;
		if (mode === "decode") {
			output.current = decodeURI(text);
		} else {
			output.current = encodeURI(text);
		}
		outputCodeEditorRef.current.setValue(output.current);
	}, []);

	useEffect(() => {
		onTextChange(options.current.text, mode);
	}, [mode, onTextChange]);

	return (
		<InputOutputLayout
			InputToolbar={
				<Space>
					<Radio.Group value={mode} onChange={onModeChange}>
						<Radio value="encode">Encode</Radio>
						<Radio value="decode">Decode</Radio>
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
					onChange={(text) => onTextChange(text, mode)}
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
				<CodeEditor ref={outputCodeEditorRef} code={output.current} language="text" readonly />
			}
		/>
	);
}
