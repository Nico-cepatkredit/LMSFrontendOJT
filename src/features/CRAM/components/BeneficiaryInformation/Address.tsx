import { Card, Descriptions } from 'antd';
import { useSharedStyles } from '../../../../global/hooks/useSharedStyles';

const addressData = {
	province: 'Capiz',
	city: 'Roxas City',
	barangay: 'Mongpong',
	street: 'LA FRONTERA SUBDIVISION',
	lengthOfStay: '16 Year(s)',
	landmark: 'BRGY HALL',
	billingRemarks: 'POB UNDER THE NAME OF CB',
	residenceType: 'OWNED HOUSE',
};

const addressItems = [
	{ label: 'Present Area / Province', children: addressData.province },
	{ label: 'Present City / Municipality', children: addressData.city },
	{ label: 'Present Barangay', children: addressData.barangay },
	{ label: 'Present Street', children: addressData.street, span: { xs: 1, sm: 1, md: 2, lg: 2, xl: 2, xxl: 2 } },
	{ label: 'Length of Stay', children: addressData.lengthOfStay },
	{ label: 'Landmark', children: addressData.landmark },
	{
		label: 'Proof of Billing Remarks',
		children: addressData.billingRemarks,
		span: { xs: 1, sm: 1, md: 2, lg: 2, xl: 2, xxl: 2 },
	},
	{ label: 'Type of Residence', children: addressData.residenceType },
].map((item, index) => ({ ...item, key: `ben-a-${index}` }));

function Address() {
	const { sharedLabelStyle, sharedContentStyle } = useSharedStyles();

	return (
		<Card
			className="shadow-lg rounded-xl overflow-hidden"
			title={<span className="text-md font-semibold text-[#9B9BC2]">Beneficiary Address Information</span>}
		>
			<Descriptions
				className="fixed-descriptions"
				bordered
				items={addressItems}
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

export default Address;
