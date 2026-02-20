import { Tooltip, Space } from 'antd';
import { CheckCircleFilled, DeleteFilled, FileExclamationFilled, LockFilled } from '@ant-design/icons';
import CepatButton from './CepatButton';

function PNAction() {
	return (
		<Space size={4}>
			<Tooltip title="Generate PN">
				<CepatButton
					icon={<CheckCircleFilled />}
					size="large"
					className="text-[#9B9BC2]! hover:text-[#34B34A]! border border-[#9B9BC2]! hover:border-[#34B34A]!"
				/>
			</Tooltip>

			<Tooltip title="Request Cancel PN">
				<CepatButton
					icon={<FileExclamationFilled />}
					size="large"
					className="text-[#9B9BC2]! hover:text-[#34B34A]! border border-[#9B9BC2]! hover:border-[#34B34A]!"
				/>
			</Tooltip>

			<Tooltip title="Aprrove Cancel PN">
				<CepatButton
					icon={<LockFilled />}
					size="large"
					className="text-[#9B9BC2]! hover:text-[#34B34A]! border border-[#9B9BC2]! hover:border-[#34B34A]!"
				/>
			</Tooltip>

			<Tooltip title="Decline Cancel PN">
				<CepatButton
					icon={<DeleteFilled />}
					size="large"
					className="text-[#9B9BC2]! hover:text-[#34B34A]! border border-[#9B9BC2]! hover:border-[#34B34A]!"
				/>
			</Tooltip>
		</Space>
	);
}

export default PNAction;
