import React, { useContext, useEffect, useState, useRef } from "react";
import { RootContext } from "../../../store";
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
  Typography,
} from "antd";
import Stat from "../../common/Stat";
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
import { getAssetsInfos } from "../../../data/data";
import Loader from "../../common/Loader";

const { Title } = Typography;
const { Header, Sider, Content } = Layout;

function AssetsPerformanceCard() {
  const { OAE, OAA } = getAssetsInfos();
  const {
    dashboard: { activeTab: selectedView },
    dispatch,
  } = useContext(RootContext);
  const [maintenanceData, setMaintenanceData] = useState(null);
  const [loading, setLoading] = useState(true);
  let isFetching = true;

  const fetchData = async () => {
    if (!isFetching) return;
    isFetching = false;
    try {
      const url = "http://localhost:8000/categories";
      const queryParams = new URLSearchParams({ process: selectedView });
      const requestUrl = `${url}/Asset-Performance?${queryParams}`;
      const response = await fetch(requestUrl);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setMaintenanceData(data);
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
    <Card
      title={"Assets Performance"}
      extra={<a href="/Assets-Performance">More</a>}
      style={{
        justifyContent: "center",
        // height: "fit-content",
        width: "100%",
        borderRadius: "1.25rem",
      }}
    >
      {loading ? (
        <Loader />
      ) : (
        <>
          <Row
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <Col
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Progress
                key="OEE"
                type="dashboard"
                strokeColor="#1b3a71"
                percent={OAE}
                gapDegree={50}
                success={{ percent: null }}
              />
              <h4>Overall Asset Effectiveness</h4>
            </Col>
            <Col
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Progress
                key="Availability"
                type="dashboard"
                strokeColor="#1b3a71"
                percent={
                  maintenanceData["Asset Availability"].datasets[0].data[
                    maintenanceData["Asset Availability"].datasets[0].data
                      .length - 1
                  ]
                }
                gapDegree={50}
                success={{ percent: null }}
              />
              <h4>Overall Asset Availability</h4>
            </Col>
          </Row>
          <Divider />
          <Stat
            statText={"MTBF"}
            statValue={
              maintenanceData["MTBF"].datasets[0].data[
                maintenanceData["MTBF"].datasets[0].data.length - 1
              ]
            }
            statSuffix={"Hrs"}
          />
          <Stat
            statText={"MTTR"}
            statValue={
              maintenanceData["MTTR"].datasets[0].data[
                maintenanceData["MTTR"].datasets[0].data.length - 1
              ]
            }
            statSuffix={"Hrs"}
            arrowColor={"red"}
          />
          <Stat
            statText={"MDT"}
            statValue={
              maintenanceData["MDT"].datasets[0].data[
                maintenanceData["MDT"].datasets[0].data.length - 1
              ]
            }
            statSuffix={"Hrs"}
            arrow={"down"}
          />
          <Stat
            statText={"Maintenance Cost"}
            statValue={
              maintenanceData["Maintenance Cost"].datasets[0].data[
                maintenanceData["Maintenance Cost"].datasets[0].data.length - 1
              ]
            }
            statSuffix={"MDH"}
            arrowColor={"red"}
          />
        </>
      )}
    </Card>
  );
}

export default AssetsPerformanceCard;
