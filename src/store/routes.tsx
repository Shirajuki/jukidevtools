import type { FC } from "react";
import {
	MenuUnfoldOutlined,
	CompressOutlined,
	EyeOutlined,
	RetweetOutlined,
	ConsoleSqlOutlined,
	FieldNumberOutlined,
	FileImageOutlined,
	PictureOutlined,
	LockOutlined,
	LinkOutlined,
	FileZipOutlined,
	SortAscendingOutlined,
	TrademarkCircleOutlined,
	OrderedListOutlined,
	BuildOutlined,
	FieldStringOutlined,
	PercentageOutlined,
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
				label: "HTML Formatter",
				path: "/html-formatter",
				icon: MenuUnfoldOutlined,
				alias: ["HTML Beautifier", "HTML Beautify"],
				description:
					"Clean and beautify HTML code, making it easy to read and maintain. Boost readability, spot errors faster with perfectly formatted HTML.",
			},
			{
				label: "HTML Minifier",
				path: "/html-minifier",
				icon: CompressOutlined,
				alias: ["HTML Minify", "HTML Uglifier", "HTML Uglify"],
				description:
					"Shrink your HTML code. Trim whitespaces and unnecessary tags for faster loading times and better SEO.",
			},
			{
				label: "CSS Formatter",
				path: "/css-formatter",
				icon: MenuUnfoldOutlined,
				alias: ["CSS Beautifier", "CSS Beautify"],
				description:
					"Untidy CSS got you down? CSS Formatter beautifies & organizes your CSS code for readability & maintainability.",
			},
			{
				label: "CSS Minifier",
				path: "/css-minifier",
				icon: CompressOutlined,
				alias: ["CSS Minify", "CSS Uglifier", "CSS Uglify"],
				description:
					"Supercharge website speed with CSS Minifier! Minify CSS code to optimize file size, boost loading times & improve SEO.",
			},
			{
				label: "JavaScript Formatter",
				path: "/javascript-formatter",
				icon: MenuUnfoldOutlined,
				alias: ["JavaScript JS Formatter", "JavaScript JS Beautifier", "JavaScript JS Beautify"],
				description:
					"Unmess your JavaScript code. Clean & organize your JS for better readability & debugging. Boost developer productivity!",
			},
			{
				label: "JavaScript Minifier",
				path: "/javascript-minifier",
				icon: CompressOutlined,
				alias: ["JavaScript JS Minify", "JavaScript JS Uglifier", "JavaScript JS Uglify"],
				description:
					"Supercharge your site speed. JavaScript Minifier shrinks & optimizes JS files for blazing-fast load times & improved SEO.",
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
				alias: ["Random Text Generator"],
				description:
					"Generate secure random strings at your fingertips. Random String Generator creates unique strings for passwords, tokens, and more.",
			},
			{
				label: "UUID Generator",
				path: "/uuid-generator",
				icon: FieldNumberOutlined,
				alias: ["UUID Randomizer"],
				description:
					"Need a unique identifier? Generate strong, random UUIDs with True Devtools for free. Easy to use and guaranteed uniqueness.",
			},
			{
				label: "Text Case Converter",
				path: "/text-case-converter",
				icon: RetweetOutlined,
				alias: ["Text String Upper Lower Capitalized Case Converter"],
				description:
					"Effortlessly convert text cases. Text Case Converter offers uppercase, lowercase, capitalized case for all your content needs.",
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
		label: "JSON tools",
		routes: [
			{
				label: "JSON Formatter",
				path: "/json-formatter",
				icon: MenuUnfoldOutlined,
				alias: ["JSON Beautifier", "JSON Beautify"],
				description:
					"Beautify your JSON. JSON Formatter makes your JSON code readable & checks for errors, boosting development efficiency.",
			},
			{
				label: "JSON Minifier",
				path: "/json-minifier",
				icon: CompressOutlined,
				alias: ["JSON Minify", "JSON Uglifier", "JSON Uglify"],
				description:
					"Instantly minify JSON for flawless data exchange. JSON Minifier reduces JSON file size by trimming all whitespaces for faster transmission.",
			},
			{
				label: "JSON to XML Converter",
				path: "/json-to-xml-converter",
				icon: RetweetOutlined,
				description:
					"Effortlessly convert JSON to XML: JSON to XML Converter ensures seamless data exchange between formats, boosting your development workflow.",
			},
			{
				label: "XML to JSON Converter",
				path: "/xml-to-json-converter",
				icon: RetweetOutlined,
				description:
					"Effortlessly convert XML to JSON. True Devtools' free online converter transforms your data with ease. Get clean, human-readable JSON in seconds!",
			},
			{
				label: "JSON to YAML Converter",
				path: "/json-to-yaml-converter",
				icon: RetweetOutlined,
				description:
					"Effortlessly convert JSON to YAML. JSON to YAML Converter simplifies data migration between formats, boosting your development workflow.",
			},
			{
				label: "YAML to JSON Converter",
				path: "/yaml-to-json-converter",
				icon: RetweetOutlined,
				description:
					"Effortlessly convert YAML to JSON. YAML to JSON Converter ensures seamless data exchange between formats, boosting your development workflow.",
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
				alias: ["Unicode Text String to Hex Code Converter"],
				description:
					"Effortlessly convert Unicode to Hex. Translate characters to their corresponding hex codes, simplifying web development and data analysis.",
			},
			{
				label: "Hex to Unicode Converter",
				path: "/hex-to-unicode-converter",
				icon: RetweetOutlined,
				alias: ["Hex Code to Unicode Text String Converter"],
				description:
					"Decode Hex to Unicode Instantly. Translate hexadecimal code into human-readable characters, simplifying data interpretation.",
			},
			{
				label: "Backslash Escape / Unescape",
				path: "/backslash-escape-unescape",
				icon: PercentageOutlined,
				alias: ["JavaScript JS Text String Backslash Escaper / Unescaper / Encoder / Decoder"],
				description:
					"Secure your strings. Backslash Escape / Unescape safeguards data by encoding special characters for safe storage and transmission.",
			},
			{
				label: "Base64 Encoder / Decoder",
				path: "/base64-encoder-decoder",
				icon: FileZipOutlined,
				alias: ["Base64 Parser"],
				description:
					"Effortlessly encode & decode Base64 with True Devtools! Convert text for secure data transmission.",
			},
			{
				label: "URL Encoder / Decoder",
				path: "/url-encoder-decoder",
				icon: LinkOutlined,
				alias: ["URL Parser"],
				description:
					"Decode encoded URLs or encode text for URLs with True Devtools' URL Encoder / Decoder. Effortlessly navigate special characters & avoid errors.",
			},
			{
				label: "Digital Certificate Decoder",
				path: "/digital-certificate-decoder",
				icon: LockOutlined,
				alias: ["X509 SSL Digital Certificate Decoder Parser"],
				description:
					"Digital Certificate Decoder lets you decode and view certificate details for enhanced security analysis.",
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
				label: "cURL Converter",
				path: "/curl-converter",
				icon: LinkOutlined,
				description: "TODO",
			},
			{
				label: "Docker Compose Converter",
				path: "/docker-compose-converter",
				icon: LinkOutlined,
				description: "TODO",
			},
			{
				label: "Regex Tester",
				path: "/regex-tester",
				icon: TrademarkCircleOutlined,
				alias: [
					"Regular Expression Tester",
					"Regular Expression Parser",
					"Regular Expression Sandbox",
				],
				description:
					"Regex Tester lets you write, test, and debug regular expressions with ease. Boost developer productivity!",
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
		],
	},
];
