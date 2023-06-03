import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import hero_device from "../images/hero-devices.svg";
import face from "../images/mf-avatar.svg";
import logo from "../images/t.png";

const Navbar = () => {
    const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((p) => !p);
  };
  return (
    <Box p={2} pl={{ xs: 3, md: 6, lg: 6 }} pr={{ xs: 3, md: 6, lg: 6 }}>
    <Box
      mt={3}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <img
        src={logo}
        alt="Wael Hamze Logo"
        style={{ width: "96px", height: "33px" }}
      />
      <Box
        display={{ xs: "none", sm: "flex", md: "flex", lg: "flex" }}
        gap={2}
        alignItems={"center"}
      >
        <Typography variant="h6" color="grey" fontWeight="bold">
          Wael Hamze
        </Typography>
        <Button
          variant="outlined"
          color="primary"
          size="large"
          sx={{ borderRadius: "20px", p: ".4rem 2.5rem" }}
        >
          Download CV
        </Button>
      </Box>
      <Box
        display={{ xs: "flex", sm: "none", md: "none", lg: "none" }}
        gap={2}
        alignItems={"center"}
      >
        <IconButton
          variant="contained"
          color="primary"
          onClick={handleOpen}
        >
          {open ? (
            <CloseIcon sx={{ fontSize: "2rem" }} />
          ) : (
            <MenuIcon sx={{ fontSize: "2rem" }} />
          )}
        </IconButton>
      </Box>
    </Box>

    <Collapse in={open} timeout="auto" unmountOnExit>
      <Stack spacing={2} alignItems="center" mt={5}>
        <Typography variant="h6" color="grey" fontWeight="bold">
          Wael Hamze
        </Typography>
        <Button
          variant="outlined"
          color="primary"
          size="large"
          sx={{
            borderRadius: "20px",
            p: ".4rem 2.5rem",
            width: "fit-content",
          }}
        >
          Download CV
        </Button>
      </Stack>
    </Collapse>

    <Box mt={{ xs: 10, md: 15, lg: 15 }} textAlign="center">
      <Typography variant="h4" fontWeight="bold" mb={3}>
        Software Engineer.
      </Typography>
      <Typography variant="h6" fontWeight="600" mb={3}>
        I code, and I love what I do.
      </Typography>
      <img src={face} alt="Wael Hamze Face" className="face" />
      <Box mt={10}>
        <img src={hero_device} alt="Hero Device" className="hero_device" />
      </Box>
    </Box>
  </Box>
  )
}

export default Navbar