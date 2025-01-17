import { useRef } from "react";
import { Button, Select, Space } from "antd";
import { ArrowRightOutlined, CopyOutlined } from "@ant-design/icons";
import type * as monaco from "monaco-editor";
import { useAppDispatch } from "../../store/hooks";
import { success } from "../../store/message/message.slice";
import useCopyText from "../../hooks/useCopyText.hooks";
import InputOutputLayout from "../../layouts/InputOutputLayout/InputOutputLayout.component";
import CodeEditor from "../../components/CodeEditor.component";
import htmlSample from "../../data/html-sample.html?raw";
import beautifyHtml from "../../utils/beautifyHtml.utils";
import { createLazyFileRoute } from "@tanstack/react-router";
import minifyHtml from "../../utils/minifyHtml.utils";

export const Route = createLazyFileRoute("/_web/html-beautifier")({
	component: HtmlBeautifier,
});

export interface IOptionTypes {
	html: string;
	formattedHtml: string;
	tabSize: number;
}

function HtmlBeautifier() {
	const dispatch = useAppDispatch();
	const copyText = useCopyText();

	const codeEditorRef = useRef<monaco.editor.IStandaloneCodeEditor>(null);
	const outputCodeEditorRef = useRef<monaco.editor.IStandaloneCodeEditor>(null);

	const options = useRef<IOptionTypes>({
		html: "",
		formattedHtml: "",
		tabSize: 2,
	});

	const generateSample = () => {
		options.current.html = htmlSample;
		codeEditorRef.current?.setValue(options.current.html);
	};

	const format = (trigger: boolean) => {
		const formattedHtml = beautifyHtml(options.current.html, {
			indentSize: options.current.tabSize,
		});
		outputCodeEditorRef.current?.setValue(formattedHtml);
		if (trigger) dispatch(success());
	};

	const minify = (trigger: boolean) => {
		const minifiedHtml = minifyHtml(options.current.html);
		outputCodeEditorRef.current?.setValue(minifiedHtml);
		if (trigger) dispatch(success());
	};

	const copyOutput = () => {
		const formattedHtml = outputCodeEditorRef.current?.getValue();
		if (!formattedHtml) return;
		copyText(formattedHtml);
	};

	const onTabSizeChange = (tabSize: number) => {
		options.current.tabSize = tabSize;
		format(false);
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
					code={options.current.html}
					language="html"
					onChange={(html) => {
						options.current.html = html;
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
					code={options.current.formattedHtml}
					language="html"
					onChange={(html) => {
						options.current.formattedHtml = html;
					}}
				/>
			}
		/>
	);
}
