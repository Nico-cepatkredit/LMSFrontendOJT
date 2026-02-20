import { useEffect, useRef } from 'react';
import api from '@/global/api/globalApi';
import { useAuthStore } from '@/global/store/auth.store';
import { decodeToken, getTokenExpiration } from '../utils/tokenUtils';

export const useTokenRefresh = () => {
	const { token, isAuthenticated } = useAuthStore();
	const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

	useEffect(() => {
		if (!isAuthenticated || !token) return;

		const scheduleRefresh = () => {
			const exp = getTokenExpiration(token);
			if (!exp) return;

			const now = Date.now();
			const refreshTime = exp - now - 60_000;

			if (refreshTime <= 0) {
				refreshToken();
				return;
			}

			timeoutRef.current = setTimeout(refreshToken, refreshTime);
		};

		const refreshToken = async () => {
			const { setToken, clearToken } = useAuthStore.getState();

			const decoded = decodeToken(token);
			if (!decoded) {
				clearToken();
				return;
			}

			console.log('Decoded token:', decoded);

			try {
				const res = await api.post('/Auth/rotate-token', {
					userId: decoded.sub,
					deviceId: decoded.DeviceId,
				});

				const newAccessToken = res.data?.data?.accessToken;

				if (newAccessToken) {
					setToken(newAccessToken);
				} else {
					clearToken();
				}
			} catch {
				clearToken();
			}
		};

		scheduleRefresh();

		return () => {
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current);
			}
		};
	}, [token, isAuthenticated]);
};
