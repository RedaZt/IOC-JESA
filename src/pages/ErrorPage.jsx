import React, { useContext, useEffect, useState } from "react";
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
} from "antd";
import MainLayout from "../layouts/MainLayout";
import { Typography } from "antd";
import { RootContext } from "../store";
// import { Context } from "../App";
import "../css/pages/PageStyle.css";

// 1c3b72 1b3a71

const { Title } = Typography;
const { Header, Sider, Content } = Layout;

const ErrorPage = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const context = useContext(RootContext);

  const {
    dashboard: { activeTab },
  } = context;
  // console.log(selectedView);

  // console.log(selectedView);

  // const [usagePercentage, setUsagePercentage] = useState(75);

  // useEffect(() => {
  //   const key = setInterval(() => {
  //     setUsagePercentage((usagePercentage) => usagePercentage + 1);
  //   }, 1000);

  //   return () => {
  //     clearInterval(key);
  //   };
  // }, []);

  return (
    <MainLayout selectedMenuKey={""} style={{ alignItems: "center" }}>
      <Layout
        className="content-container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          // maxWidth: "1000px",
          // padding: "20px 15px",
          padding: "10px 16px",
          paddingTop: 0,
        }}
      >
        <Title
          level={1}
          style={{
            margin: 0,
            // color: collapsed ? "white" : "#1b3a71",
            // fontFamily: collapsed ? null : "myFont",
            // fontSize: collapsed ? "13px" : "15px",
          }}
        >
          Error: Page Not Found
        </Title>
      </Layout>
    </MainLayout>
  );
};

export default ErrorPage;
