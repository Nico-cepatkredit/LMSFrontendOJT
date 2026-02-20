import type { Dispatch } from 'react';
export interface ILoanStatus {
	status: string;
	count: number;
}

export interface ITab {
	key: string;
	status: string;
	loanNumber?: string;
	pnNumber?: string;
	type: 'status' | 'loan';
}

export interface IHeader {
	collapsed: boolean;
	setCollapsed: (collapsed: boolean) => void;
}

type SetState<T> = Dispatch<React.SetStateAction<T>>;
export interface ISideNav {
	collapsed: boolean;
	setCollapsed: (collapsed: boolean) => void;
	setTabs: SetState<ITab[]>;
	setActiveTab: (activeTab: string) => void;
	colorBgContainer: string;
}
