import { Card, Table } from 'antd';
import { dependentColumns } from './DependentsColumn';

function Dependents() {
	const dependentData = [
		{
			fullName: 'ANDONG, JANE DOE',
			age: '18',
			job: 'DAVAO STATE UNIVERSITY',
			relationship: 'DAUGHTER',
			remarks: 'STUDYING - 1ST YEAR COLLEGE',
		},
		{
			fullName: 'ANDONG, JOHN DOE',
			age: '12',
			job: 'KIBONBON ELEMENTARY',
			relationship: 'SON',
			remarks: 'STUDYING - GRADE 6',
		},
	].map((item, index) => ({ ...item, key: index + 1 }));

	return (
		<Card
			className="shadow-lg rounded-xl overflow-hidden"
			title={<span className="text-md font-semibold text-[#9B9BC2]">OFW Dependents</span>}
		>
			<Table
				bordered
				dataSource={dependentData}
				columns={dependentColumns}
				scroll={{ x: 800 }}
				pagination={{ hideOnSinglePage: true }}
			/>
		</Card>
	);
}

export default Dependents;
