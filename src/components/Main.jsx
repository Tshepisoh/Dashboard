import React from "react";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import SelectWrapper from "./SelectWrapper";
import { Grid, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import { Chart } from "react-google-charts";

import { List } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import Box from "@mui/material/Box";

import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import axios from "axios";
import { useQuery } from "react-query";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

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

const products = [
  {
    imageSrc: "/87943427_PANDA BAMBOO.jpg",
    altText: "UI KIT",
    productName: "Product A",
    price: "$2220",
  },
  {
    imageSrc: "/15477911_5564330.jpg",
    altText: "UI KIT",
    productName: "Ninja",
    price: "$4100",
  },
  {
    imageSrc: "/poster-north-technology-with-man-wearing-green-helmet_719408-3391.avif",
    altText: "UI KIT",
    productName: "North",
    price: "$5000",
  },
  {
    imageSrc: "/large-robot-with-gun-it-stands-front-large-building_719408-2423.jpg",
    altText: "UI KIT",
    productName: "Robots",
    price: "$2000",
  },
  {
    imageSrc: "/gettyimages-1368564484-2048x2048.jpg",
    altText: "UI KIT",
    productName: "Product E",
    price: "$2000",
  },
  {
    imageSrc: "/ai-generated-8531085_1280.PNG",
    altText: "UI KIT",
    productName: "Product F",
    price: "$2150",
  },
  {
    imageSrc: "/poster-new-show-shows-man-with-gun-his-back_869640-264738.jpg",
    altText: "UI KIT",
    productName: "Black",
    price: "$3055",
  },
  {
    imageSrc: "/poster-movie-you-be-free-fire_1086760-50940.avif",
    altText: "UI KIT",
    productName: "Free Fire",
    price: "$2530",
  },
  {
    imageSrc: "/ai-generated-8531096_1280.PNG",
    altText: "UI KIT",
    productName: "Product I",
    price: "$4000",
  },
  {
    imageSrc: "/ai-generated-8531087_1280.PNG",
    altText: "UI KIT",
    productName: "Product J",
    price: "$3500",
  },
];



const DemoPaper = styled(Paper)(({ theme }) => ({
  width: 443.9,
  height: 120,
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: "left",
}));

export const data = [
  ["Year", "Sales", "Expenses", "Profit"],
  ["2020", 10000, 4000, 4200],
  ["2021", 11170, 4650, 8250],
  ["2022", 6600, 1120, 3000],
  ["2023", 10030, 5400, 9350],
];


const salesSum = data
  .slice(1)
  .reduce((accumulator, currentValue) => accumulator + currentValue[1], 0);

export const options = {
  chart: {
    title: "Company Performance",
    subtitle: "Sales, Expenses, and Profit: 2020-2023",
  },
};

// const DemoPaper = styled(Paper)(({ theme }) => ({
//   width: 1010,
//   height: 120,
//   padding: theme.spacing(2),
//   ...theme.typography.body2,
//   textAlign: "left",
// }));

const Main = () => {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();
  const [openCom, setOpenCom] = React.useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleClickOpen2 = (product) => {
    setSelectedProduct(product);
    setOpen(true);
  };

  const getProducts = useQuery({
    queryKey: ['products'],
    queryFn: () => axios.get("http://localhost:5000/products"),
  });

  const products1 = getProducts.data?.data?.data;

  return (
    <Grid display="flex" container p={2} sx={{ justifyContent: "center" }}>
      <Stack direction="column" spacing={2} sx={{ml:3}}>
        <DemoPaper
          variant="elevation"
          style={{
            borderRadius: 10,
            height: 550,
            marginTop: 50,
            fontSize: 18,
            fontWeight: 10,
            marginTop: 5,
              width: 560,
              marginRight:2
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Popular Products
          </Typography>
          <Divider sx={{mt:1}} />
          <List
            sx={{
              width: "100%",
              maxWidth: 600,
              bgcolor: "background.paper",
              maxHeight: 450,
              overflowY: "scroll",
              scrollbarWidth: "none",
              mt: 2,
            }}
          >
            {products1?.map((product) => (
              <div>
                <ListItem
                  alignItems="flex-start"
                  sx={{
                    ":hover": {
                      backgroundColor: "#ececec",
                      cursor: "pointer",
                      borderRadius: 5,
                      width: 1000,
                    },
                  }}
                  onClick={() => handleClickOpen2(product)}
                  autoFocus
                >
                  <ListItemAvatar>
                    <Avatar
                      alt="A"
                      src={product.imgSrc}
                      sx={{
                        height: 50,
                        width: 50,
                        position: "absolute",
                        left: 5,
                        borderRadius: 3,
                      }}
                    />
                  </ListItemAvatar>

                  <ListItemText
                    primary={
                      <React.Fragment>
                        <Typography
                          sx={{
                            display: "inline",
                            fontSize: 15,
                            fontWeight: "bold",
                          }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          {product.name}
                        </Typography>
                      </React.Fragment>
                    }
                    secondary={
                      <React.Fragment>
                        <Box
                          sx={{
                            display: "flex",
                          }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              ml: 0,
                              mt: 0,
                            }}
                          >
                            <Rating
                              name="text-feedback"
                              value={product.rating}
                              readOnly
                              precision={0.5}
                              emptyIcon={<StarIcon style={{ opacity: 0.55 }} />}
                            />
                         
                          </Box>
                          <Divider
                            orientation="vertical"
                            variant="middle"
                            flexItem
                            sx={{ height: 20, ml: 2, mt: -0 }}
                          />

                          <Typography
                            sx={{
                              display: "inline",
                              marginLeft: 2,
                              fontWeight: "bold",
                            }}
                          >
                            ${product.price}
                          </Typography>
                        </Box>

                        <Grid
                          style={{
                            marginLeft: 300,
                            marginTop: -25,
                            borderColor: "#0e7cf4",
                            borderRadius: 200,
                            background: "#bae8e8",
                            height: 25,
                            width: 25,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            border: "1px solid #0e7cf4",
                          }}
                          container
                        >
                          <ShoppingBagOutlinedIcon
                            sx={{ color: "#0e7cf4", width: 15 }}
                          ></ShoppingBagOutlinedIcon>
                        </Grid>
                        <Typography
                          sx={{ ml: 42, position: "absolute", top: 45 }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          200k sold
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Divider
                  variant="inset"
                  component="li"
                  sx={{ maxWidth: "100%" }}
                />
              </div>
            ))}
          </List>
        </DemoPaper>

        <DemoPaper
          variant="outlined"
          style={{
            borderRadius: 10,
            height: 241,
            width: 560,
          }}
          elevation={3}
        >
          {" "}
          <Typography variant="h7" sx={{ fontSize: 17, fontWeight: "bold" }}>
            Customer & Expenses
          </Typography>
          <Divider sx={{ mt: 1, width: "100%" }}></Divider>
          <Grid
            display={"inline"}
            style={{
              marginLeft: 10,
              marginTop: 50,
              borderColor: "#0e7cf4",
              borderRadius: 200,
              background: "#bae8e8",
              height: 70,
              width: 70,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid #0e7cf4",
            }}
          >
            <Inventory2OutlinedIcon
              sx={{ color: "#0e7cf4" }}
            ></Inventory2OutlinedIcon>
          </Grid>
          <Typography sx={{ mt: -8, ml: 13, color: "grey" }}>
            Customer Growth
          </Typography>
          <Typography sx={{ mt: -3, ml: 35 }}>5500000</Typography>
          <Typography sx={{ mt: -3, ml: 50, color: "green" }}>+50%</Typography>
          <Divider sx={{ mt: 1, width: 360, ml: 12 }}></Divider>
          <Typography sx={{ mt: 1, ml: 13, color: "grey" }}>
            Expenses
          </Typography>
          <Typography sx={{ mt: -3, ml: 35 }}>5500000</Typography>
          <Typography sx={{ mt: -3, ml: 50, color: "red" }}>-50%</Typography>
        </DemoPaper>
      </Stack>
    </Grid>
  );
};

export default Main;
