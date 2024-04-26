import React, { useEffect, useState } from "react";
import { StatCard1 } from "../components/StatCard";
import { theme, Flex, Layout, Card, List, Statistic, Tag, Space } from "antd";
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
import { Bar, Line, Doughnut, Pie } from "react-chartjs-2";
import MainLayout from "../layouts/MainLayout";
import Stat from "../components/common/Stat";
import AICard from "../components/common/AICard";
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

const vulnerabilitiesData = {
  labels: ["Critical", "High", "Medium", "Low"],
  datasets: [
    {
      // label: "",
      data: [0, 3, 10, 15],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(255, 159, 64, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
      ],
      borderWidth: 1,
    },
  ],
};
const securityLevelData = {
  labels: ["Non Certificated", "SL-1", "SL-2", "SL-3", "SL-4"],
  datasets: [
    {
      // label: "",
      data: [95, 1, 1, 1, 1],
      backgroundColor: [
        "rgba(75, 192, 192, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
      ],
      borderColor: [
        "rgba(75, 192, 192, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(255, 159, 64, 1)",
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
      ],
      borderWidth: 1,
    },
  ],
};
const softwarePercentageData = {
  labels: ["Reliable softwares", "Unreliable Software"],
  datasets: [
    {
      // label: "",
      data: [99, 1],
      backgroundColor: ["rgba(75, 192, 192, 0.2)", "rgba(255, 99, 132, 0.2)"],
      borderColor: ["rgba(75, 192, 192, 1)", "rgba(255, 99, 132, 1)"],
      borderWidth: 1,
    },
  ],
};
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
const histogramData = {
  labels: [...Array(15)].map((item) => ""),
  datasets: [
    {
      fill: true,
      label: "Dataset 1",
      data: [5, 5, 8, 7, 6, 5, 7, 7, 5, 6, 4, 5, 6, 7, 6],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
      tension: 0.3,
    },
    {
      fill: true,
      label: "Dataset 2",
      data: [4, 5, 6, 3, 7, 6, 7, 6, 9, 5, 5, 4, 8, 7, 5],
      borderColor: "rgb(255, 206, 86)",
      backgroundColor: "rgba(255, 206, 86, 0.5)",
      tension: 0.3,
    },
    {
      fill: true,
      label: "Dataset 3",
      data: [6, 7, 8, 7, 8, 6, 7, 5, 6, 5, 4, 7, 6, 9, 8],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      tension: 0.3,
    },
  ],
};
const activityLabels = [
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
];
const activityData = {
  labels: activityLabels,
  datasets: [
    {
      fill: true,
      label: "192.168.1.100",
      data: [3200, 2800, 2750, 3100, 3400, 3000, 3100, 3050, 3040],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
      tension: 0.3,
    },
    {
      fill: true,
      label: "192.168.1.61",
      data: [900, 1100, 1050, 1200, 1100, 1500, 2100, 1400, 1300],
      borderColor: "rgb(255, 206, 86)",
      backgroundColor: "rgba(255, 206, 86, 0.5)",
      tension: 0.3,
    },
  ],
};
const vulnerabilitiesCountData = [
  {
    label: "Critical",
    value: 0,
    color: "red",
  },
  {
    label: "High",
    value: 3,
    color: "orange",
  },
  {
    label: "Medium",
    value: 10,
    color: "gold",
  },
  {
    label: "Low",
    value: 15,
    color: "green",
  },
  {
    label: "Total",
    value: 28,
    color: "blue",
  },
];

