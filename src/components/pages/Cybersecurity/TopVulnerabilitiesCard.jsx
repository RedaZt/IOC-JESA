import React from "react";
import { Flex, List, Tag, theme } from "antd";

function TopVulnerabilitiesCard() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <List
      header={<h3>Top 10 Vulnerabilities</h3>}
      // footer={<div>Footer</div>}
      bordered
      dataSource={[
        "CVE-2019-0809",
        "CVE-2018-0599",
        "CVE-2014-0789",
        "CVE-2021-42809",
        "CVE-2021-42808",
        "CVE-2019-13537",
        "CVE-2013-2796",
        "CVE-2011-3330",
        "CVE-2019-6833",
        "CVE-2022-45788",
      ]}
      renderItem={(item, index) => (
        <List.Item>
          {/* <Statistic title="Active Users" value={item} /> */}
          <div>
            {index + 1} - {item}
          </div>
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

export default TopVulnerabilitiesCard;
