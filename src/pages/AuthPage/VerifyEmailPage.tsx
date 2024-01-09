import AuthButtonComp from "../../components/Button/AuthButtonComp";

const VerifyEmailPage = () => {
  const handleVerifyClick = () => {
    window.location.href = "mailto:";
  };

  return (
    <div className="w-6/6 md:w-3/6">
      <div className="bg-white py-12 px-12 md:px-24 rounded-md flex-col space-y-7 align-middle justify-center shadow-md">
        <div className="flex justify-center">
          <h1 className="text-3xl font-semibold">Verify your email address</h1>
        </div>
        <p className=" text-center">
          You've entered the email address for your account. Please verify this
          email address by clicking button below.
        </p>
        <div className="flex-col space-y-4" onClick={handleVerifyClick}>
          <AuthButtonComp title="Verify" />
        </div>
      </div>
    </div>
  );
};

export default VerifyEmailPage;
