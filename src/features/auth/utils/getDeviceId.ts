export const getDeviceId = (): string => {
	return crypto.randomUUID();
};
