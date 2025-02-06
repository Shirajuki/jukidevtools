import { useRef } from "react";
import { Button, Select, Space } from "antd";
import { ArrowRightOutlined, CopyOutlined } from "@ant-design/icons";
import type * as monaco from "monaco-editor";
import { useAppDispatch } from "../../store/hooks";
import { success } from "../../store/message/message.slice";
import useCopyText from "../../hooks/useCopyText.hooks";
import InputOutputLayout from "../../layouts/InputOutputLayout.component";
import CodeEditor from "../../components/CodeEditor.component";
import jsSample from "../../data/js-sample.js?raw";
import beautifyJs from "../../utils/web/beautifyJs.utils";
import { createLazyFileRoute } from "@tanstack/react-router";
import minifyJs from "../../utils/web/minifyJs.utils";

export const Route = createLazyFileRoute("/_web/javascript-beautifier")({
	component: JavaScriptBeautifier,
});

export interface IOptionTypes {
	js: string;
	formattedJs: string;
	lastUsed: "format" | "minify";
	tabSize: number;
}

function JavaScriptBeautifier() {
	const dispatch = useAppDispatch();
	const copyText = useCopyText();

	const codeEditorRef = useRef<monaco.editor.IStandaloneCodeEditor>(null);
	const outputCodeEditorRef = useRef<monaco.editor.IStandaloneCodeEditor>(null);

	const options = useRef<IOptionTypes>({
		js: "",
		formattedJs: "",
		lastUsed: "format",
		tabSize: 2,
	});

	const generateSample = async () => {
		options.current.js = jsSample;
		codeEditorRef.current?.setValue(options.current.js);
	};

	const format = (trigger: boolean) => {
		options.current.lastUsed = "format";
		const js = trigger ? options.current.js : options.current.formattedJs;
		const formattedJs = beautifyJs(js, {
			indentSize: options.current.tabSize,
		});
		outputCodeEditorRef.current?.setValue(formattedJs);
		if (trigger) dispatch(success());
	};

	const minify = async (trigger: boolean) => {
		options.current.lastUsed = "minify";
		const js = trigger ? options.current.js : options.current.formattedJs;
		const minifiedJs = await minifyJs(js);
		outputCodeEditorRef.current?.setValue(minifiedJs);
		if (trigger) dispatch(success());
	};

	const copyOutput = () => {
		const formattedJs = options.current.formattedJs;
		if (formattedJs.trim().length === 0) return;
		copyText(formattedJs);
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
					code={options.current.js}
					language="javascript"
					onChange={(js) => {
						options.current.js = js;
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
					code={options.current.formattedJs}
					language="javascript"
					onChange={(js) => {
						options.current.formattedJs = js;
					}}
				/>
			}
		/>
	);
}
