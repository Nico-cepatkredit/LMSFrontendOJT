export interface ILoanData {
    lmsLoanAppId: string;
    loanAppCode: string;
    dateOfApplication: string;
    productId: string;
    departureDate: string;
    branch: string;
    loanTypeId: number;
    loanPurpose: string;
    amount: string;
    approvedAmount: string;
    approvedTerms: string;
    craRecommendation: string;
    origin: string;
    lcName: string;
    lcMobileNumber: string;
    lcSocialMedia: string;
}

export interface ILoanAppDetailsParams {
	status: string;
	loanAppCode?: string;
	pnNumber?: string;
	enabled?: boolean;
}
