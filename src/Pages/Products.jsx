import React from "react";
import NavBar from "../components/NavBar";
import LeftBar from "../components/SalesSummary";
import ProductsMain from "../components/ProductsMain";
import { Grid, Typography } from "@mui/material";

import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import Paper from '@mui/material/Paper';

const Products = () => {
  return (
    <div>
  
        <NavBar>
        </NavBar>
      <Grid container sx={{ml:4}}>
        <Grid item sm={12} sx={{ background: "#ececec", height: "100vh" }}>
          <ProductsMain />
        </Grid>
      </Grid>
    </div>
  );
};

export default Products;
