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
import CCTV from "../components/pages/Home/CCTV";

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
  0: 92,
  1: 93,
  2: 94,
  3: 95,
  4: 96,
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
        <Flex style={{ width: "100%", maxWidth: "1800px" }}>
          <Row
            gutter={[8, 8]}
            className="content"
            // style={{
            //   maxWidth: "1800px",
            // }}
          >
            <Col span={18}>
              <Row gutter={[8, 8]}>
                <Col span={24}>
                  <Row gutter={[8, 8]}>
                    <Col span={6}>
                      <OpportunityCard />
                    </Col>
                    <Col span={12}>
                      <SustainabilityCard />
                    </Col>
                    <Col span={6}>
                      <BusinessRisksCard />
                    </Col>
                  </Row>
                </Col>
                <Col span={24}>
                  {/* <div
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  > */}
                  <Row gutter={[8, 8]}>
                    <Col span={24}>
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
                            }}
                          >
                            <Col xl={24} xxl={12} style={{ padding: "10px" }}>
                              <Row
                                style={{
                                  alignItems: "center",
                                  justifyContent: "space-evenly",
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
                              <Row gutter={[8, 8]}>
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
                                    <Flex
                                      style={{
                                        maxHeight: "80px",
                                        width: "70%",
                                      }}
                                    >
                                      <Line
                                        options={lineChartOptions2}
                                        data={getProductivityChartData()}
                                        // style={{ width: "100%", height: "100px" }}
                                      />
                                    </Flex>
                                    <Flex
                                      style={{
                                        width: "30%",
                                        alignItems: "center",
                                        justifyContent: "center",
                                      }}
                                    >
                                      <Stat
                                        statValue={-10.7}
                                        arrow={"down"}
                                        arrowColor={"red"}
                                      />
                                    </Flex>
                                  </Flex>
                                  <Flex style={{ width: "100%" }}>
                                    <Flex
                                      style={{
                                        maxHeight: "80px",
                                        width: "70%",
                                      }}
                                    >
                                      <Line
                                        options={lineChartOptions2}
                                        data={getProductivityChartData()}
                                        // style={{ width: "100%", height: "100px" }}
                                      />
                                    </Flex>
                                    <Flex
                                      style={{
                                        width: "30%",
                                        alignItems: "center",
                                      }}
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
                                  <Flex style={{ width: "100%" }}>
                                    <Flex
                                      style={{
                                        maxHeight: "80px",
                                        width: "70%",
                                      }}
                                    >
                                      <Line
                                        options={lineChartOptions2}
                                        data={getProductivityChartData()}
                                        // style={{ width: "100%", height: "100px" }}
                                      />
                                    </Flex>
                                    <Flex
                                      style={{
                                        width: "30%",
                                        alignItems: "center",
                                        justifyContent: "center",
                                      }}
                                    >
                                      <Stat
                                        statValue={-10.7}
                                        arrow={"down"}
                                        arrowColor={"red"}
                                      />
                                    </Flex>
                                  </Flex>
                                  <Flex style={{ width: "100%" }}>
                                    <Flex
                                      style={{
                                        maxHeight: "80px",
                                        width: "70%",
                                      }}
                                    >
                                      <Line
                                        options={lineChartOptions2}
                                        data={getProductivityChartData()}
                                        // style={{ width: "100%", height: "100px" }}
                                      />
                                    </Flex>
                                    <Flex
                                      style={{
                                        width: "30%",
                                        alignItems: "center",
                                      }}
                                    >
                                      <Stat
                                        statValue={-4.7}
                                        arrow={"down"}
                                        arrowColor={"red"}
                                      />
                                    </Flex>
                                  </Flex>
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
                    </Col>
                  </Row>
                </Col>
                <Col span={24}>
                  {/* <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "row",
                  }}
                > */}
                  <Row gutter={[8, 8]}>
                    <Col span={9}>
                      <WeatherCard />
                    </Col>
                    <Col span={15}>
                      <Flex style={{ height: "100%" }}>
                        <AICard />
                      </Flex>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col span={6}>
              <Row gutter={[8, 8]}>
                <Col span={24}>
                  <TimeCard />
                </Col>
                <Col span={24}>
                  <CCTV />
                </Col>
                <Col span={24}>
                  <IntegratedOperationsCard />
                </Col>
                <Col span={24}>
                  <AssetsPerformanceCard />
                </Col>
              </Row>
            </Col>
          </Row>
        </Flex>
      </Layout>
    </MainLayout>
  );
};

export default Home;
