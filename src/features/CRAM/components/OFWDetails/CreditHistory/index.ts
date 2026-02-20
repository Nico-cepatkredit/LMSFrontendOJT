export interface ICreditHistoryApiItem {
	otherLoans: string;
	loanApproval: string;
	amortization: string;
	remarks: string;
}

export interface ICreditHistoryData {
	id: string;
	credit: ICreditHistoryApiItem[];
}

export interface ICreditHistoryRow {
	id: string;
	otherLoans: string;
	loanApproval: string;
	amortization: string;
	remarks: string;
}
