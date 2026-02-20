import { Grid } from 'antd';

const { useBreakpoint } = Grid;

export const useSharedStyles = () => {
	const screens = useBreakpoint();
	const isMobile = !screens.sm; // md and up = desktop

	return {
		sharedLabelStyle: {
			display: 'flex', // Change from inline-block to flex for easier alignment
			justifyContent: isMobile ? 'center' : 'start',
			color: '#ffffff',
			fontWeight: '700',
			fontSize: '11px',
			textTransform: 'uppercase',
			letterSpacing: '0.05em',
			width: '100%',
			// padding: isMobile ? '0px' : '1px 16px',
			// justifyContent,
		},
		sharedContentStyle: {
			display: 'inline-block',
			padding: isMobile ? '0px' : '3px 5px',
			fontSize: '12px',
			fontWeight: '450',
			color: '#585899',

			// textAlign: 'center',
		},
		sharedButtonClasses:
			'text-[#9B9BC2]! hover:text-[#34B34A]! border-[#9B9BC2]! hover:border-[#34B34A]! border transition-all duration-300',
	};
};
