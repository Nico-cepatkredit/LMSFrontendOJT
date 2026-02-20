import type { ICharacterReferenceData } from '.';

export const buildCharacterReferenceData = (data: ICharacterReferenceData[]): ICharacterReferenceData[] =>
	data.map((item) => ({
		name: item.name,
		contactNumber: item.contactNumber,
		relationship: item.relationship,
		province: item.province,
		remarks: item.remarks,
	}));
