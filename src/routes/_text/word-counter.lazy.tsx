import { useMemo, useRef, useState } from "react";
import { Button, Card, Empty, Space, Statistic, Typography } from "antd";
import type * as monaco from "monaco-editor";
import InputOutputLayout from "../../layouts/InputOutputLayout.component";
import CodeEditor from "../../components/CodeEditor.component";
import textSample from "../../data/text-sample.txt?raw";
import wordCount from "../../utils/text/wordCount.utils";
import styles from "./word-counter.module.scss";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_text/word-counter")({
	component: WordCounter,
});

export interface IOptionTypes {
	text: string;
}

export interface IStatistics {
	words: number;
	characters: number;
	distribution: {
		word: string;
		number: number;
	}[];
}

function WordCounter() {
	const textEditorRef = useRef<monaco.editor.IStandaloneCodeEditor>(null);
	const options = useRef<IOptionTypes>({
		text: "",
	});

	const [statistics, setStatistics] = useState<IStatistics>({
		words: 0,
		characters: 0,
		distribution: [],
	});

	const generateSample = () => {
		if (textEditorRef.current === null) return;
		onTextChange(textSample);
		textEditorRef.current.setValue(options.current.text);
	};

	const onTextChange = useMemo(
		() => (text: string) => {
			options.current.text = text;
			calculateStatistics();
		},
		[],
	);

	const calculateStatistics = () => {
		const characters = options.current.text.length;

		const wordCounter = wordCount(options.current.text);
		const words = Object.values(wordCounter).reduce((acc, number) => acc + number, 0);

		const distribution = Object.entries(wordCounter)
			.map(([word, number]) => ({ word, number }))
			.sort((word1, word2) => word2.number - word1.number);

		setStatistics({
			words,
			characters,
			distribution,
		});
	};

	return (
		<InputOutputLayout
			InputToolbar={
				<Space>
					<Button size="large" onClick={generateSample}>
						Sample
					</Button>
				</Space>
			}
			InputView={<CodeEditor ref={textEditorRef} code="" language="text" onChange={onTextChange} />}
			OutputView={
				<>
					<div className="flex gap-6 mb-8">
						<Card className="min-w-32 border-gray-300">
							<Statistic title="Words" value={statistics.words} />
						</Card>
						<Card className="min-w-32 border-gray-300">
							<Statistic title="Characters" value={statistics.characters} />
						</Card>
					</div>
					<p className="text-base block mb-4">Word distribution</p>
					<Card className={`grow overflow-y-auto border-gray-300 ${styles.wordDistribution}`}>
						{statistics.distribution.length === 0 ? (
							<div className="h-full flex items-center justify-center">
								<Empty />
							</div>
						) : (
							<div className="pb-2">
								{statistics.distribution.map(({ word, number }, index) => (
									// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
									<div className="flex justify-between items-center mb-4" key={index}>
										<Typography.Text code className="text-base">
											{word}
										</Typography.Text>
										<p className="text-gray-700 dark:text-gray-300 text-base">x {number}</p>
									</div>
								))}
							</div>
						)}
					</Card>
				</>
			}
		/>
	);
}
