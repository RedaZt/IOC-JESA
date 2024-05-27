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
import InventoryCard from "../components/pages/Production/InventoryCard";

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

const Production = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const {
    dashboard: { activeTab: selectedView },
    dispatch,
  } = useContext(RootContext);

  const [productionData, setProductionData] = useState(null);
  const [loading, setLoading] = useState(true);
  let isFetching = true;

  const fetchData = async () => {
    if (!isFetching) return;
    isFetching = false;
    try {
      const url = "http://localhost:8000/categories";
      const queryParams = new URLSearchParams({ process: selectedView });
      const requestUrl = `${url}/Production?${queryParams}`;
      const response = await fetch(requestUrl);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setProductionData(data);
    } catch (error) {
      console.error("Error fetching sustainability data:", error);
    } finally {
      setLoading(false);
    }
    isFetching = true;
  };

  useEffect(() => {
    setLoading(true);
    const interval = setInterval(fetchData, 1000);
    fetchData();

    return () => clearInterval(interval);
  }, [selectedView]);

  return (
    <MainLayout selectedMenuKey={"1"} style={{ alignItems: "center" }}>
      <Layout
        className="content-container"
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          height: "100%",
          padding: "10px 16px",
          paddingTop: 0,
        }}
      >
        {loading ? (
          <Loader />
        ) : (
          <Flex style={{ width: "100%", maxWidth: "1800px" }}>
            <Row
              gutter={[8, 8]}
              className="content"
              // style={{
              //   maxWidth: "1800px",
              // }}
            >
              <Col span={24}>
                <Row gutter={[8, 8]}>
                  <Col lg={24} xl={10}>
                    <Row gutter={[8, 8]}>
                      <Col span={24}>
                        <Row gutter={[8, 8]}>
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
                        <Row gutter={[8, 8]}>
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
                        display: "flex",
                      }}
                    >
                      <OEE data={productionData} />
                    </Flex>
                  </Col>
                </Row>
              </Col>
              <Col span={24}>
                <AICard />
              </Col>
              <Col span={24}>
                <InventoryCard />
              </Col>
            </Row>
          </Flex>
        )}
      </Layout>
    </MainLayout>
  );
};

export default Production;
