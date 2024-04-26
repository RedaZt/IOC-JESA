import React, { useEffect, useState } from "react";
import { theme, Flex, Layout, Divider, Progress, Card, Space } from "antd";
import { Typography } from "antd";
import Stat from "../components/common/Stat";
import {
  CheckCircleOutlined,
  DollarOutlined,
  UserOutlined,
} from "@ant-design/icons";
// import { Pie } from "react-chartjs-2";
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
import MainLayout from "../layouts/MainLayout";
import AICard from "../components/common/AICard";
import "../css/pages/PageStyle.css";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
  // ChartTitle,
);

const { Title } = Typography;
const { Header, Sider, Content } = Layout;

// Line chart data
const lineChartLabels = [
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
const lineChartData = {
  labels: lineChartLabels,
  datasets: [
    {
      label: "Last 30 Days",
      data: [89, 90, 92, 92, 91, 93, 92, 90, 91, 92, 90],
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

// Bar chart data
const barChartOptions = {
  responsive: true,
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
        display: false, // Hide y-axis text
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

const Production = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <MainLayout selectedMenuKey={"1"} style={{ alignItems: "center" }}>
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
          style={{
            flexDirection: "column",
            width: "100%",
            // height: "100%",
            maxWidth: "1600px",
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
              // maxWidth: "1000px",
              // padding: "20px 15px",
              // display: "flex",
              // flexDirection: "column",
              // border: "1px solid blue",
            }}
          >
            <Flex
              key={"StatCards"}
              style={{
                alignItems: "center",
                // justifyContent: "center",
                width: "40%",
                // height: "100%",
                // marginTop: 0,
                // height: "100%",
                // maxWidth: "1000px",
                // padding: "20px 15px",
                display: "flex",
                flexDirection: "column",
                // border: "1px solid red",
              }}
            >
              <Flex
                style={{
                  alignItems: "center",
                  // justifyContent: "center",
                  width: "100%",
                  // height: "100%",
                  // marginTop: 0,
                  // height: "100%",
                  // maxWidth: "1000px",
                  // padding: "20px 15px",
                  margin: 0,
                  padding: 0,
                  display: "flex",
                  // border: "1px solid green",
                }}
              >
                <Flex
                  style={{
                    // margin: "10px 16px",
                    marginTop: 0,
                    padding: 0,
                    // border: "1px solid green",
                    width: "50%",
                    height: "fit-content",
                  }}
                >
                  <Card
                    // title="Assets Performance"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "200px",
                      // height: "100%",
                      width: "100%",
                      padding: "24px",
                      // padding: "auto",
                      borderRadius: "1.25rem",
                      // margin: "auto",
                      // alignItems: "center",
                      // justifyContent: "center",
                    }}
                    bodyStyle={{
                      padding: 0,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Space style={{ flexDirection: "column" }}>
                      <Stat
                        StatIcon={CheckCircleOutlined}
                        statText={"Product Quality"}
                        statSuffix={"%"}
                        statValue={96}
                        arrow={"down"}
                        arrowColor={"red"}
                        // titleLevel={4}
                      />
                      <Line
                        options={lineChartOptions}
                        data={lineChartData}
                        style={{ width: "100%" }}
                      />
                    </Space>
                  </Card>
                </Flex>
                <Flex
                  style={{
                    // margin: "10px 16px",
                    marginTop: 0,
                    padding: 0,
                    // border: "1px solid green",
                    width: "50%",
                    height: "fit-content",
                  }}
                >
                  <Card
                    // title="Assets Performance"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "200px",
                      // height: "100%",
                      width: "100%",
                      padding: "24px",
                      // padding: "auto",
                      borderRadius: "1.25rem",
                      // margin: "auto",
                      // alignItems: "center",
                      // justifyContent: "center",
                    }}
                    bodyStyle={{
                      padding: 0,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Space style={{ flexDirection: "column" }}>
                      <Stat
                        StatIcon={DollarOutlined}
                        statText={"Operating Cost per Ton"}
                        statValue={550000}
                        arrowColor={"red"}
                        // titleLevel={4}
                      />
                      <Line
                        options={lineChartOptions}
                        data={lineChartData}
                        style={{ width: "100%" }}
                      />
                    </Space>
                  </Card>
                </Flex>
              </Flex>
              <Flex
                style={{
                  alignItems: "center",
                  // justifyContent: "center",
                  width: "100%",
                  // height: "100%",
                  // marginTop: 0,
                  // height: "100%",
                  // maxWidth: "1000px",
                  // padding: "20px 15px",
                  display: "flex",
                  // border: "1px solid green",
                }}
              >
                <Flex
                  style={{
                    // margin: "10px 16px",
                    marginTop: 0,
                    padding: 0,
                    // border: "1px solid green",
                    width: "50%",
                    height: "fit-content",
                  }}
                >
                  <Card
                    // title="Assets Performance"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "200px",
                      // height: "100%",
                      width: "100%",
                      padding: "24px",
                      // padding: "auto",
                      borderRadius: "1.25rem",
                      // margin: "auto",
                      // alignItems: "center",
                      // justifyContent: "center",
                    }}
                    bodyStyle={{
                      padding: 0,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Space style={{ flexDirection: "column" }}>
                      <Stat
                        StatIcon={UserOutlined}
                        statText={"Labor Productivity"}
                        statSuffix={"%"}
                        statValue={90}
                        arrow={"down"}
                        arrowColor={"red"}
                        // titleLevel={4}
                      />
                      <Line
                        options={lineChartOptions}
                        data={lineChartData}
                        style={{ width: "100%" }}
                      />
                    </Space>
                  </Card>
                </Flex>
                <Flex
                  style={{
                    // margin: "10px 16px",
                    marginTop: 0,
                    padding: 0,
                    // border: "1px solid green",
                    width: "50%",
                    height: "fit-content",
                  }}
                >
                  <Card
                    // title="Assets Performance"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "200px",
                      // height: "100%",
                      width: "100%",
                      padding: "24px",
                      // padding: "auto",
                      borderRadius: "1.25rem",
                      // margin: "auto",
                      // alignItems: "center",
                      // justifyContent: "center",
                    }}
                    bodyStyle={{
                      padding: 0,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Space style={{ flexDirection: "column" }}>
                      <Stat
                        StatIcon={CheckCircleOutlined}
                        statText={"Labor Productivity Cost"}
                        statValue={11300}
                        arrow={"down"}
                        // titleLevel={4}
                      />
                      <Line
                        options={lineChartOptions}
                        data={lineChartData}
                        style={{ width: "100%" }}
                      />
                    </Space>
                  </Card>
                </Flex>
              </Flex>
            </Flex>
            <Flex
              key={"OEE-Card"}
              style={{
                alignItems: "center",
                justifyContent: "center",
                width: "60%",
                height: "100%",
                // marginTop: 0,
                // height: "100%",
                // maxWidth: "1000px",
                // padding: "20px 15px",
                display: "flex",
                // flexDirection: "column",
                // border: "1px solid purple",
              }}
            >
              <Card
                // title="OEE"
                style={{
                  display: "flex",
                  // alignItems: "center",
                  // justifyContent: "center",
                  // height: "200px",
                  height: "100%",
                  width: "100%",
                  // padding: "auto",
                  borderRadius: "1.25rem",
                  // margin: "auto",
                  // alignItems: "center",
                  // justifyContent: "center",
                }}
                bodyStyle={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                  width: "100%",
                }}
              >
                <Flex
                  style={{
                    height: "100%",
                    width: "100%",
                    flexDirection: "column",
                    justifyContent: "center",
                    // justifyContent: "space-between",
                  }}
                >
                  <Flex
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Flex
                      style={{
                        width: "20%",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Progress
                        key="OEE"
                        type="dashboard"
                        strokeColor="#1d3b7e"
                        size={150}
                        percent={92}
                        gapDegree={50}
                        // style={{ margin: "0 5px" }}
                      />
                      <Title
                        level={4}
                        style={{
                          margin: 0,
                          // color: collapsed ? "white" : "#1d3b7e",
                          // fontFamily: collapsed ? null : "myFont",
                          // fontSize: collapsed ? "13px" : "15px",
                        }}
                      >
                        OEE
                      </Title>
                    </Flex>
                    <Divider type="vertical" style={{ height: 150 }} />
                    <Flex
                      style={{
                        width: "50%",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                      }}
                    >
                      <Flex
                        style={{
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Progress
                          key="Availability"
                          type="dashboard"
                          strokeColor="#1d3b7e"
                          // size={150}
                          percent={97}
                          gapDegree={50}
                          // style={{ margin: "0 5px" }}
                        />
                        <Title
                          level={5}
                          style={{
                            margin: 0,
                            // color: collapsed ? "white" : "#1d3b7e",
                            // fontFamily: collapsed ? null : "myFont",
                            // fontSize: collapsed ? "13px" : "15px",
                          }}
                        >
                          Availability
                        </Title>
                      </Flex>
                      <Flex
                        style={{
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Progress
                          key="Performance"
                          type="dashboard"
                          strokeColor="#1d3b7e"
                          // size={150}
                          percent={97}
                          gapDegree={50}
                          // style={{ margin: "0 5px" }}
                        />
                        <Title
                          level={5}
                          style={{
                            margin: 0,
                            // color: collapsed ? "white" : "#1d3b7e",
                            // fontFamily: collapsed ? null : "myFont",
                            // fontSize: collapsed ? "13px" : "15px",
                          }}
                        >
                          Performance
                        </Title>
                      </Flex>
                      <Flex
                        style={{
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Progress
                          key="Quality"
                          type="dashboard"
                          strokeColor="#1d3b7e"
                          // size={150}
                          percent={97}
                          gapDegree={50}
                          // style={{ margin: "0 5px" }}
                        />
                        <Title
                          level={5}
                          style={{
                            margin: 0,
                            // color: collapsed ? "white" : "#1d3b7e",
                            // fontFamily: collapsed ? null : "myFont",
                            // fontSize: collapsed ? "13px" : "15px",
                          }}
                        >
                          Quality
                        </Title>
                      </Flex>
                    </Flex>
                  </Flex>
                  {/* <Divider /> */}
                  <Flex
                    style={{
                      flexDirection: "column",
                      justifyContent: "space-between",
                      padding: "0 15px",
                    }}
                  >
                    <Flex style={{ flexDirection: "column" }}>
                      <Title
                        level={4}
                        style={{
                          margin: 0,
                          // color: collapsed ? "white" : "#1d3b7e",
                          // fontFamily: collapsed ? null : "myFont",
                          // fontSize: collapsed ? "13px" : "15px",
                        }}
                      >
                        Production Target
                      </Title>
                      <Progress
                        percent={69}
                        strokeColor="#1d3b7e"
                        size={[, 20]}
                        showInfo={false}
                      />
                    </Flex>
                    <Flex
                      style={{
                        justifyContent: "space-between",
                      }}
                    >
                      <Flex style={{ flexDirection: "column" }}>
                        <Title
                          level={2}
                          style={{
                            margin: 0,
                            // color: collapsed ? "white" : "#1d3b7e",
                            // fontFamily: collapsed ? null : "myFont",
                            // fontSize: collapsed ? "13px" : "15px",
                          }}
                        >
                          18630
                        </Title>
                        <Title
                          level={5}
                          style={{
                            margin: 0,
                            // color: collapsed ? "white" : "#1d3b7e",
                            // fontFamily: collapsed ? null : "myFont",
                            // fontSize: collapsed ? "13px" : "15px",
                          }}
                        >
                          Actual Quantity
                        </Title>
                      </Flex>
                      <Flex style={{ flexDirection: "column" }}>
                        <Title
                          level={2}
                          style={{
                            margin: 0,
                            // color: collapsed ? "white" : "#1d3b7e",
                            // fontFamily: collapsed ? null : "myFont",
                            // fontSize: collapsed ? "13px" : "15px",
                          }}
                        >
                          17510
                        </Title>
                        <Title
                          level={5}
                          style={{
                            margin: 0,
                            // color: collapsed ? "white" : "#1d3b7e",
                            // fontFamily: collapsed ? null : "myFont",
                            // fontSize: collapsed ? "13px" : "15px",
                          }}
                        >
                          Projected Quantity
                        </Title>
                      </Flex>
                      <Flex style={{ flexDirection: "column" }}>
                        <Title
                          level={2}
                          style={{
                            margin: 0,
                            // color: collapsed ? "white" : "#1d3b7e",
                            // fontFamily: collapsed ? null : "myFont",
                            // fontSize: collapsed ? "13px" : "15px",
                          }}
                        >
                          27000
                        </Title>
                        <Title
                          level={5}
                          style={{
                            margin: 0,
                            // color: collapsed ? "white" : "#1d3b7e",
                            // fontFamily: collapsed ? null : "myFont",
                            // fontSize: collapsed ? "13px" : "15px",
                          }}
                        >
                          Target Quantity
                        </Title>
                      </Flex>
                    </Flex>
                  </Flex>
                </Flex>
              </Card>
            </Flex>
          </Flex>
          <AICard />
          <Flex
            key={"Inventory"}
            style={{
              alignItems: "center",
              // justifyContent: "center",
              width: "100%",
              height: "100%",
              // padding: "10px 16px",
              // paddingTop: 0,
              // marginTop: 0,
              // height: "100%",
              // maxWidth: "1000px",
              // padding: "20px 15px",
              display: "flex",
              // flexDirection: "column",
              // border: "1px solid blue",
            }}
          >
            <Card
              title="Inventory"
              style={{
                justifyContent: "center",
                // height: "200px",
                // height: "100%",
                width: "100%",
                // padding: "auto",
                borderRadius: "1.25rem",
                // margin: "auto",
                // alignItems: "center",
                // justifyContent: "center",
              }}
            >
              <div style={{ height: "100%" }}>
                <Bar options={barChartOptions} data={barChartData} />
              </div>
            </Card>
          </Flex>
        </Flex>
      </Layout>
    </MainLayout>
  );
};

export default Production;
