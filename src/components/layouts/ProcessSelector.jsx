import React, { useState, useContext } from "react";
import { Layout, Input, theme, TreeSelect, Flex } from "antd";
import { Typography } from "antd";
import { updateActiveTab } from "../../store/actions/dashboard";
import { RootContext } from "../../store";

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
            title: "SAP",
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
            title: "PAP",
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
            title: "TSP",
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

function ProcessSelector({ collapsed, setCollapsed, onSearch }) {
  const {
    dashboard: { activeTab },
    dispatch,
  } = useContext(RootContext);

  const [tabValue, setTabValue] = useState("0");
  const onChange = (newValue, title) => {
    // console.log(newValue, title);
    // console.log(typeof newValue, newValue);
    setTabValue(newValue);
    // dispatch(updateActiveTab(title[0]));
    dispatch(updateActiveTab(newValue));
    // console.log(activeTab);
  };

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [selectedProcess, setSelectedProcess] = useState(undefined);

  const handleChange = (value) => {
    setSelectedProcess(value);
  };

  return (
    <Flex
      style={{
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        // padding: "0 16px",
        // margin: "10px 0px",
        // marginTop: 0,
        marginBottom: 10,
      }}
    >
      <h2 style={{ marginRight: 15 }}>Selected View:</h2>
      <TreeSelect
        style={{
          width: "300px",
          font: "lightFont",
        }}
        value={tabValue}
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
  );
}

export default ProcessSelector;
