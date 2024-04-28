import React, { useEffect, useState, useContext } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, Button, Input, theme, Divider, Segmented } from "antd";
import { Typography } from "antd";
import { updateActiveTab } from "../../store/actions/dashboard";
import { RootContext } from "../../store";
import "../../css/components/layouts/NavBar.css";

const { Header, Sider, Content } = Layout;
const { Search } = Input;
const { Title } = Typography;

function NavBar({ collapsed, setCollapsed, onSearch }) {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const {
    dashboard: { activeTab },
    dispatch,
  } = useContext(RootContext);
  // const {
  //   dashboard: { activeTab },
  // } = context;

  // setSelectedView("General View");
  return (
    <div
      style={{
        top: 0,
        // width: "100%",
        // position: "sticky",
        // zIndex: "1100",
      }}
    >
      <Header
        style={{
          padding: 0,
          background: colorBgContainer,
          // background: "rgb(255, 255, 255, 0.05)",
          // color: "rgb(255, 255, 255, 0.05)",
          // flexDirection: "column",
          flexShrink: 0,
          // position: "sticky",
          // zIndex: "1100",
          // left: "auto",
          // right: "0px",
          boxShadow:
            "rgba(255, 255, 255, 0.9) 0rem 0rem 0.0625rem 0.0625rem inset, rgba(0, 0, 0, 0.05) 0rem 1.25rem 1.6875rem 0rem",
          backdropFilter: "blur(2.625rem)",
          // top: "0.75rem",
          // minHeight: "4.6875rem",
          // display: "grid",
          // -webkit-box-align: center,
          // justifyContent: "center",
          borderRadius: "1.25rem",
          // padding: "auto 0px",
          margin: "10px 16px",
          // backgroundColor: "transparent !important",
          // borderColor: "rgba(226, 232, 240, 0.3) !important",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            color: "#1d3b7e",
            fontSize: "16px",
            width: 64,
            height: 64,
            borderRadius: "1.25rem",
          }}
        />
        <div
          style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            justifySelf: "center",
          }}
        >
          <img
            src="/img/OCP-logo-horizontal.png"
            style={{
              // display: "block",
              // margin: "auto",
              // padding: "0 5px",
              // height: "100%",
              // maxWidth: "169px",
              height: "50%",
            }}
          />
          <Divider type="vertical" style={{ height: "50%" }} />
          <Title
            className="header-txt"
            level={3}
            style={{
              margin: 0,
              padding: 0,
              marginRight: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              // color: collapsed ? "white" : "#1d3b7e",
              // fontFamily: collapsed ? null : "myFont",
              // fontSize: collapsed ? "13px" : "15px",
            }}
          >
            Central Axis
          </Title>
        </div>
        <Search
          placeholder="input search text"
          onSearch={onSearch}
          size="large"
          // size="large"
          style={{
            width: 250,
            marginRight: "20px",
            borderRadius: 0,
          }}
          // onInput={(e) => {
          //   console.log(e.target.value);
          //   // console.log(e.target.defaultValue);
          // }}
          // onSearch={(txt) => {
          //   console.log(txt);
          // }}
        />
      </Header>
      <div
        // className="content-container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "50px",
          // maxWidth: "1000px",
          // padding: "20px 15px",
          margin: "10px 0px",
          marginTop: 0,
        }}
      >
        <Segmented
          className="segment"
          // size="large"
          options={[
            "General View",
            "Mine & Beneficiary",
            "Corridors",
            "MPH",
            "SPH - PSA",
          ]}
          // options={[
          //   {
          //     label: (
          //       <div style={{ padding: 4 }}>
          //         <div>Summer</div>
          //         <div>Apr-Jun</div>
          //       </div>
          //     ),
          //     value: "summer",
          //   },
          // ]}
          value={activeTab}
          onChange={(value) => {
            // console.log(value); // string
            dispatch(updateActiveTab(value));
          }}
          style={{
            fontSize: "18px",
            fontWeight: "800",
            margin: "20px",
            // background: "#f0f0f0",
            // background: "#e5e5e5",
            background: "#e0e0e0",
          }}
          // block
        />
        {/* <Segmented
          className="segment subvalue-chains"
          // size="large"
          options={["test"]}
          // options={[
          //   {
          //     label: (
          //       <div style={{ padding: 4 }}>
          //         <div>Summer</div>
          //         <div>Apr-Jun</div>
          //       </div>
          //     ),
          //     value: "summer",
          //   },
          // ]}
          // value={activeTab}
          // onChange={(value) => {
          //   // console.log(value); // string
          //   dispatch(updateActiveTab(value));
          // }}
          style={{
            fontSize: "18px",
            fontWeight: "800",
            margin: "20px",
            // background: "#f0f0f0",
            // background: "#e5e5e5",
            background: "#e0e0e0",
          }}
          // block
        /> */}
      </div>
    </div>
  );
}

export default NavBar;
