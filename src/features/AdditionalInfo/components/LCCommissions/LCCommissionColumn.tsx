import type { ColumnsType } from 'antd/es/table';
import type { ILCCommissionRow } from './indext';

export const lcCommissionColoumns: ColumnsType<ILCCommissionRow> = [
	{
		title: '#',
		key: 'index',
		align: 'center',
		width: 100,
		render: (_, __, index) => index + 1,
	},
	{
		title: 'LC Name',
		key: 'consultantName',
		dataIndex: 'consultantName',
		align: 'center',
		width: 400,
	},
	{
		title: 'Senior Citizen',
		key: 'isSeniorCitizen',
		dataIndex: 'isSeniorCitizen',
		align: 'center',
		render: (value) => {
			return (
				<div className="flex justify-center w-full">
					<div className="flex justify-center w-fit border border-[#34B34A] rounded-lg px-2">
						{value ? 'Yes' : 'No'}
					</div>
				</div>
			);
		},
	},
	{
		title: 'Special LC',
		key: 'isLCSpecial',
		dataIndex: 'isLCSpecial',
		align: 'center',
		render: (value) => {
			return (
				<div className="flex justify-center w-full">
					<div className="w-fit border border-[#34B34A] rounded-lg px-2">{value ? 'Yes' : 'No'}</div>
				</div>
			);
		},
	},
	{
		title: 'Commission Rate',
		key: 'commissionRate',
		dataIndex: 'commissionRate',
		align: 'center',
		render: (value) => `${value.toFixed(2)}%`,
	},
	{
		title: 'Commission Amount',
		key: 'commissionAmount',
		dataIndex: 'commissionAmount',
		align: 'center',
		render: (value) => value.toFixed(2),
	},
];
