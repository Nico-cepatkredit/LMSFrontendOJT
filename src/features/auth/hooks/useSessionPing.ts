import { useEffect, useRef } from 'react';
import api from '@/global/api/globalApi';
import { useAuthStore } from '@/global/store/auth.store';
import { decodeToken } from '../utils/tokenUtils';

export const useSessionPing = () => {
	const { isAuthenticated, token } = useAuthStore();
	const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

	useEffect(() => {
		if (!isAuthenticated || !token) return;

		const decoded = decodeToken(token);
		if (!decoded) {
			useAuthStore.getState().clearToken();
			return;
		}

		const pingSession = async () => {
			try {
				const res = await api.post('/Auth/ping', {
					userId: decoded.sub,
					deviceId: decoded.DeviceId,
				});
				console.log('🟢 Session active', res);
			} catch (err) {
				console.log('🔴 Session invalid', err);
				useAuthStore.getState().clearToken();
			}
		};

		pingSession();

		intervalRef.current = setInterval(pingSession, 5 * 60 * 1000);

		return () => {
			if (intervalRef.current) {
				clearInterval(intervalRef.current);
			}
		};
	}, [isAuthenticated]);
};
