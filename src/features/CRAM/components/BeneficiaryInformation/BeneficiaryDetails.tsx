import { Card, Space, Flex } from 'antd';
import { UsergroupAddOutlined } from '@ant-design/icons';
import Information from './Information';
import Address from './Address';
import Dependents from './Dependents';
import { useLoanTab } from '@/global/context/LoanTabContext';

function BeneficiaryDetails() {
	const { sectionRefs } = useLoanTab();
	return (
		<Card
			ref={sectionRefs.beneficiary}
			className="shadow-lg rounded-xl overflow-hidden scroll-mt-36"
			title={
				<Space className="text-[#585899]!">
					<UsergroupAddOutlined />
					<span className="text-lg font-bold">Beneficiary Details</span>
				</Space>
			}
		>
			<Flex vertical gap={10}>
				<Information />
				<Address />
				<Dependents />
			</Flex>
		</Card>
	);
}

export default BeneficiaryDetails;
