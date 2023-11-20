import React from "react";
import AnyChart from "anychart-react";
import anychart from "anychart";
import './styles.css';

const quarters = {
  rightTop: {
    fill: "#ccfff2",
    title: {
      text: "Quadrante 4",
      fontColor: "#03A64A",
      padding: 10,
    },
  },
  rightBottom: {
    fill: "#e6f9ff",
    title: {
      text: "Quadrante 3",
      fontColor: "#1959F0",
      padding: 10,
    },
  },
  leftTop: {
    fill: "#fff9e6",
    title: {
      text: "Quadrante 2",
      fontColor: "#F0D632",
      padding: 10,
    },
  },
  leftBottom: {
    fill: "#f9e6ff",
    title: {
      text: "Quadrante 1",
      fontColor: "#F01511",
      padding: 10,
    },
  },
};

const mapData = (data) => {
  return data.map((item) => ({
    x: item.valorVenda,
    y: item.frequenciaVenda,
    name: item.nomeClienteCompleto,
  }));
};
function QuadrantChart({ data }) {
  console.log("chart2", data);
  const filteredData = mapData(data);

  console.log("chart", filteredData);

  const chart = anychart.quadrant();
  const dataSet = anychart.data.set(filteredData);
  const markers = chart.marker(dataSet);

  chart.xAxis().title('X: Valor Venda');
  chart.yAxis().title('Y: Frequencia');
  chart.yScale().minimum(0);
  chart.yScale().maximum(1000);
  chart.xScale().minimum(0);
  chart.xScale().maximum(500000);
  chart.xAxis().ticks(true);
  chart.xAxis().labels(true);
  chart.yAxis().ticks(true);
  chart.yAxis().labels(true);

  markers.labels()
    .enabled(true)
    .fontFamily('Arial')
    .fontColor('#546e7a')
    .position('right')
    .anchor('left-center')
    .offsetX(0)
    .offsetY(0)
    .format('{%name}');

  markers.tooltip(true);

  // Assume que a variável quarters está definida em algum lugar antes dessa linha
  chart.quarters(quarters);

  return (
    <AnyChart

      id="quadrant-chart"
      instance={chart}
    />
  );
}

export default QuadrantChart;