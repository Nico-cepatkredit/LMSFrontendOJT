import { Card, Descriptions, Space, Typography } from 'antd';
import { FileTextOutlined } from '@ant-design/icons';
import { useSharedStyles } from '@global/hooks/useSharedStyles';
// import { LoanInfoData } from './loanDescriptions.data';
import { useLoanTab } from '@/global/context/LoanTabContext';
import { useGetLoanAppDetails } from '../hooks/LoanInformationQuery';
import type { ITabContext } from '@/pages';
import { useOutletContext } from 'react-router-dom';
import { _LoanInfoData } from '../utils/LoanInformation.utils';

const { Title, Text } = Typography;

function LoanInformation() {
	const { sharedLabelStyle, sharedContentStyle } = useSharedStyles();
	const { sectionRefs } = useLoanTab();
	const { tabs, activeTab } = useOutletContext<ITabContext>();
	const activeTabData = tabs.find((tab) => tab.key === activeTab)!;

	// const status = activeTabData?.status || '';
	// const loanNumber = activeTabData?.loanNumber || '';
	// const pnNumber = activeTabData?.pnNumber || '';

	const { status, loanNumber, pnNumber } = activeTabData;
	const { data, isLoading, isFetching } = useGetLoanAppDetails({
		status,
		loanAppCode: loanNumber,
		pnNumber,
		enabled: !!activeTabData && activeTabData.type === 'loan',
	});

	const loanData = data ? _LoanInfoData(data) : [];

	return (
		<Card
			ref={sectionRefs.loan}
			loading={isLoading || isFetching}
			className="shadow-lg rounded-xl overflow-hidden scroll-mt-36"
			title={
				<Space className="text-[#585899]!">
					<FileTextOutlined />
					<span className="text-lg font-bold">Loan Application Details</span>
				</Space>
			}
		>
			{/* Details Grid */}
			<Descriptions
				className="fixed-descriptions"
				bordered
				items={loanData}
				layout={'vertical'}
				column={{ xxl: 5, xl: 3, lg: 3, md: 2, sm: 1, xs: 1 }}
				styles={{
					label: sharedLabelStyle,
					content: sharedContentStyle,
				}}
			/>

			<div className="mt-8 p-4 bg-violet-50 border-l-5 border-[#34B34A] rounded-md">
				<Title level={5} className="mb-2!">
					CRA Remarks
				</Title>
				<Text className="text-gray-700 italic leading-relaxed text-xs!">{data?.craRemarks}</Text>
			</div>
		</Card>
	);
}

export default LoanInformation;
