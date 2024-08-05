import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import styled from "styled-components";
import SocialMedia from "../components/Social/SocialMedia";

const ProfileItem = styled(Paper)({
    height: "20rem", width:'20rem',
  textAlign: "center",
  color: "black",
  // backgroundColor: "#edf2f8",
boxShadow:'none',
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.05)",
  },
});

const Skills = () => {
  const profiles = [
    {
      title: "FULLSTACK DEVELOPER",
      description:
        "I am a fullstack developer skilled in frontend and backend technologies, adept at crafting web applications from the ground up.",
      imageUrl: "/images/6.jpg",
    },
    {
      title: "WEB DEVELOPER",
      description:
        "I am a web developer focused on designing and implementing interactive and dynamic websites that enhance user experience.",
      imageUrl: "/images/7.jpg",
    },
    {
      title: "REACT DEVELOPER",
      description:
        "I am a React developer specializing in building and optimizing mobile applications using cross-platform technologies.",
      imageUrl: "/images/8.jpg",
    },
    {
      title: "BACKEND ENGINEER",
      description:
        "I am a backend engineer with a passion for building robust server-side logic and integrating databases and APIs to drive complex web applications.",
      imageUrl: "/images/9.jpg",
    },
    {
      title: "FRONTEND ENGINEER",
      description:
        "I am a frontend engineer dedicated to creating visually appealing and highly interactive user interfaces using modern web technologies.",
      imageUrl: "/images/10.jpg",
    },
  ];

  return (
    
    <Box sx={{ flexGrow: 1, padding: '2.5rem 0' }}>
      <Typography variant="h4" sx={{ textAlign: "center", padding: 4, fontWeight:'500'}}>
      Quality Development Reflects<span style={{ color: "#313bac"}}> Skilled Developers</span>
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {profiles.map((profile) => (
          <Grid item xs={12} sm={12} md={4} key={profile.title}>
            <ProfileItem sx={{mt:3}} >
              <img
                src={profile.imageUrl}
                alt={profile.title}
                style={{ width: "100%", height: "12rem", width:'12rem', objectFit: "cover",borderRadius:'1rem', }}
              />
              <Typography variant="h5" component="h2" sx={{ mt: 2 }}>
                {profile.title}
              </Typography>
              <Typography variant="body1" sx={{ mt: 1 }}>
                {profile.description}
              </Typography>
            </ProfileItem>
          </Grid>
        ))}
      </Grid>
      <Box sx={{position:"relative", bottom:'100px', left:'15px'}}>
    <SocialMedia />
    </Box>
    </Box>
  );
};

export default Skills;
