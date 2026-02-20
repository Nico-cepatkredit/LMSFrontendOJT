export interface ITabItem {
	key: string;
	status: string;
	loanNumber: string;
	pnNumber: string;
	type: 'status' | 'loan';
}

export interface ITabContext {
	tabs: ITabItem[];
	activeTab: string;
	setActiveTab: (key?: string) => void;
	setTabs: React.Dispatch<React.SetStateAction<ITabItem[]>>;
}
