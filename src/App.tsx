import { Route, Routes } from "react-router-dom";
import NotificationPage from "./pages/NotificationPage";
import MytaskPage from "./pages/MyTaskPage/MytaskPage";
import HomePage from "./pages/HomePage/HomePage";
import SignUpPage from "./pages/AuthPage/SignUpPage";
import SignInPage from "./pages/AuthPage/SignInPage";
import PrivateRoute from "./layouts/PrivateRoute";
import PublicRoute from "./layouts/PublicRoute";
import VerifyEmailPage from "./pages/AuthPage/VerifyEmailPage";
import ForgotPasswordPage from "./pages/AuthPage/ForgotPasswordPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProjectPage from "./pages/ProjectPage/ProjectPage";
import AllMyProjectPage from "./pages/AllMyProjectPage/AllMyProjectPage";
import List from "./pages/ProjectPage/List/List";
import DragDropPlayGround from "./pages/ProjectPage/DragDropPlayGround/DragDropPlayGround";

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
        <Route path="/projects" element={<AllMyProjectPage />} />
        <Route path="/projects/:projectId" element={<ProjectPage />}>
          <Route path="list" element={<List />} />
          <Route path="board" element={<List />} />
          <Route path="timeline" element={<List />} />
          <Route path="calendar" element={<DragDropPlayGround />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
