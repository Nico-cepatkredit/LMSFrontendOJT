import { ConfigProvider, Tabs, Tooltip } from 'antd';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { TabsContent } from '../global/components/TabsContent';
import LoanTab from '@/global/components/LoanTab';
import StatusTable from '@/features/StatusTable/components/StatusTable';
import CRAM from '@/features/CRAM/components/CRAM';
import AdditionalInfo from '@/features/AdditionalInfo/components/AdditionalInfo';
import { statusIconMap } from '@/global/constants/StatusIconLayoutConst';
import type { ITabContext } from '.';

function HomePage(): React.ReactElement {
	const { tabs, activeTab, setActiveTab, setTabs } = useOutletContext<ITabContext>();

	const navigate = useNavigate();
	return (
		<ConfigProvider
			theme={{
				components: {
					Tabs: {
						itemColor: '#585899', // Default text color
						itemSelectedColor: '#34B34A', // Color when active
						itemHoverColor: '#34B34A', // Color on hover
					},
					Tooltip: {
						colorBgSpotlight: '#585899',
					},
				},
			}}
		>
			<Tabs
				type="editable-card"
				hideAdd
				activeKey={activeTab}
				onChange={(key) => {
					setActiveTab(key);
					const [type, status, loanAppCode, pnNumber] = key.split(':');
					console.log(key);
					if (type === 'loan') {
						if (pnNumber) {
							navigate(`/home/${type}/${status}/${loanAppCode}/${pnNumber}`);
						} else {
							navigate(`/home/${type}/${status}/${loanAppCode}`);
						}
					} else if (type === 'status') {
						navigate(`/home/${type}/${status}`);
					}
				}}
				onEdit={(key, action) => {
					if (action === 'remove') {
						setTabs((prev) => {
							const next = prev.filter((t) => t.key !== key);
							const last = next.at(-1);

							if (last) {
								setActiveTab(last.key);
								const [type, status, loanAppCode, pnNumber] = last.key.split(':');
								const url =
									type === 'loan'
										? pnNumber
											? `/home/${type}/${status}/${loanAppCode}/${pnNumber}`
											: `/home/${type}/${status}/${loanAppCode}`
										: `/home/${type}/${status}`;

								navigate(url);
							} else {
								setActiveTab(undefined);
								navigate('/home');
							}
							return next;
						});
					}
				}}
				items={tabs.map((tab) => {
					const Icon = tab.status ? statusIconMap[tab.status] : null;

					return {
						key: tab.key,
						label: (
							<Tooltip title={tab.status}>
								<span className="flex items-center gap-2">
									<span>{tab.type === 'loan' ? tab.loanNumber : tab.status}</span>

									{Icon && (
										<span className="text-sm">
											<Icon />
										</span>
									)}
								</span>
							</Tooltip>
						),
						children:
							tab.type === 'status' ? (
								<TabsContent status={tab.status}>
									<StatusTable status={tab.status} />
								</TabsContent>
							) : (
								<LoanTab>
									<CRAM />
									<AdditionalInfo />
								</LoanTab>
							),
					};
				})}
			/>
		</ConfigProvider>
	);
}

export default HomePage;
