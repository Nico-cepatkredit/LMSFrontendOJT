import { Card, Descriptions } from 'antd';
import { useSharedStyles } from '../../../../global/hooks/useSharedStyles';

function Information() {
	const { sharedLabelStyle, sharedContentStyle } = useSharedStyles();

	// Data extracted from image_f9838e.png
	const beneficiaryData = {
		firstName: 'NELSON',
		middleName: 'ASPERA',
		lastName: 'ANDONG',
		suffix: 'N/A',
		birthdate: '07-19-1966',
		age: '59',
		gender: 'MALE',
		email: 'nikkimaeandong08@gmail.com',
		mobile: '+639875408',
		otherNumber: 'N/A',
		fbProfile: 'HTTPS://WWW.FACEBOOK.COM/NELSON.ANDONG.5',
		relationship: 'SPOUSE',
		sourceOfIncome: 'BUSINESS',
		religion: 'CATHOLIC',
		formerOFW: 'NO',
		plansToGoAbroad: 'NO',
		pep: 'NO',
		dependents: '0',
		maritalStatus: 'MARRIED',
		spouseName: 'ANDONG MARY DEE GALLARDO',
		spouseBirthdate: '05-18-1974',
	};

	const items = [
		{ label: 'First Name', children: beneficiaryData.firstName },
		{ label: 'Middle Name', children: beneficiaryData.middleName },
		{ label: 'Last Name', children: beneficiaryData.lastName },
		{ label: 'Suffix', children: beneficiaryData.suffix },
		{ label: 'Birthdate', children: beneficiaryData.birthdate },
		{ label: 'Age', children: beneficiaryData.age },
		{ label: 'Gender', children: beneficiaryData.gender },
		{ label: 'Email Address', children: beneficiaryData.email },
		{ label: 'Mobile Number', children: beneficiaryData.mobile },
		{ label: 'Other Number', children: beneficiaryData.otherNumber },
		{ label: 'Facebook Name / Profile', children: beneficiaryData.fbProfile },
		{ label: 'Relationship to OFW', children: beneficiaryData.relationship },
		{ label: 'Source of Income', children: beneficiaryData.sourceOfIncome },
		{ label: 'Religion', children: beneficiaryData.religion },
		{ label: 'Former OFW (Overseas Filipino Worker)', children: beneficiaryData.formerOFW },
		{ label: 'Plans to go Abroad', children: beneficiaryData.plansToGoAbroad },
		{ label: 'PEP', children: beneficiaryData.pep },
		{ label: 'Dependents', children: beneficiaryData.dependents },
		{ label: 'Marital Status', children: beneficiaryData.maritalStatus },
		{ label: 'Spouse Name', children: beneficiaryData.spouseName },
		{ label: 'Spouse Birthdate', children: beneficiaryData.spouseBirthdate },
	].map((item, index) => ({ ...item, key: `ben-${index}` }));

	return (
		<Card
			className="shadow-lg rounded-xl overflow-hidden"
			title={<span className="text-md font-semibold text-[#9B9BC2]">Beneficiary Information</span>}
		>
			<Descriptions
				className="fixed-descriptions"
				bordered
				items={items}
				layout={'vertical'}
				column={{ xxl: 5, xl: 3, lg: 3, md: 2, sm: 1, xs: 1 }}
				styles={{
					label: sharedLabelStyle,
					content: sharedContentStyle,
				}}
			/>
		</Card>
	);
}

export default Information;
