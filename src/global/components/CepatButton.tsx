import { Button, ConfigProvider, type ButtonProps } from 'antd';

function CepatButton(props: ButtonProps) {
	return (
		<ConfigProvider
			theme={{
				components: {
					Button: {
						colorText: '#FFFFFF',
					},
				},
			}}
		>
			<Button {...props} />
		</ConfigProvider>
	);
}

export default CepatButton;
