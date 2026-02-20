import { Card, Flex, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Information from './Information';
import Address from './Address/Address';
import Other from './Other';
import Education from './Education';
import Dependents from './Dependents/Dependents';
import EmploymentHistory from './EmploymentHistory';
import CreditHistory from './CreditHistory/CreditHistory';
import OwnedAssets from './OwnedAssets';
import CharacterReference from './CharacterReference/CharacterReference';
import { useLoanTab } from '@/global/context/LoanTabContext';

function OFWDetails() {
	const { visible, sectionRefs } = useLoanTab();

	return (
		<Card
			ref={sectionRefs.ofw}
			className="shadow-lg rounded-xl overflow-hidden scroll-mt-36"
			title={
				<Space className="text-[#585899]!">
					<UserOutlined />
					<span className="text-lg font-bold">OFW Details</span>
				</Space>
			}
		>
			<Flex vertical gap={10}>
				{visible.ofw && (
					<>
						<Information />
						<Address />
						<Other />
						<Education />
						<Dependents />
					</>
				)}

				{visible.employment && <EmploymentHistory />}
				{visible.credit && <CreditHistory />}
				{visible.assets && <OwnedAssets />}
				{visible.character && <CharacterReference />}
			</Flex>
		</Card>
	);
}

export default OFWDetails;
