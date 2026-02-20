import { useEffect } from 'react';
import { Modal } from 'antd';
import { useAuthStore } from '@/global/store/auth.store';
import api from '@/global/api/globalApi';
import { getDeviceId } from '../utils/getDeviceId';
import { useTokenRefresh } from '../hooks/useTokenRefresh';
import { useSessionPing } from '../hooks/useSessionPing';

const FRONTEND1_LOGIN = 'http://localhost:5173/login';

interface CreateTokenResponse {
	success: boolean;
	data: {
		accessToken?: string;
		message?: string;
	};
}

export default function AuthInitializer({ children }: { children: React.ReactNode }) {
	const { setToken, clearToken, isAuthenticated, isChecking, setChecking } =
		useAuthStore();

    useTokenRefresh();
    useSessionPing();

	useEffect(() => {
		const initAuth = async () => {
			setChecking(true);

			const existingToken = useAuthStore.getState().token;

			if (existingToken) {
				setChecking(false);
				return;
			}

			const params = new URLSearchParams(window.location.search);
			const userId = params.get('userId');

			if (!userId) {
				setChecking(false);
				return;
			}

			try {
				const res = await api.post<CreateTokenResponse>(
					'/Auth/create-token',
					{
						userId,
						deviceId: getDeviceId(),
					}
				);

				if (res.data.success && res.data.data.accessToken) {
					setToken(res.data.data.accessToken);

					const cleanUrl = window.location.pathname;
					window.history.replaceState({}, document.title, cleanUrl);
				} else {
					clearToken();
				}
			} catch {
				clearToken();
			} finally {
				setChecking(false);
			}
		};

		initAuth();
	}, []);

	if (isChecking) {
		return <div>Authenticating...</div>;
	}

	if (!isAuthenticated) {
		return (
			<Modal
				open
				title="Authentication Required"
				okText="Go to Login"
				cancelButtonProps={{ style: { display: 'none' } }}
				onOk={() => {
					window.open(
						FRONTEND1_LOGIN +
							'?redirect=' +
							encodeURIComponent(window.location.href),
						'_blank'
					);
				}}
			>
				<p>You are not logged in.</p>
			</Modal>
		);
	}

	return <>{children}</>;
}
