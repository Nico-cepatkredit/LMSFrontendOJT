import { jwtDecode } from "jwt-decode";

interface JwtPayload {
	exp: number;
	sub: string;
	DeviceId: string;
}

export const decodeToken = (token: string): JwtPayload | null => {
	try {
		return jwtDecode<JwtPayload>(token);
	} catch {
		return null;
	}
};

export const getTokenExpiration = (token: string): number | null => {
	const decoded = decodeToken(token);
	return decoded ? decoded.exp * 1000 : null;
};
