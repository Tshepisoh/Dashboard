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


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

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
    productName: "Product B",
    price: "$4100",
  },
  {
    imageSrc: "/21743158_6479743.jpg",
    altText: "UI KIT",
    productName: "Product C",
    price: "$5000",
  },
  {
    imageSrc: "/AA logo 02.jpg",
    altText: "UI KIT",
    productName: "Product D",
    price: "$2000",
  },
  {
    imageSrc: "/Fox 3d and minimalist logo design.jpg",
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
    imageSrc: "/logo-1873902_1280.PNG",
    altText: "UI KIT",
    productName: "Product G",
    price: "$3055",
  },
  {
    imageSrc: "/apple-7741471_1280.PNG",
    altText: "UI KIT",
    productName: "Product H",
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

const items = [
  {
    name: "Remy",
    avatar: {
      alt: "Remy Sharp",
      src: "/StockCake-Joyful Celebration Moment_1721899835.jpg"
    }
  },
  {
    name: "Travis",
    avatar: {
      alt: "Travis Howard",
      src: "/StockCake-Serene Reading Moment_1721899943.jpg"
    }
  },
  {
    name: "Cindy",
    avatar: {
      alt: "Cindy Baker",
      src: "StockCake-Mountain Meditation Moment_1721900256.jpg"
    }
  },
  {
    name: "Billy",
    avatar: {
      alt: "Billy",
      src: "/StockCake-Cozy Reading Time_1721900389.jpg"
    }
  }
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

  const handleClickOpen3 = (product) => {
    setSelectedProduct(product);
    navigate(`/productstats/${selectedProduct.id}`);
    
  };

  const handleClose2 = () => {
    setOpen(false);
    setSelectedProduct(null);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpenCom = () => {
    setOpenCom(true);
  };

  const handleCloseCom = () => {
    setOpenCom(false);
  };

  return (
    <Grid container>
          <div>
      <Stack direction="column" spacing={2}>
        <DemoPaper
          variant="elevation"
          style={{
            borderRadius: 10,
            height: 550,
            marginTop: 59,
            fontSize: 18,
            fontWeight: 10,
          }}
        >
          <Typography
            style={{
              fontWeight:'bold',
              fontSize:25,
            }}
            mb={5}
          >
            Popular products
          </Typography>
          <Typography style={{ display: "inline", color: "grey" }} sx={{fontSize:20}}>Products</Typography>
          <Typography style={{ display: "inline", marginLeft: 240, color: "grey" }} sx={{fontSize:20}}>
            Earnings
          </Typography>
          <List
            sx={{
              width: "100%",
              maxWidth: 600,
              bgcolor: "background.paper",
              maxHeight: 390,
              overflowY: "scroll",
              scrollbarWidth: "none",
            }}
          >
            {products?.map((product) => (
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
                  onClick={() => handleClickOpen2(product)
                  }
                  autoFocus
                >
                  <ListItemAvatar>
                    <Avatar
                      alt="A"
                      src={product.imageSrc}
                      sx={{
                        height: 60,
                        width: 60,
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
                          {product.productName}
                        </Typography>
                      </React.Fragment>
                    }
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          {product.altText}
                        </Typography>
                        <Typography
                          sx={{
                            display: "inline",
                            marginLeft: 30,
                            fontWeight: "bold",
                          }}
                        >
                          {product.price}
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
              </div>
            ))}
          </List>
        </DemoPaper>

        <DemoPaper
          variant="outlined"
          style={{
            borderRadius: 10,
            height: 241,
          }}
        >
          {" "}
          <h2 style={{ fontSize: 20, fontWeight: 50 }}>Comments</h2>
          
          <List
            sx={{
              width: "100%",
              maxWidth: 600,
              bgcolor: "background.paper",
              maxHeight: 150,
              overflowY: "scroll",
              scrollbarWidth: "none",
            }}
            onClick={handleClickOpenCom}
          >
            <ListItem
              alignItems="flex-start"
              sx={{
                ":hover": {
                  backgroundColor: "#ececec",
                  cursor: "pointer",
                  borderRadius: 5,
                },
              }}
            >
              <ListItemAvatar>
                <Avatar
                  alt="Remy Sharp"
                  src="/StockCake-Joyful Celebration Moment_1721899835.jpg"
                  sx={{
                    height: 60,
                    width: 60,
                    position: "absolute",
                    left: 5,
                    borderRadius: 20,
                  }}
                />
              </ListItemAvatar>
              <ListItemText
                primary="Great Product"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Remy
                    </Typography>
                    <Typography display={"inline"}>
                      — I was very, very pleased with the service. My order
                      details were updated regularly. I will definitely be
                      ordering again. If I had to make a negative remark, I felt
                      the local courier company could have better telephone
                      communication. But that would be looking for something to
                      complain about. So the ordering was excellent The updates
                      were excellent The products themselves are very good
                      quality. And the local courier was good. I’ll definitely
                      order again. If this makes any difference, I order three
                      items.. all Were items related to camera gear. And items
                      were received in good condition and I’m very pleased with
                      the quality.
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem
              alignItems="flex-start"
              sx={{
                ":hover": {
                  backgroundColor: "#ececec",
                  cursor: "pointer",
                  borderRadius: 5,
                },
              }}
            >
              <ListItemAvatar>
                <Avatar
                  alt="Travis Howard"
                  src="/StockCake-Serene Reading Moment_1721899943.jpg"
                  sx={{
                    height: 60,
                    width: 60,
                    position: "absolute",
                    left: 5,
                    borderRadius: 20,
                  }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={"Awsome Service"}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Travis
                    </Typography>
                    {" — Wish I could come, but I'm out of town this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem
              alignItems="flex-start"
              sx={{
                ":hover": {
                  backgroundColor: "#ececec",
                  cursor: "pointer",
                  borderRadius: 5,
                },
              }}
            >
              <ListItemAvatar>
                <Avatar
                  alt="Cindy Baker"
                  src="StockCake-Mountain Meditation Moment_1721900256.jpg"
                  sx={{
                    height: 60,
                    width: 60,
                    position: "absolute",
                    left: 5,
                    borderRadius: 20,
                  }}
                />
              </ListItemAvatar>
              <ListItemText
                primary="Great service"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Cindy
                    </Typography>
                    {" — Do you have Paris recommendations? Have you ever…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem
              alignItems="flex-start"
              sx={{
                ":hover": {
                  backgroundColor: "#ececec",
                  cursor: "pointer",
                  borderRadius: 5,
                },
              }}
            >
              <ListItemAvatar>
                <Avatar
                  alt="Billy"
                  src="/StockCake-Cozy Reading Time_1721900389.jpg"
                  sx={{
                    height: 60,
                    width: 60,
                    position: "absolute",
                    left: 5,
                    borderRadius: 20,
                  }}
                />
              </ListItemAvatar>
              <ListItemText
                primary="Amazing"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Billy
                    </Typography>
                    {" — Do you have Paris recommendations? Have you ever…"}
                  </React.Fragment>
                }
              />
            </ListItem>{" "}
          </List>
        </DemoPaper>

        <React.Fragment>
          <Dialog
            fullScreen={fullScreen}
            open={open}
            onClose={handleClose2}
            aria-labelledby="responsive-dialog-title"
            key={selectedProduct?.id} 
          >
            <DialogTitle id="responsive-dialog-title">
              <Avatar
                src={selectedProduct?.imageSrc}
                alt='ui kit'
                style={{
                  height: 200,
                  width: 200,
                  margin: 50,
                  borderRadius: 10,
                }}
                
              >
              </Avatar>
            </DialogTitle>
            <DialogContent>
              <Typography
                variant="h6"
                sx={{ display: "inline", ml: 3 }}
              >
                {selectedProduct?.productName} 
              </Typography>
              <Typography
                sx={{
                  display: "inline",
                  ml: 15,
                  mt: -3,
                  fontWeight: "bold",
                }}
              >{selectedProduct?.price}</Typography>
              <Typography variant="subtitle1" sx={{ ml: 3, mt: 0 }}>
              {selectedProduct?.altText}
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={handleClose2}>
                Close
              </Button>
              <Button  onClick={() => handleClickOpen3(selectedProduct)}  autoFocus>
                View Stats
              </Button>
            </DialogActions>
          </Dialog>
        </React.Fragment>

        <React.Fragment>
          <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={openCom}
          >
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="/StockCake-Joyful Celebration Moment_1721899835.jpg"
                sx={{
                  height: 50,
                  width: 50,
                  borderRadius: 20,
                  m: 2,
                }}
              />
            </ListItemAvatar>
            <Typography
              sx={{
                position: "absolute",
                right: 475,
                top: 26,
              }}
              variant="h6"
            >
              Remy
            </Typography>
            <DialogContent dividers>
              <Typography display={"inline"}>
                I was very, very pleased with the service. My order details were
                updated regularly. I will definitely be ordering again. If I had
                to make a negative remark, I felt the local courier company
                could have better telephone communication. But that would be
                looking for something to complain about. So the ordering was
                excellent The updates were excellent The products themselves are
                very good quality. And the local courier was good. I’ll
                definitely order again. If this makes any difference, I order
                three items.. all Were items related to camera gear. And items
                were received in good condition and I’m very pleased with the
                quality.
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={handleCloseCom}>
                close
              </Button>
              <Button autoFocus onClick={handleCloseCom}>
                View Profile
              </Button>
            </DialogActions>
          </BootstrapDialog>
        </React.Fragment>
      </Stack>
      
    </div>
    
    </Grid>
  );
};

export default Main;
