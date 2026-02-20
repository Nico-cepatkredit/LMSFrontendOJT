import { useLoanTab } from '@/global/context/LoanTabContext';
import { Card, Table } from 'antd';

const columns = [
	{
		title: '#',
		dataIndex: 'key',
		key: 'key',
		width: 10,
		align: 'center' as const,
	},
	{
		title: 'Make / Location',
		dataIndex: 'make',
		key: 'make',
		width: 200,
	},
	{
		title: 'Year Model / Year Acquired',
		dataIndex: 'model',
		key: 'model',
		width: 200,
	},
	{
		title: 'Remarks',
		dataIndex: 'remarks',
		key: 'remarks',
		width: 300,
	},
];

const assetData = [
	{
		key: 1,
		category: 'TRICYCLE',
		make: 'kawasaki',
		model: 'bajaj 125 2018',
		remarks: 'FULLY PAID - COMPLETED DEC 2024',
	},
];

function OwnedAssets() {
	const { sectionRefs } = useLoanTab();
	return (
		<Card
			ref={sectionRefs.assets}
			className="shadow-lg rounded-xl overflow-hidden scroll-mt-36"
			title={<span className="text-md font-semibold text-[#9B9BC2]">Owned Assets of OFW / Seaman</span>}
		>
			<Table
				bordered
				dataSource={assetData}
				columns={columns}
				scroll={{ x: 800 }}
				pagination={{ hideOnSinglePage: true }}
			/>
		</Card>
	);
}

export default OwnedAssets;
