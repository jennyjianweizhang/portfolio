import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';


const Navbar = () => {
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const navbarHeight = document.querySelector('.app-bar').clientHeight; 
        const handleScroll = () => {
          const sections = ["home", "about", "work", "skills", "contact"];
          const currentSection = sections.find((section) => {
            const element = document.getElementById(section);
            const elementTop = element.offsetTop - navbarHeight; 
            const elementBottom = elementTop + element.offsetHeight;
            return (
              window.scrollY >= elementTop &&
              window.scrollY < elementBottom
            );
          });
          if (currentSection && currentSection !== activeSection) {
            setActiveSection(currentSection);
          }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [activeSection]);

    return (
        <AppBar color="default" elevation={0} sx={{ maxWidth: '100vw', overflowX: 'hidden', position:'fixed', left: 0}} className="app-bar">
            <Toolbar sx={{ padding: '0 !important'}}>
                <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent:'center'}}>
                <Button color="inherit" component="a" href="#home">Home</Button>
                    <Button color="inherit" component="a" href="#about">About</Button>
                    <Button color="inherit" component="a" href="#work">Work</Button>
                    <Button color="inherit" component="a" href="#skills">Skills</Button>
                    <Button color="inherit" component="a" href="#contact">Contact</Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
