import React from "react";
import BarChartReCharts from "./charts/barChartReCharts";
import BarChartD3 from "./charts/barChartD3";
import Title from "../title";
import { Grid, Typography } from "@material-ui/core";

export default function Chart({ d3Heading, rechartsHeading, data }) {
  return (
    <React.Fragment>
      <Title>Charts</Title>
      <Grid container xs={12} md={12}>
        {/* Chart 1 */}
        <Grid xs={12} md={6}>
          <Typography>{d3Heading}</Typography>
          {/* Bar Chart D3 library */}
          <BarChartD3
            data={data}
            width={550}
            height={400}
            top={20}
            right={0}
            bottom={30}
            left={40}
          />
        </Grid>
        {/* Chart 2 */}
        <Grid xs={12} md={6}>
          <Typography>{rechartsHeading}</Typography>
          {/* Bar Chart recharts library built with React and D3 */}
          <BarChartReCharts
            xAxis={"name"}
            barKey={"value"}
            data={data}
            width={550}
            height={400}
            top={20}
            right={0}
            bottom={0}
            left={30}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
