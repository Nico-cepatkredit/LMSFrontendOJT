import type { ILoanChargeRow, ILoanChargesApiData } from '.';

export const buildChargeRows = (loanChargesData: ILoanChargesApiData): ILoanChargeRow[] =>
	loanChargesData.types.map(({ chargeId, chargeName, chargeAmount, chargeType, isAmount }) => ({
		chargeId,
		chargeName,
		chargeType,
		chargeAmount,
		isAmount,
	}));
