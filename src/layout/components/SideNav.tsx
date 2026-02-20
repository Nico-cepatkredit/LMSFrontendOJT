import CepatMenu from '@/global/components/CepatMenu';
import { Grid, Layout, type MenuProps } from 'antd';
import type { ITab } from '.';
import { useNavigate } from 'react-router-dom';
import type { ISideNav } from '.';
import { statusIconMap } from '@/global/constants/StatusIconLayoutConst';
import { useGetStatusCount } from '../hooks/SideNavQuery';

const { useBreakpoint } = Grid;

const { Sider } = Layout;

function SideNav({ collapsed, colorBgContainer, setTabs, setActiveTab }: ISideNav) {
	const screens = useBreakpoint();
	const navigate = useNavigate();

	const { data = [] } = useGetStatusCount();

	const items2: MenuProps['items'] = data.map((item) => {
		const Icon = statusIconMap[item.status];

		return {
			key: item.status,
			icon: Icon ? <Icon /> : null,
			label: (
				<span className="flex justify-between gap-2">
					<span className="font-semibold">{item.status}</span>
					<span className="font-semibold">{item.total}</span>
				</span>
			),
		};
	});

	return (
		<>
			{screens.md ? (
				<Sider
					trigger={null}
					collapsible
					collapsed={collapsed}
					width={200}
					style={{ background: colorBgContainer }}
				>
					<CepatMenu
						mode="inline"
						defaultSelectedKeys={['1']}
						defaultOpenKeys={['sub1']}
						style={{ height: '100%', borderInlineEnd: 0, position: 'sticky', top: 10 }}
						items={items2}
						onClick={({ key }) => {
							const tabKey = `status:${key}`;

							setTabs((prev: ITab[]) =>
								prev.some((t) => t.key === tabKey)
									? prev
									: [...prev, { key: tabKey, status: key, type: 'status' }],
							);

							setActiveTab(tabKey);
							navigate(`/home/status/${key}`);
						}}
					/>
				</Sider>
			) : (
				<div
					className={`fixed w-full z-100 overflow-hidden transition-all duration-200 ease-in-out
						${collapsed ? 'max-h-0  pointer-events-none' : 'max-h-screen pointer-events-auto'}'}`}
				>
					<CepatMenu
						mode="inline"
						defaultSelectedKeys={['1']}
						defaultOpenKeys={['sub1']}
						items={items2}
						onClick={({ key }) => {
							const tabKey = `status:${key}`;

							setTabs((prev) =>
								prev.some((t) => t.key === tabKey)
									? prev
									: [...prev, { key: tabKey, status: key, type: 'status' }],
							);

							setActiveTab(tabKey);
							navigate(`/home/status/${key}`);
						}}
					/>
				</div>
			)}
		</>
	);
}

export default SideNav;
