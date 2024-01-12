import { Button } from "@mui/material";
import {
  GoogleAuthProvider,
  getAuth,
  getRedirectResult,
  signInWithRedirect,
} from "firebase/auth";
import authApi from "../../libs/authApi";
import GoogleIcon from "../../assets/svg/google_logo.svg";
import firebaseApi from "../../libs/firebaseApi";
import { RESPONSE_AUTH_ERROR } from "../../types/GenericType";

const GoogleButtonComp = () => {
  const auth = getAuth();

  const handleSignInGoogle = async (): Promise<void> => {
    try {
      // request to google providder
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({ prompt: "select_account" });

      await signInWithRedirect(auth, provider);
      const credential = await getRedirectResult(auth);
      const token = await credential?.user.getIdToken(true);

      // request to backend
      if (token) {
        await authApi.signInWithGoogle(token);
      }
    } catch (error) {
      const errorMsg: string = (error as string).toString();
      const customError = await firebaseApi.checkError(errorMsg.toString());

      if (customError && customError.message === RESPONSE_AUTH_ERROR) {
        throw customError;
      } else {
        await firebaseApi.signOutUser();
        throw error;
      }
    }
  };

  return (
    <div className="w-full flex justify-center">
      <Button
        fullWidth
        onClick={handleSignInGoogle}
        className="shadow-md normal-case flex gap-4"
        sx={{
          textTransform: "capitalize",
          color: "#004FC4",
        }}
      >
        <img src={GoogleIcon} alt="academ-icon" height={200} width={20} />
        <p> Continue with Google</p>
      </Button>
    </div>
  );
};

export default GoogleButtonComp;
