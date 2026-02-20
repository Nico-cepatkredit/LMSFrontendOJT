import { useAuthStore } from "@/global/store/auth.store";
import type React from "react";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
	const isAuthenticated = useAuthStore((s) => s.isAuthenticated);

	if (!isAuthenticated) {
		return <div>Authenticating...</div>;
	}

	return children;
}
