import React, { useEffect, useState, useContext } from "react";
import { RootContext } from "../store";
import {
  theme,
  Flex,
  Layout,
  Divider,
  Progress,
  Card,
  Space,
  Spin,
  Row,
  Col,
} from "antd";
import { Typography } from "antd";
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
import GraphCard from "../components/common/GraphCard";
import OEE from "../components/pages/Production/OEE";
import "../css/pages/PageStyle.css";
import Loader from "../components/common/Loader";

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

const Production = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const {
    dashboard: { activeTab: selectedView },
    dispatch,
  } = useContext(RootContext);

  const [productionData, setProductionData] = useState(null);

  useEffect(() => {
    setProductionData(null);
    const interval = setInterval(() => {
      // fetch("http://localhost:8000/sustainability")
      //   .then((response) => response.json())
      //   .then((data) => {
      //     console.log(data);
      //     setSustainabilityData(data);
      //   });
      const url = "http://localhost:8000/categories";
      const queryParams = new URLSearchParams({ process: selectedView });
      // const requestUrl = `${url}?${queryParams}`;
      const requestUrl = `${url}/Production?${queryParams}`;
      // console.log(requestUrl);
      async function fetchData() {
        try {
          const response = await fetch(requestUrl);
          if (!response.ok) {
            throw new Error("Failed to fetch data");
          }
          const data = await response.json();
          setProductionData(data);
        } catch (error) {
          console.error("Error fetching sustainability data:", error);
        }
      }

      fetchData();
    }, 1000);
    return () => clearInterval(interval);
  }, [selectedView]);

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
        {productionData ? (
          <Flex
            style={{
              flexDirection: "column",
              width: "100%",
              // height: "100%",
              maxWidth: "1800px",
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
              <Row>
                <Col lg={24} xl={10}>
                  <Row>
                    <Col span={24}>
                      <Row>
                        <Col span={12}>
                          <Flex style={{ width: "100%", height: "100%" }}>
                            <GraphCard
                              title={"Product Quality"}
                              data={productionData["Product Quality"]}
                              unit={"%"}
                            />
                          </Flex>
                        </Col>
                        <Col span={12} style={{ width: "100%" }}>
                          <Flex style={{ width: "100%", height: "100%" }}>
                            <GraphCard
                              title={"Labor Productivity"}
                              data={productionData["Labor Productivity"]}
                              unit={"%"}
                            />
                          </Flex>
                        </Col>
                      </Row>
                    </Col>
                    <Col span={24}>
                      <Row>
                        <Col span={12} style={{ width: "100%" }}>
                          <Flex style={{ width: "100%", height: "100%" }}>
                            <GraphCard
                              title={"Operating Cost/Ton"}
                              data={productionData["Operating Cost/Ton"]}
                              unit={"$"}
                            />
                          </Flex>
                        </Col>
                        <Col span={12} style={{ width: "100%" }}>
                          <Flex style={{ width: "100%", height: "100%" }}>
                            <GraphCard
                              title={"Labor Productivity Cost"}
                              data={productionData["Labor Productivity Cost"]}
                              unit={"$"}
                            />
                          </Flex>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={14}>
                  <Flex
                    key={"OEE-Card"}
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                      width: "100%",
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
                    <OEE data={productionData} />
                  </Flex>
                </Col>
              </Row>
            </Flex>
            <Flex>
              <AICard />
            </Flex>
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
                <div style={{ height: "300px" }}>
                  <Bar options={barChartOptions} data={barChartData} />
                </div>
              </Card>
            </Flex>
          </Flex>
        ) : (
          <Flex
            style={{
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              maxWidth: "1800px",
            }}
          >
            <Spin size="large" />
          </Flex>
        )}
      </Layout>
    </MainLayout>
  );
};

export default Production;
