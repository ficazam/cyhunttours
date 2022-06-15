import React from "react";

import { Container, Grid, Typography } from "@mui/material";

import { CardComp } from "./CardComp";

import { data } from "../store/data";

export const ContainerComp = (props) => {
  return (
    <Container maxWidth="xl">
      {data.map((item) => {
        return (
          <>
            <Typography
              variant="h4"
              component="h2"
              marginBottom={3}
              marginTop={5}
            >
              Top {item.name} Tours
            </Typography>
            <Grid container spacing={5}>
              {item.tours.map((tour) => {
                return (
                  <CardComp key={tour.id} tour={tour} />
                );
              })}
            </Grid>
          </>
        );
      })}
    </Container>
  );
};
