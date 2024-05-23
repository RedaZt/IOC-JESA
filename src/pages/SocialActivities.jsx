import React, { useEffect, useState } from "react";
import { theme, Flex, Layout, Card, Row, Col } from "antd";
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
  responsive: true,
  maintainAspectRatio: false,
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
          width: "100%",
          padding: "10px 16px",
          paddingTop: 0,
          display: "flex",
        }}
      >
        <Flex style={{ width: "100%" }}>
          <Row
            gutter={[8, 8]}
            style={{
              width: "100%",
              maxWidth: "1800px",
            }}
          >
            <Col span={8} className="Flex-1">
              <Row gutter={[8, 8]}>
                <Col span={24}>
                  <Card
                    title="Local Employment"
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                      width: "100%",
                      borderRadius: "1.25rem",
                    }}
                    bodyStyle={{
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
                </Col>
                <Col span={24}>
                  <Card
                    title="% of Local Suppliers"
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                      width: "100%",
                      borderRadius: "1.25rem",
                    }}
                    bodyStyle={{
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
                </Col>
              </Row>
            </Col>
            <Col span={16} className="Flex-2">
              <Card
                title="Community Investment"
                style={{
                  height: "100%",
                  width: "100%",
                  borderRadius: "1.25rem",
                }}
                bodyStyle={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "95%",
                }}
              >
                <Flex
                  style={{
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <Stat
                    statText={"425900 DH"}
                    statValue={12700}
                    statSuffix={"DH"}
                    titleLevel={1}
                  />
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "100%",
                      height: "100%",
                      marginTop: 8,
                    }}
                  >
                    <Line
                      data={communityInvestmentChartData}
                      options={lineChartOptions}
                    />
                  </div>
                </Flex>
              </Card>
            </Col>
          </Row>
        </Flex>
      </Layout>
    </MainLayout>
  );
};

export default SocialActivities;
