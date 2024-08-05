import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";

const NavigationDots = () => {
  const [activeSection, setActiveSection] = useState("");
  useEffect(() => {
    const navbarHeight = document.querySelector(".app-bar").clientHeight;

    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const sections = ["home", "about", "work", "skills", "contact"];
      let currentSection = "";

      const scrollPosition = window.scrollY + viewportHeight;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const elementTop = element.offsetTop - navbarHeight;
          const elementBottom = elementTop + element.offsetHeight;
          const isAtBottom = scrollPosition >= documentHeight;

          if (
            (window.scrollY >= elementTop && window.scrollY < elementBottom) ||
            (isAtBottom && section === "contact")
          ) {
            currentSection = section;
            break;
          }
        }
      }

      if (currentSection && currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  const dotStyle = (section) => ({
    display: "block",
    height: "15px",
    width: "15px",
    backgroundColor: activeSection === section ? "rgb(49, 59, 172)" : "#ccc",
    marginBottom: "10px",
    borderRadius: "50%",
    transition: "background-color 0.3s",
  });
  console.log(`Dot style for home: ${dotStyle("home").backgroundColor}`);

  return (
    <Box
      sx={{
        position: "fixed",
        right: { xs: '50%', sm: 30 },
        top: "50%",
        transform: "translateY(-50%)",
        display: "flex",
        flexDirection: "column",
        zIndex: 1200,
      }}
    >
      <a href="#home" style={dotStyle("home")}></a>
      <a href="#work" style={dotStyle("work")}></a>
      <a href="#skills" style={dotStyle("skills")}></a>
      <a href="#about" style={dotStyle("about")}></a>
      <a href="#contact" style={dotStyle("contact")}></a>
    </Box>
  );
}

export default NavigationDots;
