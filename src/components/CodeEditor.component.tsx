// Monaco Editor fix
import "monaco-editor/esm/vs/basic-languages/css/css.contribution";
import "monaco-editor/esm/vs/basic-languages/xml/xml.contribution";
import "monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution";

import EditorWorker from "monaco-editor/esm/vs/editor/editor.worker?worker";
import TsWorker from "monaco-editor/esm/vs/language/typescript/ts.worker?worker";
import JsonWorker from "monaco-editor/esm/vs/language/json/json.worker?worker";
import CssWorker from "monaco-editor/esm/vs/language/css/css.worker?worker";
import HtmlWorker from "monaco-editor/esm/vs/language/html/html.worker?worker";

// @ts-ignore
window.MonacoEnvironment = {
	getWorker(_: string, label: string) {
		if (label === "typescript" || label === "javascript") return new TsWorker();
		if (label === "json") return new JsonWorker();
		if (label === "css") return new CssWorker();
		if (label === "html") return new HtmlWorker();
		return new EditorWorker();
	},
};

import { type MutableRefObject, forwardRef, useEffect, useMemo, useRef, memo } from "react";
import { Empty } from "antd";
import * as monaco from "monaco-editor";
import { useSelector } from "react-redux";
import { selectTheme } from "../store/theme/theme.selector";

interface ICodeEditorProps {
	code: string | null;
	language?: string;
	readonly?: boolean;
	onChange?: (content: string) => void;
	className?: string;
}

const CodeEditor = memo(
	forwardRef<monaco.editor.IStandaloneCodeEditor, ICodeEditorProps>(
		({ code, language, readonly, onChange, className }, ref) => {
			const theme = useSelector(selectTheme());
			const editorRef = useRef<HTMLDivElement | null>(null);
			const localEditor = useRef<monaco.editor.IStandaloneCodeEditor>();
			const editor = (ref || localEditor) as MutableRefObject<monaco.editor.IStandaloneCodeEditor>;

			const wordWrap = useMemo((): "on" | "off" => {
				if (language === "text") return "on";

				return "off";
			}, [language]);

			useEffect(() => {
				if ((code === null && readonly) || editorRef.current === null) return;

				editor.current = monaco.editor.create(editorRef.current, {
					theme: theme === "dark" ? "vs-dark" : "",
					value: code || "",
					language: language,
					fontSize: 14,
					tabSize: 2,
					contextmenu: false,
					readOnly: readonly,
					quickSuggestions: language !== "text",
					scrollBeyondLastLine: false,
					automaticLayout: true,
					wordWrap,
					inlayHints: {
						enabled: false,
					},
					padding: {
						top: 16,
						bottom: 16,
					},
					minimap: {
						enabled: false,
					},
					scrollbar: {
						horizontalScrollbarSize: 8,
						verticalScrollbarSize: 8,
					},
				});

				if (readonly) {
					const messageContribution = editor.current.getContribution(
						"editor.contrib.messageController",
					);
					editor.current.onDidAttemptReadOnlyEdit(() => {
						if (messageContribution) {
							messageContribution.dispose();
						}
					});
				} else if (onChange) {
					editor.current.getModel()?.onDidChangeContent(() => {
						onChange(editor.current.getValue());
					});
				}

				return () => editor.current.dispose();
			}, [code, language, readonly, onChange, editor, theme, wordWrap]);

			useEffect(() => {
				monaco.editor.setTheme(theme === "dark" ? "vs-dark" : "");
			}, [theme]);

			return (
				<div
					ref={editorRef}
					className={`border border-solid border-gray-300 h-full min-h-[250px] ${className}`}
				>
					{code === null && readonly && (
						<div className="h-full flex items-center justify-center">
							<Empty />
						</div>
					)}
				</div>
			);
		},
	),
);

export default CodeEditor;
