import React from "react";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { Box, Grid, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import { List } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import { BarChart } from "@mui/x-charts/BarChart";
import { Chart } from "react-google-charts";

export const data = [
  ["Quater", ""],
  ["Q1", 4000000],
  ["Q2", 8000000],
  ["Q3", 6600000],
  ["Q4", 10355000],
];

const total = data.slice(1).reduce((sum, item) => sum + item[1], 0);

const formatNumber = (num) => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M";
  }
  return num;
};

const formattedTotal = formatNumber(total);

export const options = {
  chart: {
    subtitle: "$" + formattedTotal,
    title: "Total Sales",
  },
};

const DemoPaper = styled(Paper)(({ theme }) => ({
  width: 443.9,
  height: 120,
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: "center",
}));

const SalesSummary = () => {
  return (
    <Grid display="flex" container sx={{ justifyContent: "center" }}>
      <Stack direction="column" spacing={2} ml={-3}>
        <DemoPaper
          variant="elevation"
          style={{
            borderRadius: 10,
            height: 550,
            marginTop: 59,
            fontSize: 18,
            fontWeight: 10,
            marginTop: 5,
            width: 560,
            marginLeft: -15,
          }}
        >
          <Typography variant="h6" sx={{ ml: -47, fontWeight: "bold" }}>
            Sales Summary
          </Typography>
          <Divider sx={{ mt: 1 }}></Divider>
          <Box sx={{ mt: 7 }}>
            <Chart
              chartType="Bar"
              width="100%"
              height="400px"
              options={options}
              data={data}
            />
          </Box>
        </DemoPaper>
        <Grid>
          <DemoPaper
            variant="outlined"
            style={{
              borderRadius: 10,
              height: 241,
              width: 560,
              marginLeft: -15,
            }}
          >
            {" "}
            <Typography
              variant="h7"
              sx={{ fontSize: 17, fontWeight: "bold", ml: -44 }}
            >
              Dues & Pending Orders
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
              <TaskAltOutlinedIcon
                sx={{ color: "#0e7cf4" }}
              ></TaskAltOutlinedIcon>
            </Grid>
            <Typography
              sx={{ mt: -8, ml: -28, fontWeight: "bold", color: "grey" }}
            >
              Dues
            </Typography>
            <Typography sx={{ mt: -3, ml: 12 }}>5500000</Typography>
            <Typography sx={{ mt: -3, ml: 43, color: "green" }}>
              +50%
            </Typography>
            <Divider sx={{ mt: 1, width: 360, ml: 12 }}></Divider>
            <Typography
              sx={{ mt: 1, ml: -18, fontWeight: "bold", color: "grey" }}
            >
              Pending Orders
            </Typography>
            <Typography sx={{ mt: -3, ml: 12 }}>5500000</Typography>
            <Typography sx={{ mt: -3, ml: 43, color: "red" }}>-50%</Typography>
          </DemoPaper>
        </Grid>
      </Stack>
    </Grid>
  );
};

export default SalesSummary;
