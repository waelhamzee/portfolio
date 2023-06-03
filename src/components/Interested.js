import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React from "react";

const Interested = () => {
  return (
    <Box p={2} mt={6} textAlign="center">
      <Typography variant="h4" fontWeight="600">
        Interested in collaborating with me?
      </Typography>
      <Typography variant="h6" mt={2}>
        I’m always open to discussing projects and partnership opportunities.
      </Typography>
      <Box mt={2} textAlign="center">
        <Button
          variant="outlined"
          color="primary"
          size="large"
          sx={{ borderRadius: "50px", p: ".6rem 3rem" }}
          onClick={() =>
            (window.location.href = "mailto:waelhamzee0@gmail.com")
          }
        >
          Send an Email
        </Button>
      </Box>
    </Box>
  );
};

export default Interested;
