import React from 'react'
import NavBar from "../components/NavBar";
import LeftBar from "../components/LeftBar";
import { Grid } from "@mui/material";
import ProductsStats from '../components/ProductsStats'

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

const ProductsSt = () => {
  return (
    <div>
    <NavBar />
    <Grid container>
      <Grid item sm={2} sx={{ background: "white", height: "100vh" }}>
        <LeftBar />
      </Grid>
      <Grid item sm={10} sx={{ background: "#ececec", height: "100vh" }}>
        <ProductsStats products={products} />
      </Grid>
    </Grid>
  </div>
  )
}

export default ProductsSt;
