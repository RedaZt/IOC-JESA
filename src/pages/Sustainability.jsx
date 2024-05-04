import React, { useEffect, useState } from "react";
import { StatCard1 } from "../components/StatCard";
import { theme, Flex, Layout, Card, Row, Col } from "antd";
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
import AICard from "../components/common/AICard";

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

const carbonFootprintChartData = {
  labels: ["Mine & Treatment", "MPH", "SPH - PSA"],
  datasets: [
    {
      label: "% of Carbon Footprint",
      data: [21, 39, 40],
      backgroundColor: [
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
      ],
      borderColor: [
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const lineChartLabels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "",
];
const lineChartOptions = {
  responsive: true,
  scales: {
    //   // to remove the labels
    //   x: {
    //     display: false,
    //   },
    //   // to remove the y-axis labels
    //   y: {
    //     display: false,
    //   },
    y: {
      // display: false,
      beginAtZero: true,
    },
  },
  plugins: {
    legend: {
      position: "top",
      display: false,
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
      label: "Dataset 1",
      data: [600, 550, 580, 700, 720, 600, 570],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

const Sustainability = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <MainLayout selectedMenuKey={"3"} style={{ alignItems: "center" }}>
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
            flexDirection: "column",
            width: "100%",
            maxWidth: "1800px",
          }}
        >
          <Row>
            <Col
              // xs={24}
              // sm={24}
              lg={24}
              xl={12}
              // xl={4}
              key="col-1"
            >
              <Card
                title="Carbon Footprint (CO2-e)"
                style={{
                  // justifyContent: "center",
                  height: "100%",
                  // maxHeight: "700px",
                  width: "100%",
                  boxSizing: "border-box",
                  // padding: "auto",
                  borderRadius: "1.25rem",
                  // margin: "auto",
                  // alignItems: "center",
                  // justifyContent: "center",
                }}
                bodyStyle={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div style={{ height: "40%", marginBottom: 20 }}>
                  <Doughnut data={carbonFootprintChartData} />
                </div>
                {/* <div style={{ height: "40%", width: "100%" }}> */}
                <Line
                  options={lineChartOptions}
                  data={lineChartData}
                  style={{ maxheight: "40%", maxwidth: "100%" }}
                />
                {/* </div> */}
              </Card>
            </Col>
            <Col
              // xs={24}
              // sm={24}
              // md={24}
              lg={24}
              xl={12}
              // xl={4}
              key="col-2"
            >
              <Card
                title="Specific Electricity Consumption (MHh)"
                style={{
                  // justifyContent: "center",
                  height: "100%",
                  width: "100%",
                  // maxHeight: "700px",
                  // width: "50%",
                  boxSizing: "border-box",
                  // padding: "auto",
                  borderRadius: "1.25rem",
                  // margin: "auto",
                  // alignItems: "center",
                  // justifyContent: "center",
                }}
                bodyStyle={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div style={{ height: "40%", marginBottom: 20 }}>
                  <Doughnut data={carbonFootprintChartData} />
                </div>
                {/* <div style={{ height: "40%", width: "100%" }}> */}
                <Line
                  options={lineChartOptions}
                  data={lineChartData}
                  style={{ maxheight: "40%", maxwidth: "100%" }}
                />
                {/* </div> */}
              </Card>
            </Col>
            <Col
              // xs={24}
              // sm={24}
              // md={24}
              lg={24}
              xl={12}
              // xl={4}
              key="col-3"
            >
              <Card
                title="Specific Water Consumption (ML)"
                style={{
                  // justifyContent: "center",
                  height: "100%",
                  width: "100%",
                  // maxHeight: "700px",
                  // width: "50%",
                  boxSizing: "border-box",
                  // padding: "auto",
                  borderRadius: "1.25rem",
                  // margin: "auto",
                  // alignItems: "center",
                  // justifyContent: "center",
                }}
                bodyStyle={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div style={{ height: "40%", marginBottom: 20 }}>
                  <Doughnut data={carbonFootprintChartData} />
                </div>
                {/* <div style={{ height: "40%", width: "100%" }}> */}
                <Line
                  options={lineChartOptions}
                  data={lineChartData}
                  style={{ maxheight: "40%", maxwidth: "100%" }}
                />
                {/* </div> */}
              </Card>
            </Col>
            <Col
              // xs={24}
              // sm={24}
              // md={24}
              lg={24}
              xl={12}
              // xl={4}
              key="col-4"
            >
              <Card
                title="Specific Fuel Consumption (ML)"
                style={{
                  // justifyContent: "center",
                  height: "100%",
                  width: "100%",
                  // maxHeight: "700px",
                  // width: "50%",
                  boxSizing: "border-box",
                  // padding: "auto",
                  borderRadius: "1.25rem",
                  // margin: "auto",
                  // alignItems: "center",
                  // justifyContent: "center",
                }}
                bodyStyle={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div style={{ height: "40%", marginBottom: 20 }}>
                  <Doughnut data={carbonFootprintChartData} />
                </div>
                {/* <div style={{ height: "40%", width: "100%" }}> */}
                <Line
                  options={lineChartOptions}
                  data={lineChartData}
                  style={{ maxheight: "40%", maxwidth: "100%" }}
                />
                {/* </div> */}
              </Card>
            </Col>
          </Row>
          <Flex>
            <AICard />
          </Flex>
        </Flex>
      </Layout>
    </MainLayout>
  );
};

export default Sustainability;
