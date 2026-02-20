export interface ITabsContentProps {
	status: string;
	children: React.ReactNode; // This allows nesting components like <StatusTable />
}

export interface ILoanNumber {
	loanNumber: string;
	children: React.ReactNode;
}

export interface ISectionVisibility {
	loan: boolean;
	ofw: boolean;
	employment: boolean;
	credit: boolean;
	assets: boolean;
	character: boolean;
	beneficiary: boolean;
	approvalAmount: boolean;
	loanAmount: boolean;
	loanCharges: boolean;
	lcCommission: boolean;
	loanAmortization: boolean;
}

export type SectionKey = keyof ISectionVisibility;

export interface ILoanTabNav {
	visible: ISectionVisibility;
	onNavigate: (key: SectionKey) => void;
	onToggle: (key: SectionKey, checked: boolean) => void;
}

export interface ILoanNavSection {
	key: SectionKey;
	label: string;
}

export type SectionRefs = Record<keyof ISectionVisibility, React.RefObject<HTMLDivElement | null>>;
