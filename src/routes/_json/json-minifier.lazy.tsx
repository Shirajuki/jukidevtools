import { useRef, useState } from "react";
import { Button, Space } from "antd";
import { ArrowRightOutlined, CopyOutlined } from "@ant-design/icons";
import type * as monaco from "monaco-editor";
import { useAppDispatch } from "../../store/hooks";
import { success } from "../../store/message/message.slice";
import useCopyText from "../../hooks/useCopyText.hooks";
import InputOutputLayout from "../../layouts/InputOutputLayout/InputOutputLayout.component";
import CodeEditor from "../../components/CodeEditor.component";
import jsonSample from "../../data/json-sample.json?raw";
import minifyJson from "../../utils/minifyJson.utils";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_json/json-minifier")({
	component: JsonMinifier,
});

export interface IOptionTypes {
	json: string;
}

function JsonMinifier() {
	const dispatch = useAppDispatch();
	const copyText = useCopyText();

	const codeEditorRef = useRef<monaco.editor.IStandaloneCodeEditor>(null);

	const options = useRef<IOptionTypes>({
		json: "",
	});

	const generateSample = () => {
		onJsonChange(jsonSample);
		codeEditorRef.current?.setValue(jsonSample);
	};

	const [minifiedJson, setMinifiedJson] = useState<string | null>(null);

	const minify = () => {
		const minifiedJson = minifyJson(options.current.json);
		setMinifiedJson(minifiedJson);
		dispatch(success());
	};

	const copyOutput = () => {
		if (minifiedJson === null) return;
		copyText(minifiedJson);
	};

	const onJsonChange = (js: string) => {
		options.current.json = js;
	};

	return (
		<InputOutputLayout
			InputToolbar={
				<Space>
					<Button size="large" onClick={generateSample}>
						Sample
					</Button>
					<Button type="primary" icon={<ArrowRightOutlined />} size="large" onClick={minify}>
						Minify
					</Button>
				</Space>
			}
			InputView={
				<CodeEditor
					ref={codeEditorRef}
					code={options.current.json}
					language="json"
					onChange={onJsonChange}
				/>
			}
			OutputToolbar={
				minifiedJson === null ? (
					<></>
				) : (
					<Space>
						<Button icon={<CopyOutlined />} onClick={copyOutput}>
							Copy
						</Button>
					</Space>
				)
			}
			OutputView={<CodeEditor code={minifiedJson} language="json" readonly />}
		/>
	);
}
