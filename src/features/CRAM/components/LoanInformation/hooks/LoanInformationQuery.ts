import { useQuery } from '@tanstack/react-query';
import { getLoanAppDetails } from '../api/LoanInformation.api';
import type { ILoanAppDetailsParams } from '..';

export const useGetLoanAppDetails = ({ status, loanAppCode, pnNumber, enabled = true }: ILoanAppDetailsParams) => {
	return useQuery({
		queryKey: ['GetLoanAppDetails', status, loanAppCode, pnNumber],
		queryFn: () => getLoanAppDetails({ status, loanAppCode, pnNumber }),
		staleTime: 60000,
		refetchOnWindowFocus: false,
		retry: 1,
		enabled: enabled && !!loanAppCode,
		refetchInterval: (query) => {
			const data = query.state.data;

			console.log('🔁 Polling check:');
			console.log('Current data:', data);
			console.log('Current status:', query.state.status);
			console.log('Fetch status:', query.state.fetchStatus);

			if (!data?.lmsLoanAppId) {
				console.log('⏳ Still migrating... refetching in 200ms');
				return 2000;
			}

			console.log('✅ Migration ready. Stop polling.');
			return false;
		},
	});
};
