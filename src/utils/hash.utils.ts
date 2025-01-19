import { MD5, SHA1, SHA256 } from "crypto-js";

export type IHashAlgorithm = "md5" | "sha1" | "sha256";

const hash = (text: string, algorithm: IHashAlgorithm): string => {
	switch (algorithm) {
		case "md5":
			return MD5(text).toString();

		case "sha1":
			return SHA1(text).toString();

		case "sha256":
			return SHA256(text).toString();
	}
};

export default hash;
