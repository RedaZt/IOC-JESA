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

const { Title } = Typography;
const { Header, Sider, Content } = Layout;

function AssetsPerformanceCard() {
  const { OAE, OAA } = getAssetsInfos();
  return (
    <Card
      title={
        <a href="/Assets-Performance" style={{ color: "black" }}>
          Assets Performance
        </a>
      }
      style={{
        justifyContent: "center",
        // height: "fit-content",
        width: "100%",
        borderRadius: "1.25rem",
      }}
    >
      {/* <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      > */}
      {/* <div
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
        </div>
        <div
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
            percent={OAA}
            gapDegree={50}
            success={{ percent: null }}
          />
          <h4>Overall Asset Availability</h4>
        </div> */}
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
            percent={OAA}
            gapDegree={50}
            success={{ percent: null }}
          />
          <h4>Overall Asset Availability</h4>
        </Col>
      </Row>
      {/* </div> */}
      <Divider />
      <Stat statText={"MTBF"} statValue={200} statSuffix={"Hrs"} />
      <Stat
        statText={"MTTR"}
        statValue={152}
        statSuffix={"Hrs"}
        arrowColor={"red"}
      />
      <Stat
        statText={"Downtime Hours"}
        statValue={620}
        statSuffix={"Hrs"}
        arrow={"down"}
      />
      <Stat
        statText={"Maintenance Cost"}
        statValue={47}
        statSuffix={"M$"}
        arrowColor={"red"}
      />
    </Card>
  );
}

export default AssetsPerformanceCard;
