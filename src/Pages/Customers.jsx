import React from 'react'
import NavBar from "../components/NavBar";
import LeftBar from "../components/LeftBar";
import { Grid } from "@mui/material";
import CustomerMain from '../components/CustomerMain';

const Customers = () => {
  return (
    <div>
    <NavBar />
    <Grid container>
      <Grid item sm={2} sx={{ background: "white", height: "100vh" }}>
        <LeftBar />
      </Grid>
      <Grid item sm={10} sx={{ background: "#ececec", height: "100vh" }}>
       <CustomerMain/>
      </Grid>
    </Grid>
  </div>
  )
}

export default Customers