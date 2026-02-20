export interface ITableRowsType {
	key: string;
	loanAppCode: string;
	pnNumber: string;
	borrower: string;
	productId: string;
	modUser: string;
	modDate: string;
	actions: {
		[key: string]: { by: string | null; date: string | null };
	};
}

// interface IUpdatedByType {
// 	updatedBy: string;
// 	approvedBy: string;
// 	canceledBy: string;
// 	generatedBy: string;
// }

// export interface IUpdatedBy {
// 	role: string;
// 	name: string;
// }
