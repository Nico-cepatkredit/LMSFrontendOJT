import { useQuery } from '@tanstack/react-query';
import { getTableDataByStatus } from '../api/statusTable.api';

export const useGetTableDataByStatus = (status: string) => {
	return useQuery({
		queryKey: ['GetTableDataByStatus', status],
		queryFn: () => getTableDataByStatus(status),
		enabled: !!status,
		staleTime: 0,
		refetchOnWindowFocus: false,
		retry: false,
	});
};
