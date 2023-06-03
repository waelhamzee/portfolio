import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";

const Banner = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{ backgroundColor: theme.palette.primary.main }}
      textAlign="center"
      p={4}
      pb={"18rem"}
    >
      <Typography variant="h5" color="white" fontWeight="600" mt={2}>
        Hi, I’m Wael. Nice to meet you.
      </Typography>
      <Box
        pl={{ lg: "10rem", md: "6rem", sm: "4rem", xs: "2rem" }}
        pr={{ lg: "10rem", md: "6rem", sm: "4rem", xs: "2rem" }}
      >
        <Typography variant="body1" color="white" fontWeight="600" mt={4}>
          Since beginning my journey as a software engineer, and I have been
          fascinated about this particular technology. I have started early to
          satisfy my ambitions. I'm quietly confident, naturally curious, and
          perpetually working on improving myself one day at a time.
        </Typography>
      </Box>
    </Box>
  );
};

export default Banner;
