import { Card, Descriptions, Typography } from 'antd';
import { useSharedStyles } from '../../../../global/hooks/useSharedStyles';
import { buildApprovalAmountItems } from './ApprovalAmount.data';

const { Title, Text } = Typography;

function ApprovalAmount() {
	const { sharedLabelStyle, sharedContentStyle } = useSharedStyles();

	const approvalData = {
		amount: '50,000.00',
		interestRate: '2.5',
		terms: '12 months',
		monthlyAmortization: '5,416.67',
		otherExposure: '0.00',
		totalExposure: '50,000.00',
		remarks: '929.00 USD NET SALARY. PARENT AS CB. WITH MOTOR AMORT. NEW ACCT. OK FOR CHECK PREP.',
		encodedBy: 'Lyza Legaspi',
		encodedDate: '07-26-2025',
		approvedBy: 'Lyza Legaspi',
		approvedDate: '07-26-2025',
	};

	const approvalItems = buildApprovalAmountItems(approvalData);

	return (
		<Card
			className="shadow-lg rounded-xl overflow-hidden"
			title={<span className="text-md font-semibold text-[#9B9BC2]">Approval Amount</span>}
		>
			<Descriptions
				className="fixed-descriptions"
				bordered
				items={approvalItems}
				layout={'vertical'}
				column={{ xxl: 5, xl: 5, lg: 3, md: 2, sm: 1, xs: 1 }}
				styles={{
					label: sharedLabelStyle,
					content: sharedContentStyle,
				}}
			/>

			<div className="mt-8 p-4 bg-violet-50 border-l-5 border-[#34B34A] rounded-md">
				<Title level={5} className="mb-2!">
					CRA Remarks
				</Title>
				<Text className="text-gray-700 italic leading-relaxed text-xs!">{approvalData.remarks}</Text>
			</div>
		</Card>
	);
}

export default ApprovalAmount;
