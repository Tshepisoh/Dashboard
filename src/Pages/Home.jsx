import React from "react";
import NavBar from "../components/NavBar";
import Rightbar from "../components/Rightbar";
import Main from "../components/Main";
import LeftBar from "../components/LeftBar";
import { Grid } from "@mui/material";

const Home = () => {
  return (
    <div>
      <Grid container sx={{ height: "calc(100vh - 64px)", flexDirection: "row" }}>
        {/* <Grid item xs={12} sm={2} sx={{ background: "white", display: "flex", flexDirection: "column" }}>
          <LeftBar />
        </Grid>
        <Grid item xs={12} sm={7} sx={{ background: "#ececec", display: "flex", flexDirection: "column" }}>
          <Main />
        </Grid>
        <Grid item xs={12} sm={3} sx={{ background: "#ececec", display: "flex", flexDirection: "column" }}>
          <Rightbar />
        </Grid> */}
      </Grid>
    </div>
  );
};

export default Home;
