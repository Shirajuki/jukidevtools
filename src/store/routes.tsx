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
			},
			{
				label: "CSS Beautifier",
				path: "/css-beautifier",
				icon: MenuUnfoldOutlined,
				alias: ["CSS Beautify", "CSS Formatter", "CSS Minify", "CSS Minifier"],
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
			},
			{
				label: "HTML Viewer",
				path: "/html-viewer",
				icon: EyeOutlined,
				alias: ["HTML Previewer", "HTML Sandbox"],
			},
			{
				label: "SQL Formatter",
				path: "/sql-formatter",
				icon: ConsoleSqlOutlined,
				alias: ["SQL Beautifier", "SQL Beautify"],
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
			},
			{
				label: "Lorem Ipsum Generator",
				path: "/lorem-ipsum-generator",
				icon: FieldStringOutlined,
				alias: ["Random Text String Generator"],
			},
			{
				label: "Random String Generator",
				path: "/random-string-generator",
				icon: FieldStringOutlined,
				alias: ["Random Text Generator", "UUID Generator", "Password Generator"],
			},
			{
				label: "List Sorter / Randomizer",
				path: "/list-sorter-randomizer",
				icon: SortAscendingOutlined,
				alias: ["Text String List Line Sorter / Randomizer"],
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
			},
			{
				label: "URL Encoder / Decoder",
				path: "/url-encoder-decoder",
				icon: LinkOutlined,
				alias: ["URL Parser"],
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
			},
			{
				label: "JPEG / WEBP Compressor",
				path: "/image-compressor",
				icon: FileImageOutlined,
				alias: ["Picture Photo Compressor Compression"],
			},
			{
				label: "Image Format Converter",
				path: "/image-format-converter",
				icon: RetweetOutlined,
				alias: ["Image Picture Photo Format Converter"],
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
			},
			{
				label: "Lottie Watermark Removal",
				path: "https://lottiefiles.github.io/lottie-docs/playground/json_editor/",
				icon: LinkOutlined,
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
			},
			{
				label: "JWT.io",
				path: "https://jwt.io/",
				icon: LinkOutlined,
			},
			{
				label: "Regex101",
				path: "https://regex101.com/",
				icon: LinkOutlined,
			},
			{
				label: "Javascript Deobfuscator",
				path: "https://deobfuscate.relative.im/",
				icon: LinkOutlined,
			},
			{
				label: "Dogbolt",
				path: "https://dogbolt.org/",
				icon: LinkOutlined,
			},
			{
				label: "cURL Converter",
				path: "https://curlconverter.com/",
				icon: LinkOutlined,
			},
			{
				label: "PostSpark",
				path: "https://postspark.app/",
				icon: LinkOutlined,
			},
		],
	},
];
