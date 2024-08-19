import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import { Chart } from "react-google-charts";
import { Typography } from "@mui/material";
import { useParams } from 'react-router-dom';


export const data = [
  ["Year", "Sales", "Expenses", "Profit"],
  ["2020", 1000, 400, 200],
  ["2021", 1170, 460, 250],
  ["2022", 1250, 620, 500],
  ["2023", 1500, 800, 780],
];




export const data4 = [
  [
    "Location",
    "Parent",
    "Market trade volume (size)",
    "Market increase/decrease (color)",
  ],
  ["Global", null, 0, 0],
  ["America", "Global", 0, 0],
  ["Europe", "Global", 0, 0],
  ["Asia", "Global", 0, 0],
  ["Australia", "Global", 0, 0],
  ["Africa", "Global", 0, 0],
  ["Brazil", "America", 11, 10],
  ["USA", "America", 52, 31],
  ["Mexico", "America", 24, 12],
  ["Canada", "America", 16, -23],
  ["France", "Europe", 42, -11],
  ["Germany", "Europe", 31, -2],
  ["Sweden", "Europe", 22, -13],
  ["Italy", "Europe", 17, 4],
  ["UK", "Europe", 21, -5],
  ["China", "Asia", 36, 4],
  ["Japan", "Asia", 20, -12],
  ["India", "Asia", 40, 63],
  ["Laos", "Asia", 4, 34],
  ["Mongolia", "Asia", 1, -5],
  ["Iran", "Asia", 18, 13],
  ["Pakistan", "Asia", 11, -52],
  ["Egypt", "Africa", 21, 0],
  ["S. Africa", "Africa", 30, 43],
  ["Sudan", "Africa", 12, 2],
  ["Congo", "Africa", 10, 12],
  ["Zaire", "Africa", 8, 10],
];

export const options4 = {
  minColor: "#f00",
  midColor: "#ddd",
  maxColor: "#0d0",
  headerHeight: 50,
  fontColor: "black",
  showScale: true,
};

export const data2 = [
  ["Country", "Popularity"],
  ["Germany", 200],
  ["United States", 300],
  ["Brazil", 400],
  ["Canada", 500],
  ["France", 600],
  ["RU", 700],
  ["South Africa", 600],
  ["Nigeria", 600],
  ["Kenya", 600],
  ["Lesotho", 600],
  ["Eswatini", 200],
  ["Zimbabwe", 600],
  ["Namibia", 600],
  ["Egypt", 600],
  ["Algeria", 600],
  ["Mali", 200],
  ["Cameroon", 400],
  ["Australia", 700],
  ["Chile", 500],
  ["Argentina", 600],
  ["North Korea", 600],
];

export const data3 = [
  ["country", "Continent", "median Age", "Median Sales"],
  ["USA", "NA", 12, 500],
  ["Cameroon", "AFR", 20, 100],
  ["France", "EUR", 7, 300],
  ["South Africa", "AFR", 54, 400],
  ["Russia", "EUR", 22, 600],
  ["Canada", "NA", 22, 250],
  ["Germany", "EUR", 3, 100],
  ["Algeria", "AFR", 42, 200],
  ["Kenya", "AFR", 32, 280],
];

export const options1 = {
  legend: "none",
  chartArea: { left: 200, top: 5, right: 0, bottom: 0 },
  pieSliceText: "label",
};

export const options = {
  chart: {
    title: "Product A's Performance",
    subtitle: "Sales, Expenses, and Profit: 2020-2023",
  },
};

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

const ProductsStats = ({products}) => {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));

  return (
    <div>
             {product ? (
          <div
        
          >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 3,
          },
        }}
      >
        <Paper elevation={3} sx={{ height: 400, width: 500 }}>
          <Chart
            chartType="TreeMap"
            width="500px"
            height="100%"
            data={data4}
            options={options4}
          />
        </Paper>
        <Paper elevation={3} sx={{ height: 100, width: 400 }}>
          <Box
            sx={{
              width: 300,
              display: "flex",
              alignItems: "center",
              ml: 10,
              mt: 5,
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
            <Box sx={{ ml: 2, fontWeight: "bold", fontSize: 20 }}>
              {labels[4.5]}
            </Box>
          </Box>
        </Paper>
        <Paper elevation={3} sx={{ width: 500 }}>
          <Chart
            chartEvents={[
              {
                eventName: "select",
                callback: ({ chartWrapper }) => {
                  const chart = chartWrapper.getChart();
                  const selection = chart.getSelection();
                  if (selection.length === 0) return;
                  const region = data2[selection[0].row + 1];
                  console.log("Selected : " + region);
                },
              },
            ]}
            chartType="GeoChart"
            width="100%"
            height="400px"
            data={data2}
          />
        </Paper>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
          },
        }}
      >
        <Paper elevation={3} sx={{ height: 400, width: 758 }}>
          <Chart
            chartType="Bar"
            width="100%"
            height="390px"
            data={data}
            options={options}
          />
        </Paper>
        <Paper
          elevation={3}
          sx={{
            height: 290,
            position: "absolute",
            left: 881,
            top: 190,
            width: 400,
          }}
        >
          <img
            src={product.imageSrc}
            alt="Panda"
            style={{
              height: 200,
              width: 200,
              marginLeft: 100,
              borderRadius: 10,
              marginTop: 30,
            }}
          ></img>
        </Paper>
        <Paper elevation={3} sx={{ width: 758 }}>
          <Chart
            chartType="PieChart"
            width="80%"
            height="320px"
            data={data3}
            options={options1}
            chartWrapperParams={{ view: { columns: [0, 3] } }}
            chartPackages={["corechart", "controls"]}
            controls={[
              {
                controlEvents: [
                  {
                    eventName: "statechange",
                    callback: ({ chartWrapper, controlWrapper }) => {
                      console.log(
                        "State changed to",
                        controlWrapper?.getState()
                      );
                    },
                  },
                ],
                controlType: "CategoryFilter",
                options: {
                  filterColumnIndex: 1,
                  ui: {
                    labelStacking: "vertical",
                    label: "Continent Selection:",
                    allowTyping: false,
                    allowMultiple: false,
                  },
                },
              },
            ]}
          />
        </Paper>
      </Box> 
      </div>
       ) : (
        <Typography>Product not found.</Typography>
      )}
    </div>
  );
};

export default ProductsStats;
