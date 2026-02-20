import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
	token: string | null;
	isAuthenticated: boolean;
	isChecking: boolean;
	setToken: (token: string) => void;
	clearToken: () => void;
	setChecking: (value: boolean) => void;
}

export const useAuthStore = create<AuthState>()(
	persist(
		(set) => ({
			token: null,
			isAuthenticated: false,
			isChecking: true,

			setToken: (token) =>
				set({
					token,
					isAuthenticated: true,
				}),

			clearToken: () =>
				set({
					token: null,
					isAuthenticated: false,
				}),

			setChecking: (value) => set({ isChecking: value }),
		}),
		{
			name: 'auth-storage',
			partialize: (state) => ({
				token: state.token,
				isAuthenticated: state.isAuthenticated,
			}),
		}
	)
);
