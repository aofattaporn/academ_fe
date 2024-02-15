import { Route, Routes } from "react-router-dom";
import NotificationPage from "./pages/NotificationPage";
import MytaskPage from "./pages/MytaskPage";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/AuthPage/SignUpPage";
import SignInPage from "./pages/AuthPage/SignInPage";
import PrivateRoute from "./layouts/PrivateRoute";
import PublicRoute from "./layouts/PublicRoute";
import VerifyEmailPage from "./pages/AuthPage/VerifyEmailPage";
import ForgotPasswordPage from "./pages/AuthPage/ForgotPasswordPage";
import NotFoundPage from "./pages/NotFoundPage";
import MyProjectsPage from "./pages/AllMyProject/MyProjectsPage";
import ProjectPage from "./pages/ProjectPage/ProjectPage";

function App() {
  return (
    <Routes>
      <Route element={<PublicRoute />}>
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/verify-email" element={<VerifyEmailPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      </Route>
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/mytask" element={<MytaskPage />} />
        <Route path="/notification" element={<NotificationPage />} />
        <Route path="/projects" element={<MyProjectsPage />} />
        <Route path="/projects/:itemId" element={<ProjectPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
