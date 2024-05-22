import React from "react";
import { Card } from "antd";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  // Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
  // ChartTitle,
);

// Bar chart data
const barChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
    },
    // title: {
    //   display: true,
    //   text: "Chart.js Bar Chart",
    // },
  },
  scales: {
    // x: {
    //   ticks: {
    //     display: false, // Hide x-axis text
    //   },
    // },
    y: {
      ticks: {
        display: false,
      },
    },
  },
};
const barChartLabels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const barChartData = {
  labels: barChartLabels,
  datasets: [
    {
      label: "Product 1",
      data: [200, 400, 900, 700, 800, 500, 500, 600, 200, 400, 900, 700],
      backgroundColor: "rgba(75, 192, 192, 0.5)",
    },
    {
      label: "Product 2",
      data: [500, 400, 700, 700, 700, 650, 700, 700, 700, 700, 700, 650],
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

function InventoryCard() {
  return (
    <Card
      title="Inventory"
      style={{
        justifyContent: "center",
        width: "100%",
        borderRadius: "1.25rem",
      }}
    >
      <div style={{ height: "500px" }}>
        <Bar options={barChartOptions} data={barChartData} />
      </div>
    </Card>
  );
}

export default InventoryCard;
