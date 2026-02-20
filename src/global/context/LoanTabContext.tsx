import { createContext, useContext } from 'react';
import type { LoanTabContextValue } from '.';

export const LoanTabContext = createContext<LoanTabContextValue | null>(null);

export const useLoanTab = () => {
	const ctx = useContext(LoanTabContext);
	if (!ctx) {
		throw new Error('useLoanTab must be used inside LoanTabContext.Provider');
	}
	return ctx;
};
