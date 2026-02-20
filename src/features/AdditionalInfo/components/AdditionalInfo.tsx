import React from 'react';
import ApprovalAmount from './ApprovalAmount/ApprovalAmount';
import { SafetyCertificateOutlined } from '@ant-design/icons';
import { Card, ConfigProvider, Flex, Space } from 'antd';
import LoanDetails from './LoanDetails/LoanAmountDetails';
import LoanCharges from './LoanCharges/LoanCharges';
import LCCommissions from './LCCommissions/LCCommissions';
import LoanAmortization from './LoanAmortization/LoanAmortization';
import { useLoanTab } from '@/global/context/LoanTabContext';

// TODO: use this as parent component. Modularize if needed.
function AdditionalInfo(): React.ReactElement {
	const { visible, sectionRefs } = useLoanTab();

	const isShowAdditionalInfo =
		visible.approvalAmount ||
		visible.loanAmount ||
		visible.loanCharges ||
		visible.lcCommission ||
		visible.loanAmortization;

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
						footerColor: '#585899',
					},
					Pagination: {
						itemActiveColor: '#34B34A',
						itemActiveColorHover: '#585899',
						colorPrimary: '#585899',
					},
					Tooltip: {
						colorBgSpotlight: '#585899',
					},
				},
			}}
		>
			{isShowAdditionalInfo && (
				<Card
					ref={sectionRefs.approvalAmount}
					className="shadow-lg rounded-xl overflow-hidden scroll-mt-36"
					title={
						<Space className="text-[#585899]!">
							<SafetyCertificateOutlined />
							<span className="text-lg font-bold">Other Details</span>
						</Space>
					}
				>
					<Flex vertical gap={10}>
						{visible.approvalAmount && <ApprovalAmount />}
						{visible.loanAmount && <LoanDetails />}
						{visible.loanCharges && <LoanCharges />}
						{visible.lcCommission && <LCCommissions />}
						{visible.loanAmortization && <LoanAmortization />}
					</Flex>
				</Card>
			)}
		</ConfigProvider>
	);
}

export default AdditionalInfo;
