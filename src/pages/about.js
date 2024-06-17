import React from "react";
import { Box, Stack, Typography, createTheme, Avatar } from "@mui/material";
import styled, { keyframes } from "styled-components";
import SocialMedia from "../components/Social/SocialMedia";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideIn = keyframes`
  from { transform: translateX(-100px); }
  to { transform: translateX(0); }
`;

const AnimatedBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 1rem;
  box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.1);
  padding: 1rem 3rem;
  animation: ${fadeIn} 1s ease-out forwards, ${slideIn} 1s ease-out forwards;
`;

const AnimatedImage = styled.img`
  width: 100%;
  animation: scaleUp 1.5s ease-in-out forwards;

  @keyframes scaleUp {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }
`;

const AnimatedAvatars = styled(Box)`
  animation: slideInRight 1s ease-out forwards;

  @keyframes slideInRight {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;

function About() {
  return (
    <>
    <Box sx={{position:"relative", bottom:'100px', left:'15px'}}>
    <SocialMedia />
    </Box>
   
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          ml: 35,
          mt:-20
        }}
      >
        
        <Stack direction="row" spacing={2} alignItems="center">
          <AnimatedBox>
            <Box sx={{ fontSize: "3rem", ml:-15}}>👋</Box>
            <Box sx={{ mt: -8, ml: 5 }}>
              <Typography variant="body1">Hello, I am</Typography>
              <Typography variant="h4" sx={{ fontWeight: 600 }}>
                Jenny
              </Typography>
            </Box>
          </AnimatedBox>
        </Stack>
        <Stack direction="row" spacing={2} alignItems="center" sx={{ mt: 5 }}>
          <Box
            sx={{
              bgcolor: "white",
              borderRadius: "1rem",
              boxShadow: "0 0 1.5rem rgba(0, 0, 0, .1)",
              padding: "1rem 1.5rem",
              textAlign: "center",
            }}
          >
            <Typography variant="body2" color="text.secondary">
              WEB DEVELOPER
            </Typography>
            <Typography variant="body2" color="text.secondary">
              FRONTEND ENGINEER
            </Typography>
            <Typography variant="body2" color="text.secondary">
              REACT NATIVE DEVELOPER
            </Typography>
            <Typography variant="body2" color="text.secondary">
              BACKEND ENGINEER
            </Typography>
            <Typography variant="body2" color="text.secondary">
              FULLSTACK DEVELOPER
            </Typography>
          </Box>
        </Stack>
      </Box>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          opacity: 1,
          width: "fit-content",
        }}
      >
        <img
          src="https://solely-resume.netlify.app/static/media/profile.ee489764521abe34026b.png"
          alt="profile_bg"
          style={{
            position: "absolute",
            zIndex: 1,
            width:'84%',
            height:'100%'
          }}
        />
        <AnimatedImage
          src="https://solely-resume.netlify.app/static/media/circle.134eeeb1e58895b892195fe8ed63bc9f.svg"
          alt="profile_circle"
        />
      </Box>

      <AnimatedAvatars
        sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}
      >
        <Avatar src="/images/1.png" alt="html" sx={{width:'5rem', height:'5rem', bgcolor:'white', padding: 1}}/>
        <Avatar src="/images/2.png" alt="css" sx={{width:'5rem', height:'5rem', bgcolor:'white', padding: 1}}/>
        <Avatar src="/images/3.png" alt="javascript" sx={{width:'5rem', height:'5rem', bgcolor:'white', padding: 1}} />
        <Avatar src="/images/4.png" alt="react" sx={{width:'5rem', height:'5rem', bgcolor:'white', padding: 1}}/>
        <Avatar src="/images/5.png" alt="nodeJs" sx={{width:'5rem', height:'5rem', bgcolor:'white', padding: 1}}/>
      </AnimatedAvatars>
      
      </>
  );
}

export default About;