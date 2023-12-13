import React from "react";
import AnyChart from "anychart-react";
import anychart from "anychart";
import './styles.scss';

const quarters = {
  rightTop: {
    fill: "#ccfff2",
    title: {
      text: "Q 4",
      fontColor: "#03A64A",
      padding: 10,
    },
  },
  rightBottom: {
    fill: "#e6f9ff",
    title: {
      text: "Q 3",
      fontColor: "#1959F0",
      padding: 10,
    },
  },
  leftTop: {
    fill: "#fff9e6",
    title: {
      text: "Q 2",
      fontColor: "#F0D632",
      padding: 10,
    },
  },
  leftBottom: {
    fill: "#f9e6ff",
    title: {
      text: "Q 1",
      fontColor: "#F01511",
      padding: 10,
    },
  },
};

function formatString(str) {
  const number = parseFloat(str);
  return number.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

const mapData = (data) => {
  return data.map((item) => ({
    x: item.valorVenda,
    y: item.frequenciaVenda,
    name: item.nomeClienteCompleto,
  }));
};
function QuadrantChart({ data }) {
  const filteredData = mapData(data);

  const chart = anychart.quadrant();
  const dataSet = anychart.data.set(filteredData);
  const markers = chart.marker(dataSet);

  chart.xAxis().title('X: Valor Gasto (R$)');
  chart.yAxis().title('Y: Frequência (Qtd. Compras)');
  chart.yScale().minimum(0);
  chart.yScale().maximum(1000);
  chart.xScale().minimum(0);
  chart.xScale().maximum(500000);
  chart.xAxis().ticks(true);
  chart.xAxis().labels(true)
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