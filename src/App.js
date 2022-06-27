import React from "react";
//import styles from "./App.css";
import Menu from "./components/Menu";
import Cards from "./components/Cards";
import { Paper } from "@mui/material";

function App() {
  return (
    <>
      <Menu />
      <Paper
        sx={{
          backgroundColor: "white",
          p: 5,
        }}
      >
        <Cards />
      </Paper>
    </>
  );
}

export default App;
