import Card from "@mui/material/Card";
import React from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
//import styles from "./Cards.module.css";
//import Button from "@mui/material/Button";
//import CardActions from "@mui/material/CardActions";
//css is overriden

let cardMaterials = [
  {
    categories: {
      first: {
        id: "1",
        name: "Some Cart Item 1",
        description: "Some description for Cart Item 1",
      },
      second: {
        id: "2",
        name: "Some Cart Item 2",
        description: "Some description for Cart Item 2",
      },
      third: {
        id: "3",
        name: "Some Cart Item 3",
        description: "Some description for Cart Item 3",
      },
      fourth: {
        id: "4",
        name: "Some Cart Item 4",
        description: "Some description for Cart Item 4",
      },
      fifth: {
        id: "5",
        name: "Some Cart Item 5",
        description: "Some description for Cart Item 5",
      },
      sixth: {
        id: "6",
        name: "Some Cart Item 6",
        description: "Some description for Cart Item 6",
      },
    },
  },
];

export default function BasicCard() {
  for (let i = 0; i < cardMaterials.length; i++);
  return (
    <Grid container direction="row" justifyContent="center">
      <Box m={2} pt={1}>
        <Card sx={{ maxWidth: 300 }} align="center">
          <CardContent>
            <Typography variant="h6" component="div">
              Some Cart Item 1
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="black">
              Words words words
            </Typography>
            <Typography variant="body2">
              Some description for Cart Item 1
            </Typography>
          </CardContent>
        </Card>
      </Box>

      <Box m={2} pt={1}>
        <Card sx={{ maxWidth: 300 }} align="center">
          <CardContent>
            <Typography variant="h6" component="div">
              Some Cart Item 2
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="black">
              Words words words
            </Typography>
            <Typography variant="body2">
              Some description for Cart Item 2
            </Typography>
          </CardContent>
        </Card>
      </Box>

      <Box m={2} pt={1}>
        <Card sx={{ maxWidth: 300 }} align="center">
          <CardContent>
            <Typography variant="h6" component="div">
              Some Cart Item 3
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="black">
              Words words words
            </Typography>
            <Typography variant="body2">
              Some description for Cart Item 3
            </Typography>
          </CardContent>
        </Card>
      </Box>

      <Box m={2} pt={1}>
        <Card sx={{ maxWidth: 300 }} align="center">
          <CardContent>
            <Typography variant="h6" component="div">
              Some Cart Item 4
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="black">
              Words words words
            </Typography>
            <Typography variant="body2">
              Some description for Cart Item 4
            </Typography>
          </CardContent>
        </Card>
      </Box>

      <Box m={2} pt={1}>
        <Card sx={{ maxWidth: 300 }} align="center">
          <CardContent>
            <Typography variant="h6" component="div">
              Some Cart Item 5
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="black">
              Words words words
            </Typography>
            <Typography variant="body2">
              Some description for Cart Item 5
            </Typography>
          </CardContent>
        </Card>
      </Box>

      <Box m={2} pt={1}>
        <Card sx={{ maxWidth: 300 }} align="center">
          <CardContent>
            <Typography variant="h6" component="div">
              Some Cart Item 6
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="black">
              Words words words
            </Typography>
            <Typography variant="body2">
              Some description for Cart Item 6
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Grid>
  );
}
