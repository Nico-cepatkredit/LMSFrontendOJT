export interface ILoanChargeRow {
	isAmount: boolean;
	chargeId: number;
	chargeName: string;
	chargeAmount: number;
	chargeType: string;
}

export interface ILoanChargesApiData {
	types: {
		chargeId: number;
		chargeName: string;
		chargeAmount: number;
		chargeType: string;
		isAmount: boolean;
	}[];
}

export interface ILoanChargeFooter {
	totals: {
		totalDeducted: number;
		totalAmortized: number;
	};
}
