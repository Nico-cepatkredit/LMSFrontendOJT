import { Card, Table } from 'antd';
import { buildCreditHistoryData } from './CreditHistory.data';
import { creditColumns } from './CreditHistoryColumns';
import type { ICreditHistoryRow } from '.';
import { useLoanTab } from '@/global/context/LoanTabContext';

const creditData = [
	{
		id: 'sadas',
		test: 'sadadad',
		test2: '213321',
		credit: [
			{
				otherLoans: 'BPI CREDIT CARD',
				loanApproval: '₱ 50,000.00',
				amortization: 'VARIES',
				remarks: 'ACTIVE - CURRENT & UPDATED PAYMENTS',
			},
			{
				otherLoans: 'BPI CREDIT CARD',
				loanApproval: '₱ 50,000.00',
				amortization: 'VARIES',
				remarks: 'ACTIVE - CURRENT & UPDATED PAYMENTS',
			},
		],
	},
];

const creditItems = buildCreditHistoryData(creditData);

function CreditHistory() {
	const { sectionRefs } = useLoanTab();
	return (
		<Card
			ref={sectionRefs.credit}
			className="shadow-lg rounded-xl overflow-hidden scroll-mt-36"
			title={<span className="text-md font-semibold text-[#9B9BC2]">Credit History of OFW / Seaman</span>}
		>
			<Table<ICreditHistoryRow>
				bordered
				rowKey="id"
				dataSource={creditItems}
				columns={creditColumns}
				scroll={{ x: 800 }}
				pagination={{ hideOnSinglePage: true }}
			/>
		</Card>
	);
}

export default CreditHistory;
