export interface ILoanAmortizationRow {
	term: number | null;
	amortization: number | null;
	interestAmount: number | null;
	principal: number | null;
	outstandingPrincipal: number;
	outstandingReceivables: number;
}
