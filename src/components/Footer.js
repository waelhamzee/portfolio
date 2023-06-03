import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import React from "react";
import logo2 from "../images/logo2.png";
import { useTheme } from "@mui/material";

const Footer = () => {
  const theme = useTheme();
  return (
    <Box mt={6} sx={{ backgroundColor: theme.palette.primary.main }}>
      <Box pt={6} textAlign="center">
        <img src={logo2} alt="wael's infamous logo" />
      </Box>
      <Box textAlign="center" color="white">
        <Typography variant="h6" sx={{ opacity: 0.8, fontWeight: 100 }}>
          Living, learning, & leveling up one day at a time.
        </Typography>
      </Box>
      <Box pt={4} display="flex" gap={2} justifyContent="center">
        <IconButton
          variant="outlined"
          sx={{ border: "1px solid white" }}
          onClick={() =>
            (window.location.href = "https://www.linkedin.com/in/wael-hamze/")
          }
        >
          <LinkedInIcon sx={{ color: "white" }} />
        </IconButton>
        <IconButton
          variant="outlined"
          sx={{ border: "1px solid white" }}
          onClick={() =>
            (window.location.href = "mailto:waelhamzee0@gmail.com")
          }
        >
          <EmailIcon sx={{ color: "white" }} />
        </IconButton>
      </Box>
      <Box pt={4} pb={4} textAlign="center" color="white">
        <Typography variant="h6" sx={{ opacity: 0.8, fontWeight: 100 }}>
          Handcrafted by me
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
