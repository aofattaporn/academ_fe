import { useCallback } from "react";
import axiosInstance from "../../libs/axios";

const SignInPage = () => {
  const checkAPI = useCallback(async () => {
    try {
      const response = await axiosInstance.get("/entries");
      console.log(response);
    } catch (err) {
      console.error("Error:", err);
    }
  }, []);

  return (
    <div className="bg-white">
      <h1>Sign-in page</h1>
      <div>
        <button onClick={checkAPI}>Check API</button>
      </div>
    </div>
  );
};

export default SignInPage;
