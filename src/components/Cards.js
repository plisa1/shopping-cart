import Card from "@mui/material/Card";
import React, { useContext } from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
//import Box from "@mui/material/Box";
//import styles from "./Cards.module.css";
import Button from "@mui/material/Button";
import CartContext from "../store/cart-store/cart-context";
//import CardActions from "@mui/material/CardActions";
import milktea from "../public/itemImages";

//css is overriden

//still under construction
const PAGE_PRODUCTS = "products";
const PAGE_CART = "cart";

let cardMaterials = [
  {
    id: "1",
    name: "Bubble Milk Tea",
    description: "Black tea, tapioca, milk, and sugar",
  },
  {
    id: "2",
    name: "Thai Milk Tea",
    description: "Thai tea leaves, milk, and sugar",
  },
  {
    id: "3",
    name: "Matcha Milk Tea",
    description: "Matcha, milk, and sugar",
  },
  {
    id: "4",
    name: "Taro Milk Tea",
    description: "Taro, milk, and sugar",
  },
  {
    id: "5",
    name: "Reuseable Straw",
    description: "Eco-friendly reuseable straws",
  },
  {
    id: "6",
    name: "Boba Bag",
    description: "Bubble tea carrier bag",
  },
];

const itemsBeingSold = [{ id: 1, image: "milktea" }];

export default function BasicCard() {
  const { addItem, cartArray } = useContext(CartContext);
  console.log(cartArray);
  const handleClick = (item) => {
    addItem(item);
  };

  //still under construction
  //const [page, setPage] = useState("products");

  return (
    <Grid container spacing={2}>
      {cardMaterials.map((card, index) => (
        <Grid key={index} item xs={12} md={4} lg={2}>
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
              <div>
                {itemsBeingSold.map((area) => {
                  return <img key={area.id} src={require(area.image)} />;
                })}
              </div>
              <Button
                onClick={() => handleClick(card)}
                variant="outlined"
                sx={{ mb: -33 }}
              >
                Add to Cart
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
