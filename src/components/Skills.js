import FlipToFrontIcon from "@mui/icons-material/FlipToFront";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import React from "react";

const Skills = () => {
  return (
    <Grid
      container
      sx={{
        ml: { xs: ".5rem", md: "2rem", lg: "3rem" },
        mr: { xs: ".5rem", md: "2rem", lg: "3rem" },
        width: "auto",
        border: "1px solid rgba(0,0,0,.175)",
        borderRadius: "5px",
        mt: "-14rem",
        background: "white",
      }}
    >
      <Grid item md xs={12}>
        <Box mt={2} textAlign="center" p={{ xs: 2, md: 3, lg: 4 }} pt={2}>
          <IconButton variant="contained" color="secondary">
            <FlipToFrontIcon sx={{ fontSize: "2.5rem" }} />
          </IconButton>
          <Typography variant="h5" fontWeight="600" mt={3}>
            Frontend Developement
          </Typography>
          <Typography variant="body1" mt={3}>
            I enjoy to code things from my own imagination, and to bring ideas
            to life in the browser.
          </Typography>
          <Typography variant="body1" mt={5} color="primary" fontWeight="600">
            Skills:
          </Typography>
          <Typography variant="body1" mt={2}>
            HTML, CSS, Sass, Bootstrap
          </Typography>
          <Typography variant="body1" mt={2}>
            JavaScript, jQuery, TypeScript
          </Typography>
          <Typography variant="body1" mt={2}>
            React, Redux, Socket.io, Agora
          </Typography>
          <Typography variant="body1" mt={2}>
            Git, Github, Docker
          </Typography>
        </Box>
      </Grid>
      <Divider orientation="vertical" flexItem />
      <Grid item md xs={12}>
        <Box mt={2} textAlign="center" p={{ xs: 2, md: 3, lg: 4 }} pt={2}>
          <IconButton variant="contained" color="secondary">
            <FlipToFrontIcon sx={{ fontSize: "2.5rem" }} />
          </IconButton>
          <Typography variant="h5" fontWeight="600" mt={3}>
            Backend Developement
          </Typography>
          <Typography variant="body1" mt={3}>
            I always liked to know what happened behind the scenes, so I dug
            into it.
          </Typography>
          <Typography variant="body1" mt={5} color="primary" fontWeight="600">
            Skills:
          </Typography>
          <Typography variant="body1" mt={2}>
            Node.js, Express.js
          </Typography>
          <Typography variant="body1" mt={2}>
            PHP, Laravel
          </Typography>
          <Typography variant="body1" mt={2}>
            MySQL, MongoDB
          </Typography>
          <Typography variant="body1" mt={2}>
            REST API's, Postman
          </Typography>
        </Box>
      </Grid>
      <Divider orientation="horizontal" flexItem />
      <Grid item xs={12}>
        <Box textAlign="center" mt={6} mb={6}>
          <Typography variant="body1" color="primary" fontWeight="600">
            Additional Skills:
          </Typography>{" "}
          <Typography variant="body1" mt={2}>
            Docker, Jira, SEO
          </Typography>
          <Typography variant="body1" mt={2}>
            Unit testing (Jest), Web Sockets
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Skills;
