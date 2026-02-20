import type { DescriptionsProps } from 'antd';
import type { ILoanDetailsData } from '.';

export const buildLoanDetailsItems = (data: ILoanDetailsData): DescriptionsProps['items'] =>
	[
		{ label: 'Product', children: data.product },
		{ label: 'Type', children: data.type },
		{ label: 'Availed Amount', children: data.availedAmount },
		{ label: 'Availed Terms', children: data.availedTerms },
		{ label: 'Amount Financed', children: data.amountFinance },
		{ label: 'Interest Rate', children: data.interestRate },
		{ label: 'Previous PN Number', children: data.prevPNNumber },
		{ label: 'Charges Type', children: data.chargesType },
		{ label: 'Previous Balance', children: data.prevBalance },
		{ label: 'Grace Period', children: data.gracePeriod },
	].map((item, index) => ({ ...item, key: `loan-${index}` }));
