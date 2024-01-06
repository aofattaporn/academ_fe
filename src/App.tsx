import { Route, Routes } from "react-router-dom";
import NotificationPage from "./pages/NotificationPage";
import MytaskPage from "./pages/MytaskPage";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/AuthPage/SignUpPage";
import SignInPage from "./pages/AuthPage/SignInPage";
import ResetPasswordPage from "./pages/AuthPage/ResetPasswordPage";
import { AuthProvider } from "./layouts/AuthProvider";
import AuthLayout from "./layouts/AuthLayout";
import PrivateRoute from "./layouts/PrivateRoute";

function App() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
      </Route>
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/mytask" element={<MytaskPage />} />
        <Route path="/notification" element={<NotificationPage />} />
      </Route>
    </Routes>
  );
}

export default App;
