import React, { useEffect, useState } from "react";
import { Card, Space, Flex, Spin } from "antd";
import Stat from "./Stat";
import { CheckCircleOutlined } from "@ant-design/icons";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  // Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
  // ChartTitle,
);

const lineChartOptions = {
  responsive: true,
  scales: {
    // to remove the labels
    x: {
      display: false,
    },
    // to remove the y-axis labels
    y: {
      display: false,
      // beginAtZero: true,
    },
  },
  plugins: {
    legend: {
      position: "right",
      display: false,
      labels: {
        usePointStyle: true,
        pointStyle: "line",
      },
    },
    // title: {
    //   display: true,
    //   text: "Chart.js Line Chart",
    // },
  },
};

function returnLineChartData(data) {
  return {
    labels: data.labels,
    datasets: [
      {
        label: "Last 30 Days",
        data: data.data,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.25)",
        fill: true,
        // lineTension: 0.25,
      },
      // {
      //   label: "Target",
      //   data: [50, 100, 50, 150, 200, 220, 250, 300, 320, 300, 290],
      //   borderColor: "rgb(255, 120, 220)",
      //   backgroundColor: "rgba(255, 120, 220, 0.5)",
      // },
    ],
  };
}

function returnLastValue(data) {
  return data.data[data.data.length - 1];
}
function checkEvolution(data) {
  const n = data.data.length;
  //   console.log(
  //     data.data[n - 2],
  //     data.data[n - 1],
  //     data.data[n - 1] < data.data[n - 2]
  //   );
  return data.data[n - 1] < data.data[n - 2];
}

function GraphCard({ title, data, unit }) {
  return (
    <Card
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
        padding: "0px",
        borderRadius: "1.25rem",
      }}
      //   bodyStyle={{
      //     padding: 0,
      //     margin: 0,
      //     justifyContent: "center",
      //     alignItems: "center",
      //   }}
    >
      <Space
        direction="vertical"
        size={20}
        style={{ width: "100%", height: "100%" }}
      >
        <Stat
          StatIcon={CheckCircleOutlined}
          statText={title}
          statSuffix={unit}
          statValue={returnLastValue(data)}
          arrow={checkEvolution(data) && "down"}
          arrowColor={checkEvolution(data) && "red"}
        />
        <Line
          options={lineChartOptions}
          data={returnLineChartData(data)}
          style={{ width: "100%" }}
        />
      </Space>
    </Card>
  );
}

GraphCard.defaultProps = {
  evolution: "normal",
};

export default GraphCard;
