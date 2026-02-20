import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import HomePageLayout from './layout/components/HomePageLayout';
import ProtectedRoute from './layout/components/ProtectedRoute';
import AuthInitializer from './features/auth/components/AuthInitializer';
import ApprovalResult from './pages/ApprovalResult';

function App() {
	return (
		<>
			<BrowserRouter>
					<Routes>
						<Route path="/" element={<Navigate to="/home" replace />} />

						<Route
							path="/home"
							element={
								<AuthInitializer>
									<ProtectedRoute>
										<HomePageLayout />
									</ProtectedRoute>
								</AuthInitializer>
							}
						>
							<Route index element={<HomePage />} />
							<Route path="status/:status" element={<HomePage />} />
							<Route path="loan/:status/:loanAppCode/:pnNumber?" element={<HomePage />} />
						</Route>

						<Route path="login" element={<LoginPage />} />

						<Route path="/approval-result" element={<ApprovalResult />} />
					</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
