import { Card, Descriptions } from 'antd';
import { useSharedStyles } from '../../../../global/hooks/useSharedStyles';

function Other() {
	const { sharedLabelStyle, sharedContentStyle } = useSharedStyles();

	const otherData = {
		validIdType: 'SSS',
		idNumber: '011155202888/ TIN FORGOTTEN',
		countryEmployment: 'TAIWAN',
		jobCategory: 'HOUSEHOLD HELPERS',
		position: 'DOMESTIC HELPER',
		principalEmployer: 'YU-CHEN JHU',
		agency: 'REHIRED',
		foreignCurrency: 'TAIWAN DOLLAR',
		salaryForeign: '20,000.00 TWD',
		salaryPeso: '₱ 34,000.00',
		contractDate: '10-25-2022',
		contractDuration: '36',
		departureDate: '05-09-2025',
		unlimitedContract: 'NO',
		yearsOfw: '4',
		beneficiaryName: 'GILBOY, ALFREDO JUAQUIN',
		remittanceAmount: '₱ 15,000.00',
		remittanceChannel: 'REMITTANCE CENTER (WHICH INCLUDES LBC, MLHUILLIER ETC)',
	};

	const items = [
		{ label: 'Valid ID Type', children: otherData.validIdType },
		{ label: 'ID Number', children: otherData.idNumber },
		{ label: 'Country of Employment', children: otherData.countryEmployment },
		{ label: 'Job Category', children: otherData.jobCategory },
		{ label: 'Position', children: otherData.position },
		{ label: 'Principal Employer', children: otherData.principalEmployer },
		{ label: 'Agency', children: otherData.agency },
		{ label: 'Foreign Currency', children: otherData.foreignCurrency },
		{ label: 'Salary in Foreign Currency', children: otherData.salaryForeign },
		{ label: 'Salary in Peso', children: otherData.salaryPeso },
		{ label: 'Contract Date', children: otherData.contractDate },
		{ label: 'Contract Duration', children: otherData.contractDuration },
		{ label: 'Departure Date', children: otherData.departureDate },
		{ label: 'Unlimited Contract', children: otherData.unlimitedContract },
		{ label: 'Years as OFW or Seafarer', children: otherData.yearsOfw },
		{ label: 'Beneficiary or Allotment Name', children: otherData.beneficiaryName },
		{ label: 'Remittance or Allotment Amount', children: otherData.remittanceAmount },
		{ label: 'Remittance / Allotment Channel', children: otherData.remittanceChannel },
	].map((item, index) => ({ ...item, key: index }));

	return (
		<Card
			className="shadow-lg rounded-xl overflow-hidden"
			title={<span className="text-md font-semibold text-[#9B9BC2]">Other Information</span>}
		>
			<Descriptions
				className="fixed-descriptions"
				bordered
				items={items}
				layout={'vertical'}
				column={{ xxl: 5, xl: 4, lg: 3, md: 2, sm: 1, xs: 1 }}
				styles={{
					label: sharedLabelStyle,
					content: sharedContentStyle,
				}}
			/>
		</Card>
	);
}

export default Other;
