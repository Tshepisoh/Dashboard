import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";

const labels = {
  0.5: "Useless+",
  1: "Useless",
  1.5: "Poor+",
  2: "Poor",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

const value = 3.5;

const ProductsMain = () => {
  return (
    <Grid sx={{ overflowY: "auto", height: "100%", scrollbarWidth: "none" }}>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 3,
            ml: 7,
            width: 300,
            height: 450,
            ":hover":{
              cursor:'pointer',
              background:'#e1e1e1',
              fontSize:25,
              fontWeight:'solid'
            }
          },
        }}
      >
        <Paper elevation={3}>
          <img
            src="15477911_5564330.jpg"
            alt="ninja"
            style={{ height: 200, width: 200, margin: 50, borderRadius: 10 }}
          ></img>
          <Typography variant="h6" sx={{ ml: 3, mt: -4 }}>
            Product B
          </Typography>
          <Typography variant="subtitle1" sx={{ ml: 3, mt: 0 }}>
            UI KIT
          </Typography>
          <Typography variant="h6" sx={{ ml: 3, mt: 3 }}>
            Earnings:$4100
          </Typography>
          <Box
            sx={{
              width: 200,
              display: "flex",
              alignItems: "center",
              ml: 3,
              mt: 2,
            }}
          >
            <Rating
              name="text-feedback"
              value={4}
              readOnly
              precision={0.5}
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              }
            />
            <Box sx={{ ml: 2 }}>{labels[4]}</Box>
          </Box>
        </Paper>
        <Paper elevation={3}>
          <img
            src="21743158_6479743.jpg"
            alt="ninja"
            style={{ height: 200, width: 200, margin: 50, borderRadius: 10 }}
          ></img>
          <Typography variant="h6" sx={{ ml: 3, mt: -4 }}>
            Product C
          </Typography>
          <Typography variant="subtitle1" sx={{ ml: 3, mt: 0 }}>
            UI KIT
          </Typography>
          <Typography variant="h6" sx={{ ml: 3, mt: 3 }}>
            Earnings:$5000
          </Typography>
          <Box
            sx={{
              width: 200,
              display: "flex",
              alignItems: "center",
              ml: 3,
              mt: 2,
            }}
          >
            <Rating
              name="text-feedback"
              value={4}
              readOnly
              precision={0.5}
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              }
            />
            <Box sx={{ ml: 2 }}>{labels[4]}</Box>
          </Box>
        </Paper>
        <Paper elevation={3}>
          <img
            src="87943427_PANDA BAMBOO.jpg"
            alt="Panda"
            style={{ height: 200, width: 200, margin: 50, borderRadius: 10 }}
          ></img>{" "}
          <Typography variant="h6" sx={{ ml: 3, mt: -4 }}>
            Product A
          </Typography>
          <Typography variant="subtitle1" sx={{ ml: 3, mt: 0 }}>
            UI KIT
          </Typography>
          <Typography variant="h6" sx={{ ml: 3, mt: 3 }}>
            Earnings:$2220
          </Typography>
          <Box
            sx={{
              width: 200,
              display: "flex",
              alignItems: "center",
              ml: 3,
              mt: 2,
            }}
          >
            <Rating
              name="text-feedback"
              value={4.5}
              readOnly
              precision={0.5}
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              }
            />
            <Box sx={{ ml: 2 }}>{labels[4.5]}</Box>
          </Box>
        </Paper>
        <Paper elevation={3}>
          <img
            src="apple-7741471_1280.png"
            alt="ninja"
            style={{ height: 200, width: 200, margin: 50, borderRadius: 10 }}
          ></img>
          <Typography variant="h6" sx={{ ml: 3, mt: -4 }}>
            Product H
          </Typography>
          <Typography variant="subtitle1" sx={{ ml: 3, mt: 0 }}>
            UI KIT
          </Typography>
          <Typography variant="h6" sx={{ ml: 3, mt: 3 }}>
            Earnings:$2530
          </Typography>
          <Box
            sx={{
              width: 200,
              display: "flex",
              alignItems: "center",
              ml: 3,
              mt: 2,
            }}
          >
            <Rating
              name="text-feedback"
              value={4}
              readOnly
              precision={0.5}
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              }
            />
            <Box sx={{ ml: 2 }}>{labels[4]}</Box>
          </Box>
        </Paper>

        <Paper elevation={3}>
          <img
            src="ai-generated-8531085_1280.png"
            alt="ninja"
            style={{ height: 200, width: 200, margin: 50, borderRadius: 10 }}
          ></img>{" "}
          <Typography variant="h6" sx={{ ml: 3, mt: -4 }}>
            Product F
          </Typography>
          <Typography variant="subtitle1" sx={{ ml: 3, mt: 0 }}>
            UI KIT
          </Typography>{" "}
          <Typography variant="h6" sx={{ ml: 3, mt: 3 }}>
            Earnings:$2150
          </Typography>
          <Box
            sx={{
              width: 200,
              display: "flex",
              alignItems: "center",
              ml: 3,
              mt: 2,
            }}
          >
            <Rating
              name="text-feedback"
              value={4}
              readOnly
              precision={0.5}
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              }
            />
            <Box sx={{ ml: 2 }}>{labels[4]}</Box>
          </Box>
        </Paper>
        <Paper elevation={3}>
          <img
            src="ai-generated-8531087_1280.png"
            alt="ninja"
            style={{ height: 200, width: 200, margin: 50, borderRadius: 10 }}
          ></img>{" "}
          <Typography variant="h6" sx={{ ml: 3, mt: -4 }}>
            Product J
          </Typography>
          <Typography variant="subtitle1" sx={{ ml: 3, mt: 0 }}>
            UI KIT
          </Typography>{" "}
          <Typography variant="h6" sx={{ ml: 3, mt: 3 }}>
            Earnings:$3500
          </Typography>
          <Box
            sx={{
              width: 200,
              display: "flex",
              alignItems: "center",
              ml: 3,
              mt: 2,
            }}
          >
            <Rating
              name="text-feedback"
              value={value}
              readOnly
              precision={0.5}
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              }
            />
            <Box sx={{ ml: 2 }}>{labels[value]}</Box>
          </Box>
        </Paper>
        <Paper elevation={3}>
          <img
            src="ai-generated-8531096_1280.png"
            alt="ninja"
            style={{ height: 200, width: 200, margin: 50, borderRadius: 10 }}
          ></img>{" "}
          <Typography variant="h6" sx={{ ml: 3, mt: -4 }}>
            Product I
          </Typography>
          <Typography variant="subtitle1" sx={{ ml: 3, mt: 0 }}>
            UI KIT
          </Typography>
          <Typography variant="h6" sx={{ ml: 3, mt: 3 }}>
            Earnings:$4000
          </Typography>
          <Box
            sx={{
              width: 200,
              display: "flex",
              alignItems: "center",
              ml: 3,
              mt: 2,
            }}
          >
            <Rating
              name="text-feedback"
              value={value}
              readOnly
              precision={0.5}
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              }
            />
            <Box sx={{ ml: 2 }}>{labels[value]}</Box>
          </Box>
        </Paper>
        <Paper elevation={3}>
          <img
            src="logo-1873902_1280.png"
            alt="ninja"
            style={{ height: 200, width: 200, margin: 50, borderRadius: 10 }}
          ></img>{" "}
          <Typography variant="h6" sx={{ ml: 3, mt: -4 }}>
            Product G
          </Typography>
          <Typography variant="subtitle1" sx={{ ml: 3, mt: 0 }}>
            UI KIT
          </Typography>
          <Typography variant="h6" sx={{ ml: 3, mt: 3 }}>
            Earnings:$3055
          </Typography>
          <Box
            sx={{
              width: 200,
              display: "flex",
              alignItems: "center",
              ml: 3,
              mt: 2,
            }}
          >
            <Rating
              name="text-feedback"
              value={value}
              readOnly
              precision={0.5}
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              }
            />
            <Box sx={{ ml: 2 }}>{labels[value]}</Box>
          </Box>
        </Paper>
        <Paper elevation={3}>
          <img
            src="15477911_5564330.jpg"
            alt="ninja"
            style={{ height: 200, width: 200, margin: 50, borderRadius: 10 }}
          ></img>
          <Typography variant="h6" sx={{ ml: 3, mt: -4 }}>
            Product B
          </Typography>
          <Typography variant="subtitle1" sx={{ ml: 3, mt: 0 }}>
            UI KIT
          </Typography>
          <Typography variant="h6" sx={{ ml: 3, mt: 3 }}>
            Earnings:$4100
          </Typography>
          <Box
            sx={{
              width: 200,
              display: "flex",
              alignItems: "center",
              ml: 3,
              mt: 2,
            }}
          >
            <Rating
              name="text-feedback"
              value={value}
              readOnly
              precision={0.5}
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              }
            />
            <Box sx={{ ml: 2 }}>{labels[value]}</Box>
          </Box>
        </Paper>
        <Paper elevation={3}>
          <img
            src="21743158_6479743.jpg"
            alt="ninja"
            style={{ height: 200, width: 200, margin: 50, borderRadius: 10 }}
          ></img>
          <Typography variant="h6" sx={{ ml: 3, mt: -4 }}>
            Product C
          </Typography>
          <Typography variant="subtitle1" sx={{ ml: 3, mt: 0 }}>
            UI KIT
          </Typography>
          <Typography variant="h6" sx={{ ml: 3, mt: 3 }}>
            Earnings:$5000
          </Typography>
          <Box
            sx={{
              width: 200,
              display: "flex",
              alignItems: "center",
              ml: 3,
              mt: 2,
            }}
          >
            <Rating
              name="text-feedback"
              value={4.5}
              readOnly
              precision={0.5}
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              }
            />
            <Box sx={{ ml: 2 }}>{labels[4.5]}</Box>
          </Box>
        </Paper>
        <Paper elevation={3}>
          <img
            src="87943427_PANDA BAMBOO.jpg"
            alt="Panda"
            style={{ height: 200, width: 200, margin: 50, borderRadius: 10 }}
          ></img>{" "}
          <Typography variant="h6" sx={{ ml: 3, mt: -4 }}>
            Product A
          </Typography>
          <Typography variant="subtitle1" sx={{ ml: 3, mt: 0 }}>
            UI KIT
          </Typography>
          <Typography variant="h6" sx={{ ml: 3, mt: 3 }}>
            Earnings:$2220
          </Typography>
          <Box
            sx={{
              width: 200,
              display: "flex",
              alignItems: "center",
              ml: 3,
              mt: 2,
            }}
          >
            <Rating
              name="text-feedback"
              value={4.5}
              readOnly
              precision={0.5}
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              }
            />
            <Box sx={{ ml: 2 }}>{labels[4.5]}</Box>
          </Box>
        </Paper>
        <Paper elevation={3}>
          <img
            src="apple-7741471_1280.png"
            alt="ninja"
            style={{ height: 200, width: 200, margin: 50, borderRadius: 10 }}
          ></img>
          <Typography variant="h6" sx={{ ml: 3, mt: -4 }}>
            Product H
          </Typography>
          <Typography variant="subtitle1" sx={{ ml: 3, mt: 0 }}>
            UI KIT
          </Typography>
          <Typography variant="h6" sx={{ ml: 3, mt: 3 }}>
            Earnings:$2530
          </Typography>
          <Box
            sx={{
              width: 200,
              display: "flex",
              alignItems: "center",
              ml: 3,
              mt: 2,
            }}
          >
            <Rating
              name="text-feedback"
              value={4.5}
              readOnly
              precision={0.5}
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              }
            />
            <Box sx={{ ml: 2 }}>{labels[4.5]}</Box>
          </Box>
        </Paper>

        <Paper elevation={3}>
          <img
            src="ai-generated-8531085_1280.png"
            alt="ninja"
            style={{ height: 200, width: 200, margin: 50, borderRadius: 10 }}
          ></img>{" "}
          <Typography variant="h6" sx={{ ml: 3, mt: -4 }}>
            Product F
          </Typography>
          <Typography variant="subtitle1" sx={{ ml: 3, mt: 0 }}>
            UI KIT
          </Typography>{" "}
          <Typography variant="h6" sx={{ ml: 3, mt: 3 }}>
            Earnings:$2150
          </Typography>
          <Box
            sx={{
              width: 200,
              display: "flex",
              alignItems: "center",
              ml: 3,
              mt: 2,
            }}
          >
            <Rating
              name="text-feedback"
              value={4.5}
              readOnly
              precision={0.5}
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              }
            />
            <Box sx={{ ml: 2 }}>{labels[4.5]}</Box>
          </Box>
        </Paper>
        <Paper elevation={3}>
          <img
            src="ai-generated-8531087_1280.png"
            alt="ninja"
            style={{ height: 200, width: 200, margin: 50, borderRadius: 10 }}
          ></img>{" "}
          <Typography variant="h6" sx={{ ml: 3, mt: -4 }}>
            Product J
          </Typography>
          <Typography variant="subtitle1" sx={{ ml: 3, mt: 0 }}>
            UI KIT
          </Typography>{" "}
          <Typography variant="h6" sx={{ ml: 3, mt: 3 }}>
            Earnings:$3500
          </Typography>
          <Box
            sx={{
              width: 200,
              display: "flex",
              alignItems: "center",
              ml: 3,
              mt: 2,
            }}
          >
            <Rating
              name="text-feedback"
              value={4.5}
              readOnly
              precision={0.5}
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              }
            />
            <Box sx={{ ml: 2 }}>{labels[4.5]}</Box>
          </Box>
        </Paper>
        <Paper elevation={3}>
          <img
            src="ai-generated-8531096_1280.png"
            alt="ninja"
            style={{ height: 200, width: 200, margin: 50, borderRadius: 10 }}
          ></img>{" "}
          <Typography variant="h6" sx={{ ml: 3, mt: -4 }}>
            Product I
          </Typography>
          <Typography variant="subtitle1" sx={{ ml: 3, mt: 0 }}>
            UI KIT
          </Typography>
          <Typography variant="h6" sx={{ ml: 3, mt: 3 }}>
            Earnings:$4000
          </Typography>
          <Box
            sx={{
              width: 200,
              display: "flex",
              alignItems: "center",
              ml: 3,
              mt: 2,
            }}
          >
            <Rating
              name="text-feedback"
              value={4.5}
              readOnly
              precision={0.5}
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              }
            />
            <Box sx={{ ml: 2 }}>{labels[4.5]}</Box>
          </Box>
        </Paper>
        <Paper elevation={3}>
          <img
            src="logo-1873902_1280.png"
            alt="ninja"
            style={{ height: 200, width: 200, margin: 50, borderRadius: 10 }}
          ></img>{" "}
          <Typography variant="h6" sx={{ ml: 3, mt: -4 }}>
            Product G
          </Typography>
          <Typography variant="subtitle1" sx={{ ml: 3, mt: 0 }}>
            UI KIT
          </Typography>
          <Typography variant="h6" sx={{ ml: 3, mt: 3 }}>
            Earnings:$3055
          </Typography>
          <Box
            sx={{
              width: 200,
              display: "flex",
              alignItems: "center",
              ml: 3,
              mt: 2,
            }}
          >
            <Rating
              name="text-feedback"
              value={4.5}
              readOnly
              precision={0.5}
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              }
            />
            <Box sx={{ ml: 2 }}>{labels[4.5]}</Box>
          </Box>
        </Paper>
      </Box>
    </Grid>
  );
};

export default ProductsMain;
