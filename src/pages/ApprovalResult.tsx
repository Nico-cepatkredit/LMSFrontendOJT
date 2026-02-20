import { useLocation } from 'react-router-dom';
import { Result } from 'antd';

export default function ApprovalResult(): React.ReactElement {
	const location = useLocation();

	const params = new URLSearchParams(location.search);
	const status = params.get('status');

	const isSuccess = status === 'success';

	return (
		<Result
			status={isSuccess ? 'success' : 'error'}
			title={isSuccess ? 'Action Completed Successfully' : 'Action Failed'}
			subTitle={
				isSuccess ? 'The PN cancellation has been processed.' : 'The approval link is invalid or expired.'
			}
		/>
	);
}
