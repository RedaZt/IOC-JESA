import React, { useEffect, useState, useContext } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import {
  Layout,
  Button,
  Input,
  theme,
  Divider,
  Segmented,
  Menu,
  Dropdown,
  TreeSelect,
  Flex,
} from "antd";
import { Typography } from "antd";
import { updateActiveTab } from "../../store/actions/dashboard";
import { RootContext } from "../../store";
import "../../css/components/layouts/NavBar.css";
import { Children } from "react";

const { Header, Sider, Content } = Layout;
const { Search } = Input;
const { Title } = Typography;
const { TreeNode } = TreeSelect;

const treeData = [
  {
    title: "General View",
    value: "0",
    children: [
      {
        title: "Mine & Beneficiation",
        value: "1",
        children: [
          {
            title: "Benguerir Mine",
            value: "1-1",
            children: [
              {
                title: "Extraction",
                value: "1-1-1",
              },
              {
                title: "Storage",
                value: "1-1-2",
              },
              {
                title: "Handling",
                value: "1-1-3",
              },
            ],
          },
          {
            title: "Louta Mine",
            value: "1-2",
            children: [
              {
                title: "Extraction",
                value: "1-2-1",
              },
              {
                title: "Storage",
                value: "1-2-2",
              },
              {
                title: "Handling",
                value: "1-2-3",
              },
            ],
          },
          {
            title: "Benguerir Beneficiation",
            value: "1-3",
            children: [
              {
                title: "Scrubbing & Screening",
                value: "1-3-1",
              },
              {
                title: "Flotation",
                value: "1-3-2",
              },
              {
                title: "Storage",
                value: "1-3-3",
              },
              {
                title: "Classification",
                value: "1-3-4",
              },
              {
                title: "Tailing Management",
                value: "1-3-5",
              },
            ],
          },
          {
            title: "Louta Beneficiation",
            value: "1-4",
            children: [
              {
                title: "Scrubbing & Screening",
                value: "1-4-1",
              },
              {
                title: "Flotation",
                value: "1-4-2",
              },
              {
                title: "Storage",
                value: "1-4-3",
              },
              {
                title: "Classification",
                value: "1-4-4",
              },
              {
                title: "Tailing Management",
                value: "1-4-5",
              },
            ],
          },
        ],
      },
      {
        title: "Corridors",
        value: "2",
        children: [
          {
            title: "BLM Corridor",
            value: "2-1",
          },
          {
            title: "MPH-SPH Corridor",
            value: "2-2",
          },
          {
            title: "ES-SPH Corridor",
            value: "2-3",
          },
        ],
      },
      {
        title: "MPH",
        value: "3",
        children: [
          {
            title: "SAPs",
            value: "3-1",
            children: [
              {
                title: "Production SA",
                value: "3-1-1",
              },
              {
                title: "OSBL / Utilities",
                value: "3-1-2",
              },
            ],
          },
          {
            title: "PAPs",
            value: "3-2",
            children: [
              {
                title: "PA",
                value: "3-2-1",
              },
              {
                title: "CAP",
                value: "3-2-2",
              },
            ],
          },
          {
            title: "Drying Plant",
            value: "3-3",
          },
          {
            title: "MPH OSBL",
            value: "3-4",
          },
          {
            title: "TSPs",
            value: "3-5",
            children: [
              {
                title: "Reaction",
                value: "3-5-1",
              },
              {
                title: "Screening",
                value: "3-5-2",
              },
              {
                title: "Dust Collection",
                value: "3-5-3",
              },
              {
                title: "Scrubbing",
                value: "3-5-4",
              },
              {
                title: "Granulation",
                value: "3-5-5",
              },
              {
                title: "Dying",
                value: "3-5-6",
              },
            ],
          },
          {
            title: "MS",
            value: "3-6",
          },
          {
            title: "PP",
            value: "3-7",
          },
        ],
      },
      {
        title: "SPH - PSA",
        value: "4",
        children: [
          {
            title: "Storage",
            value: "4-1",
            children: [
              {
                title: "Existing Safi Site",
                value: "4-1-1",
              },
              {
                title: "SPH Platform",
                value: "4-1-2",
              },
            ],
          },
          {
            title: "Conveyors",
            value: "4-2",
            children: [
              {
                title: "PSA / SPH",
                value: "4-2-1",
              },
            ],
          },
          {
            title: "Loading",
            value: "4-3",
            children: [
              {
                title: "PSA Superstructure",
                value: "4-3-1",
              },
            ],
          },
        ],
      },
    ],
  },
];

function NavBar({ collapsed, setCollapsed, onSearch }) {
  const {
    dashboard: { activeTab },
    dispatch,
  } = useContext(RootContext);

  const [value, setValue] = useState("General View");
  const onChange = (newValue, title) => {
    console.log(newValue, title);
    setValue(newValue);
    dispatch(updateActiveTab(title[0]));
    console.log(activeTab);
  };

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [selectedProcess, setSelectedProcess] = useState(undefined);

  const handleChange = (value) => {
    setSelectedProcess(value);
  };
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
          // height: "50px",
          flexDirection: "column",
          // maxWidth: "1000px",
          // padding: "20px 15px",
          margin: "10px 0px",
          marginTop: 0,
        }}
      >
        {/* <Segmented
          className="segment"
          // size="large"
          options={[
            "General View",
            "Mine & Beneficiation",
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
        /> */}
        <Flex
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            padding: "0 16px",
          }}
        >
          {/* <h2>Select Process:</h2> */}
          <h2 style={{ marginRight: 15 }}>Selected View:</h2>
          <TreeSelect
            style={{
              width: "300px",
              font: "lightFont",
            }}
            value={value}
            dropdownStyle={{
              maxHeight: 3000,
              // overflow: "auto",
            }}
            treeData={treeData}
            // placeholder="Please select"
            // treeDefaultExpandAll
            treeDefaultExpandedKeys={["0"]}
            onChange={onChange}
          />
        </Flex>
      </div>
    </div>
  );
}

export default NavBar;
