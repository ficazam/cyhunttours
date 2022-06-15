import React from "react";
import { Link } from 'react-router-dom';

import {
  Grid,
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Rating,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { AccessTime } from "@mui/icons-material";

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "body2",
          },
          style: {
            fontSize: 11,
          },
        },
        {
          props: {
            variant: "body3",
          },
          style: {
            fontSize: 9,
          },
        },
      ],
    },
  },
});

export const CardComp = ({ tour }) => {
  return (
    <Grid item xs={12} md={3}>
      <ThemeProvider theme={theme}>
        <Card sx={{ maxWidth: 500 }}>
        <Link to={`tours/tour${tour.id}`} style={{ textDecoration: 'none', color: 'inherit' }} state={tour}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="75"
              image={tour.image}
              alt={tour.name}
            />
            <CardContent>
              <Box>
                <Typography gutterBottom variant="subtitle1" component="h2">
                  {tour.name}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <AccessTime sx={{ width: 12.5 }} />
                  <Typography
                    variant="body2"
                    component="p"
                    marginLeft={0.5}
                  >{`${tour.duration} hours`}</Typography>
                </Box>
                <Box
                  sx={{ display: "flex", alignItems: "center" }}
                  paddingTop={3}
                >
                  <Rating
                    name="rating"
                    value={tour.rating}
                    precision={0.5}
                    readOnly
                  />
                  <Typography variant="body2" component="p" marginLeft={0.5}>
                    {tour.rating}
                  </Typography>
                  <Typography variant="body3" component="p" marginLeft={0.5}>
                    {`(${tour.numberOfReviews} reviews)`}
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography
                    variant="h5"
                    component="p"
                  >{`From $${tour.price}`}</Typography>
                </Box>
              </Box>
            </CardContent>
          </CardActionArea>
          </Link>
        </Card>
      </ThemeProvider>
    </Grid>
  );
};
