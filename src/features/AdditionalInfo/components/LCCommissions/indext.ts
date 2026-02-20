export interface ILCCommissionAPIData {
	lcCommissions: {
		lcNo: number;
		consultantName: string;
		isSeniorCitizen: boolean;
		isLCSpecial: boolean;
		isRenewal: boolean;
		commissionRate: number;
		commissionAmount: number;
	};
}

export interface ILCCommissionRow {
	lcNo: number;
	consultantName: string;
	isSeniorCitizen: boolean;
	isLCSpecial: boolean;
	isRenewal: boolean;
	commissionRate: number;
	commissionAmount: number;
}
