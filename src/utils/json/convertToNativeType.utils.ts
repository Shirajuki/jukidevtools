const convertToNativeType = (value: string) => {
	const numberValue = Number(value);
	if (!Number.isNaN(numberValue)) {
		return numberValue;
	}

	const booleanValue = value.toLowerCase();
	if (booleanValue === "true") {
		return true;
	}
	if (booleanValue === "false") {
		return false;
	}

	return value;
};

export default convertToNativeType;
