import { ConfigProvider, Menu } from 'antd';
import type { MenuProps } from 'antd';

function CepatMenu(props: MenuProps): React.ReactElement {
	return (
		<ConfigProvider
			theme={{
				components: {
					Menu: {
						itemSelectedColor: '#34B34A',
						itemSelectedBg: '#ECECFA',
						subMenuItemSelectedColor: '#34B34A',
						itemHoverColor: '#34B34A',
						itemColor: '#585899',
						itemHoverBg: '#F5F3FF',
					},
					Tooltip: {
						colorBgSpotlight: '#585899',
					},
				},
			}}
		>
			<Menu {...props} />
		</ConfigProvider>
	);
}

export default CepatMenu;
