import { Chart } from "react-google-charts";

const options = {
  // Material design options
  // chart: {
  //   title: "Students' Final Grades",
  //   subtitle: "based on hours studied",
  // },
  hAxis: { title: "Hours Studied" },
  vAxis: { title: "Grade" },
};
export function DotChart({data}: any) {
  const finalData = [ 
    ['valorVenda', 'frequenciaVenda'],

  ]
  data.forEach((item: any) => {
    finalData.push([item.valorVenda, item.frequenciaVenda]);
  });
  return (  
    <Chart
    chartType="Scatter"
    width="100%"
    height="100%"
    data={finalData}
    options={options}
  />
  );
}
