import type { DescriptionsProps } from 'antd';
import type { ILoanData } from '..';

export const _LoanInfoData = (data: ILoanData): DescriptionsProps['items'] => [
	{
		key: 'loanAppCode',
		label: 'Loan Application ID',
		children: data.loanAppCode,
	},
	{
		key: 'applicationDate',
		label: 'Date of Application',
		children: data.dateOfApplication,
	},
	{
		key: 'loanProduct',
		label: 'Loan Product',
		children: data.productId,
	},
	{
		key: 'departureDate',
		label: 'OFW Departure Date',
		children: data.departureDate,
	},
	{
		key: 'branch',
		label: 'Assigned Branch',
		children: data.branch,
	},
	{
		key: 'loanType',
		label: 'Loan Application Type',
		children: data.loanTypeId,
	},
	{
		key: 'loanPurpose',
		label: 'Loan Purpose',
		children: data.loanPurpose,
	},
	{
		key: 'amount',
		label: 'Loan Amount',
		children: data.amount,
	},
	{
		key: 'approvedAmount',
		label: 'Approved Amount',
		children: data.approvedAmount,
	},
	{
		key: 'approvedTerms',
		label: 'Approved Loan Terms',
		children: data.approvedTerms,
	},
	{
		key: 'craRecommendation',
		label: 'CRA Recommendation',
		children: data.craRecommendation,
	},
	{
		key: 'referralSource',
		label: 'Referral Source',
		children: data.origin,
	},
	{
		key: 'consultantName',
		label: 'Loan Consultant',
		children: data.lcName,
	},
	{
		key: 'consultantPhone',
		label: 'Loan Consultant Number',
		children: data.lcMobileNumber,
	},
	{
		key: 'consultantProfile',
		label: 'Consultant FB / Profile',
		children: data.lcSocialMedia,
	},
];
