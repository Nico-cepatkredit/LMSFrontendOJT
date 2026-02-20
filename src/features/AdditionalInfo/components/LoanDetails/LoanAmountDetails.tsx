import { Card, Descriptions } from 'antd';
import { useSharedStyles } from '../../../../global/hooks/useSharedStyles';
import { buildLoanDetailsItems } from './LoanAmountDetails.data';
import { useLoanTab } from '@/global/context/LoanTabContext';

function LoanDetails() {
	const { sharedLabelStyle, sharedContentStyle } = useSharedStyles();
	const { sectionRefs } = useLoanTab();

	const loanAmountData = {
		product: 'OFW Loan - Abroad',
		type: 'NEW',
		availedAmount: '45,000.00',
		availedTerms: '12',
		amountFinance: '45,000.00',
		interestRate: '2.5%',
		prevPNNumber: 'N/A',
		chargesType: 'LTP',
		prevBalance: '0.00',
		gracePeriod: 'NO',
	};

	const loanDetailsItem = buildLoanDetailsItems(loanAmountData);

	return (
		<Card
			ref={sectionRefs.loanAmount}
			className="shadow-lg rounded-xl overflow-hidden scroll-mt-36"
			title={<span className="text-md font-semibold text-[#9B9BC2]">Loan Amount Details</span>}
		>
			<Descriptions
				className="fixed-descriptions"
				bordered
				items={loanDetailsItem}
				layout={'vertical'}
				column={{ xxl: 5, xl: 5, lg: 4, md: 2, sm: 1, xs: 1 }}
				styles={{
					label: sharedLabelStyle,
					content: sharedContentStyle,
				}}
			/>
		</Card>
	);
}

export default LoanDetails;
