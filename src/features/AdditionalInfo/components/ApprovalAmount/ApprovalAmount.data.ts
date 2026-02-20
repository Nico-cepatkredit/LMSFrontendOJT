import type { DescriptionsProps } from 'antd';
import type { IApprovalAmountData } from './indext';

export const buildApprovalAmountItems = (data: IApprovalAmountData): DescriptionsProps['items'] =>
	[
		{ label: 'Approved Amount', children: data.amount },
		{ label: 'Approved Interest Rate', children: data.interestRate },
		{ label: 'Approved Terms', children: data.terms },
		{ label: 'Monthly Amortization', children: data.monthlyAmortization },
		{ label: 'Other Exposure', children: data.otherExposure },
		{ label: 'Total Exposure', children: data.totalExposure },
		{ label: 'Encoded By', children: data.encodedBy },
		{ label: 'Encoded Date', children: data.encodedDate },
		{ label: 'Approved By', children: data.approvedBy },
		{ label: 'Approved Date', children: data.approvedDate },
	].map((item, index) => ({ ...item, key: `approval-${index}` }));
