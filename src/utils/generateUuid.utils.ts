import { v4 as uuidv4 } from "uuid";

export type IUuidVersion = "4";

const generateUuid = (quantity: number): string[] => {
	return [...Array(quantity)].map(() => uuidv4());
};

export default generateUuid;
