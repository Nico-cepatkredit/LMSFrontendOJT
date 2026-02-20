import type { ColumnsType } from 'antd/es/table';
import type { ICreditHistoryRow } from '.';

export const creditColumns: ColumnsType<ICreditHistoryRow> = [
	{
		title: '#',
		key: 'index',
		width: 10,
		align: 'center' as const,
		render: (_: unknown, __: ICreditHistoryRow, index: number) => index + 1,
	},
	{
		title: 'Loan Approval',
		dataIndex: 'loanApproval',
		width: 200,
	},
	{
		title: 'Amortization',
		dataIndex: 'amortization',
		width: 200,
	},
	{
		title: 'Remarks',
		dataIndex: 'remarks',
		width: 300,
	},
];
