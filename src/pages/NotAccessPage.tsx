import { Button, Typography, Container } from "@mui/material";
import { Link } from "react-router-dom";

const NotAccessPage = () => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h1"
        sx={{ mb: 2, color: "#AF8AE2", fontWeight: "bold" }}
      >
        Oops!
      </Typography>
      <Typography variant="h2" sx={{ mb: 2 }}>
        Not Access This Page
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        It seems like you don't have permission to use this portal. Please sign
        in before access.
      </Typography>
      <Link to={"/sign-in"}>
        <Button
          variant="contained"
          color="primary"
          sx={{
            backgroundColor: "#AF8AE2",
            "&:hover": {
              backgroundColor: "#AF8AE2",
            },
          }}
        >
          GO TO SIGN IN
        </Button>
      </Link>
    </Container>
  );
};

export default NotAccessPage;
