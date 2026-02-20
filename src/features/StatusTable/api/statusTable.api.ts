import api from '@/global/api/globalApi';

export const getTableDataByStatus = async (status: string) => {
	try {
		const response = await api.get(`/loans-table`, {
			params: { status },
		});

		return response.data.data;
	} catch (error) {
		console.error(error);
		throw error;
	}
};
