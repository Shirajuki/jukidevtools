import { Form, InputNumber, Button, type FormProps, Radio, Checkbox } from "antd";
import { ArrowRightOutlined, CopyOutlined } from "@ant-design/icons";
import { useRef, useState } from "react";
import loremIpsum from "../../utils/text/loremIpsum.utils";
import { useAppDispatch } from "../../store/hooks";
import { error } from "../../store/message/message.slice";
import useCopyText from "../../hooks/useCopyText.hooks";
import InputOutputLayout from "../../layouts/InputOutputLayout.component";
import CodeEditor from "../../components/CodeEditor.component";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_text/lorem-ipsum-generator")({
	component: LoremIpsumGenerator,
});

interface IOptionTypes {
	length: number;
	unit: "paragraphs" | "sentences" | "words";
	startWithLoremIpsum: boolean;
}

function LoremIpsumGenerator() {
	const dispatch = useAppDispatch();
	const copyText = useCopyText();

	const [form] = Form.useForm();
	const options = useRef<IOptionTypes>({
		length: 5,
		unit: "paragraphs",
		startWithLoremIpsum: true,
	});

	const onValuesChange: FormProps<IOptionTypes>["onValuesChange"] = (values: IOptionTypes) => {
		options.current = {
			...options.current,
			...values,
		};
	};

	const [generatedText, setGeneratedText] = useState<string>("");

	const generate = async () => {
		try {
			await form.validateFields();
		} catch (err) {
			dispatch(error("Invalid options"));
			return;
		}

		setGeneratedText(
			loremIpsum({
				length: options.current.length,
				unit: options.current.unit,
				startWithLoremIpsum: options.current.startWithLoremIpsum,
			}),
		);
	};

	const copyOutput = () => {
		copyText(generatedText);
	};

	return (
		<InputOutputLayout
			InputToolbar={
				<Button type="primary" icon={<ArrowRightOutlined />} size="large" onClick={generate}>
					Generate
				</Button>
			}
			InputView={
				<Form
					form={form}
					layout="vertical"
					size="large"
					requiredMark="optional"
					initialValues={options.current}
					validateMessages={{
						required: "This field is required",
					}}
					onValuesChange={onValuesChange}
				>
					<Form.Item<IOptionTypes>
						label="How long to generate?"
						name="length"
						rules={[{ required: true }]}
					>
						<InputNumber min={1} precision={0} placeholder="Enter a number" className="w-full" />
					</Form.Item>

					<Form.Item<IOptionTypes> name="unit" rules={[{ required: true }]} className="-mt-4">
						<Radio.Group
							options={[
								{
									label: "paragraphs",
									value: "paragraphs",
								},
								{
									label: "sentences",
									value: "sentences",
								},
								{
									label: "words",
									value: "words",
								},
							]}
						/>
					</Form.Item>

					<Form.Item<IOptionTypes> name="startWithLoremIpsum" valuePropName="checked">
						<Checkbox>Start with "Lorem ipsum..."</Checkbox>
					</Form.Item>
				</Form>
			}
			OutputToolbar={
				generatedText.length === 0 ? (
					<></>
				) : (
					<Button icon={<CopyOutlined />} onClick={copyOutput}>
						Copy
					</Button>
				)
			}
			OutputView={
				<CodeEditor
					code={generatedText.length === 0 ? null : generatedText}
					language="text"
					readonly={true}
				/>
			}
		/>
	);
}
