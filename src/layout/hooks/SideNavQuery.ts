import { useQuery } from '@tanstack/react-query';
import { getStatusCount } from '../api/sideNav.api';
import type { IStatusCount } from '.';

export const useGetStatusCount = () => {
	return useQuery<IStatusCount[]>({
		queryKey: ['GetStatusCount'],
		queryFn: getStatusCount,
		staleTime: 60000,
		refetchOnWindowFocus: false,
		retry: 1,
	});
};
