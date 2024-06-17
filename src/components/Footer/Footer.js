import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  Grid,
} from "@mui/material";
import emailjs from "emailjs-com";

const Footer=()=> {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = (e) => {
    // input fields to be named using the name attribute (e.g., <input name="email" />)
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await emailjs.send(
        "service_opms8xf",
        "template_bxpt5p8",
        formValues,
        "SRGnC2hf-hcSqjDmS"
      );
      console.log(result.text);
      setOpenSnackbar(true);
    } catch (error) {
      console.error("Failed to send email:", error);
    }
  };


  return (
    <Box sx={{ width: "100%", padding: 4, backgroundColor: "#fff" }}>
      <Typography variant="h4" gutterBottom sx={{ textAlign: "center" }}>
        Take a coffee & chat with me
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={6} md={3}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              bgcolor: "#fef4f5",
              borderRadius: "1rem",
              padding: "1rem",
            }}
          >
            <img
              src="./images/email.png"
              alt="email"
              width="40"
              height="40"
              style={{ marginRight: 1 + "rem" }}
            ></img>
            <a
              href="mailto:jianweizhangjenny@gmail.com"
              style={{ color: "black", textDecoration: "none" }}
            >
              jianweizhangjenny@gmail.com
            </a>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              bgcolor: "#edf2f8",
              borderRadius: "1rem",
              padding: "1rem",
            }}
          >
            <img
              src="./images/phone.png"
              alt="email"
              width="40"
              height="40"
              style={{ marginRight: 1 + "rem" }}
            ></img>
            <a
              href="tel:+1-626-486-7583"
              style={{ color: "black", textDecoration: "none" }}
            >
              +1 (626) 486-7583
            </a>
          </Box>
        </Grid>
      </Grid>
      {!openSnackbar ? (
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            mt: 4,
            "& .MuiTextField-root": { marginBottom: 2, width: "45rem" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            name="name"
            label="Your Name"
            variant="filled"
            value={formValues.name}
            onChange={handleChange}
          />
          <TextField
            name="email"
            type="email"
            label="Your Email"
            variant="filled"
            value={formValues.email}
            onChange={handleChange}
          />
          <TextField
            name="message"
            label="Your Message"
            multiline
            rows={4}
            variant="filled"
            value={formValues.message}
            onChange={handleChange}
          />
          <Button variant="contained" color="secondary" type="submit">
            Send Message
          </Button>
        </Box>
      ) : (

          <Typography
          variant="h4"
            sx={{ width: "100%", textAlign:'center', mt:5 }}
          >
            Thank you for getting in touch!
          </Typography>

      )}
       <Box sx={{ textAlign: 'center', mt: 4}}>
                <Typography variant="body2" color="text.secondary">
                    ©2024 Jenny Zhang. All rights reserved.
                </Typography>
            </Box>
    </Box>
  );
}

export default Footer;
