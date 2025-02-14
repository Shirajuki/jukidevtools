const cleanJson = (json: string) => {
	let offset = 0;
	let cleanedJson = json.replace(/[\r\n\t]/g, "").replace(/\s{2,}/g, " ");
	const found = cleanedJson.matchAll(/,\s*}\s*[\]||,]/g);
	for (const match of found) {
		const part1 = cleanedJson.slice(0, match.index + offset);
		const part2 = match[0].replaceAll(" ", "").replace(",}", "}");
		const part3 = cleanedJson.slice(match.index + match[0].length + offset);

		cleanedJson = part1 + part2 + part3;
		offset += part2.length - match[0].length;
	}
	return cleanedJson;
};

export default cleanJson;
