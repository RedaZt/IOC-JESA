import React from "react";
import {
  FundProjectionScreenOutlined,
  ArrowUpOutlined,
  RadarChartOutlined,
  ArrowDownOutlined,
} from "@ant-design/icons";
import { Card, Flex, Button, Col, Row, Statistic, Space } from "antd";
import { Typography } from "antd";

const { Title } = Typography;

function Stat({
  StatIcon,
  statText,
  statValue,
  statSuffix,
  arrow,
  arrowColor,
  titleLevel,
}) {
  return (
    <Row
      style={{
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      {/* {statText ? <Space /> : null} */}
      {statText && (
        <Col
          // xs={{ flex: "100%" }}
          // sm={{ flex: "50%" }}
          // md={{ flex: "40%" }}
          // lg={{ flex: "20%" }}
          // xl={{ flex: "10%" }}
          // xs={24} sm={12} md={8} lg={6} xl={4}
          style={{ display: "flex" }}
        >
          {StatIcon && <StatIcon style={{ marginRight: "5px" }} />}
          <Title
            level={titleLevel}
            style={{
              margin: 0,
              padding: 0,
              // marginRight: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              // color: collapsed ? "white" : "#1d3b7e",
              // fontFamily: collapsed ? null : "myFont",
              // fontSize: collapsed ? "13px" : "15px",
            }}
          >
            {statText}
          </Title>
        </Col>
      )}
      <Col
        // sm={{ flex: "100%" }}
        // md={{ flex: "50%" }}
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Statistic
          // title="Production"
          value={statValue}
          // precision={2}
          valueStyle={{
            color: arrowColor === "red" ? "#cf1322" : "#3f8600",
            fontSize: 20,
          }}
          prefix={
            arrow === "down" ? <ArrowDownOutlined /> : <ArrowUpOutlined />
          }
          suffix={statSuffix}
          style={{
            // alignSelf: "flex-end",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
      </Col>
    </Row>
  );
}

Stat.defaultProps = {
  statText: "",
  statValue: 0,
  titleLevel: 5,
};

export default Stat;
