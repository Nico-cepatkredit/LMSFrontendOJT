import { Flex, ConfigProvider } from 'antd';
// import LoanInformation from './LoanInformation/LoanInformation';
import { useLoanTab } from '@/global/context/LoanTabContext';
import BeneficiaryDetails from './BeneficiaryInformation/BeneficiaryDetails';
import OFWDetails from './OFWDetails/OFWDetails';
import LoanInformation from './LoanInformation/components/LoanInformation';

function CRAM(): React.ReactElement {
	const { visible } = useLoanTab();

	const isShowCRAM = visible.ofw || visible.employment || visible.credit || visible.assets || visible.character;
	return (
		<ConfigProvider
			theme={{
				token: {
					fontSize: 12,
				},
				components: {
					Descriptions: {
						labelBg: '#9B9BC2',
						colorTextLabel: '#ffffff',
						contentColor: '',
						colorBorder: 'green',
					},
					Table: {
						headerBg: '#9B9BC2',
						headerColor: '#ffffff',
						colorText: '#585899',
					},
					Pagination: {
						itemActiveColor: '#34B34A',
						itemActiveColorHover: '#585899',
						colorPrimary: '#585899',
					},
				},
			}}
		>
			<Flex vertical gap={10}>
				{visible.loan && <LoanInformation />}

				{isShowCRAM && <OFWDetails />}

				{visible.beneficiary && <BeneficiaryDetails />}
			</Flex>
		</ConfigProvider>
	);
}

export default CRAM;
