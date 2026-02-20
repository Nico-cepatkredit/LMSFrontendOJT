import { Card, Descriptions, Divider, Grid } from 'antd';
import { useSharedStyles } from '../../../../../global/hooks/useSharedStyles';
import { buildAddressDescriptions } from './address.data';

const { useBreakpoint } = Grid;

function Address() {
	const screen = useBreakpoint();
	const { sharedLabelStyle, sharedContentStyle } = useSharedStyles();

	const addressData = {
		presentProvince: 'Misamis Oriental',
		presentCity: 'El Salvador City',
		presentBarangay: 'Kibonbon',
		presentStreet: 'ZONE 2',
		landmark: 'ANGEL GRACE STORE',
		billingRemarks: 'PB AND CB FATHER',
		lengthOfStay: '35 Year(s)',
		collectionArea: 'Misamis Oriental',
		permanentProvince: 'Misamis Oriental',
		permanentCity: 'El Salvador City',
		permanentBarangay: 'Kibonbon',
		permanentStreet: 'ZONE 2',
		provincialProvince: 'Misamis Oriental',
		provincialCity: 'El Salvador City',
		provincialBarangay: 'Kibonbon',
		provincialStreet: 'ZONE 2',
	};

	const { present, permanent, provincial } = buildAddressDescriptions(addressData);

	return (
		<Card
			className="shadow-lg rounded-xl overflow-hidden"
			title={<span className="text-md font-semibold text-[#9B9BC2]">OFW Address</span>}
		>
			<Divider titlePlacement={screen.sm ? 'start' : 'center'} className="border-[#9B9BC2]/30! text-[#9B9BC2]!">
				Present Address
			</Divider>

			<Descriptions
				className="fixed-descriptions"
				bordered
				items={present}
				layout={'vertical'}
				column={{ xxl: 4, xl: 3, lg: 3, md: 2, sm: 1, xs: 1 }}
				styles={{
					label: sharedLabelStyle,
					content: sharedContentStyle,
				}}
			/>

			<Divider
				titlePlacement={screen.sm ? 'start' : 'center'}
				className="border-[#9B9BC2]/30! text-[#9B9BC2]! mt-10!"
			>
				Permanent Address
			</Divider>

			<Descriptions
				className="fixed-descriptions"
				bordered
				items={permanent}
				layout={'vertical'}
				column={{ xxl: 4, xl: 3, lg: 3, md: 2, sm: 1, xs: 1 }}
				styles={{
					label: sharedLabelStyle,
					content: sharedContentStyle,
				}}
			/>

			<Divider
				titlePlacement={screen.sm ? 'start' : 'center'}
				className="border-[#9B9BC2]/30! text-[#9B9BC2]! mt-10!"
			>
				Provincial Address
			</Divider>

			<Descriptions
				className="fixed-descriptions"
				bordered
				items={provincial}
				layout={'vertical'}
				column={{ xxl: 4, xl: 3, lg: 3, md: 2, sm: 1, xs: 1 }}
				styles={{
					label: sharedLabelStyle,
					content: sharedContentStyle,
				}}
			/>
		</Card>
	);
}

export default Address;
