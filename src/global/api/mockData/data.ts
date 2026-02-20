import type { ILoanStatus } from '@/layout/components';
// import type { TableRowsType } from '@/features/StatusTable/components';

export const loanStatus: ILoanStatus[] = [
	{
		status: 'UNGENERATED',
		count: 45,
	},
	{
		status: 'UNPOSTED',
		count: 765,
	},
	{
		status: 'POSTED',
		count: 765,
	},
	{
		status: 'HOLD',
		count: 7,
	},
	{
		status: 'CANCELLED',
		count: 77,
	},
];
