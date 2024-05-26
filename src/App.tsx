import { Route, Routes } from "react-router-dom";
import NotificationPage from "./pages/NotificationPage/NotificationPage";
import MytaskPage from "./pages/MyTaskPage/MytaskPage";
import HomePage from "./pages/HomePage/HomePage";
import SignUpPage from "./pages/AuthPage/SignUpPage";
import SignInPage from "./pages/AuthPage/SignInPage";
import PrivateRoute from "./layouts/PrivateRoute";
import PublicRoute from "./layouts/PublicRoute";
import VerifyEmailPage from "./pages/AuthPage/VerifyEmailPage";
import ForgotPasswordPage from "./pages/AuthPage/ForgotPasswordPage";
import NotFoundPage from "./pages/NotFoundPage";
import AllMyProjectPage from "./pages/AllMyProjectPage/AllMyProjectPage";
import List from "./pages/ProjectPage/List/List";
import ProjectPage from "./pages/ProjectPage/ProjectPage";
import Board from "./pages/ProjectPage/Board/Board";
import Calendar from "./pages/ProjectPage/Calendar/Calendar";
import Timeline from "./pages/ProjectPage/Timeline/Timeline";
import InvitePage from "./pages/InvitePage/InvitePage";

import { useEffect } from "react";

function App() {
  async function requestPermission() {
    //requesting permission using Notification API
    const permission = await Notification.requestPermission();

    if (permission === "granted") {
      // const token = await getToken(messaging, {
      //   vapidKey:
      //     "BIB7rdk1yUCifFxK7PdTOGKe37fcoM3_k3KeRtC_ZzOf6nWTbQPJ3mdubyLvKTs6FA6R4bL3pl7fYakXg_rv8H0",
      // });

      //We can send token to server
      console.log("noti permission === granted");
    } else if (permission === "denied") {
      //notifications are blocked
      console.log("noti permission === denied");
      // alert("You denied for the notification");
    }
  }

  useEffect(() => {
    requestPermission();
  }, []);

  return (
    <Routes>
      <Route element={<PublicRoute />}>
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/verify-email" element={<VerifyEmailPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      </Route>
      <Route element={<PrivateRoute />}>
        <Route path="/join-project" element={<InvitePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/mytask" element={<MytaskPage />} />
        <Route path="/notification" element={<NotificationPage />} />
        <Route path="/projects" element={<AllMyProjectPage />} />
        <Route path="/projects/:projectId/" element={<ProjectPage />}>
          <Route path="list" element={<List />} />
          <Route path="board" element={<Board />} />
          <Route path="timeline" element={<Timeline />} />
          <Route path="calendar" element={<Calendar />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