const Cybersecurity = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <MainLayout selectedMenuKey={"2-1"} style={{ alignItems: "center" }}>
      <Layout
        className="content-container"
        style={{
          display: "flex",
          alignItems: "center",
          // justifyContent: "center",
          width: "100%",
          height: "100%",
          padding: "10px 16px",
          paddingTop: 0,
        }}
      >
        <Flex
          className="content"
          style={{
            width: "100%",
            maxWidth: "1600px",
          }}
        >
          <Flex
            className="flex-1"
            style={{
              width: "75%",
              display: "flex",
              flexDirection: "column",
              // border: "1px solid green",
            }}
          >
            <Flex
              className="flex-1-1"
              style={{
                // alignItems: "center",
                // justifyContent: "center",
                width: "100%",
                // height: "100%",
                // maxHeight: "700px",
                display: "flex",
                // border: "1px solid blue",
              }}
            >
              <Card
                title={
                  <div style={{ width: "100%", textWrap: "wrap" }}>
                    Events Histogram
                  </div>
                }
                style={{
                  justifyContent: "center",
                  // height: "500px",
                  // height: "500px",
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
                <Line options={areaChartOptions} data={histogramData} />
              </Card>
            </Flex>
            <Flex
              className="flex-1-2"
              style={{
                // alignItems: "center",
                // justifyContent: "center",
                width: "100%",
                // height: "100%",
                display: "flex",
                // border: "1px solid red",
              }}
            >
              <Card
                title={
                  <div style={{ width: "100%", textWrap: "wrap" }}>
                    Unique Vulnerabilities Distribution By Severity
                  </div>
                }
                style={{
                  justifyContent: "center",
                  width: "25%",
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
                  <Pie
                    options={pieChartOptions}
                    data={{
                      ...vulnerabilitiesData,
                      datasets: [
                        {
                          ...vulnerabilitiesData.datasets[0],
                          data: vulnerabilitiesData.datasets[0].data.map(
                            (item) => {
                              return Math.round(
                                (item /
                                  vulnerabilitiesData.datasets[0].data.reduce(
                                    (partialSum, a) => partialSum + a,
                                    0
                                  )) *
                                  100
                              );
                            }
                          ),
                        },
                      ],
                    }}
                  />
                </div>
              </Card>
              <Card
                title={
                  <div style={{ width: "100%", textWrap: "wrap" }}>
                    Non-unique Vulnerabilities Distribution By Severity
                  </div>
                }
                style={{
                  justifyContent: "center",
                  width: "25%",
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
                  <Pie
                    options={pieChartOptions}
                    data={{
                      ...vulnerabilitiesData,
                      datasets: [
                        {
                          ...vulnerabilitiesData.datasets[0],
                          data: vulnerabilitiesData.datasets[0].data.map(
                            (item) => {
                              return Math.round(
                                (item /
                                  vulnerabilitiesData.datasets[0].data.reduce(
                                    (partialSum, a) => partialSum + a,
                                    0
                                  )) *
                                  100
                              );
                            }
                          ),
                        },
                      ],
                    }}
                  />
                </div>
              </Card>
              <Card
                title={
                  <div style={{ width: "100%", textWrap: "wrap" }}>
                    Safety Level According to IEC-62443
                  </div>
                }
                style={{
                  justifyContent: "center",
                  width: "25%",
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
                  <Pie options={pieChartOptions} data={securityLevelData} />
                </div>
              </Card>
              <Card
                title={
                  <div style={{ width: "100%", textWrap: "wrap" }}>
                    Percentage of Reliable Softwares
                  </div>
                }
                style={{
                  justifyContent: "center",
                  width: "25%",
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
                  <Pie
                    options={pieChartOptions}
                    data={softwarePercentageData}
                  />
                </div>
              </Card>
            </Flex>
            <Flex
              className="flex-1-3"
              style={{
                // alignItems: "center",
                // justifyContent: "center",
                width: "100%",
                // height: "100%",
                // maxHeight: "700px",
                display: "flex",
                // border: "1px solid blue",
              }}
            >
              <Card
                title={
                  <div style={{ width: "100%", textWrap: "wrap" }}>
                    Traffic Analysis by Time and IPs
                  </div>
                }
                style={{
                  justifyContent: "center",
                  // height: "500px",
                  // height: "500px",
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
                <Line options={areaChartOptions} data={activityData} />
              </Card>
            </Flex>
            <Flex>
              <AICard />
            </Flex>
          </Flex>
          <Flex
            className="flex-2"
            style={{
              width: "25%",
              display: "flex",
              flexDirection: "column",
              // border: "1px solid green",
            }}
          >
            <Card
              title={
                <div style={{ width: "100%", textWrap: "wrap" }}>
                  Critical Events Count
                </div>
              }
              style={{
                justifyContent: "center",
                // height: "500px",
                // height: "500px",
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
              <div style={{ width: "fit-content" }}>
                <Stat
                  // StatIcon={CheckCircleOutlined}
                  statText={15}
                  // statSuffix={"%"}
                  statValue={4}
                  arrow={"down"}
                  titleLevel={1}
                  // arrowColor={"red"}
                />
              </div>
            </Card>
            <List
              header={<h3>Unique Vulnerabilities</h3>}
              // footer={<div>Footer</div>}
              bordered
              dataSource={vulnerabilitiesCountData}
              renderItem={(item) => (
                <List.Item>
                  {/* <Statistic title={item.label} value={item.value} /> */}
                  <Tag
                    color={item.color}
                    style={{
                      display: "flex",
                      padding: "10px 20px",
                      width: "100%",
                    }}
                  >
                    <Flex
                      style={{
                        width: "100%",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <h2>{item.label}</h2>
                      <h2>{item.value}</h2>
                    </Flex>
                  </Tag>
                </List.Item>
              )}
              style={{
                background: colorBgContainer,
                border: "1px solid #f0f0f0",
                borderRadius: "1.25rem",
              }}
            />
            <List
              header={<h3>Top 10 Vulnerabilities</h3>}
              // footer={<div>Footer</div>}
              bordered
              dataSource={[
                "CVE-2019-0809",
                "CVE-2018-0599",
                "CVE-2014-0789",
                "CVE-2021-42809",
                "CVE-2021-42808",
                "CVE-2019-13537",
                "CVE-2013-2796",
                "CVE-2011-3330",
                "CVE-2019-6833",
                "CVE-2022-45788",
              ]}
              renderItem={(item, index) => (
                <List.Item>
                  {/* <Statistic title="Active Users" value={item} /> */}
                  <div>
                    {index + 1} - {item}
                  </div>
                </List.Item>
              )}
              style={{
                background: colorBgContainer,
                border: "1px solid #f0f0f0",
                borderRadius: "1.25rem",
              }}
            />
            <List
              header={<h3>Account Management Activity</h3>}
              // footer={<div>Footer</div>}
              bordered
              dataSource={[
                {
                  label: "Request",
                  value: 50,
                },
                {
                  label: "Online",
                  value: 200,
                },
                {
                  label: "Offline",
                  value: 150,
                },
                {
                  label: "Enabled",
                  value: 350,
                },
                {
                  label: "Disabled",
                  value: 50,
                },
                {
                  label: "Locked",
                  value: 25,
                },
                {
                  label: "Unlocked",
                  value: 12,
                },
                {
                  label: "Created",
                  value: 550,
                },
                {
                  label: "Deleted",
                  value: 50,
                },
              ]}
              renderItem={(item) => (
                <List.Item>
                  <Flex
                    style={{
                      width: "100%",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>{item.label}</div>
                    <div>{item.value}</div>
                  </Flex>
                </List.Item>
              )}
              style={{
                background: colorBgContainer,
                border: "1px solid #f0f0f0",
                borderRadius: "1.25rem",
              }}
            />
          </Flex>
        </Flex>
      </Layout>
    </MainLayout>
  );
};

export default Cybersecurity;
