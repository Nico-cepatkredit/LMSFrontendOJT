import { Card, Table } from 'antd';
import { lcCommissionColoumns } from './LCCommissionColumn';
import { useLoanTab } from '@/global/context/LoanTabContext';

function LCCommissions() {
	const { sectionRefs } = useLoanTab();

	const lcCommissionData = {
		lcCommission: [
			{
				lcNo: 1,
				consultantName: 'TEST TEST TEST SR (test@gmail.com-old)',
				isSeniorCitizen: false,
				isLCSpecial: false,
				isRenewal: false,
				commissionRate: 4,
				commissionAmount: 720,
			},
		],
	};
	return (
		<Card
			ref={sectionRefs.lcCommission}
			className="shadow-lg rounded-xl overflow-hidden scroll-mt-36"
			title={<span className="text-md font-semibold text-[#9B9BC2]">LC Commissions</span>}
		>
			<Table
				rowKey="lcNo"
				bordered
				dataSource={lcCommissionData.lcCommission}
				columns={lcCommissionColoumns}
				scroll={{ x: 800 }}
				pagination={{ hideOnSinglePage: true }}
			/>
		</Card>
	);
}

export default LCCommissions;
