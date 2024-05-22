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
import { Pie } from "react-chartjs-2";

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

const pieChartOptions = {
  // maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      position: "top",
      labels: {
        boxWidth: 20,
        font: {
          size: 12,
        },
        // fontSize: "5px",
      },
    },
    // title: {
    //   display: true,
    //   text: 'Chart.js Line Chart',
    // },
  },
  // scales: {
  //   y: {
  //     beginAtZero: true,
  //   },
  // },
};

function PieChartCard({ title, data }) {
  return (
    <Card
      title={<div style={{ width: "100%", textWrap: "wrap" }}>{title}</div>}
      style={{
        justifyContent: "center",
        width: "100%",
        height: "100%",
        borderRadius: "1.25rem",
      }}
      headStyle={{ height: "fit-content", padding: "10px 24px" }}
      bodyStyle={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ width: "85%" }}>
        <Pie options={pieChartOptions} data={data} />
      </div>
    </Card>
  );
}

export default PieChartCard;
