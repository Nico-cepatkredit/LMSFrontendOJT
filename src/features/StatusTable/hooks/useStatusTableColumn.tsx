import type { ITableRowsType } from '..';
import { Popover, Space, Tooltip } from 'antd';
import type { TableProps } from 'antd';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { CheckCircleOutlined, DeleteOutlined, KeyOutlined } from '@ant-design/icons';
import { statusIconMap } from '@/global/constants/StatusIconLayoutConst';
import type { ITab } from '@/layout/components';
import CepatButton from '@/global/components/CepatButton';

function useStatusTableColumn(status: string) {
	const { setTabs, setActiveTab } = useOutletContext<any>();
	const navigate = useNavigate();

	const columns: TableProps<ITableRowsType>['columns'] = [
		{
			title: 'LA Number',
			dataIndex: 'loanAppCode',
			key: 'loanAppCode',
			width: 200,
			render: (loanNumber, record) => {
				return (
					<a
						className="font-semibold text-[#585899]! hover:text-[#34B34A]!"
						onClick={() => {
							const key = `loan:${status}:${loanNumber}${record.pnNumber ? `:${record.pnNumber}` : ''}`;

							setTabs((prev: ITab[]) =>
								prev.some((t) => t.key === key)
									? prev
									: [
											...prev,
											{
												key,
												status: status,
												loanNumber: loanNumber,
												pnNumber: record.pnNumber,
												type: 'loan',
												icon: statusIconMap[status],
											},
										],
							);

							setActiveTab(key);

							const url = record.pnNumber
								? `/home/loan/${status}/${loanNumber}/${record.pnNumber}`
								: `/home/loan/${status}/${loanNumber}`;

							navigate(url);
						}}
					>
						{loanNumber}
					</a>
				);
			},
		},
		{
			title: 'PN Number',
			dataIndex: 'pnNumber',
			key: 'pnNumber',
			width: 150,
		},
		{
			title: 'Name of the Borrower',
			dataIndex: 'borrowerFullName',
			key: 'borrowerFullName',
			width: 300,
		},
		{
			title: 'Product',
			dataIndex: 'productId',
			key: 'productId',
			width: 150,
		},
		{
			title: 'Last Updated By',
			dataIndex: 'modUser',
			key: 'modUser',
			width: 300,
			render: (modUser, record) => {
				const { modDate, actions } = record;

				const validEntries = Object.entries(actions).filter(([_, details]) => details && details.by !== null);

				const popoverContent = (
					<div className="w-64 p-1">
						<div className="text-[10px] font-bold text-gray-400 mb-2 uppercase tracking-wider">
							Latest Audit History
						</div>
						{validEntries.map(([actionKey, details], i) => (
							<div
								key={i}
								className="flex flex-col justify-center gap-1 py-2 border-b last:border-0 border-gray-100"
							>
								<div className="text-[10px] font-bold text-[#585899] uppercase leading-tight">
									{actionKey
										.replace(/([a-z])([A-Z])/g, '$1 $2')
										.replace(/\bPn\b/g, 'PN') //to not separate PN
										.replace(/^./, (c) => c.toUpperCase())
										.trim()}
								</div>
								<div>
									<div className="text-[11px] font-semibold text-gray-800 leading-tight break-all">
										{details.by}
									</div>
									<div className="text-[10px] text-gray-400 italic">
										{details.date ? details.date : 'N/A'}
									</div>
								</div>
							</div>
						))}
					</div>
				);
				return (
					modUser && (
						<div className="flex flex-col">
							<div className="flex items-center gap-2">
								<span className="font-medium text-gray-700 ">{modUser}</span>
								{validEntries.length > 0 && (
									<Popover content={popoverContent} trigger="hover" placement="bottomLeft">
										<div className="bg-[#34B34A] text-white text-[10px] px-1.5 py-0.5 rounded-full cursor-pointer font-bold shadow-sm hover:scale-110 transition-transform">
											+{validEntries.length}
										</div>
									</Popover>
								)}
							</div>
							<div className="text-[11px] text-gray-400 flex items-center gap-1 mt-0.5 italic">
								<span>{modDate}</span>
							</div>
						</div>
					)
				);
			},
		},
		{
			title: 'Action',
			key: 'action',
			width: 140,
			fixed: 'right',
			render: () => {
				return (
					<Space size="small">
						<CepatButton
							tooltip={'Aprroved'}
							type="text"
							icon={<CheckCircleOutlined />}
							size="small"
							className="hover:text-[#34B34A]!"
						/>
						<CepatButton
							tooltip={'Delete'}
							type="text"
							icon={<DeleteOutlined />}
							className="hover:text-[#34B34A]!"
						/>
						<CepatButton
							tooltip={'Generate PN Number'}
							icon={<KeyOutlined />}
							type="text"
							className="hover:text-[#34B34A]!"
						/>
					</Space>
				);
			},
		},
	];
	return columns;
}

export default useStatusTableColumn;
