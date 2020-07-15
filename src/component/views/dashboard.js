import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core/";
import Chart from "./chart";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  //D3 chart block heading
  const d3Heading = "Bar Chart d3";
  //Rechart block heading
  const rechartsHeading = "Bar Chart recharts library built with React and D3";
  //barchart Data for both library
  const barChartData = [
    { name: "Page A", value: 2400 },
    { name: "Page B", value: 1398 },
    { name: "Page C", value: 9800 },
    { name: "Page D", value: 3908 },
    { name: "Page E", value: 4800 },
  ];

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={12} lg={12}>
        <Paper className={classes.paper}>
          {/* Chart Component */}
          <Chart
            d3Heading={d3Heading}
            rechartsHeading={rechartsHeading}
            data={barChartData}
          />
        </Paper>
      </Grid>
    </Grid>
  );
}
