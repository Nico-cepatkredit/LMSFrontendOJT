import { Card, Table } from 'antd';
import { employmentColumns } from './columns';
import { useLoanTab } from '@/global/context/LoanTabContext';

const employmentData = [
	{
		key: 1,
		company: 'NICOLAS MANUELLI/ASTRID MANUELLI',
		position: 'babysitter',
		startDate: '2018-03',
		endDate: '2025-08',
	},
	{
		key: 2,
		company: 'LB ABROAD',
		position: 'nanny',
		startDate: '2002-04',
		endDate: '2018-01',
	},
];

function EmploymentHistory() {
	const { sectionRefs } = useLoanTab();
	return (
		<Card
			ref={sectionRefs.employment}
			className="shadow-lg rounded-xl overflow-hidden scroll-mt-36"
			title={<span className="text-md font-semibold text-[#9B9BC2]">Employment History of OFW / Seaman</span>}
		>
			<Table
				bordered
				dataSource={employmentData}
				columns={employmentColumns}
				scroll={{ x: 800 }}
				pagination={{ hideOnSinglePage: true }}
			/>
		</Card>
	);
}

export default EmploymentHistory;
