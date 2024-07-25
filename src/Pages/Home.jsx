import React from 'react'
import NavBar from '../components/NavBar'
import Rightbar from "../components/Rightbar";
import Main from "../components/Main";
import LeftBar from "../components/LeftBar";
import { Grid } from "@mui/material";

const Home = () => {
  return (
    <div>
        <NavBar />
          <Grid container>
            <Grid item sm={2} sx={{ background: "white", height: "100vh" }}>
              <LeftBar />
            </Grid>
            <Grid item sm={7} sx={{ background: "#ececec", height: "100vh" }}>
              <Main />
            </Grid>
            <Grid item sm={3} sx={{ background: "#ececec", height: "100vh" }}>
              <Rightbar />
            </Grid>
          </Grid>
    </div>
  )
}

export default Home;
