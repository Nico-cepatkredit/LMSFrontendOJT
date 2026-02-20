import { Card, Table } from 'antd';
import { LoanAmortizationColumns } from './LoanAmortizationColumn';
import { useLoanTab } from '@/global/context/LoanTabContext';

function LoanAmortization() {
	const { sectionRefs } = useLoanTab();

	const loanAmortizationData = {
		data: {
			loanAmount: 45000,
			terms: 12,
			monthlyEIR: 0.04,
			totalInterest: 13500,
			loanAmortization: [
				{
					term: null,
					amortization: null,
					interestAmount: null,
					principal: null,
					outstandingPrincipal: 45000,
					outstandingReceivables: 58500,
				},
				{
					term: 1,
					amortization: 4875,
					interestAmount: 1929.1,
					principal: 2945.9,
					outstandingPrincipal: 42054.1,
					outstandingReceivables: 53625,
				},
				{
					term: 2,
					amortization: 4875,
					interestAmount: 1802.81,
					principal: 3072.19,
					outstandingPrincipal: 38981.91,
					outstandingReceivables: 48750,
				},
				{
					term: 3,
					amortization: 4875,
					interestAmount: 1671.11,
					principal: 3203.89,
					outstandingPrincipal: 35778.02,
					outstandingReceivables: 43875,
				},
				{
					term: 4,
					amortization: 4875,
					interestAmount: 1533.76,
					principal: 3341.24,
					outstandingPrincipal: 32436.78,
					outstandingReceivables: 39000,
				},
				{
					term: 5,
					amortization: 4875,
					interestAmount: 1390.53,
					principal: 3484.47,
					outstandingPrincipal: 28952.31,
					outstandingReceivables: 34125,
				},
				{
					term: 6,
					amortization: 4875,
					interestAmount: 1241.15,
					principal: 3633.85,
					outstandingPrincipal: 25318.46,
					outstandingReceivables: 29250,
				},
				{
					term: 7,
					amortization: 4875,
					interestAmount: 1085.37,
					principal: 3789.63,
					outstandingPrincipal: 21528.83,
					outstandingReceivables: 24375,
				},
				{
					term: 8,
					amortization: 4875,
					interestAmount: 922.92,
					principal: 3952.08,
					outstandingPrincipal: 17576.75,
					outstandingReceivables: 19500,
				},
				{
					term: 9,
					amortization: 4875,
					interestAmount: 753.49,
					principal: 4121.51,
					outstandingPrincipal: 13455.24,
					outstandingReceivables: 14625,
				},
				{
					term: 10,
					amortization: 4875,
					interestAmount: 576.81,
					principal: 4298.19,
					outstandingPrincipal: 9157.05,
					outstandingReceivables: 9750,
				},
				{
					term: 11,
					amortization: 4875,
					interestAmount: 392.55,
					principal: 4482.45,
					outstandingPrincipal: 4674.61,
					outstandingReceivables: 4875,
				},
				{
					term: 12,
					amortization: 4875,
					interestAmount: 200.39,
					principal: 4674.61,
					outstandingPrincipal: 0,
					outstandingReceivables: 0,
				},
			],
		},
	};
	return (
		<Card
			ref={sectionRefs.loanAmortization}
			className="shadow-lg rounded-xl scroll-mt-36"
			title={<span className="text-md font-semibold text-[#9B9BC2]">Loan Amortization</span>}
		>
			<Table
				rowKey={(record) => record.term ?? 'opening'}
				bordered
				dataSource={loanAmortizationData.data.loanAmortization}
				columns={LoanAmortizationColumns}
				scroll={{ x: 800 }}
				pagination={{ hideOnSinglePage: true }}
			/>
		</Card>
	);
}

export default LoanAmortization;
