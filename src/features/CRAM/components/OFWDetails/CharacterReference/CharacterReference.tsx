import { Card, Table } from 'antd';
import { charRefColumns } from './CharRefColumn';
import type { ICharRefProps } from '..';
import { buildCharacterReferenceData } from './CharacterReference.data';

const data = [
	{
		name: 'ANGELIE GALLARDO',
		contactNumber: '09091104221',
		relationship: 'Sibling',
		province: 'Capiz',
		remarks: 'RELATIVES',
	},
	{
		name: 'LILIBETH GALLARDO',
		contactNumber: '09171021037',
		relationship: 'Sibling',
		province: 'Capiz',
		remarks: 'RELATIVES',
	},
	{
		name: 'JULIE GALLARDO',
		contactNumber: '09482700909',
		relationship: 'Sibling',
		province: 'Capiz',
		remarks: 'CONF RELATION / CONF ADDRESS / CONF EMPLOYMENT LB/ CB NO PLAN GOING ABROAD / NO NEGATIVE FEEDBACK',
	},
];

const referenceData = buildCharacterReferenceData(data);

function CharacterReference({ characterRef }: ICharRefProps) {
	return (
		<Card
			ref={characterRef}
			className="shadow-lg rounded-xl overflow-hidden scroll-mt-36"
			title={<span className="text-md font-semibold text-[#9B9BC2]">List of Character Reference</span>}
		>
			<Table
				bordered
				rowKey="name"
				dataSource={referenceData}
				columns={charRefColumns}
				scroll={{ x: 800 }}
				pagination={{ hideOnSinglePage: true }}
			/>
		</Card>
	);
}

export default CharacterReference;
