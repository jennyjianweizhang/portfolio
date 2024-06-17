import React, { useState } from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import styled from "styled-components";

const PortfolioCard = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
`;

const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 12rem;
  transition: transform 0.3s ease;
`;

const HoverOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity 0.3s ease;
  &:hover {
    opacity: 1;
  }
`;

const IconLink = styled.a`
  margin: 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(0.9);
  }
`;

const Info = styled.div`
  padding: 16px;
`;

const Title = styled.h4`
  margin: 0;
  color: #313bac;
  font-size: 18px;
`;

const Description = styled.p`
  color: #666;
  font-size: 14px;
`;

const Work = () => {
  const projects = [
    {
      title: "SolelySneat",
      imageUrl:
        "https://cdn.sanity.io/images/w1h2v7s6/production/323406ac05b5f8b892b819cec150e2e93fdca1fa-500x265.png",
      description:
        "Material Design React Admin Dashboard – This developer-friendly and highly customizable Admin Dashboard is built on MUI v5.",
      tags: ["ReactJs", "Redux", "NodeJs"],
      //   need change url
      liveUrl: "https://material-design-react-admin-dashboard.netlify.app",
      codeUrl: "https://github.com/jennyjianweizhang/React-BackEnd-Project.git",
    },

    {
      title: "Covilla Vacation",
      imageUrl:
        "https://cdn.sanity.io/images/w1h2v7s6/production/90fba844c04841a72a4f9ea62e1755926be76abf-500x282.png",
      description:
        "A family travel agency website that offers comprehensive information on global vacation destinations and travel rates for each location.",
      tags: ["Javascript", "HTML", "CSS"],
      liveUrl: "https://javascript-vacation.netlify.app",
      codeUrl:
        "https://github.com/jennyjianweizhang/javascript-vacation-project.git",
    },
    {
      title: "WeatherStack",
      imageUrl:
        "https://cdn.sanity.io/images/w1h2v7s6/production/d37e46ba616dc761b18201da504ffcacd048ab8f-500x318.png",
      description:
        "Get current weather information, historical data and forecasts using weatherstack - a free world weather REST API supporting global locations.",
      tags: ["HTML", "CSS"],
      liveUrl: "https://html-css-weather-project.netlify.app",
      codeUrl: "https://github.com/jennyjianweizhang/html-css-project.git",
    },
    {
      title: "Salinaka-ecommerce",
      imageUrl:
        "https://cdn.sanity.io/images/w1h2v7s6/production/28595b676dfa369c359a712193944b13e610db1d-600x341.png",
      description:
        "Explore our e-commerce site for stylish, budget-friendly eyewear. Find your perfect pair with ease and affordability.",
      tags: ["ReactJs", "Redux", "NodeJs"],
      liveUrl: "https://react-shopping-site-project.netlify.app/",
      codeUrl:
        "https://github.com/jennyjianweizhang/react-shopping-site-project.git",
    },
  ];

  const [activeFilter, setActiveFilter] = useState("All");
  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  const filteredProjects = projects.filter((project) =>
    activeFilter === "All" ? true : project.tags.includes(activeFilter)
  );

  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Typography variant="h2" sx={{ mb: 4, textAlign: "center", fontWeight:'500'}}>
        My Creative <span style={{ color: "#313bac" }}>Portfolio</span> Section
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
        {["HTML", "CSS", "Javascript", "ReactJs", "Redux", "NodeJs", "All"].map(
          (filter) => (
            <Button
              key={filter}
              sx={{
                margin: "0 8px",
                color: activeFilter === filter ? "#fff" : "#000",
                backgroundColor: activeFilter === filter ? "#313bac" : "#fff",
                "&:hover": {
                  backgroundColor: "#313bac",
                  color: "#fff",
                },
              }}
              onClick={() => handleFilterChange(filter)}
            >
              {filter}
            </Button>
          )
        )}
      </Box>
      <Grid container spacing={4}>
        {filteredProjects.map((project) => (
          <Grid item xs={12} sm={6} md={3} key={project.title}>
            <PortfolioCard>
              <ImageContainer>
                <Image src={project.imageUrl} alt={project.title} />
                <HoverOverlay>
                  <IconLink
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                    >
                      <path
                        d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                        stroke="#fff"
                        strokeWidth="2"
                      />
                      <circle cx="12" cy="12" r="3" fill="#fff" />
                    </svg>
                  </IconLink>
                  <IconLink
                    href={project.codeUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      stroke="#fff"
                      fill="#fff"
                      strokeWidth="0"
                      viewBox="0 0 1024 1024"
                      height="24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
                    </svg>
                  </IconLink>
                </HoverOverlay>
              </ImageContainer>
              <Info>
                <Title>{project.title}</Title>
                <Description>{project.description}</Description>
              </Info>
            </PortfolioCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Work;
