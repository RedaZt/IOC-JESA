import React, { useEffect, useState } from "react";
import { StatCard1 } from "../components/StatCard";
import { theme, Flex, Layout, Card } from "antd";
import { Typography } from "antd";
// import { Pie } from "react-chartjs-2";
import SideBar from "../components/layouts/SideBar";
import NavBar from "../components/layouts/NavBar";
import CircularProgress from "../components/CircularProgress";
import {
  Chart as ChartJS,
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  // Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Line, Doughnut } from "react-chartjs-2";
import MainLayout from "../layouts/MainLayout";
import "../css/pages/PageStyle.css";

ChartJS.register(
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
  // ChartTitle,
);

const { Header, Sider, Content } = Layout;
const { Title } = Typography;

const ltifrChartLabels = ["2020", "2021", "2022", "2023", "2024"];
const lineChartOptions = {
  responsive: true,
  scales: {
    // to remove the labels
    // x: {
    //   display: false,
    // },
    // to remove the y-axis labels
    y: {
      // display: false,
      beginAtZero: true,
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
      height: 2,
    },
    // title: {
    //   display: true,
    //   text: "Chart.js Line Chart",
    // },
  },
};
const ltifrChartData = {
  labels: ltifrChartLabels,
  datasets: [
    {
      // label: "Last 30 Days",
      data: [6.8, 5.2, 7.23, 4.5, 8.67],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.3)",
      // fill: true,
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

const ltiChartLabels = ["01-04", "02-04", "03-04", "04-04", "05-04"];
const ltiChartData = {
  labels: ltiChartLabels,
  datasets: [
    {
      // label: "Last 30 Days",
      data: [3, 1, 0, 4, 3],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.3)",
      // fill: true,
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
const fatalIncidentsRateChartLabels = ["2020", "2021", "2022", "2023", "2024"];
const fatalIncidentsRateChartData = {
  labels: fatalIncidentsRateChartLabels,
  datasets: [
    {
      label: "Last 30 Days",
      data: [0.01, 0, 0, 0.02, 0],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.3)",
      // fill: true,
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

const barChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
      display: false,
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
    // y: {
    //   ticks: {
    //     beginAtZero: true,
    //     display: false, // Hide y-axis text
    //   },
    // },
  },
};
const safetyTrainingHoursChartLabels = [
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
  "JAN",
  "FEB",
  "MAR",
  "APR",
];
const safetyTrainingHoursChartData = {
  labels: safetyTrainingHoursChartLabels,
  datasets: [
    {
      // label: "Product 1",
      data: [70, 76, 80, 77, 82, 69, 73, 76, 20],
      backgroundColor: "rgb(53, 162, 235, 0.5)",
    },
  ],
};

const actionsChartLabels = [
  "Total Actions",
  "Total Closed Actions",
  "Positive Observations",
];
const actionsChartData = {
  labels: actionsChartLabels,
  datasets: [
    {
      // label: "Product 1",
      data: [25, 25, 5],
      backgroundColor: "rgb(53, 162, 235, 0.5)",
    },
  ],
};

const trainedStaffChartData = {
  labels: ["Trained", "Not Trained"],
  datasets: [
    {
      label: "% of Trained Staff",
      data: [35, 65],
      backgroundColor: ["rgba(75, 192, 192, 0.2)", "rgba(255, 99, 132, 0.2)"],
      borderColor: ["rgba(75, 192, 192, 1)", "rgba(255, 99, 132, 1)"],
      borderWidth: 1,
    },
  ],
};

const siteManpowerChartLabels = ["Workshop 1", "Workshop 2", "Workshop 3"];
const siteManpowerChartData = {
  labels: siteManpowerChartLabels,
  datasets: [
    {
      // label: "Product 1",
      data: [124, 214, 120],
      backgroundColor: "rgb(53, 162, 235, 0.5)",
    },
  ],
};
const siteManhoursChartLabels = ["Workshop 1", "Workshop 2", "Workshop 3"];
const siteManhoursChartData = {
  labels: siteManhoursChartLabels,
  datasets: [
    {
      // label: "Product 1",
      data: [124 * 12, 214 * 11, 120 * 12],
      backgroundColor: "rgb(53, 162, 235, 0.5)",
    },
  ],
};

const HSE = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <MainLayout selectedMenuKey={"2-2"} style={{ alignItems: "center" }}>
      <Layout
        className="content-container"
        style={{
          display: "flex",
          alignItems: "center",
          // justifyContent: "center",
          width: "100%",
          height: "100%",
          // maxWidth: "1600px",
          // padding: "20px 15px",
          padding: "10px 16px",
          paddingTop: 0,
        }}
      >
        <Flex
          className="bento-box"
          style={{
            width: "100%",
            maxWidth: "1800px",
          }}
        >
          <Flex
            className="section-1"
            style={{
              // alignItems: "center",
              // justifyContent: "center",
              width: "70%",
              height: "100%",
              // marginTop: 0,
              // height: "100%",
              // maxWidth: "1000px",
              // padding: "20px 15px",
              display: "flex",
              // flexDirection: "column",
              // border: "1px solid red",
            }}
          >
            <Flex
              className="section-1-1"
              style={{
                // alignItems: "center",
                // justifyContent: "center",
                width: "50%",
                // height: "fit-content",
                // marginTop: 0,
                // height: "100%",
                // maxWidth: "1000px",
                // padding: "20px 15px",
                display: "flex",
                flexDirection: "column",
                // border: "1px solid red",
              }}
            >
              <Card
                title="LTI"
                style={{
                  justifyContent: "center",
                  // height: "200px",
                  // height: "300px",
                  // height: "100%",
                  // width: "100%",
                  // padding: "auto",
                  borderRadius: "1.25rem",
                  // margin: "auto",
                  // display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* <img src="" alt="" /> */}
                <Line
                  data={ltiChartData}
                  options={lineChartOptions}
                  style={{ width: "100%" }}
                />
              </Card>
              <Card
                title="LTIFR"
                style={{
                  justifyContent: "center",
                  // height: "200px",
                  // height: "300px",
                  // height: "100%",
                  // width: "100%",
                  // padding: "auto",
                  borderRadius: "1.25rem",
                  // margin: "auto",
                  // display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* <img src="" alt="" /> */}
                <Line
                  data={ltifrChartData}
                  options={lineChartOptions}
                  style={{ width: "100%" }}
                />
              </Card>
              <Card
                title="Fatal Incidents Rate"
                style={{
                  justifyContent: "center",
                  // height: "200px",
                  // height: "300px",
                  // height: "100%",
                  // width: "100%",
                  // padding: "auto",
                  borderRadius: "1.25rem",
                  // margin: "auto",
                  // display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* <img src="" alt="" /> */}
                <Line
                  data={fatalIncidentsRateChartData}
                  options={lineChartOptions}
                  style={{ width: "100%" }}
                />
              </Card>
            </Flex>
            <Flex
              className="section-1-2"
              style={{
                // alignItems: "center",
                // justifyContent: "center",
                width: "50%",
                // height: "fit-content",
                // marginTop: 0,
                // height: "100%",
                // maxWidth: "1000px",
                // padding: "20px 15px",
                display: "flex",
                flexDirection: "column",
                // border: "1px solid red",
              }}
            >
              <Card
                title="Safety Training Hours"
                style={{
                  justifyContent: "center",
                  // height: "200px",
                  // height: "300px",
                  // height: "100%",
                  // width: "100%",
                  // padding: "auto",
                  borderRadius: "1.25rem",
                  // margin: "auto",
                  // display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* <img src="" alt="" /> */}
                <div style={{ width: "100%" }}>
                  <Bar
                    options={barChartOptions}
                    data={safetyTrainingHoursChartData}
                  />
                </div>
              </Card>
              <Card
                title="% of Trained Staff"
                style={{
                  justifyContent: "center",
                  // height: "200px",
                  // height: "300px",
                  // height: "100%",
                  // width: "100%",
                  // padding: "auto",
                  borderRadius: "1.25rem",
                  // margin: "auto",
                  // display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                bodyStyle={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* <img src="" alt="" /> */}
                <div style={{ width: "50%" }}>
                  <Doughnut data={trainedStaffChartData} />
                </div>
              </Card>
              <Card
                title="Actions"
                style={{
                  justifyContent: "center",
                  // height: "200px",
                  // height: "300px",
                  // height: "100%",
                  // width: "100%",
                  // padding: "auto",
                  borderRadius: "1.25rem",
                  // margin: "auto",
                  // display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* <img src="" alt="" /> */}
                <div style={{ width: "100%" }}>
                  <Bar options={barChartOptions} data={actionsChartData} />
                </div>
              </Card>
            </Flex>
          </Flex>
          <Flex
            className="section-2"
            style={{
              // alignItems: "center",
              // justifyContent: "center",
              width: "30%",
              height: "100%",
              // marginTop: 0,
              // height: "100%",
              // maxWidth: "1000px",
              // padding: "20px 15px",
              display: "flex",
              flexDirection: "column",
              // border: "1px solid red",
            }}
          >
            <Card
              title="CCTV-Footage"
              style={{
                // justifyContent: "center",
                // height: "200px",
                // height: "400px",
                width: "100%",
                // padding: "auto",
                borderRadius: "1.25rem",
                // margin: "auto",
                // display: "flex",
                // alignItems: "center",
                // justifyContent: "center",
              }}
            >
              {/* <img src="" alt="" /> */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  width: "100%",
                  height: "100%",
                  borderRadius: "0.75rem",
                }}
              >
                <img
                  src="/img/CCTV.png"
                  alt="CCTV-Footage"
                  style={{
                    // position: "absolute",
                    maxWidth: "100%",
                    // minHeight: "100%",
                    // left: "0",
                    // top: "0",
                  }}
                />
              </div>
            </Card>
            <Card
              title="Site Manpower"
              style={{
                justifyContent: "center",
                // height: "200px",
                // height: "300px",
                // height: "100%",
                // width: "100%",
                // padding: "auto",
                borderRadius: "1.25rem",
                // margin: "auto",
                // display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* <img src="" alt="" /> */}
              <div style={{ width: "100%" }}>
                <Bar options={barChartOptions} data={siteManpowerChartData} />
              </div>
            </Card>
            <Card
              title="Site Manhours"
              style={{
                justifyContent: "center",
                // height: "200px",
                // height: "300px",
                // height: "100%",
                // width: "100%",
                // padding: "auto",
                borderRadius: "1.25rem",
                // margin: "auto",
                // display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* <img src="" alt="" /> */}
              <div style={{ width: "100%" }}>
                <Bar options={barChartOptions} data={siteManhoursChartData} />
              </div>
            </Card>
          </Flex>
        </Flex>
      </Layout>
    </MainLayout>
  );
};

export default HSE;
