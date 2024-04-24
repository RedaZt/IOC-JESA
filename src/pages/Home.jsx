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
import SustainabilityCard from "../components/pages/Home/SustainabilityCard";
import OpportunityCard from "../components/pages/Home/OpportunityCard";
import BusinessRisksCard from "../components/pages/Home/BusinessRisksCard";
// import { Context } from "../App";
import { RootContext } from "../store";
import "./Home.css";
import { getProductivityChartData, getAssetsInfos } from "../data/data";
import AssetsPerformanceCard from "../components/pages/Home/AssetsPerformanceCard";
import IntegratedOperationsCard from "../components/pages/Home/IntegratedOperationsCard";
import TimeCard from "../components/pages/Home/DateCard";

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

const contentStyle = {
  margin: 0,
  marginRight: 10,
  height: "160px",
  width: "500px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  // background: "#364d79",
  background: "#1b3a71",
};

const onChange = (currentSlide) => {
  console.log(currentSlide);
};

const totalOpportunityData = {
  "General View": 92,
  "Mine & Beneficiary": 93,
  MPH: 94,
  "SPH - PSA": 95,
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
            maxWidth: "1600px",
          }}
        >
          <div
            className="flex-1"
            style={{
              height: "100%",
              width: "100%",
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
              <OpportunityCard />
              <SustainabilityCard />
              <BusinessRisksCard />
            </div>
            <div
              style={{
                // height: "100%",
                // height: "fit-content",
                width: "100%",
                // margin: "10px 16px",
                // marginTop: 0,
                // marginRight: 0,
                display: "flex",
                flexDirection: "column",
                // border: "1px solid blue",
                // padding: 24,
                // padding: "20px 15px",
                // Height: "100vh",
              }}
            >
              <Card
                title="Process"
                style={{
                  width: "100%",
                  borderRadius: "1.25rem",
                }}
              >
                <Card
                  style={{
                    borderRadius: "1.25rem",
                    marginBottom: 10,
                  }}
                >
                  <Row
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-evenly",
                      height: "200px",
                    }}
                  >
                    <Col
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
                      style={{
                        display: "flex",
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
                    </Col>
                    <Col
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
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
                    <Col
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Stat
                        statText={"Reformate Production"}
                        statValue={-10.7}
                        statSuffix={"%"}
                        arrow={"down"}
                        arrowColor={"red"}
                      />
                      <Stat
                        statText={"CS + Actual"}
                        statValue={-4.7}
                        statSuffix={"%"}
                        arrow={"down"}
                        arrowColor={"red"}
                      />
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
                      src={`/imgs/Process - ${selectedView}.png`}
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
              <Card
                // title="Weather"
                style={{
                  width: "40%",
                  borderRadius: "1.25rem",
                }}
                bodyStyle={{
                  display: "flex",
                  height: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src="/imgs/weather-4-512.webp"
                  alt="cloud"
                  style={{
                    maxWidth: "200px",
                  }}
                />
              </Card>
              <Card
                title="AI-Recommendations"
                style={{
                  // height: "100%",
                  width: "60%",
                  borderRadius: "1.25rem",
                }}
                bodyStyle={{
                  display: "flex",
                  height: "80%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "600px",
                    overflowX: "scroll",
                    scrollbarWidth: "none",
                    display: "flex",
                  }}
                >
                  <div>
                    <h3 style={contentStyle}>1</h3>
                  </div>
                  <div>
                    <h3 style={contentStyle}>2</h3>
                  </div>
                  <div>
                    <h3 style={contentStyle}>3</h3>
                  </div>
                  <div>
                    <h3 style={contentStyle}>4</h3>
                  </div>
                </div>
              </Card>
            </div>
          </div>
          <div
            key={"flex-2"}
            style={{
              flexDirection: "row",
              width: "25%",
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
                  src="/imgs/CCTV.png"
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
