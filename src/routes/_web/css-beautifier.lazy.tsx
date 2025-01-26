import { useRef } from "react";
import { Button, Select, Space } from "antd";
import { ArrowRightOutlined, CopyOutlined } from "@ant-design/icons";
import beautify from "js-beautify";
import type * as monaco from "monaco-editor";
import { useAppDispatch } from "../../store/hooks";
import { success } from "../../store/message/message.slice";
import useCopyText from "../../hooks/useCopyText.hooks";
import InputOutputLayout from "../../layouts/InputOutputLayout/InputOutputLayout.component";
import CodeEditor from "../../components/CodeEditor.component";
import cssSample from "../../data/css-sample.css?raw";
import { createLazyFileRoute } from "@tanstack/react-router";
import minifyCss from "../../utils/web/minifyCss.utils";

export const Route = createLazyFileRoute("/_web/css-beautifier")({
	component: CssBeautifier,
});

export interface IOptionTypes {
	css: string;
	formattedCss: string;
	lastUsed: "format" | "minify";
	tabSize: number;
}

function CssBeautifier() {
	const dispatch = useAppDispatch();
	const copyText = useCopyText();

	const codeEditorRef = useRef<monaco.editor.IStandaloneCodeEditor>(null);
	const outputCodeEditorRef = useRef<monaco.editor.IStandaloneCodeEditor>(null);

	const options = useRef<IOptionTypes>({
		css: "",
		formattedCss: "",
		lastUsed: "format",
		tabSize: 2,
	});

	const generateSample = () => {
		options.current.css = cssSample;
		codeEditorRef.current?.setValue(options.current.css);
	};

	const format = (trigger: boolean) => {
		options.current.lastUsed = "format";
		const css = trigger ? options.current.css : options.current.formattedCss;
		const formattedCss = beautify.css(css, {
			indent_size: options.current.tabSize,
		});
		outputCodeEditorRef.current?.setValue(formattedCss);
		if (trigger) dispatch(success());
	};

	const minify = (trigger: boolean) => {
		options.current.lastUsed = "minify";
		const css = trigger ? options.current.css : options.current.formattedCss;
		const minifiedCss = minifyCss(css);
		outputCodeEditorRef.current?.setValue(minifiedCss);
		if (trigger) dispatch(success());
	};

	const copyOutput = () => {
		const formattedCss = options.current.formattedCss;
		if (formattedCss.trim().length === 0) return;
		copyText(formattedCss);
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
					code={options.current.css}
					language="css"
					onChange={(css) => {
						options.current.css = css;
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
					code={options.current.formattedCss}
					language="css"
					onChange={(css) => {
						options.current.formattedCss = css;
					}}
				/>
			}
		/>
	);
}
