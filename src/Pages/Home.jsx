import React from "react";
import NavBar from "../components/NavBar";
import SalesSummary from "../components/Purchase";
import Main from "../components/Main";
import Purchase from "../components/SalesSummary";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import { styled } from "@mui/material";



const Home = () => {
  return (
    <div>


<NavBar/>
      <Box component="main" sx={{ flexGrow:1, display: 'flex', flexDirection: 'column' }}>
        <Grid
          container
          sx={{ height: "calc(100vh)", width: '100%',ml:5, display:'flex' }} // Adjust height based on AppBar height
        >
          <Grid
            item
            xs={12}
            md={12}
            lg={6}
            xl={4}
            sx={{
              background: "#f0f8ff",
              display: "flex",
              justifyContent: "center", // Center horizontally
              alignItems: "center",     // Center vertically
              height: '100%',           // Ensure the item takes full height of the container
              
            }}
          >
            <Main />
          </Grid>
          <Grid
            item
            xs={12}
            md={12}
            lg={6}
            xl={4}
            sx={{
              background: "#f0f8ff",
              display: "flex",
              justifyContent: "center", 
              alignItems: "center",     
              height: '100%',         
            }}
          >
           <SalesSummary/>
          </Grid>
          <Grid
            item
            xs={12}
            xl={4}
            sx={{
              background: "#f0f8ff",
              display: "flex",
              justifyContent: "center", 
              alignItems: "center",     
              height: '100%',          
            }}
          >
            <Purchase/>
          </Grid>
        </Grid>

      </Box>     
    </div>
  );
};

export default Home;
