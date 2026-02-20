import axios from 'axios';
import type { ILoanAppDetailsParams } from '..';

const apiUrl = import.meta.env.VITE_API_URL;

export const getLoanAppDetails = async ({ status, loanAppCode, pnNumber }: ILoanAppDetailsParams) => {
	try {
		const normalizedPn = pnNumber ?? 'null'; 
		const response = await axios.get(`${apiUrl}/Cram/${status}/${loanAppCode}/${normalizedPn}`);

		return response.data.data;
	} catch (error) {
		console.error(error);
		throw error;
	}
};

