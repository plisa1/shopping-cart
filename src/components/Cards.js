import Card from "@mui/material/Card";
import React from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
//import Box from "@mui/material/Box";
//import styles from "./Cards.module.css";
import Button from "@mui/material/Button";
//import CardActions from "@mui/material/CardActions";
//css is overriden

let cardMaterials = [
  {
    id: "1",
    name: "Some Cart Item 1",
    description: "Some description for Cart Item 1",
  },
  {
    id: "2",
    name: "Some Cart Item 2",
    description: "Some description for Cart Item 2",
  },
  {
    id: "3",
    name: "Some Cart Item 3",
    description: "Some description for Cart Item 3",
  },
  {
    id: "4",
    name: "Some Cart Item 4",
    description: "Some description for Cart Item 4",
  },
  {
    id: "5",
    name: "Some Cart Item 5",
    description: "Some description for Cart Item 5",
  },
  {
    id: "6",
    name: "Some Cart Item 6",
    description: "Some description for Cart Item 6",
  },
];

export default function BasicCard() {
  return (
    <Grid container spacing={2}>
      {cardMaterials.map((card) => (
        <Grid item xs={12} md={4} lg={2}>
          <Card
            // style={{ backgroundColor: card.id === "1" ? "red" : "yellow" }}
            //classNames={styles.card}
            sx={{
              maxWidth: 250,
              height: 250,
            }}
            align="center"
          >
            <CardContent>
              <Typography variant="h6" component="div">
                {card.name}
              </Typography>
              <Typography variant="body2">{card.description}</Typography>

              <Button variant="outlined" sx={{ mb: -33 }}>
                Add to Cart
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
