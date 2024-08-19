import React from 'react';
import IncomeMain from '../components/IncomeMain';
import NavBar from "../components/NavBar";
import LeftBar from "../components/LeftBar";
import { Grid } from "@mui/material";

const Income = () => {
  return (
    <div>
      <NavBar />
      <Grid container>
        <Grid item sm={2} sx={{ background: "white", height: "100vh" }}>
          <LeftBar />
        </Grid>
        <Grid item sm={10} sx={{ background: "#ececec", height: "100vh" }}>
          <IncomeMain/>
        </Grid>
      </Grid>
    </div>
  )
}

export default Income