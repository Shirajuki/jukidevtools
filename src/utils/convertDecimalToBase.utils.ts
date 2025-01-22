const convertDecimalToBase = (value: number, base: number) => {
	let decimal = value;
	if (decimal === 0) {
		return "0";
	}
	if (base < 2) {
		throw new Error("Invalid base");
	}
	let convertedString = "";
	while (decimal > 0) {
		const remainder = decimal % base;
		convertedString = remainder + convertedString;
		decimal = Math.floor(decimal / base);
	}

	return convertedString;
};

export default convertDecimalToBase;
