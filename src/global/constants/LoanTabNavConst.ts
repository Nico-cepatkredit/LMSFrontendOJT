import type { ILoanNavSection, ISectionVisibility } from '../components';

export const initialSectionVisibility: ISectionVisibility = {
	loan: true,
	ofw: true,
	employment: true,
	credit: true,
	assets: true,
	character: true,
	beneficiary: true,
	approvalAmount: true,
	loanAmount: true,
	loanCharges: true,
	lcCommission: true,
	loanAmortization: true,
};

export const LOAN_TAB_SECTIONS: ILoanNavSection[] = [
	{ key: 'loan', label: 'Loan Details' },
	{ key: 'ofw', label: 'OFW Details' },
	{ key: 'employment', label: 'Employment History' },
	{ key: 'credit', label: 'Credit History' },
	{ key: 'assets', label: 'Owned Assets' },
	{ key: 'character', label: 'Character Reference' },
	{ key: 'beneficiary', label: 'Beneficiary Details' },
	{ key: 'approvalAmount', label: 'Approval Amount' },
	{ key: 'loanAmount', label: 'Loan Amount' },
	{ key: 'loanCharges', label: 'Loan Charges' },
	{ key: 'lcCommission', label: 'LC Commission' },
	{ key: 'loanAmortization', label: 'Loan Amortization' },
];
