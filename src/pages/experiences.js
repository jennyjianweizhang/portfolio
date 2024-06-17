import React from "react";
import { Box, Typography, Grid, Paper, Container } from "@mui/material";
import styled from "styled-components";
import SocialMedia from "../components/Social/SocialMedia";

const SkillImage = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 8px;
`;

const ExperienceItem = styled(Paper)`
  padding: 16px;
  margin-top: 8px;
`;

const SkillsExperiences = () => {
  return (
    <>
    <Container maxWidth="lg" sx={{mt:5}}>
      <Box sx={{ position: "relative", top: "16px" }}>
        <Typography
          variant="h2"
          gutterBottom
          sx={{ textAlign: "center", fontWeight: "500" }}
        >
          Skills & Experiences
        </Typography>
      </Box>

      <Grid container spacing={2} sx={{mt:0}}>
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            {[
              {
                src: "https://cdn.sanity.io/images/w1h2v7s6/production/d8c8025b1695a3f14f849b99afc71d917ef40813-480x480.png",
                alt: "NodeJS",
              },
              {
                src: "https://cdn.sanity.io/images/w1h2v7s6/production/a46e60325617611a441bdd58a817545fb62dab84-336x150.jpg",
                alt: "less",
              },
              {
                src: "https://cdn.sanity.io/images/w1h2v7s6/production/a804a741fb26f6c236c73086a87cfc9f64106401-480x480.png",
                alt: "git",
              },
              {
                src: "https://cdn.sanity.io/images/w1h2v7s6/production/a9060999e44997722d3664c7a4a1a76828de4b66-225x225.jpg",
                alt: "bootstrap5",
              },
              {
                src: "https://cdn.sanity.io/images/w1h2v7s6/production/31f11147f89dbd855a9b948e2ce643ea2f41c0a9-480x480.png",
                alt: "HTML",
              },
              {
                src: "https://cdn.sanity.io/images/w1h2v7s6/production/107574d887f1c07c9fbea0704de7f293e244a8f3-480x480.png",
                alt: "CSS",
              },
              {
                src: "https://cdn.sanity.io/images/w1h2v7s6/production/66bbf9242b1ccffebb5d46f376f5036b527fad48-480x480.png",
                alt: "JavaScript",
              },
              {
                src: "https://cdn.sanity.io/images/w1h2v7s6/production/2825d163301127c72b6121baebb5e570689596e5-480x480.png",
                alt: "Sass",
              },
              {
                src: "https://cdn.sanity.io/images/w1h2v7s6/production/64f3e20f8ad906d56dea96863b6db87fad6efb52-64x64.png",
                alt: "Typescript",
              },
              {
                src: "https://cdn.sanity.io/images/w1h2v7s6/production/91716227a0183f05eb4c2c846dda4ec6d3ea433c-480x480.png",
                alt: "Redux",
              },
            ].map((skill) => (
              <Grid item xs={4} key={skill.alt}>
                <Box textAlign="center">
                  <SkillImage src={skill.src} alt={skill.alt} />
                  <Typography>{skill.alt}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Experiences
          </Typography>
          {[
            {
              year: "2021-Present",
              title: "Operations Associate",
              company: "D Consulting Capital LLC",
            },
            {
                year: "2019-2020",
                title: "Ecommerce Assistant",
                company: "DJI Technology Co. Ltd.",
            },
            {
                year: "2017-2018",
                title: "Marketing Assistant",
                company: "Wave Plastic Surgery",
            },
          ].map((exp) => (
            <ExperienceItem key={`${exp.year}-${exp.title}`}>
              <Typography variant="body1" color="textSecondary">
                {exp.year}
              </Typography>
              <Typography variant="h6">{exp.title}</Typography>
              <Typography variant="body2">{exp.company}</Typography>
            </ExperienceItem>
          ))}
        </Grid>
      </Grid>
    </Container>
    <Box sx={{position:"relative", bottom:'100px', left:'15px'}}>
    <SocialMedia />
    </Box>
    
    </>
  );
};

export default SkillsExperiences;
