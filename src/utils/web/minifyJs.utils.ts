import { minify } from "terser";

const minifyJs = async (js: string) => {
	let minifiedJs = "";

	try {
		const output = await minify(js);
		if (output.code) minifiedJs = output.code;
	} catch (_) {}

	return minifiedJs || js;
};

export default minifyJs;
