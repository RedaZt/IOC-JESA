import React, { useEffect, useState } from "react";
import {
  VideoCameraOutlined,
  SettingOutlined,
  DashboardOutlined,
  UserOutlined,
  BarChartOutlined,
  SunOutlined,
  TeamOutlined,
  SafetyCertificateOutlined,
  BugOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Input, Divider } from "antd";
import { Typography, Row, Col } from "antd";
import "./SideBar.css";

const { Header, Sider, Content } = Layout;
const { Title } = Typography;
const { Search } = Input;

function SideBar({ handleClick, collapsed, menuKey }) {
  //   const [collapsed, setCollapsed] = useState(false);
  //   const [menuKey, setMenuKey] = useState("1");

  const menuItems = [
    {
      icon: (
        <DashboardOutlined style={{ color: "#1d3b7e", fontSize: "16px" }} />
      ),
      label: "Main Dashboard",
      path: "/",
    },
    {
      icon: <BarChartOutlined style={{ color: "#1d3b7e", fontSize: "16px" }} />,
      label: "Production",
      path: "/Production",
    },
    {
      icon: (
        <SafetyCertificateOutlined
          style={{ color: "#1d3b7e", fontSize: "16px" }}
        />
      ),
      label: "Business Risks",
      children: [
        {
          key: "2-1",
          icon: <BugOutlined style={{ color: "#1d3b7e", fontSize: "16px" }} />,
          label: (
            <a
              href="/Cybersecurity"
              style={{
                margin: 0,
                color: "#1d3b7e",
                fontFamily: "myFont",
                fontSize: "15px",
                fontWeight: 800,
              }}
            >
              Cybersecurity
            </a>
          ),
        },
        {
          key: "2-2",
          icon: (
            <VideoCameraOutlined
              style={{ color: "#1d3b7e", fontSize: "16px" }}
            />
          ),
          label: (
            <a
              href="/HSE"
              style={{
                margin: 0,
                color: "#1d3b7e",
                fontFamily: "myFont",
                fontSize: "15px",
                fontWeight: 800,
              }}
            >
              HSE
            </a>
          ),
        },
      ],
    },
    {
      icon: <SunOutlined style={{ color: "#1d3b7e", fontSize: "16px" }} />,
      label: "Sustainability",
      path: "/Sustainability",
    },
    {
      icon: <SettingOutlined style={{ color: "#1d3b7e", fontSize: "16px" }} />,
      label: "Assets Performance",
      path: "/Assets-Performance",
    },
    {
      icon: <TeamOutlined style={{ color: "#1d3b7e", fontSize: "16px" }} />,
      label: "Social Activities",
      path: "/Social-Activities",
    },
  ];

  return (
    <div
      style={{
        height: "100vh",
        position: "sticky",
        top: 0,
      }}
    >
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        width={250}
        style={{
          // height: "100vh",
          width: "200px",
          color: "rgba(0, 0, 0, 0.87)",
          // transition: "boxShadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
          // boxShadow: "none",
          // overflowY: "auto",
          // display: "flex",
          // flexDirection: "column",
          // flex: "1 0 auto",
          zIndex: "1200",
          position: "sticky",
          // top: "0px",
          // outline: "0px",
          // left: "0px",
          // width: "30rem",
          backgroundColor: "rgba(255, 255, 255, 1)",
          // backdropFilter: "saturate(200%) blur(1.875rem)",
          // height: "calc(-2rem + 100vh)",
          height: "100%",
          //   margin: "15px",
          //   borderRadius: "0 1.25rem 1.25rem 0",
          //   borderRadius: "1.25rem",
          //   // border: "none",
          //   // borderRadius: "1.25rem",
          boxShadow:
            "rgba(255, 255, 255, 0.9) 0rem 0rem 0.0625rem 0.0625rem inset, rgba(0, 0, 0, 0.05) 0rem 1.25rem 1.6875rem 0rem",
          backdropFilter: "blur(2.625rem)",
        }}
      >
        <div
          className="logo"
          style={{
            padding: "10px",
            paddingBottom: 0,
            display: "flex",
            justifyContent: "center",
            // alignItems: "center",
            // flexDirection: "column",
            width: "100%",
            // maxWidth: "169px",
          }}
        >
          <img
            src="/img/JESA-logo.png"
            style={{
              width: "90%",
              paddingBottom: 0,
            }}
          />
        </div>
        <Divider />
        <Menu
          theme="light"
          mode="inline"
          //   defaultSelectedKeys={["1"]}
          defaultSelectedKeys={[menuKey]}
          defaultOpenKeys={[menuKey.split("-")[0]]}
          items={menuItems.map((item, index) => {
            return {
              key: `${index}`,
              icon: item.icon,
              // label: <span style={{ color: "#1d3b7e" }}>nav 1</span>,
              label: (
                <a href={item.path}>
                  <Title
                    level={5}
                    style={{
                      margin: 0,
                      color: collapsed ? "white" : "#1d3b7e",
                      fontFamily: collapsed ? null : "myFont",
                      fontSize: collapsed ? "13px" : "15px",
                    }}
                  >
                    {item.label}
                  </Title>
                </a>
              ),
              children: item.children,
            };
          })}
          style={{ border: "none" }}
          onClick={handleClick}
        />
      </Sider>
    </div>
  );
}

export default SideBar;
