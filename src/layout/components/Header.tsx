import CepatButton from '@/global/components/CepatButton';
import { UserOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Avatar, Input, Layout } from 'antd';
import Logo from '@/assets/Nexus_v3a.png';
import type { IHeader } from '.';

function Header({ collapsed, setCollapsed }: IHeader): React.ReactElement {
	const { Header } = Layout;
	const { Search } = Input;
	return (
		<>
			<Header className="sticky top-0 flex items-center justify-between bg-[#585899]! px-1! z-100">
				<div className="flex items-center">
					<img src={Logo} alt="logo" className="h-[2em] md:h-[3em]" />
					<CepatButton
						type="text"
						className="text-violet-50! hover:text-[#34B34A]!"
						icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
						onClick={() => setCollapsed(!collapsed)}
						style={{
							fontSize: '16px',
							width: 64,
							height: 64,
						}}
					/>
					<Search
						placeholder="input search text"
						enterButton
						classNames={{
							root: 'md:!w-[400px]',
							button: {
								root: '!bg-[#34B34A]',
							},
						}}
					/>
				</div>
				<div className="mx-2">
					<Avatar
						className="hover:text-[#34B34A]!"
						size={{ xs: 40, sm: 40, md: 45, lg: 45, xl: 45, xxl: 45 }}
						icon={<UserOutlined />}
					/>
				</div>
			</Header>
		</>
	);
}

export default Header;
