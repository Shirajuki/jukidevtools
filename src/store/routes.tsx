import type { FC } from "react";
import {
	MenuUnfoldOutlined,
	EyeOutlined,
	RetweetOutlined,
	ConsoleSqlOutlined,
	FileImageOutlined,
	PictureOutlined,
	LinkOutlined,
	SortAscendingOutlined,
	OrderedListOutlined,
	BuildOutlined,
	FieldStringOutlined,
} from "@ant-design/icons";

export interface IToolRoute {
	label: string;
	path: string;
	icon: FC;
	alias?: string[];
	description?: string;
}

export interface IToolRouteGroup {
	label: string;
	routes: IToolRoute[];
}

export const TOOL_ROUTES: IToolRouteGroup[] = [
	{
		label: "Web tools",
		routes: [
			{
				label: "HTML Beautifier",
				path: "/html-beautifier",
				icon: MenuUnfoldOutlined,
				alias: ["HTML Beautify", "HTML Formatter", "HTML Minify", "HTML Minifier"],
				description:
					"Clean and beautify HTML code, making it easy to read and maintain. Boost readability, spot errors faster with perfectly formatted HTML.",
			},
			{
				label: "CSS Beautifier",
				path: "/css-beautifier",
				icon: MenuUnfoldOutlined,
				alias: ["CSS Beautify", "CSS Formatter", "CSS Minify", "CSS Minifier"],
				description:
					"Untidy CSS got you down? CSS Formatter beautifies & organizes your CSS code for readability & maintainability.",
			},
			{
				label: "JavaScript Beautifier",
				path: "/javascript-beautifier",
				icon: MenuUnfoldOutlined,
				alias: [
					"JavaScript JS Beautify",
					"JavaScript JS Formatter",
					"JavaScript JS Minify",
					"JavaScript JS Minifier",
				],
				description:
					"Unmess your JavaScript code. Clean & organize your JS for better readability & debugging. Boost developer productivity!",
			},
			{
				label: "HTML Viewer",
				path: "/html-viewer",
				icon: EyeOutlined,
				alias: ["HTML Previewer", "HTML Sandbox"],
				description:
					"See your HTML code come to life. Instantly renders your HTML code, letting you visualize changes effortlessly.",
			},
			{
				label: "SQL Formatter",
				path: "/sql-formatter",
				icon: ConsoleSqlOutlined,
				alias: ["SQL Beautifier", "SQL Beautify"],
				description:
					"Unleash the power of readable queries. True Devtools' SQL Formatter cleans and organizes your SQL code, making it easier to understand and debug.",
			},
		],
	},
	{
		label: "JSON tools",
		routes: [
			{
				label: "JSON Beautifier",
				path: "/json-beautifier",
				icon: MenuUnfoldOutlined,
				alias: ["JSON Formatter", "JSON Beautify", "JSON Minify", "JSON Minifier"],
				description:
					"Beautify your JSON. JSON Formatter makes your JSON code readable & checks for errors, boosting development efficiency.",
			},
			{
				label: "JSON Conversions",
				path: "/json-conversions",
				alias: [
					"JSON to and from XML Converter",
					"JSON to and from YAML Converter",
					"JSON to and from CSV Converter",
				],
				icon: RetweetOutlined,
				description:
					"Effortlessly convert JSON to YAML. JSON to YAML Converter simplifies data migration between formats, boosting your development workflow.",
			},
		],
	},
	{
		label: "Text tools",
		routes: [
			{
				label: "Text Diff Checker",
				path: "/text-diff-checker",
				icon: BuildOutlined,
				alias: ["Text String Difference Checker", "Compare Text String Difference"],
				description:
					"Spot changes instantly. Text Diff Checker highlights differences between two text versions, streamlining code reviews and content comparisons.",
			},
			{
				label: "Word Counter",
				path: "/word-counter",
				icon: OrderedListOutlined,
				alias: [
					"Text String Word Counter",
					"Text String Character Counter",
					"Text String Word Distribution",
				],
				description:
					"Instantly analyze text content. Word Counter provides word, character counts and word distribution for flawless writing & editing.",
			},
			{
				label: "Lorem Ipsum Generator",
				path: "/lorem-ipsum-generator",
				icon: FieldStringOutlined,
				alias: ["Random Text String Generator"],
				description:
					'Generate dummy "Lorem ipsum" text to use as text placeholder in your app design. Focus on your app building instead of copywriting.',
			},
			{
				label: "Random String Generator",
				path: "/random-string-generator",
				icon: FieldStringOutlined,
				alias: ["Random Text Generator", "UUID Generator", "Password Generator"],
				description:
					"Generate secure random strings at your fingertips. Random String Generator creates unique strings for passwords, tokens, and more.",
			},
			{
				label: "List Sorter / Randomizer",
				path: "/list-sorter-randomizer",
				icon: SortAscendingOutlined,
				alias: ["Text String List Line Sorter / Randomizer"],
				description:
					"Effortlessly sort & randomize list. Sort a list of text lines in ascending, descending, reversed, or random order.",
			},
		],
	},
	{
		label: "Encoding Tools",
		routes: [
			{
				label: "Unicode to Hex Converter",
				path: "/unicode-to-hex-converter",
				icon: RetweetOutlined,
				alias: [
					"Unicode Text String to Hex Code Converter",
					"Hex to Unicode Converter",
					"Hex to Unicode Text String Converter",
				],
				description:
					"Effortlessly convert Unicode to Hex. Translate characters to their corresponding hex codes, simplifying web development and data analysis.",
			},
			{
				label: "URL Encoder / Decoder",
				path: "/url-encoder-decoder",
				icon: LinkOutlined,
				alias: ["URL Parser"],
				description:
					"Decode encoded URLs or encode text for URLs with True Devtools' URL Encoder / Decoder. Effortlessly navigate special characters & avoid errors.",
			},
		],
	},
	{
		label: "Image tools",
		routes: [
			{
				label: "Image Resizer",
				path: "/image-resizer",
				icon: PictureOutlined,
				alias: ["Picture Photo Resizer"],
				description:
					"Optimize images instantly. True Devtools' Image Resizer shrinks file size for blazing-fast load times and improved website SEO.",
			},
			{
				label: "JPEG / WEBP Compressor",
				path: "/image-compressor",
				icon: FileImageOutlined,
				alias: ["Picture Photo Compressor Compression"],
				description:
					"Crush image size with an acceptable quality loss. True Devtools' Image Compressor optimizes images for faster websites & better SEO.",
			},
			{
				label: "Image Format Converter",
				path: "/image-format-converter",
				icon: RetweetOutlined,
				alias: ["Image Picture Photo Format Converter"],
				description:
					"Convert images effortlessly. True Devtools' Image Format Converter lets you switch between JPG, PNG, WEBP, GIF & more in seconds.",
			},
		],
	},
	{
		label: "Local Utilities",
		routes: [
			{
				label: "Docker Compose Converter",
				path: "/docker-compose-converter",
				icon: LinkOutlined,
				description: "TODO",
			},
			{
				label: "Lottie Watermark Removal",
				path: "https://lottiefiles.github.io/lottie-docs/playground/json_editor/",
				icon: LinkOutlined,
				description: "TODO",
			},
		],
	},
	{
		label: "External Utilities",
		routes: [
			{
				label: "CyberChef",
				path: "https://gchq.github.io/CyberChef/",
				icon: LinkOutlined,
				description: "TODO",
			},
			{
				label: "JWT.io",
				path: "https://jwt.io/",
				icon: LinkOutlined,
				description: "TODO",
			},
			{
				label: "Regex101",
				path: "https://regex101.com/",
				icon: LinkOutlined,
				description: "TODO",
			},
			{
				label: "Javascript Deobfuscator",
				path: "https://deobfuscate.relative.im/",
				icon: LinkOutlined,
				description: "TODO",
			},
			{
				label: "Dogbolt",
				path: "https://dogbolt.org/",
				icon: LinkOutlined,
				description: "TODO",
			},
			{
				label: "cURL Converter",
				path: "https://curlconverter.com/",
				icon: LinkOutlined,
				description: "TODO",
			},
			{
				label: "PostSpark",
				path: "https://postspark.app/",
				icon: LinkOutlined,
				description: "TODO",
			},
		],
	},
];
