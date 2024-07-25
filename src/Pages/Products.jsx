import React from "react";
import NavBar from "../components/NavBar";
import LeftBar from "../components/LeftBar";
import ProductsMain from "../components/ProductsMain";
import { Grid } from "@mui/material";

const Products = () => {
  return (
    <div>
      <NavBar />
      <Grid container>
        <Grid item sm={2} sx={{ background: "white", height: "100vh" }}>
          <LeftBar />
        </Grid>
        <Grid item sm={10} sx={{ background: "#ececec", height: "100vh" }}>
          <ProductsMain />
        </Grid>
      </Grid>
    </div>
  );
};

export default Products;
