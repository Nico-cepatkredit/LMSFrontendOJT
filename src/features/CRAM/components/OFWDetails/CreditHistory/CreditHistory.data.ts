import type { ICreditHistoryData } from '.';

export const buildCreditHistoryData = (apiData: ICreditHistoryData[]) =>
	apiData.flatMap(({ id, credit }) =>
		credit.map((item, index) => ({
			id: `${id}-${index}`,
			...item,
		})),
	);
