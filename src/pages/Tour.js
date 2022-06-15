import React from "react";
import { useLocation } from "react-router-dom";

import { Box, Button, Container, Typography } from "@mui/material";

import { ImgComp } from "../components/ImgComp";
import { AccordionComp } from "../components/AccordionComp";

export const Tour = () => {
  const location = useLocation();
  const tour = location.state;

  return (
    <Container sx={{ width: 900 }}>
      <Typography variant="h3" element="h1" marginTop={3}>
        {tour.name}
      </Typography>
      <Box marginTop={3} sx={{ display: "flex" }}>
        <img src={tour.image} alt={tour.name} height={250} />
        <ImgComp />
      </Box>
      <Box>
        <Typography variant="h6" element="h4" marginY={3}>
          About this Ticket
        </Typography>
        <Typography variant="paragraph" element="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
      </Box>
      <Box>
        <Typography variant="h6" element="h4" marginY={3}>
          Frequently Asked Questions
        </Typography>
        <AccordionComp />
      </Box>
      <Box  marginY={3} style={{ display: 'flex', justifyContent: 'center' }}>
        <Button variant="text" onClick={() => alert('Tour Unavailable in your Region! :(')}>
          Book Now
        </Button>
      </Box>
    </Container>
  );
};
