import { useCallback } from "react";
import axios from "axios";

const SignInPage = () => {
  const checkAPI = useCallback(async () => {
    try {
      const response = await axios.get("https://api.publicapis.org/entries2");
      console.log(response.data);
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
