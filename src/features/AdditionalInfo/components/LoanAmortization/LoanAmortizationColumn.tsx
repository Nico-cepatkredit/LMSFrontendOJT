import { Space, Tooltip } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import type { ILoanAmortizationRow } from '.';

const renderNumber = (value: number | null) => (value == null ? null : value.toFixed(2));

export const LoanAmortizationColumns: ColumnsType<ILoanAmortizationRow> = [
	{
		title: 'Term',
		dataIndex: 'term',
		key: 'term',
		align: 'center',
		width: 80,
	},
	{
		title: 'Monthly Amortization',
		dataIndex: 'amortization',
		key: 'amortization',
		align: 'right',
		width: 175,
		render: renderNumber,
	},
	{
		title: (
			<Space>
				Interest Amount
				<Tooltip title="Computed as: O/S Principal × Monthly EIR">
					<InfoCircleOutlined />
				</Tooltip>
			</Space>
		),
		dataIndex: 'interestAmount',
		key: 'interestAmount',
		align: 'right',
		width: 150,
		render: renderNumber,
	},
	{
		title: (
			<Space>
				Principal
				<Tooltip title="Computed as: Amortization - Interest">
					<InfoCircleOutlined />
				</Tooltip>
			</Space>
		),
		dataIndex: 'principal',
		key: 'principal',
		align: 'right',
		width: 150,
		render: renderNumber,
	},
	{
		title: (
			<Space>
				Outstanding Principal
				<Tooltip title="Computed as: Prev O/S Principal - Principal">
					<InfoCircleOutlined />
				</Tooltip>
			</Space>
		),
		dataIndex: 'outstandingPrincipal',
		key: 'outstandingPrincipal',
		align: 'right',
		width: 200,
		render: renderNumber,
	},
	{
		title: (
			<Space>
				Outstanding Receivables
				<Tooltip title="Computed as: Prev O/S Receivables - Amortization">
					<InfoCircleOutlined />
				</Tooltip>
			</Space>
		),
		dataIndex: 'outstandingReceivables',
		key: 'outstandingReceivables',
		align: 'right',
		width: 200,
		render: renderNumber,
	},
];
