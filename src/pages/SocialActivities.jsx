import React, { useEffect, useState } from "react";
import { theme, Flex, Layout, Card } from "antd";
import { Typography } from "antd";
import Stat from "../components/common/Stat";
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
import "./PageStyle.css";

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

const localEmploymentChartData = {
  labels: ["Local Employees", "Foreign Employees"],
  datasets: [
    {
      label: "% of Trained Staff",
      data: [64, 36],
      backgroundColor: ["rgba(75, 192, 192, 0.2)", "rgba(255, 99, 132, 0.2)"],
      borderColor: ["rgba(75, 192, 192, 1)", "rgba(255, 99, 132, 1)"],
      borderWidth: 1,
    },
  ],
};

const localSuppliersChartData = {
  labels: ["Local Suppliers", "Foreign Suppliers"],
  datasets: [
    {
      label: "% of Trained Staff",
      data: [54, 46],
      backgroundColor: ["rgba(75, 192, 192, 0.2)", "rgba(255, 99, 132, 0.2)"],
      borderColor: ["rgba(75, 192, 192, 1)", "rgba(255, 99, 132, 1)"],
      borderWidth: 1,
    },
  ],
};

const lineChartOptions = {
  // aspectRatio: 1.35,
  maintainAspectRatio: false,
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
const communityInvestmentChartLabels = [
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
const communityInvestmentChartData = {
  labels: communityInvestmentChartLabels,
  datasets: [
    {
      // label: "Product 1",
      data: [
        289000, 310000, 352100, 372100, 385600, 395000, 405200, 413200, 425900,
      ],
      backgroundColor: "rgb(53, 162, 235, 0.5)",
    },
  ],
};

const SocialActivities = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <MainLayout selectedMenuKey={"5"} style={{ alignItems: "center" }}>
      <Layout
        className="content-container"
        style={{
          alignItems: "center",
          // justifyContent: "center",
          width: "100%",
          padding: "10px 16px",
          paddingTop: 0,
          // marginTop: 0,
          // height: "100%",
          // maxWidth: "1000px",
          // padding: "20px 15px",
          display: "flex",
          // flexDirection: "row",
          // flexDirection: "column",
          // border: "1px solid black",
        }}
      >
        <Flex
          // className="content-container"
          style={{
            alignItems: "center",
            // justifyContent: "center",
            width: "100%",
            // height: "100%",
            // marginTop: 0,
            // height: "100%",
            height: "fit-content",
            // maxWidth: "1000px",
            // padding: "20px 15px",
            // flexDirection: "column",
            // border: "1px solid blue",
          }}
        >
          <Flex
            className="Flex-1"
            style={{
              alignItems: "center",
              justifyContent: "center",
              width: "30%",
              height: "100%",
              // marginTop: 0,
              // height: "100%",
              // maxWidth: "1000px",
              // padding: "20px 15px",
              flexDirection: "column",
              // border: "1px solid red",
            }}
          >
            <Card
              title="Local Employment"
              style={{
                // display: "flex",
                justifyContent: "center",
                alignItems: "center",
                // height: "200px",
                height: "50%",
                width: "100%",
                // padding: "24px",
                // padding: "auto",
                borderRadius: "1.25rem",
                // margin: "auto",
                // alignItems: "center",
                // justifyContent: "center",
              }}
              bodyStyle={{
                // height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "85%",
                }}
              >
                <Doughnut data={localEmploymentChartData} />
              </div>
            </Card>
            <Card
              title="% of Local Suppliers"
              style={{
                // display: "flex",
                justifyContent: "center",
                alignItems: "center",
                // height: "200px",
                height: "50%",
                width: "100%",
                // padding: "24px",
                // padding: "auto",
                borderRadius: "1.25rem",
                // margin: "auto",
                // alignItems: "center",
                // justifyContent: "center",
              }}
              bodyStyle={{
                // height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "85%",
                }}
              >
                <Doughnut data={localSuppliersChartData} />
              </div>
            </Card>
          </Flex>
          <Flex
            className="Flex-2"
            style={{
              alignItems: "center",
              // justifyContent: "center",
              width: "70%",
              // height: "100%",
              // marginTop: 0,
              // height: "100%",
              // maxWidth: "1000px",
              // padding: "20px 15px",
              flexDirection: "column",
              // border: "1px solid blue",
            }}
          >
            <Card
              title="Community Investment"
              style={{
                // display: "flex",
                // justifyContent: "center",
                // alignItems: "center",
                // height: "200px",
                // height: "100%",
                width: "100%",
                // padding: "24px",
                // padding: "auto",
                borderRadius: "1.25rem",
                // margin: "auto",
                // alignItems: "center",
                // justifyContent: "center",
              }}
              bodyStyle={{
                // height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div style={{ alignSelf: "end" }}>
                <Stat
                  statText={"425900 DH"}
                  statValue={12700}
                  statSuffix={"DH"}
                  titleLevel={1}
                ></Stat>
              </div>
              {/* <Line
                data={communityInvestmentChartData}
                options={lineChartOptions}
              /> */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  paddingBottom: "80%",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <Line
                    data={communityInvestmentChartData}
                    options={lineChartOptions}
                  />
                </div>
              </div>
            </Card>
          </Flex>
        </Flex>
      </Layout>
    </MainLayout>
  );
};

export default SocialActivities;
