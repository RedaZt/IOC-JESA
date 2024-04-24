import React, { useEffect, useState } from "react";
import { Card, Divider, Statistic, Row, Col } from "antd";
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
} from "@ant-design/icons";
import {
  Chart as ChartJS,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  RadialLinearScale,
  Filler,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import Stat from "../../common/Stat";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const { Title } = Typography;

// Radar chart data
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

function BusinessRisksCard() {
  return (
    <Card
      title="Business Risks"
      style={{
        justifyContent: "center",
        // height: "200px",
        height: "100%",
        width: "25%",
        // padding: "auto",
        borderRadius: "1.25rem",
        // margin: "auto",
        // alignItems: "center",
        // justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Stat
          StatIcon={SafetyCertificateOutlined}
          statText={"Safety Incidents"}
          statValue={1200}
          arrow={"down"}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Stat
          StatIcon={DeploymentUnitOutlined}
          statText={"Cybersecurity Incidents"}
          statValue={132}
          arrow={"down"}
        />
      </div>
      <Divider />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Row style={{ alignItems: "center", justifyContent: "center" }}>
          <Col>
            <Title
              level={5}
              style={{
                margin: 0,
                // color: collapsed ? "white" : "#1d3b7e",
                // fontFamily: collapsed ? null : "myFont",
                // fontSize: collapsed ? "13px" : "15px",
              }}
            >
              DNSSI Compliance
            </Title>
          </Col>
          <Col>
            <div style={{ display: "flex", height: 120, width: 120 }}>
              <Radar
                data={radarChartData}
                options={{
                  plugins: {
                    legend: {
                      display: false, // Hide legend
                    },
                    tooltip: {
                      enabled: false, // Disable tooltip
                    },
                  },
                  scales: {
                    r: {
                      pointLabels: {
                        display: false, // Hide labels on data points
                      },
                      // grid: {
                      //   display: false, // Hide grid lines
                      // },
                    },
                  },
                }}
              />
            </div>
          </Col>
        </Row>
      </div>
    </Card>
  );
}

export default BusinessRisksCard;
