import React, { useEffect, useState } from 'react';
import { Grid } from 'antd';
import { Layout, theme } from 'antd';
import { Outlet, useLocation } from 'react-router-dom';
import type { ITab } from '.';
import Header from './Header';
import SideNav from './SideNav';
import { statusIconMap } from '@/global/constants/StatusIconLayoutConst';

const { Content } = Layout;

const { useBreakpoint } = Grid;

function HomePageLayout(): React.ReactElement {
	const [collapsed, setCollapsed] = useState(false);
	const [tabs, setTabs] = useState<ITab[]>([]);
	const [activeTab, setActiveTab] = useState<string>();
	const { pathname } = useLocation();
	const screen = useBreakpoint();

	const isMobile = !screen.md;
	const {
		token: { colorBgContainer, borderRadiusLG },
	} = theme.useToken();

	useEffect(() => {
		const parts = pathname.split('/');

		if (parts.includes('status')) {
			const status = parts.at(-1)!;
			const key = `status:${status}`;

			setTabs((prev) =>
				prev.some((t) => t.key === key) ? prev : [...prev, { key, status: status, type: 'status' }],
			);
			setActiveTab(key);
		}

		if (parts.includes('loan')) {
			const loanIndex = parts.indexOf('loan');
			const status = parts[loanIndex + 1];
			const loanNumber = parts[loanIndex + 2];
			const pnNumber = parts.length > loanIndex + 3 ? parts[loanIndex + 3] : undefined;

			const key = pnNumber ? `loan:${status}:${loanNumber}:${pnNumber}` : `loan:${status}:${loanNumber}`;

			setTabs((prev) =>
				prev.some((t) => t.key === key)
					? prev
					: [
							...prev,
							{
								key,
								status,
								loanNumber,
								pnNumber,
								type: 'loan',
								icon: statusIconMap[status],
							},
						],
			);

			setActiveTab(key);
		}

		if (isMobile) {
			setCollapsed(true);
		}
	}, [pathname]);
	return (
		<Layout className="relative min-h-screen!">
			<Header collapsed={collapsed} setCollapsed={setCollapsed} />

			<Layout className="">
				<SideNav
					collapsed={collapsed}
					setCollapsed={setCollapsed}
					setTabs={setTabs}
					setActiveTab={setActiveTab}
					colorBgContainer={colorBgContainer}
				/>

				{/* main */}
				<Content
					style={{
						padding: 24,
						margin: isMobile ? '0px' : '15px 24px',
						minHeight: 'auto',
						background: colorBgContainer,
						borderRadius: borderRadiusLG,
					}}
				>
					<Outlet context={{ tabs, activeTab, setActiveTab, setTabs }} />
				</Content>
			</Layout>
		</Layout>
	);
}

export default HomePageLayout;
