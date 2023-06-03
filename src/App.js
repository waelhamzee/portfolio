import Box from "@mui/material/Box";
import React from "react";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Interested from "./components/Interested";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const App = () => {
  return (
    <Box>
      <Navbar />
      <Banner />
      <Skills />
      <Projects />
      <Interested />
      <Footer />
    </Box>
  );
};

export default App;
