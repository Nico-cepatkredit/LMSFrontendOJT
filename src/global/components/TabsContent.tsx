import type { ITabsContentProps } from '..';

export function TabsContent({ status, children }: ITabsContentProps): React.ReactElement {
	return (
		<div className="p-4">
			<h2 className="text-lg font-semibold mb-4">Loans with status: {status}</h2>
			{children}
		</div>
	);
}
