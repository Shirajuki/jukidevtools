import { useRef, useState } from "react";
import { Button, Radio, type RadioChangeEvent, Space } from "antd";
import { CopyOutlined } from "@ant-design/icons";
import type * as monaco from "monaco-editor";
import useCopyText from "../../hooks/useCopyText.hooks";
import InputOutputLayout from "../../layouts/InputOutputLayout/InputOutputLayout.component";
import CodeEditor from "../../components/CodeEditor.component";
import Decomposerize from "decomposerize";
import Composerize from "composerize";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_utilities/docker-compose-converter")({
	component: DockerComposeConverter,
});

type IMode = "compose" | "run";
export interface IOptionTypes {
	text: string;
	outputText: string;
}

function DockerComposeConverter() {
	const copyText = useCopyText();
	const codeEditorRef = useRef<monaco.editor.IStandaloneCodeEditor>(null);
	const outputCodeEditorRef = useRef<monaco.editor.IStandaloneCodeEditor>(null);
	const options = useRef<IOptionTypes>({
		text: "",
		outputText: "",
	});
	const [mode, setMode] = useState<IMode>("run");

	const generateSample = () => {
		if (mode === "run") {
			options.current.text = `name: <your project name>
services:
    nginx:
        ports:
            - 80:80
        volumes:
            - /var/run/docker.sock:/tmp/docker.sock:ro
        restart: always
        logging:
            options:
                max-size: 1g
        image: nginx`;
		} else {
			options.current.text =
				"docker run -p 80:80 -v /var/run/docker.sock:/tmp/docker.sock:ro --restart always --log-opt max-size=1g nginx";
		}
		codeEditorRef.current?.setValue(options.current.text);
		outputCodeEditorRef.current?.setValue(composerize(options.current.text, mode));
	};

	const copyOutput = () => {
		if (options.current.outputText.trim().length === 0) return;
		copyText(options.current.outputText);
	};

	const composerize = (text: string, mode: string) => {
		try {
			return mode === "run" ? Decomposerize(text) : Composerize(text);
		} catch (_) {}
		return "";
	};

	return (
		<InputOutputLayout
			InputToolbar={
				<Space>
					<Radio.Group
						value={mode}
						onChange={(event: RadioChangeEvent) => {
							setMode(event.target.value);
							outputCodeEditorRef.current?.setValue(
								composerize(options.current.text, event.target.value),
							);
						}}
					>
						<Radio value="run">Compose2Run</Radio>
						<Radio value="compose">Run2Compose</Radio>
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
						options.current.outputText = composerize(text, mode);
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
