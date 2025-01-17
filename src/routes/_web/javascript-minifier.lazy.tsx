import { useRef, useState } from "react";
import { Button, Space } from "antd";
import { ArrowRightOutlined, CopyOutlined } from "@ant-design/icons";
import type * as monaco from "monaco-editor";
import { useAppDispatch } from "../../store/hooks";
import { success } from "../../store/message/message.slice";
import useCopyText from "../../hooks/useCopyText.hooks";
import InputOutputLayout from "../../layouts/InputOutputLayout/InputOutputLayout.component";
import CodeEditor from "../../components/CodeEditor.component";
import jsSample from "../../data/js-sample.js?raw";
import minifyJs from "../../utils/minifyJs.utils";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_web/javascript-minifier")({
	component: JavaScriptMinifier,
});

export interface IOptionTypes {
	js: string;
}

function JavaScriptMinifier() {
	const dispatch = useAppDispatch();
	const copyText = useCopyText();

	const codeEditorRef = useRef<monaco.editor.IStandaloneCodeEditor>(null);

	const options = useRef<IOptionTypes>({
		js: "",
	});

	const generateSample = () => {
		onJsChange(jsSample);
		codeEditorRef.current?.setValue(jsSample);
	};

	const [minifiedJs, setMinifiedJs] = useState<string | null>(null);

	const minify = async () => {
		const minifiedJs = await minifyJs(options.current.js);
		setMinifiedJs(minifiedJs);
		dispatch(success());
	};

	const copyOutput = () => {
		if (minifiedJs === null) return;
		copyText(minifiedJs);
	};

	const onJsChange = (js: string) => {
		options.current.js = js;
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
					code={options.current.js}
					language="javascript"
					onChange={onJsChange}
				/>
			}
			OutputToolbar={
				minifiedJs === null ? (
					<></>
				) : (
					<Space>
						<Button icon={<CopyOutlined />} onClick={copyOutput}>
							Copy
						</Button>
					</Space>
				)
			}
			OutputView={<CodeEditor code={minifiedJs} language="javascript" readonly />}
		/>
	);
}
