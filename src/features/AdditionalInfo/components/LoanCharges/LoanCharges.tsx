import { Card, Table } from 'antd';
import { loanChargesColumns, LoanChargesFooter } from './LoanChargesColumn';
import { buildChargeRows } from './LoanCharges.data';
import { useLoanTab } from '@/global/context/LoanTabContext';

function LoanCharges() {
	const { sectionRefs } = useLoanTab();

	const loanChargesData = {
		totals: {
			totalDeducted: 4650.75,
			totalAmortized: 0,
		},
		types: [
			{
				chargeId: 1,
				chargeName: 'Processing Fee',
				chargeAmount: 2000,
				chargeType: 'Deducted',
				isAmount: true,
				isType: true,
			},
			{
				chargeId: 2,
				chargeName: 'Credit Risk Fee',
				chargeAmount: 1250,
				chargeType: 'Deducted',
				isAmount: false,
				isType: false,
			},
			{
				chargeId: 3,
				chargeName: 'Notarial Fee',
				chargeAmount: 300,
				chargeType: 'Deducted',
				isAmount: false,
				isType: false,
			},
			{
				chargeId: 4,
				chargeName: 'PN Docs Stamp',
				chargeAmount: 93.75,
				chargeType: 'Deducted',
				isAmount: false,
				isType: false,
			},
			{
				chargeId: 5,
				chargeName: 'Service Fee',
				chargeAmount: 175,
				chargeType: 'Deducted',
				isAmount: false,
				isType: false,
			},
			{
				chargeId: 6,
				chargeName: 'E-Sign Fee',
				chargeAmount: 300,
				chargeType: 'Deducted',
				isAmount: false,
				isType: false,
			},
			{
				chargeId: 7,
				chargeName: 'IBFT Fee',
				chargeAmount: 300,
				chargeType: 'Deducted',
				isAmount: false,
				isType: false,
			},
			{
				chargeId: 22,
				chargeName: 'Penalty',
				chargeAmount: 232,
				chargeType: 'Deducted',
				isAmount: false,
				isType: false,
			},
		],
	};

	const chargeRows = buildChargeRows(loanChargesData);

	return (
		<Card
			ref={sectionRefs.loanCharges}
			className="shadow-lg rounded-xl overflow-hidden scroll-mt-36"
			title={<span className="text-md font-semibold text-[#9B9BC2]">Loan Charges</span>}
		>
			<Table
				rowKey="chargeId"
				bordered
				dataSource={chargeRows}
				columns={loanChargesColumns}
				footer={() => <LoanChargesFooter totals={loanChargesData.totals} />}
				scroll={{ x: 800 }}
				pagination={{ hideOnSinglePage: true }}
			/>
		</Card>
	);
}

export default LoanCharges;
