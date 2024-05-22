import React from "react";
import { Flex, List, Tag, theme } from "antd";

const vulnerabilitiesCountData = [
  {
    label: "Critical",
    value: 0,
    color: "red",
  },
  {
    label: "High",
    value: 3,
    color: "orange",
  },
  {
    label: "Medium",
    value: 10,
    color: "gold",
  },
  {
    label: "Low",
    value: 15,
    color: "green",
  },
  {
    label: "Total",
    value: 28,
    color: "blue",
  },
];

function UniqueVulnerabilitiesCard() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <List
      header={<h3>Unique Vulnerabilities</h3>}
      // footer={<div>Footer</div>}
      bordered
      dataSource={vulnerabilitiesCountData}
      renderItem={(item) => (
        <List.Item>
          {/* <Statistic title={item.label} value={item.value} /> */}
          <Tag
            color={item.color}
            style={{
              display: "flex",
              padding: "10px 20px",
              width: "100%",
            }}
          >
            <Flex
              style={{
                width: "100%",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <h2>{item.label}</h2>
              <h2>{item.value}</h2>
            </Flex>
          </Tag>
        </List.Item>
      )}
      style={{
        background: colorBgContainer,
        border: "1px solid #f0f0f0",
        borderRadius: "1.25rem",
      }}
    />
  );
}

export default UniqueVulnerabilitiesCard;
