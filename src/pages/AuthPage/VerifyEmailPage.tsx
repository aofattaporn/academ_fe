import { Link, useNavigate } from "react-router-dom";
import AuthButtonComp from "../../components/Button/AuthButtonComp";
import { getAuth } from "firebase/auth";

const VerifyEmailPage = () => {
  const app = getAuth();
  const navigate = useNavigate();
  const user = app.currentUser;

  const handleVerifyClick = () => {
    window.location.href = "mailto:";
  };

  if (!user) navigate(-1);

  return (
    <div className="w-6/6 md:w-3/6">
      <div className="bg-white py-12 px-12 md:px-24 rounded-md flex-col space-y-7 align-middle justify-center shadow-md">
        <div className="flex justify-center">
          <h1 className="text-3xl font-semibold">Verify your email address</h1>
        </div>
        <p className="text-center">
          You've entered <span className="font-bold">{user?.email}</span> as the
          email address for your account. Please verify this email address by
          clicking button below.
        </p>
        <div className="flex-col space-y-4" onClick={handleVerifyClick}>
          <AuthButtonComp title="Verify" />
        </div>
      </div>
      <div className=" w-full flex justify-center m-4">
        <p>
          Back to{" "}
          <Link className="font-bold" to="/sign-in">
            Sign In Page
          </Link>
        </p>
      </div>
    </div>
  );
};

export default VerifyEmailPage;
