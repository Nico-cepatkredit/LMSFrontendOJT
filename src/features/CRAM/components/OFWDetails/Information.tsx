import { Card, Descriptions } from 'antd';
import { useSharedStyles } from '../../../../global/hooks/useSharedStyles';

function Information() {
	const { sharedLabelStyle, sharedContentStyle } = useSharedStyles();

	const ofwData = {
		firstName: 'MARY DEE',
		middleName: 'GALLARDO',
		lastName: 'ANDONG',
		suffix: 'N/A',
		birthdate: '05-08-1974',
		age: '51',
		gender: 'FEMALE',
		mobileNumber: 'PHL +63-9202608630',
		otherMobile: '',
		email: 'mariadee_andong@yahoo.com',
		fbProfile: 'https://www.facebook.com/mary',
		groupChat: 'https://www.facebook.com/messages/t/243625040507402',
		relationship: 'SPOUSE',
		religion: 'CATHOLIC',
		pep: 'NO',
		dependents: '2',
		maritalStatus: 'MARRIED',
		residenceType: 'OWNED HOUSE',
		spouseName: 'ANDONG NELSON ASPERA',
		spouseBirthdate: '07-19-1966',
		spouseIncomeSource: 'BUSINESS',
		spouseIncome: '20,000.00',
	};

	const items = [
		{ label: 'First Name', children: ofwData.firstName },
		{ label: 'Middle Name', children: ofwData.middleName },
		{ label: 'Last Name', children: ofwData.lastName },
		{ label: 'Suffix', children: ofwData.suffix },
		{ label: 'Birthdate', children: ofwData.birthdate },
		{ label: 'Age', children: ofwData.age },
		{ label: 'Gender', children: ofwData.gender },
		{ label: 'Mobile Number', children: ofwData.mobileNumber },
		{ label: 'Other Mobile Number', children: ofwData.otherMobile || 'N/A' },
		{ label: 'Email Address', children: ofwData.email },
		{ label: 'Facebook Name / Profile', children: ofwData.fbProfile },
		{ label: 'Group Chat', children: ofwData.groupChat },
		{ label: 'Relationship to Beneficiary', children: ofwData.relationship },
		{ label: 'Religion', children: ofwData.religion },
		{ label: 'PEP', children: ofwData.pep },
		{ label: 'Dependents', children: ofwData.dependents },
		{ label: 'Marital Status', children: ofwData.maritalStatus },
		{ label: 'Type of Residence', children: ofwData.residenceType },
		{ label: 'Spouse Name', children: ofwData.spouseName },
		{ label: 'Spouse Birthdate', children: ofwData.spouseBirthdate },
		{ label: 'Spouse Source of Income', children: ofwData.spouseIncomeSource },
		{ label: 'Spouse Income', children: `₱ ${ofwData.spouseIncome}` },
	].map((item, index) => ({ ...item, key: index }));

	return (
		<Card
			className="shadow-lg rounded-xl overflow-hidden"
			title={<span className="text-md font-semibold text-[#9B9BC2]">OFW Information</span>}
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
