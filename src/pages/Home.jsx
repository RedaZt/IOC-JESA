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
} from "antd";
import MainLayout from "../layouts/MainLayout";
import Stat from "../components/common/Stat";
import { Typography } from "antd";
import SustainabilityCard from "../components/pages/Home/SustainabilityCard";
import OpportunityCard from "../components/pages/Home/OpportunityCard";
import BusinessRisksCard from "../components/pages/Home/BusinessRisksCard";
// import { Context } from "../App";
import { RootContext } from "../store";
import "../css/pages/Home.css";
import AssetsPerformanceCard from "../components/pages/Home/AssetsPerformanceCard";
import IntegratedOperationsCard from "../components/pages/Home/IntegratedOperationsCard";
import TimeCard from "../components/pages/Home/DateCard";
import WeatherCard from "../components/pages/Home/WeatherCard";
import AICard from "../components/common/AICard";
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
import { getProductivityChartData } from "../data/data";
import { getAssetsInfos } from "../data/data";

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

// 1c3b72 1b3a71

const { Title } = Typography;
const { Header, Sider, Content } = Layout;

const onChange = (currentSlide) => {
  console.log(currentSlide);
};

const totalOpportunityData = {
  "General View": 92,
  "Mine & Beneficiation": 93,
  Corridors: 94,
  MPH: 95,
  "SPH - PSA": 96,
};

const lineChartOptions2 = {
  maintainAspectRatio: false,
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

const Home = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const {
    dashboard: { activeTab: selectedView },
    dispatch,
  } = useContext(RootContext);

  const [mouseOver, setMouseOver] = useState(false);

  const { OAE, OAA } = getAssetsInfos();

  // const {
  //   dashboard: { activeTab },
  // } = context;

  return (
    <MainLayout selectedMenuKey={"0"} style={{ alignItems: "center" }}>
      <Layout
        className="content-container"
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          height: "100%",
          // padding: "20px 15px",
          padding: "10px 16px",
          paddingTop: 0,
        }}
      >
        <Flex
          className="content"
          style={{
            width: "100%",
            maxWidth: "1800px",
          }}
        >
          <div
            className="flex-1"
            style={{
              height: "100%",
              width: "75%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              className="flex-1-1"
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div style={{ width: "25%" }}>
                <OpportunityCard />
              </div>
              <div style={{ width: "50%" }}>
                <SustainabilityCard />
              </div>
              <div style={{ width: "25%" }}>
                <BusinessRisksCard />
              </div>
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Card
                title="Process"
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "1.25rem",
                }}
              >
                <Card
                  style={{
                    height: "fit-content",
                    borderRadius: "1.25rem",
                    marginBottom: 10,
                  }}
                >
                  <Row
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-evenly",
                      // height: "200px",
                    }}
                  >
                    <Col xl={24} xxl={12} style={{ padding: "10px" }}>
                      <Row
                        style={{
                          // display: "flex",
                          // width: "100%",
                          alignItems: "center",
                          justifyContent: "space-evenly",
                          // height: "200px",
                        }}
                      >
                        <Col
                          lg={24}
                          xl={12}
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Progress
                            key="total-opportunity"
                            type="dashboard"
                            strokeColor="#1b3a71"
                            percent={totalOpportunityData[selectedView]}
                            gapDegree={50}
                            success={{ percent: null }}
                          />
                          <h3>Total Opportunity</h3>
                        </Col>
                        <Col
                          lg={24}
                          xl={12}
                          style={{
                            display: "flex",
                            height: "100%",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Stat
                            statText={"Loss vs APC Target"}
                            statValue={7.6}
                            statSuffix={"%"}
                            arrow={"down"}
                            arrowColor={"red"}
                          />
                          <Stat
                            statText={"% APC Run Time"}
                            statValue={95}
                            statSuffix={"%"}
                          />
                          <Stat
                            statText={"% Loss vs APC Target"}
                            statValue={21}
                            statSuffix={"%"}
                            arrow={"down"}
                            arrowColor={"red"}
                          />
                          <Stat
                            statText={"% Emissions Limit"}
                            statValue={94}
                            statSuffix={"%"}
                          />
                        </Col>
                      </Row>
                    </Col>
                    <Col xl={24} xxl={12} style={{ padding: "10px" }}>
                      <Row>
                        <Col
                          lg={24}
                          xl={12}
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Flex style={{ width: "100%" }}>
                            <div
                              style={{
                                display: "flex",
                                maxHeight: "80px",
                                width: "70%",
                              }}
                            >
                              <Line
                                options={lineChartOptions2}
                                data={getProductivityChartData()}
                                // style={{ width: "100%", height: "100px" }}
                              />
                            </div>
                            <Flex
                              style={{ width: "30%", alignItems: "center" }}
                            >
                              <Stat
                                statValue={-10.7}
                                arrow={"down"}
                                arrowColor={"red"}
                              />
                            </Flex>
                          </Flex>
                          <Flex style={{ width: "100%" }}>
                            <div
                              style={{
                                display: "flex",
                                maxHeight: "80px",
                                width: "70%",
                              }}
                            >
                              <Line
                                options={lineChartOptions2}
                                data={getProductivityChartData()}
                                // style={{ width: "100%", height: "100px" }}
                              />
                            </div>
                            <Flex
                              style={{ width: "30%", alignItems: "center" }}
                            >
                              <Stat
                                statValue={-4.7}
                                arrow={"down"}
                                arrowColor={"red"}
                              />
                            </Flex>
                          </Flex>
                        </Col>
                        <Col
                          lg={24}
                          xl={12}
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <div style={{ maxHeight: "80px", maxWidth: "250px" }}>
                            <Line
                              options={lineChartOptions2}
                              data={getProductivityChartData()}
                              // style={{ width: "100%", height: "100px" }}
                            />
                          </div>
                          <div style={{ maxHeight: "80px", maxWidth: "250px" }}>
                            <Line
                              options={lineChartOptions2}
                              data={getProductivityChartData()}
                              // style={{ width: "100%", height: "100px" }}
                            />
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Card>
                <Card
                  style={{
                    borderRadius: "1.25rem",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "500px",
                      background: "#1b3a71",
                      borderRadius: "0.75rem",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      className="process-image"
                      src={`/img/Process - ${selectedView}.png`}
                      // src="/img/Process - General View.png"
                      alt="Process"
                      style={{
                        position: "absolute",
                        maxWidth: "95%",
                        maxHeight: "95%",
                        left: "auto",
                        top: "auto",
                      }}
                      // onMouseOver={() => setMouseOver(true)}
                      // onMouseOut={() => setMouseOver(false)}
                    />
                  </div>
                </Card>
              </Card>
            </div>
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div style={{ height: "100%", width: "35%" }}>
                <WeatherCard />
              </div>
              <div style={{ height: "100%", width: "65%" }}>
                <AICard />
              </div>
            </div>
          </div>
          <div
            key={"flex-2"}
            style={{
              flexDirection: "row",
              width: "25%",
              // border: "1px solid red",
            }}
          >
            <TimeCard />
            <Card
              title="CCTV-Footage"
              style={{
                width: "100%",
                borderRadius: "1.25rem",
              }}
              bodyStyle={{
                padding: 15,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
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
                    maxWidth: "100%",
                  }}
                />
              </div>
            </Card>
            <IntegratedOperationsCard />
            <AssetsPerformanceCard />
          </div>
        </Flex>
      </Layout>
    </MainLayout>
  );
};

export default Home;
