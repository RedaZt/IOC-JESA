import React, { useEffect, useState } from "react";
import { StatCard1 } from "../components/StatCard";
import {
  theme,
  Flex,
  Layout,
  Card,
  List,
  Statistic,
  Tag,
  Space,
  Row,
  Col,
} from "antd";
import { Typography } from "antd";
// import { Pie } from "react-chartjs-2";
import SideBar from "../components/layouts/SideBar";
import NavBar from "../components/layouts/NavBar";
import CircularProgress from "../components/CircularProgress";
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
import { Bar, Line, Doughnut, Pie, Radar } from "react-chartjs-2";
import MainLayout from "../layouts/MainLayout";
import Stat from "../components/common/Stat";
import AICard from "../components/common/AICard";
import "../css/pages/PageStyle.css";
import AreaChartCard from "../components/pages/Cybersecurity/AreaChartCard";
import PieChartCard from "../components/pages/Cybersecurity/PieChartCard";
import CriticalEventsCard from "../components/pages/Cybersecurity/CriticalEventsCard";
import UniqueVulnerabilitiesCard from "../components/pages/Cybersecurity/UniqueVulnerabilitiesCard";
import TopVulnerabilitiesCard from "../components/pages/Cybersecurity/TopVulnerabilitiesCard";
import AccountActivityCard from "../components/pages/Cybersecurity/AccountActivityCard";
import RadarChartCard from "../components/pages/Cybersecurity/RadarChartCard";

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

const { Header, Sider, Content } = Layout;
const { Title } = Typography;

const radarChartData = {
  labels: ["Thing 1", "Thing 2", "Thing 3", "Thing 4", "Thing 5", "Thing 6"],
  datasets: [
    {
      label: "# of Votes",
      data: [5, 9, 8, 5, 2, 3],
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      borderColor: "rgba(54, 162, 235)",
      borderWidth: 1,
    },
  ],
};

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
            style={{
              maxWidth: "1800px",
            }}
          >
            <Col span={18}>
              <Row gutter={[8, 8]}>
                <Col span={24}>
                  <AreaChartCard
                    title={"Events Histogram"}
                    data={histogramData}
                  />
                </Col>
                <Col span={24}>
                  <Row gutter={[8, 8]}>
                    <Col span={6}>
                      <PieChartCard
                        title={
                          "Unique Vulnerabilities Distribution By Severity"
                        }
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
                    </Col>
                    <Col span={6}>
                      <PieChartCard
                        title={
                          "Non-unique Vulnerabilities Distribution By Severity"
                        }
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
                    </Col>
                    <Col span={6}>
                      <PieChartCard
                        title={"Safety Level According to IEC-62443"}
                        data={securityLevelData}
                      />
                    </Col>
                    <Col span={6}>
                      <PieChartCard
                        title={"Percentage of Reliable Softwares"}
                        data={softwarePercentageData}
                      />
                    </Col>
                  </Row>
                </Col>
                <Col span={24}>
                  <AreaChartCard
                    title={"Traffic Analysis by Time and IPs"}
                    data={activityData}
                  />
                </Col>
                <Col span={24}>
                  <AICard />
                </Col>
              </Row>
            </Col>
            <Col span={6}>
              <Row gutter={[8, 8]}>
                <Col span={24}>
                  <CriticalEventsCard />
                </Col>
                <Col span={24}>
                  <UniqueVulnerabilitiesCard />
                </Col>
                <Col span={24}>
                  <TopVulnerabilitiesCard />
                </Col>
                <Col span={24}>
                  <AccountActivityCard />
                </Col>
                <Col span={24}>
                  <RadarChartCard
                    title={"DNSSI Compliance"}
                    data={radarChartData}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Flex>
      </Layout>
    </MainLayout>
  );
};

export default Cybersecurity;
