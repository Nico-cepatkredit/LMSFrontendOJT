import type { ColumnsType } from 'antd/es/table';
import type { ICharacterReferenceData } from '.';

export const charRefColumns: ColumnsType<ICharacterReferenceData> = [
	{
		title: '#',
		key: 'rowNumber',
		width: 50,
		align: 'center',
		render: (_value, _record, index) => index + 1,
	},
	{
		title: 'Name',
		dataIndex: 'name',
		key: 'name',
		width: 150,
	},
	{
		title: 'Contact Number',
		dataIndex: 'contactNumber',
		key: 'contactNumber',
		width: 100,
	},
	{
		title: 'Relationship',
		dataIndex: 'relationship',
		key: 'relationship',
		width: 100,
	},
	{
		title: 'Province',
		dataIndex: 'province',
		key: 'province',
		width: 100,
	},
	{
		title: 'Remarks',
		dataIndex: 'remarks',
		key: 'remarks',
		width: 250,
	},
];
