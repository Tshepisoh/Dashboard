import React from "react";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { Grid, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import { List } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import { ChartContainer } from "@mui/x-charts/ChartContainer";
import { AreaPlot } from "@mui/x-charts/LineChart";
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Expense"],
  ["Salaries", 11],
  ["Office", 5],
  ["Professional", 4],
];

export const options = {
  is3D: true,
};

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const xLabels = [
  "Page A",
  "Page B",
  "Page C",
  "Page D",
  "Page E",
  "Page F",
  "Page G",
];

const DemoPaper = styled(Paper)(({ theme }) => ({
  width: 443.9,
  height: 120,
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: "center",
}));

const Purchase = () => {
  return (
    <Grid display="flex" container sx={{ justifyContent: "center" }}>
      <Grid>
        <Stack direction="column" spacing={2}>
          <DemoPaper
            variant="elevation"
            style={{
              borderRadius: 10,
              height: 270,
              marginTop: 59,
              fontSize: 18,
              fontWeight: 10,
              marginTop: 5,
              width: 560,

            }}
          >
            <Typography variant="h6" sx={{ ml: -43, fontWeight: "bold" }}>
              Purchase Summary
            </Typography>
            <Divider sx={{mt:1}}></Divider>
            <Typography sx={{ ml: -47.1, mt: 2, color: "grey" }}>
              Purchase
            </Typography>
            <Typography sx={{ ml: -50, mt: 0, color: "grey" }}>
              $7.8M
            </Typography>

            <ChartContainer
              width={550}
              height={220}
              sx={{ mt: -4, ml: -1 }}
              series={[
                {
                  data: uData,
                  type: "line",
                  label: "uv",
                  area: true,
                  stack: "total",
                },
              ]}
              xAxis={[{ scaleType: "point", data: xLabels }]}
            >
              <AreaPlot />
            </ChartContainer>
          </DemoPaper>

          <DemoPaper
            variant="elevation"
            style={{
              borderRadius: 10,
              height: 265,
              marginTop: 59,
              fontSize: 18,
              fontWeight: 10,
              marginTop: 15,
              width: 560,
            }}
          >
            <Typography variant="h6" sx={{ ml: -43, fontWeight: "bold" }}>
              Expenses Summary
            </Typography>
            <Divider sx={{mt:1}}></Divider>

            <Chart
              chartType="PieChart"
              data={data}
              options={options}
              width={"100%"}
              height={"170px"}
            />

            <Divider sx={{ mt: -0 }}></Divider>
            <Typography
              display={"inline"}
              sx={{ ml: -52, fontSize: 14, mt: 4, color: "grey" }}
            >
              Average:
            </Typography>
            <Typography display={"inline"} sx={{ m:0, fontSize: 14, mt: 1 }}>
              $20.8M
            </Typography>
            {/* <Typography display={"inline"} sx={{ mr: 0, fontSize: 14, mt: 1 }}>
              $20.8M
            </Typography> */}
            
          </DemoPaper>

          <DemoPaper
            variant="outlined"
            style={{
              borderRadius: 10,
              height: 241,
              width: 560,
            }}
          >
            {" "}
            <Typography
              variant="h7"
              sx={{ marginLeft: -47, fontSize: 17, fontWeight: "bold" }}
            >
              Sales & Discounts
            </Typography>
            <Divider sx={{ mt: 1 }}></Divider>
            <div
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
              <LocalOfferOutlinedIcon
                sx={{ color: "#0e7cf4" }}
              ></LocalOfferOutlinedIcon>
            </div>
            <Typography
              sx={{ mt: -8, ml: -28, fontWeight: "bold", color: "grey" }}
            >
              Sales
            </Typography>
            <Typography sx={{ mt: -3, ml: 12 }}>5500000</Typography>
            <Typography sx={{ mt: -3, ml: 43, color: "green" }}>
              +50%
            </Typography>
            <Divider sx={{ mt: 1, width: 360, ml: 12 }}></Divider>
            <Typography
              sx={{ mt: 1, ml: -23, fontWeight: "bold", color: "grey" }}
            >
              Discounts
            </Typography>
            <Typography sx={{ mt: -3, ml: 12 }}>5500000</Typography>
            <Typography sx={{ mt: -3, ml: 43, color: "red" }}>-50%</Typography>
          </DemoPaper>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Purchase;
