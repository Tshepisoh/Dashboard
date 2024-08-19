import React from "react";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { BarChart } from "@mui/x-charts/BarChart";
import { Typography } from "@mui/material";
import { Gauge } from "@mui/x-charts/Gauge";
import { LineChart } from '@mui/x-charts/LineChart';
import { PieChart } from '@mui/x-charts/PieChart';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';




const data1 = [
  { label: 'Group A', value: 400 },
  { label: 'Group B', value: 300 },
  { label: 'Group C', value: 300 },
  { label: 'Group D', value: 200 },
];

const data2 = [
  { label: 'A1', value: 100 },
  { label: 'A2', value: 300 },
  { label: 'B1', value: 100 },
  { label: 'B2', value: 80 },
  { label: 'B3', value: 40 },
  { label: 'B4', value: 30 },
  { label: 'B5', value: 50 },
  { label: 'C1', value: 100 },
  { label: 'C2', value: 200 },
  { label: 'D1', value: 150 },
  { label: 'D2', value: 50 },
];
const series = [
  {
    innerRadius: 0,
    outerRadius: 80,
    id: 'series-1',
    data: data1,
  },
  {
    innerRadius: 100,
    outerRadius: 120,
    id: 'series-2',
    data: data2,
  },
];

const DemoPaper = styled(Paper)(({ theme }) => ({
  width: 720,
  height: 400,
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: "center",
}));

const IncomeMain = () => {
  const [itemData, setItemData] = React.useState();
  return (
    <div>
      <Stack direction="row" spacing={2} sx={{ ml: 5, mt: 4 }}>
        <DemoPaper square={false}>
          <Typography variant="h5" sx={{ ml: 0 }}>
            Top Perfoming Products By Quater
          </Typography>
          <BarChart
            series={[
              { data: [3, 4, 1, 6, 5], stack: "A", label: "Product A" },
              { data: [4, 3, 1, 5, 8], stack: "A", label: "Product B" },
              { data: [4, 2, 5, 4, 1], stack: "B", label: "Product C" },
              { data: [2, 8, 1, 3, 1], stack: "B", label: "Product D" },
              { data: [10, 6, 5, 8, 9], label: "Product E" },
            ]}
            width={600}
            height={350}
          />
        </DemoPaper>
        <DemoPaper square>
        <Typography  variant="h5" sx={{ ml: 0 }}>Product Perfomance</Typography>
        <Stack
      direction={{ xs: 'column', md: 'row' }}
      spacing={{ xs: 0, md: 4 }}
      sx={{ width: '100%' }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <PieChart
          series={series}
          width={400}
          height={300}
          slotProps={{
            legend: { hidden: true },
          }}
          onItemClick={(event, d) => setItemData(d)}
        />{' '}
      </Box>

      <Stack direction="column" sx={{ width: { xs: '100%', md: '40%' } }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography>Click on the chart</Typography>
          <IconButton
            aria-label="reset"
            size="small"
            onClick={() => {
              setItemData(null);
            }}
          >
            <UndoOutlinedIcon fontSize="small" />
          </IconButton>
        </Box>
        <SyntaxHighlighter
          code={`// Data from item click
${itemData ? JSON.stringify(itemData, null, 2) : '// The data will appear here'}
`}
          language="json"
          copyButtonHidden
        />
      </Stack>
    </Stack>
        </DemoPaper>
      </Stack>
      <Stack direction="row" spacing={2} sx={{ ml: 5, mt: 3 }}>
        <DemoPaper square={false}>
        <Typography variant="h5" sx={{ ml: 0 }}>
            Monthly Performance
          </Typography>
        <LineChart
      xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12] }]}
      series={[
        {
          data: [3500, 3000, 5500, 8500, 1500, 5000, 1000, 4000, 3000, 8000,8010,10000],
          showMark: ({ index }) => index % 2 === 0,
        },
      ]}
      width={650}
      height={400}
    />
        </DemoPaper>
        <DemoPaper square>
          <Typography variant="h5" sx={{ ml: 0 }}>
           Income Percentage
          </Typography>
          <Gauge
            value={80}
            startAngle={0}
            endAngle={360}
            innerRadius="80%"
            outerRadius="60%"
            sx={{ fontSize: 60 }}
            // ...
          />
        </DemoPaper>
      </Stack>
    </div>
  );
};

export default IncomeMain;
