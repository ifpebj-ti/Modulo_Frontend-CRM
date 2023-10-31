import React from "react";
import { Chart } from "react-google-charts";

const options = {
  // title: "Company Performance",
  curveType: "function",
  legend: { position: "bottom" },
};
export function LineChart(data: any) {
  console.log("data", data)
  return (
    <Chart
      chartType="LineChart"
      width="100%"
      height={"100%"}
      data={data.data}
      options={options}
    />
  );
}
