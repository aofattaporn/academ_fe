import { Button } from "@mui/material";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import authApi from "../../libs/authApi";

const GoogleButtonComp = () => {
  const auth = getAuth();

  const handleSignInGoogle = async (): Promise<void> => {
    try {
      // request to google providder
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({ prompt: "select_account" });

      const credential = await signInWithPopup(auth, provider);
      const token = await credential.user.getIdToken(true);

      // request to backend
      await authApi.signInWithGoogle(token);
    } catch (error) {
      throw error;
    }
  };

  return (
    <div className="w-full flex justify-center">
      <Button
        fullWidth
        onClick={handleSignInGoogle}
        className="shadow-md normal-case"
        sx={{
          textTransform: "capitalize",
          color: "#004FC4",
        }}
      >
        Continue with Google
      </Button>
    </div>
  );
};

export default GoogleButtonComp;
