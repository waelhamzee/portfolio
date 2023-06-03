import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import React from "react";
import quiz from "../images/quiz.jpg";
import telegram from "../images/telegram.png";
import touch from "../images/touch.jpg";
import wordle from "../images/wordle.png";
import ecommerce from "../images/yellow-shoe.png";

const PROJECTS = [
  {
    id: 1,
    title: "Quizzie.",
    description:
      "Combining Laravel and React to create a blazing fast quiz experience, featuring user authentication and authorization.",
    website_url: "",
    github_url: "https://github.com/waelhamzee/react-laravel-quizz",
    image: quiz,
    height: 200,
    width: 100,
    center: true,
  },
  {
    id: 2,
    title: "E-commerce store.",
    description:
      "Built with React.js, this website offers a seamless user experience and navigation.",
    website_url: "https://e-commerce-shoe-store.netlify.app/",
    github_url: "https://github.com/waelhamzee/mern-sneakers-project",
    image: ecommerce,
    height: 200,
    center: false,
  },
  {
    id: 3,
    title: "Real-time chat/video app.",
    description: "Built with React.js and Node.js and inspired from Telegram.",
    website_url: "https://react-telegram-clone.netlify.app/",
    github_url: "https://github.com/waelhamzee/telegram-clone",
    image: telegram,
    height: 200,
    width: 200,
    center: true,
    disabled: true,
  },
  {
    id: 4,
    title: "Guess the word.",
    description:
      "Built with React.js to showcase a knock off the famous Wordle Game.",
    website_url: "https://wordle-is-cloned.netlify.app/",
    github_url: "https://github.com/waelhamzee/wordle-clone",
    image: wordle,
    height: 150,
    center: false,
  },
  {
    id: 5,
    title: "Basic.",
    description:
      "A quick showcase of Javascript's multi-use features by creating a simple touch game.",
    website_url: "https://touch-js.netlify.app/",
    github_url: "https://github.com/waelhamzee/touch-game",
    image: touch,
    height: 200,
    center: false,
  },
];

const Projects = () => {
  return (
    <Box
      mt={5}
      pl={{ xs: 1, sm: 5, md: 5, lg: 5 }}
      pr={{ xs: 1, sm: 5, md: 5, lg: 5 }}
    >
      <Box textAlign="center">
        <Typography variant="h4" fontWeight="bold">
          My Projects
        </Typography>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        gap={4}
        flexWrap={"wrap"}
        mt={4}
      >
        {PROJECTS.map((project) => {
          return (
            <Card sx={{ width: 345 }} key={project.id}>
              <CardMedia
                sx={{
                  height: project.height,
                  width: project.width,
                  margin: "50% auto",
                  mt: "0",
                  mb: "0",
                }}
                image={project.image}
                title="a touch clipart"
                className="media"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions>
                {project.website_url &&
                  (project.disabled ? (
                    <Tooltip title="Server is currently down">
                      <Button
                        size="small"
                        onClick={() =>
                          window.open(project.website_url, "_blank")
                        }
                      >
                        Live Site
                      </Button>
                    </Tooltip>
                  ) : (
                    <Button
                      size="small"
                      disabled={project.disabled}
                      onClick={() => window.open(project.website_url, "_blank")}
                    >
                      Live Site
                    </Button>
                  ))}
                {project.github_url && (
                  <Button
                    size="small"
                    onClick={() => window.open(project.github_url, "_blank")}
                  >
                    Repository
                  </Button>
                )}
              </CardActions>
            </Card>
          );
        })}
      </Box>
    </Box>
  );
};

export default Projects;
