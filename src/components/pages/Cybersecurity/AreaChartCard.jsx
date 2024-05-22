import React from "react";
import { Card } from "antd";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title as ChartTitle,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  RadialLinearScale,
  Filler,
  BarElement,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  RadialLinearScale,
  Tooltip,
  Legend,
  ChartTitle,
  Filler
);

const areaChartOptions = {
  // maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
      labels: {
        boxWidth: 20, // Adjust the width as needed
      },
    },
    // title: {
    //   display: true,
    //   text: 'Chart.js Line Chart',
    // },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

function AreaChartCard({ title, data }) {
  return (
    <Card
      title={<div style={{ width: "100%", textWrap: "wrap" }}>{title}</div>}
      style={{
        justifyContent: "center",
        width: "100%",
        borderRadius: "1.25rem",
      }}
      headStyle={{ height: "fit-content", padding: "10px 24px" }}
      bodyStyle={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Line options={areaChartOptions} data={data} />
    </Card>
  );
}

export default AreaChartCard;
