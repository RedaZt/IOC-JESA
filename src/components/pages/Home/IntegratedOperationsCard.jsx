import React, { useContext, useEffect, useState, useRef } from "react";
import {
  theme,
  Flex,
  Layout,
  Card,
  Progress,
  Divider,
  Row,
  Col,
  Statistic,
  Segmented,
  Typography,
} from "antd";
import Stat from "../../common/Stat";
import {
  SafetyCertificateOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
  DeploymentUnitOutlined,
  CheckCircleOutlined,
  BarChartOutlined,
  TableOutlined,
  TeamOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { getAssetsInfos } from "../../../data/data";
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
import { Doughnut, Line, Radar, Bar } from "react-chartjs-2";
import { getProductivityChartData } from "../../../data/data";

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

const { Title } = Typography;

const lineChartLabels2 = [
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
];
const lineChartOptions2 = {
  responsive: true,
  scales: {
    // to remove the labels
    x: {
      display: false,
    },
    // to remove the y-axis labels
    y: {
      display: false,
    },
  },
  plugins: {
    legend: {
      position: "right",
      display: true,
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

// Bar chart data
const barChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
      labels: {
        boxWidth: 20,
        font: {
          size: 11,
        },
        // fontSize: "5px",
      },
    },
    // title: {
    //   display: true,
    //   text: "Chart.js Bar Chart",
    // },
  },
  scales: {
    x: {
      ticks: {
        font: {
          size: 10, // Set the font size for the x-axis ticks
        },
        maxRotation: 0, // Set the maximum rotation to 0 degrees
        minRotation: 0,
      },
    },
    y: {
      ticks: {
        display: false,
        // font: {
        //   size: 14 // Set the font size for the y-axis ticks
        // }
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

function IntegratedOperationsCard() {
  return (
    <Card
      title={"Integrated Operations Metrics"}
      extra={<a href="/Production">More</a>}
      style={{
        justifyContent: "center",
        height: "fit-content",
        width: "100%",
        borderRadius: "1.25rem",
      }}
    >
      <Stat
        StatIcon={CheckCircleOutlined}
        statText={"Product Quality"}
        statValue={90}
        statSuffix={"%"}
        arrow={"down"}
        arrowColor={"red"}
      />
      <Stat
        StatIcon={BarChartOutlined}
        statText={"Productivity"}
        statValue={95}
        statSuffix={"%"}
      />
      <Line
        options={lineChartOptions2}
        data={getProductivityChartData()}
        style={{ width: "100%", height: "100px" }}
      />
      <Divider />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <TableOutlined style={{ marginRight: "5px" }} />
        <Title
          level={5}
          style={{
            margin: 0,
            // color: collapsed ? "white" : "#1b3a71",
            // fontFamily: collapsed ? null : "myFont",
            // fontSize: collapsed ? "13px" : "15px",
          }}
        >
          Inventory & Storage Balance
        </Title>
      </div>
      <div style={{ width: "100%" }}>
        <Bar options={barChartOptions} data={barChartData} />
      </div>
      <Divider />
      <Stat
        StatIcon={TeamOutlined}
        statText={"Connected Workers"}
        statValue={200}
      />
    </Card>
  );
}

export default IntegratedOperationsCard;
