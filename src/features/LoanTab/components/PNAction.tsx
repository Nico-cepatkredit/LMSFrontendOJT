import { Space } from 'antd';
import { CheckCircleFilled, DeleteFilled, FileExclamationFilled, LockFilled } from '@ant-design/icons';
import CepatButton from '@global/components/CepatButton';
import { useSharedStyles } from '@global/hooks/useSharedStyles';

function PNAction() {
	const { sharedButtonClasses } = useSharedStyles();
	return (
		<Space size={4}>
			<CepatButton
				icon={<CheckCircleFilled />}
				size="large"
				className={sharedButtonClasses}
				tooltip="Generate PN"
			/>

			<CepatButton
				icon={<FileExclamationFilled />}
				size="large"
				className={sharedButtonClasses}
				tooltip="Request Cancel PN"
			/>

			<CepatButton
				icon={<LockFilled />}
				size="large"
				className={sharedButtonClasses}
				tooltip="Aprrove Cancel PN"
			/>

			<CepatButton
				icon={<DeleteFilled />}
				size="large"
				className={sharedButtonClasses}
				tooltip="Decline Cancel PN"
			/>
		</Space>
	);
}

export default PNAction;
