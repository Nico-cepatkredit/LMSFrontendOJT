import type { ColumnsType } from 'antd/es/table';
import type { ILoanChargeFooter, ILoanChargeRow } from '.';
import { InfoCircleOutlined } from '@ant-design/icons';
import { Flex, Tooltip, Typography } from 'antd';

export const loanChargesColumns: ColumnsType<ILoanChargeRow> = [
	{
		title: '#',
		key: 'index',
		align: 'center',
		width: 100,
		render: (_, __, index) => index + 1,
	},
	{
		title: 'Charge Name',
		key: 'chargeName',
		dataIndex: 'chargeName',
	},
	{
		title: 'Amount',
		key: 'chargeAmount',
		align: 'center',
		dataIndex: 'chargeAmount',
		render: (value: number, record: ILoanChargeRow) => {
			return (
				<div className="flex justify-center gap-1 ">
					{value}
					{record.isAmount && (
						<Tooltip placement="topLeft" title={`Charge Type was updated`}>
							<InfoCircleOutlined className="text-[#34B34A]!" />
						</Tooltip>
					)}
				</div>
			);
		},
	},
	{
		title: 'Charge Type',
		dataIndex: 'chargeType',
		key: 'chargeType',
		align: 'center',
	},
];

export const LoanChargesFooter: React.FC<ILoanChargeFooter> = ({ totals }) => {
	return (
		<Flex vertical gap={2}>
			<Typography.Text className="text-[#585899]!">
				<span className="font-bold ">Total Deducted Charges:</span> ₱ {totals?.totalDeducted?.toFixed(2)}
			</Typography.Text>

			<Typography.Text className="text-[#585899]!">
				<span className="font-bold">Total Amortized Charges:</span> ₱ {totals?.totalAmortized.toFixed(2)}
			</Typography.Text>
		</Flex>
	);
};
