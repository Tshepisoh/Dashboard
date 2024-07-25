import React from "react";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import SelectWrapper from "./SelectWrapper";
import { Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import { Chart } from "react-google-charts";

export const data = [
  ["Year", "Sales", "Expenses", "Profit"],
  ["2020", 1000, 400, 200],
  ["2021", 1170, 460, 250],
  ["2022", 660, 1120, 300],
  ["2023", 1030, 540, 350],
];

export const options = {
  chart: {
    title: "Company Performance",
    subtitle: "Sales, Expenses, and Profit: 2020-2023",
  },
};

const DemoPaper = styled(Paper)(({ theme }) => ({
  width: 1010,
  height: 120,
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: "left",
}));

const Main = () => {
  return (
    <div>
      <h1
        style={{
          marginTop: 15,
          marginLeft: 50,
          fontSize: 30,
        }}
      >
        Dashboard
      </h1>

      <Stack direction="column" spacing={2}>
        <DemoPaper
          variant="elevation"
          style={{
            marginLeft: 50,
            borderRadius: 10,
            marginTop: 7,
            height: 460,
          }}
        >
          <h2
            style={{
              marginTop: 5,
              fontSize: 25,
              fontWeight: 50,
            }}
          >
            OverView
          </h2>

          <SelectWrapper />

          <Stack direction="row" spacing={2}>
            <DemoPaper
              variant="elevation"
              style={{
                background: "#ececec",
                borderRadius: 10,
                height: 160,
                marginTop: 90,
                width: 960,
              }}
            >
              <DemoPaper
                variant="elevation"
                style={{
                  borderRadius: 10,
                  width: 400,
                }}
              >
                <h2
                  style={{
                    marginTop: 0,
                    borderRadius: 10,
                    width: 400,
                  }}
                >
                  Customers
                </h2>

                <Typography
                  sx={{
                    fontSize: 50,
                  }}
                >
                  100 000
                </Typography>

                <DemoPaper
                  variant="elevation"
                  style={{
                    borderRadius: 10,
                    width: 30,
                    height: 10,
                    background: "#ececec",
                    marginTop: -125,
                    marginLeft: 340,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 20,
                      marginTop: -1,
                      color: "#008D06",
                    }}
                  >
                    8%
                  </Typography>
                </DemoPaper>

                <h2
                  style={{
                    marginLeft: 440,
                    marginTop: -45,
                  }}
                >
                  Income
                </h2>

                <Typography
                  sx={{
                    fontSize: 45,
                    marginLeft: 55,
                    marginTop: 3,
                  }}
                >
                  $1025310
                </Typography>

                <Typography
                  sx={{
                    fontSize: 20,
                    marginTop: -15,
                    marginLeft: 113,
                    color: "#008D06",
                  }}
                >
                  3%
                </Typography>
              </DemoPaper>
            </DemoPaper>
          </Stack>

          <h5>
            {" "}
            <h3 style={{ display: "inline", color: "grey" }}>
              These are our
            </h3>{" "}
            <h2 style={{ display: "inline" }}>Top Customers </h2>
          </h5>

          <Stack direction="row" spacing={13}>
            <Avatar
              alt="Remy Sharp"
              src="/StockCake-Joyful Celebration Moment_1721899835.jpg"
              style={{
                marginLeft: 50,
                height: 70,
                width: 70,
              }}
            />
            <Divider orientation="vertical" variant="middle" flexItem />
            <Avatar
              alt="Travis Howard"
              src="/StockCake-Serene Reading Moment_1721899943.jpg"
              style={{
                height: 70,
                width: 70,
              }}
            />
            <Divider orientation="vertical" variant="middle" flexItem />
            <Avatar
              alt="Cindy Baker"
              src="/StockCake-Mountain Meditation Moment_1721900256.jpg"
              style={{
                height: 70,
                width: 70,
              }}
            />
            <Divider orientation="vertical" variant="middle" flexItem />
            <Avatar
              alt="Billy Baker"
              src="/StockCake-Cozy Reading Time_1721900389.jpg"
              style={{
                height: 70,
                width: 70,
              }}
            />
          </Stack>
          <Stack direction="row" spacing={29}>
            <h3 style={{ marginLeft: 65, marginTop: 5 }}>Remy</h3>
            <h3
              style={{
                marginTop: 5,
              }}
            >
              Travis
            </h3>
            <h3
              style={{
                marginTop: 5,
              }}
            >
              Cindy
            </h3>
            <h3
              style={{
                marginTop: 5,
                marginLeft:250
              }}
            >
              Billy
            </h3>
          </Stack>
        </DemoPaper>

        <DemoPaper
          variant="outlined"
          style={{
            borderRadius: 10,
            marginLeft: 50,
            height: 329,
          }}
        >
          <Chart
            chartType="Bar"
            width="100%"
            height="100%"
            data={data}
            options={options}
          />
        </DemoPaper>
      </Stack>
    </div>
  );
};

export default Main;
