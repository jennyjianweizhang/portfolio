import React from "react";
import { Box, Stack, Typography, createTheme, Avatar } from "@mui/material";
import About from "./about";
import Skills from "./skills";
import Work from "./work";
import SkillsExperiences from "./experiences"
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <>
    <Box
    id="home"
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingTop:9,
        backgroundImage: `url('https://solely-resume.netlify.app/static/media/bgIMG.c39101e520e2997fc6d4.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <About />
      
    </Box>
    <Box id="work" sx={{paddingTop:0}}>
      <Work />
    </Box>
    <Box id="skills" sx={{bgcolor:'#edf2f8', paddingTop:0}}>
      <SkillsExperiences />
    </Box>
    <Box id="about"> 
      <Skills />
    </Box>
    <Box id="contact"> 
      <Footer />
    </Box>
    </>
  );
}

export default Home;
