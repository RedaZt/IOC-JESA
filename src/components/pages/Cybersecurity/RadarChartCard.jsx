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
import { Radar } from "react-chartjs-2";

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

const radarChartOptions = {
  plugins: {
    legend: {
      display: false, // Hide legend
    },
    tooltip: {
      enabled: false, // Disable tooltip
    },
  },
  scales: {
    r: {
      pointLabels: {
        display: false, // Hide labels on data points
      },
      // grid: {
      //   display: false, // Hide grid lines
      // },
    },
  },
};

function RadarChartCard({ title, data }) {
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
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          maxHeight: "300px",
        }}
      >
        <Radar data={data} options={radarChartOptions} />
      </div>
    </Card>
  );
}

export default RadarChartCard;
