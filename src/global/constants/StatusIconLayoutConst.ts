import {
	NotificationOutlined,
	CloseSquareOutlined,
	FileTextOutlined,
	FileAddOutlined,
	PauseCircleOutlined,
} from '@ant-design/icons';
import type { AntdIconProps } from '@ant-design/icons/lib/components/AntdIcon';
import type { ComponentType } from 'react';

export const statusIconMap: Record<string, ComponentType<AntdIconProps>> = {
	UNGENERATED: FileAddOutlined,
	UNPOSTED: FileTextOutlined,
	POSTED: NotificationOutlined,
	HOLD: PauseCircleOutlined,
	CANCELLED: CloseSquareOutlined,
};
