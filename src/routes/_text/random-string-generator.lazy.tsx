import { Form, InputNumber, Button, type FormProps, Checkbox, Space } from "antd";
import { ArrowRightOutlined, CopyOutlined } from "@ant-design/icons";
import { useRef, useState } from "react";
import randomString from "../../utils/text/randomString.utils";
import { useAppDispatch } from "../../store/hooks";
import { error } from "../../store/message/message.slice";
import useCopyText from "../../hooks/useCopyText.hooks";
import InputOutputLayout from "../../layouts/InputOutputLayout.component";
import CodeEditor from "../../components/CodeEditor.component";
import { createLazyFileRoute } from "@tanstack/react-router";
import hash, { type IHashAlgorithm } from "../../utils/text/hash.utils";
import generateUuid from "../../utils/text/generateUuid.utils";

// TODO: https://1password.com/password-generator
export const Route = createLazyFileRoute("/_text/random-string-generator")({
	component: RandomStringGenerator,
});

interface IOptionTypes {
	quantity: number;
	length: number;
	allowUppercase: boolean;
	allowLowercase: boolean;
	allowDigits: boolean;
	allowSpecialCharacters: boolean;
	md5?: boolean;
	sha1?: boolean;
	sha256?: boolean;
}

function RandomStringGenerator() {
	const dispatch = useAppDispatch();
	const copyText = useCopyText();
	const [form] = Form.useForm();
	const options = useRef<IOptionTypes>({
		quantity: 5,
		length: 20,
		allowDigits: true,
		allowUppercase: true,
		allowLowercase: true,
		allowSpecialCharacters: false,
	});
	const [generatedTexts, setGeneratedTexts] = useState<string[]>([]);

	const onValuesChange: FormProps<IOptionTypes>["onValuesChange"] = (values: IOptionTypes) => {
		options.current = {
			...options.current,
			...values,
		};
	};
	const generate = async () => {
		try {
			await form.validateFields();
		} catch (err) {
			dispatch(error("Invalid options"));
			return;
		}

		if (
			!options.current.allowUppercase &&
			!options.current.allowLowercase &&
			!options.current.allowDigits &&
			!options.current.allowSpecialCharacters
		) {
			dispatch(error("At least 1 character set needs to be selected."));
			return;
		}

		const generatedTexts: string[] = [];
		for (let i = 0; i < options.current.quantity; i++) {
			generatedTexts.push(
				randomString({
					length: options.current.length,
					allowUppercase: options.current.allowUppercase,
					allowLowercase: options.current.allowLowercase,
					allowDigits: options.current.allowDigits,
					allowSpecialCharacters: options.current.allowSpecialCharacters,
				}),
			);
		}
		const hashes = [
			options.current.md5 && "md5",
			options.current.sha1 && "sha1",
			options.current.sha256 && "sha256",
		].filter(Boolean) as IHashAlgorithm[];
		for (let i = 0; i < hashes.length; i++) {
			const hashType = hashes[i];
			for (let j = 0; j < generatedTexts.length; j++) {
				generatedTexts[j] = hash(generatedTexts[j], hashType);
			}
		}
		setGeneratedTexts(generatedTexts);
	};
	const generateUUID = () => {
		const uuids = generateUuid(options.current.quantity);
		setGeneratedTexts(uuids);
	};
	const copyOutput = () => {
		copyText(generatedTexts.join("\n"));
	};

	return (
		<InputOutputLayout
			InputToolbar={
				<Space>
					<Button type="primary" icon={<ArrowRightOutlined />} size="large" onClick={generate}>
						Generate
					</Button>
					<Button type="primary" icon={<ArrowRightOutlined />} size="large" onClick={generateUUID}>
						UUID
					</Button>
				</Space>
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
						label="How many strings to generate?"
						name="quantity"
						rules={[{ required: true }]}
					>
						<InputNumber
							min={1}
							max={1000}
							precision={0}
							placeholder="Enter a number"
							className="w-full"
						/>
					</Form.Item>

					<hr />

					<Form.Item<IOptionTypes>
						label="How long for each string?"
						name="length"
						rules={[{ required: true }]}
						className="mt-2"
					>
						<InputNumber
							min={1}
							precision={0}
							placeholder="Enter a number"
							className="w-full"
							addonAfter="characters"
						/>
					</Form.Item>

					<Form.Item<IOptionTypes> name="allowUppercase" valuePropName="checked">
						<Checkbox>Allow uppercase letters (A-Z)</Checkbox>
					</Form.Item>

					<Form.Item<IOptionTypes> name="allowLowercase" valuePropName="checked" className="-mt-4">
						<Checkbox>Allow lowercase letters (a-z)</Checkbox>
					</Form.Item>

					<Form.Item<IOptionTypes> name="allowDigits" valuePropName="checked" className="-mt-4">
						<Checkbox>Allow numeric digits (0-9)</Checkbox>
					</Form.Item>

					<Form.Item<IOptionTypes>
						name="allowSpecialCharacters"
						valuePropName="checked"
						className="-mt-4"
					>
						<Checkbox>Allow special characters</Checkbox>
					</Form.Item>

					<hr className="-mt-3" />

					<Form.Item<IOptionTypes> name="md5" valuePropName="checked" className="mt-3">
						<Checkbox>MD5</Checkbox>
					</Form.Item>
					<Form.Item<IOptionTypes> name="sha1" valuePropName="checked" className="-mt-4">
						<Checkbox>SHA1</Checkbox>
					</Form.Item>
					<Form.Item<IOptionTypes> name="sha256" valuePropName="checked" className="-mt-4">
						<Checkbox>SHA256</Checkbox>
					</Form.Item>
				</Form>
			}
			OutputToolbar={
				<Button icon={<CopyOutlined />} onClick={copyOutput}>
					Copy
				</Button>
			}
			OutputView={
				<CodeEditor
					code={generatedTexts.length === 0 ? null : generatedTexts.join("\n")}
					language="text"
					readonly={true}
				/>
			}
		/>
	);
}
