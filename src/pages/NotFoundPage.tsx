import { Button, Typography, Container } from "@mui/material";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
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
        404 - PAGE NOT FOUND
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </Typography>
      <Link to="/">
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
          GO TO HOMEPAGE
        </Button>
      </Link>
    </Container>
  );
};

export default NotFoundPage;
