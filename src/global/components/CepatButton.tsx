import { Button, ConfigProvider, Tooltip, type ButtonProps } from 'antd';

interface CepatButtonProps extends ButtonProps {
	tooltip?: string;
	buttonText?: string;
}

function CepatButton({ tooltip, buttonText, ...props }: CepatButtonProps) {
	const buttonNode = <Button {...props}>{buttonText}</Button>;

	return (
		<ConfigProvider
			theme={{
				components: {
					Button: {
						colorText: '#585899',
					},
					Tooltip: {
						colorBgSpotlight: '#585899',
					},
				},
			}}
		>
			{tooltip ? (
				<Tooltip title={tooltip} placement="topLeft">
					<>{buttonNode}</>
				</Tooltip>
			) : (
				buttonNode
			)}
		</ConfigProvider>
	);
}

export default CepatButton;
