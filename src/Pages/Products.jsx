import React from "react";
import NavBar from "../components/NavBar";
import ProductsMain from "../components/ProductsMain";
import { Grid } from "@mui/material";

const Products = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Grid container sx={{ ml: 4 }}>
        <Grid item sm={12} sx={{ background: "#ececec", height: "100vh" }}>
          <ProductsMain />
        </Grid>
      </Grid>
    </div>
  );
};

export default Products;
