import type { AddressData } from '.';

export const buildAddressDescriptions = (data: AddressData) => ({
	present: [
		{ key: 'presentProvince', label: 'Present Area / Province', children: data.presentProvince },
		{ key: 'presentCity', label: 'Present City / Municipality', children: data.presentCity },
		{ key: 'presentBarangay', label: 'Present Barangay', children: data.presentBarangay },
		{
			key: 'presentStreet',
			label: 'Present Street',
			children: data.presentStreet,
			span: { xs: 1, sm: 1, md: 2, lg: 2, xl: 2, xxl: 2 },
		},
		{ key: 'landmark', label: 'Landmark', children: data.landmark },
		{ key: 'billingRemarks', label: 'Proof of Billing Remarks', children: data.billingRemarks },
		{ key: 'lengthOfStay', label: 'Length of Stay', children: data.lengthOfStay },
		{ key: 'collectionArea', label: 'Collection Area', children: data.collectionArea },
	],

	permanent: [
		{ key: 'permanentProvince', label: 'Permanent Area / Province', children: data.permanentProvince },
		{ key: 'permanentCity', label: 'Permanent City / Municipality', children: data.permanentCity },
		{ key: 'permanentBarangay', label: 'Permanent Barangay', children: data.permanentBarangay },
		{
			key: 'permanentStreet',
			label: 'Permanent Street',
			children: data.permanentStreet,
			span: { xs: 1, sm: 1, md: 2, lg: 2, xl: 2, xxl: 2 },
		},
	],

	provincial: [
		{ key: 'provincialProvince', label: 'Provincial Area / Province', children: data.provincialProvince },
		{ key: 'provincialCity', label: 'Provincial City / Municipality', children: data.provincialCity },
		{ key: 'provincialBarangay', label: 'Provincial Barangay', children: data.provincialBarangay },
		{
			key: 'provincialStreet',
			label: 'Provincial Street',
			children: data.provincialStreet,
			span: { xs: 1, sm: 1, md: 2, lg: 2, xl: 2, xxl: 2 },
		},
	],
});
