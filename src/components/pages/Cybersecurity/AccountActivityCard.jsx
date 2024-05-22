import React from "react";
import { Flex, List, Tag, theme } from "antd";

function AccountActivityCard() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <List
      header={<h3>Account Management Activity</h3>}
      // footer={<div>Footer</div>}
      bordered
      dataSource={[
        {
          label: "Request",
          value: 50,
        },
        {
          label: "Online",
          value: 200,
        },
        {
          label: "Offline",
          value: 150,
        },
        {
          label: "Enabled",
          value: 350,
        },
        {
          label: "Disabled",
          value: 50,
        },
        {
          label: "Locked",
          value: 25,
        },
        {
          label: "Unlocked",
          value: 12,
        },
        {
          label: "Created",
          value: 550,
        },
        {
          label: "Deleted",
          value: 50,
        },
      ]}
      renderItem={(item) => (
        <List.Item>
          <Flex
            style={{
              width: "100%",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div>{item.label}</div>
            <div>{item.value}</div>
          </Flex>
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

export default AccountActivityCard;
