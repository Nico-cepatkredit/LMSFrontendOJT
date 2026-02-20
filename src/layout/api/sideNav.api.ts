import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL;

export const getStatusCount = async () => {
	try {
		const response = await axios.get(`${apiUrl}/loans-table/status-count`);

		return response.data.data;
	} catch (error) {
		console.error(error);
		throw error;
	}
};
