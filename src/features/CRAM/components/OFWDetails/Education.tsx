import { Card, Descriptions } from 'antd';
import { useSharedStyles } from '../../../../global/hooks/useSharedStyles';

function Education() {
	const { sharedLabelStyle, sharedContentStyle } = useSharedStyles();

	const educationData = {
		attainment: 'COLLEGE',
		course: 'BACHELOR OF SCIENCE IN OFFICE ADMINISTRATION',
		school: 'DAVAO STATE UNIVERSITY',
	};

	const items = [
		{
			label: 'Highest Educational Attainment',
			children: educationData.attainment,
		},
		{
			label: 'Course',
			children: educationData.course,
		},
		{
			label: 'School',
			children: educationData.school,
		},
	].map((item, index) => ({ ...item, key: index }));

	return (
		<Card
			className="shadow-lg rounded-xl overflow-hidden"
			title={<span className="text-md font-semibold text-[#9B9BC2]">Education Information</span>}
		>
			<Descriptions
				className="fixed-descriptions"
				bordered
				items={items}
				layout={'vertical'}
				column={{ xxl: 3, xl: 3, lg: 3, md: 2, sm: 1, xs: 1 }}
				styles={{
					label: sharedLabelStyle,
					content: sharedContentStyle,
				}}
			/>
		</Card>
	);
}

export default Education;
