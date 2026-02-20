import { Card, ConfigProvider, Descriptions, Space, Typography, Grid } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import type { CSSProperties } from 'react';

/**
 * Shared Styles for Descriptions components
 */
export const sharedLabelStyle: CSSProperties = {
	color: '#ffffff',
	fontWeight: '700',
	fontSize: '11px',
	textTransform: 'uppercase',
	letterSpacing: '0.05em',
	textAlign: 'center',
	padding: '12px 16px',
	width: '20px',
};

/**
 * Shared Content Styles
 * FIXED: Removed maxWidth: 0 which caused the "single vertical line" collapse.
 * Added width: 100% and display: block to ensure text fills the cell and wraps left.
 */
export const sharedContentStyle: CSSProperties = {
	padding: '12px 16px',
	fontSize: '12px',
	fontWeight: '600',
	color: '#585899',
	background: '#ffffff',

	// ALIGNMENT: Start both first and wrapped lines at the same left side
	textAlign: 'left',
	// minWidth: '300px',

	// WRAPPING & FIXING COLLAPSE:
	display: 'block',
	width: '100%', // Ensures the content expands to the cell width
	whiteSpace: 'normal', // Allows wrapping
	wordBreak: 'break-word', // Breaks long words/URLs
	overflowWrap: 'anywhere', // Ensures nothing leaks out
};

const OFWInformation = () => {

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
		fbProfile:
			'https://www.facebook.com/mary.dee.andong.very.long.url.that.will.now.wrap.to.the.left.side.consistently',
		groupChat: 'https://www.facebook.com/messages/t/243625040507402/ref=share_link_update_v6',
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
		<ConfigProvider
			theme={{
				components: {
					Descriptions: {
						labelBg: '#9B9BC2',
						colorTextLabel: '#ffffff',
						colorBorderSecondary: '#e2e8f0',
					},
				},
			}}
		>
			<Card
				className="max-w-1000 shadow-lg rounded-xl overflow-hidden"
				title={
					<Space className="text-[#585899]">
						<UserOutlined />
						<span className="text-lg font-bold">OFW Information</span>
					</Space>
				}
			>
				<Descriptions
					bordered
					items={items}
					layout="vertical"
					// Ensure 5 columns are maintained
					column={{ xxl: 5, xl: 5, lg: 5, md: 3, sm: 2, xs: 1 }}
					style={{
						tableLayout: 'fixed', // Forces equal column widths
						width: '100%',
					}}
					// styles.content applies to the internal AntD span
					styles={{
						label: sharedLabelStyle,
						content: sharedContentStyle,
					}}
				/>
			</Card>
		</ConfigProvider>
	);
};

export default function App() {
	return <OFWInformation />;
}
