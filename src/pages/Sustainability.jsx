import React, { useEffect, useState, useContext } from "react";
import { RootContext } from "../store";
import { StatCard1 } from "../components/StatCard";
import { theme, Flex, Layout, Card, Row, Col, Spin } from "antd";
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
  Ticks,
} from "chart.js";
import { Bar, Line, Doughnut } from "react-chartjs-2";
import MainLayout from "../layouts/MainLayout";
import AICard from "../components/common/AICard";
import Loader from "../components/common/Loader";

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

const lineChartOptions = {
  responsive: true,
  scales: {
    //   // to remove the labels
    x: {
      // display: false,
      ticks: {
        font: {
          size: 10,
        },
      },
    },
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
      legend: {
        labels: {
          font: {
            size: 5,
          },
        },
      },
    },
    // title: {
    //   display: true,
    //   text: "Chart.js Line Chart",
    // },
  },
};

function getSustainabilityData(hostEmail, callback) {
  return fetch("http://localhost:8000/sustainability").then((response) => {
    return response
      .json()
      .then((data) => {
        // console.log(data);
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
  });
}

const titles = [
  { title: "Carbon Footprint", unit: "(CO2-e)" },
  { title: "Specific Electricity Consumption", unit: "(MHh)" },
  { title: "Specific Water Consumption", unit: "(ML)" },
  { title: "Specific Fuel Consumption", unit: "(ML)" },
];

const Sustainability = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const {
    dashboard: { activeTab: selectedView },
    dispatch,
  } = useContext(RootContext);

  const [sustainabilityData, setSustainabilityData] = useState(null);

  useEffect(() => {
    // Fetch sustainability data
    setSustainabilityData(null);
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
      const requestUrl = `${url}/Sustainability?${queryParams}`;
      // console.log(requestUrl);
      async function fetchData() {
        try {
          const response = await fetch(requestUrl);
          if (!response.ok) {
            throw new Error("Failed to fetch data");
          }
          const data = await response.json();
          setSustainabilityData(data);
        } catch (error) {
          console.error("Error fetching sustainability data:", error);
        }
      }

      fetchData();
    }, 1000);
    return () => clearInterval(interval);
  }, [selectedView]);
  // console.log(sustainabilityData);

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
        {sustainabilityData ? (
          <Row
            gutter={[8, 8]}
            className="bento-box"
            style={{
              width: "100%",
              maxWidth: "1800px",
            }}
          >
            <Col span={[24]}>
              <Row gutter={[8, 8]}>
                {titles.map((item, index) => {
                  return (
                    <Col
                      // xs={24}
                      // sm={24}
                      lg={24}
                      xl={12}
                      // xl={4}
                      key={`col-${index + 1}`}
                    >
                      <Card
                        title={`${item.title} ${item.unit}`}
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
                        {/* TODO: add usage for each child to populate the doughnut chart */}
                        {/* <div style={{ height: "40%", marginBottom: 20 }}>
                        <Doughnut
                          data={sustainabilityData.sustainabilityData}
                        />
                      </div> */}
                        <Flex
                          style={{
                            width: "100%",
                            height: "100%",
                            alignItems: "center",
                          }}
                        >
                          <Line
                            options={lineChartOptions}
                            data={sustainabilityData[item.title]}
                            style={{ height: "100%", width: "100%" }}
                          />
                        </Flex>
                      </Card>
                    </Col>
                  );
                })}
              </Row>
            </Col>
            <Col span={[24]}>
              <AICard />
            </Col>
          </Row>
        ) : (
          <Loader />
        )}
      </Layout>
    </MainLayout>
  );
};

export default Sustainability;
