import { ConfigProvider, Table } from 'antd';
import type { ITableRowsType } from '..';
import useStatusTableColumn from '../hooks/useStatusTableColumn';
import { useGetTableDataByStatus } from '../hooks/StatusTableQuery';

function StatusTable({ status }: { status: string }): React.ReactElement {
	const columns = useStatusTableColumn(status);

	const { data, isFetching } = useGetTableDataByStatus(status);
	return (
		<ConfigProvider
			theme={{
				token: {
					colorPrimary: '#585899',
				},
				components: {
					Table: {
						headerBg: '#585899',
						headerColor: '#ffffff',
						headerSortHoverBg: '#585899',
						headerSortActiveBg: '#585899',
					},
					Pagination: {
						itemActiveColor: '#34B34A',
						itemActiveColorHover: '#585899',
					},
				},
			}}
		>
			<Table<ITableRowsType>
				columns={columns}
				dataSource={data}
				loading={isFetching}
				scroll={{ x: 800 }}
				pagination={{
					hideOnSinglePage: true,
				}}
			/>
		</ConfigProvider>
	);
}

export default StatusTable;
