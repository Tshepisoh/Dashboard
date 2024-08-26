import React from 'react'
import NavBar from "../components/NavBar";
import LeftBar from "../components/SalesSummary";
import { Grid } from "@mui/material";
import CustomerMain from '../components/CustomerMain';

const Customers = () => {
  return (
    <div>
    <NavBar />
    <Grid >
      <Grid item sm={12} sx={{ background: "#ececec", height: "100vh" }}>
       <CustomerMain/>
      </Grid>
    </Grid>
  </div>
  )
}

export default Customers