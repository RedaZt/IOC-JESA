import React, { useEffect, useState, useContext } from "react";
import { Map, Marker, ZoomControl } from "pigeon-maps";
import {
  theme,
  Flex,
  Layout,
  Card,
  Row,
  Col,
  Space,
  Table,
  Tag,
  Popconfirm,
  Button,
} from "antd";
import { Typography } from "antd";
import {
  Chart as ChartJS,
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  // Title,
  Tooltip,
  Legend,
} from "chart.js";
import { CheckCircleOutlined } from "@ant-design/icons";
import { Bar, Line, Doughnut } from "react-chartjs-2";
import MainLayout from "../layouts/MainLayout";
import Stat from "../components/common/Stat";
import AICard from "../components/common/AICard";
import "../css/pages/AssetsPerformance.css";

ChartJS.register(
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
  // ChartTitle,
);

const { Header, Sider, Content } = Layout;
const { Title } = Typography;

const lineChartLabels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
];
const lineChartOptions = {
  responsive: true,
  scales: {
    // to remove the labels
    x: {
      display: false,
    },
    // to remove the y-axis labels
    y: {
      display: false,
    },
  },
  plugins: {
    legend: {
      position: "right",
      display: false,
      labels: {
        usePointStyle: true,
        pointStyle: "line",
      },
    },
    // title: {
    //   display: true,
    //   text: "Chart.js Line Chart",
    // },
  },
};
const lineChartData = {
  labels: lineChartLabels,
  datasets: [
    {
      label: "Last 30 Days",
      data: [89, 90, 92, 92, 91, 93, 92, 90, 91, 92, 90],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.25)",
      fill: true,
      // lineTension: 0.25,
    },
    // {
    //   label: "Target",
    //   data: [50, 100, 50, 150, 200, 220, 250, 300, 320, 300, 290],
    //   borderColor: "rgb(255, 120, 220)",
    //   backgroundColor: "rgba(255, 120, 220, 0.5)",
    // },
  ],
};

const data = [
  {
    key: "1",
    id: "1",
    name: "Machine 1",
    location: "Location 1",
    tags: ["Available"],
  },
  {
    key: "2",
    id: "2",
    name: "Machine 2",
    location: "Location 2",
    tags: ["In Use"],
  },
  {
    key: "3",
    id: "3",
    name: "Machine 3",
    location: "Location 3",
    tags: ["Not Available"],
  },
];

const kpis = [
  { label: "MTBF" },
  { label: "MDT" },
  { label: "MTTR" },
  { label: "MMH" },
  { label: "Maintenance Ratio" },
  { label: "Asset Availability" },
  { label: "Maintenance Duration" },
  { label: "Equipement Failure / Day" },
];

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const AssetsPerformance = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const defaultProps = {
    center: {
      lat: 33.52493481489739,
      lng: -7.637054622716135,
    },
    zoom: 15,
  };

  const [columnsData, setColumnsData] = useState(data);

  // const handleDelete = (key) => {
  //   const newData = columnsData.filter((item) => item.key !== key);
  //   setColumnsData(newData);
  // };
  const handleAdd = () => {
    const newData = [
      ...columnsData,
      {
        key: `${columnsData.length + 1}`,
        id: `${columnsData.length + 1}`,
        name: `Machine ${columnsData.length + 1}`,
        location: `Location ${columnsData.length + 1}`,
        tags: ["Available"],
      },
    ];
    setColumnsData(newData);
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      render: (text) => (
        <h4
          style={{
            margin: 0,
          }}
        >
          {text}
        </h4>
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => (
        <h4
          style={{
            margin: 0,
          }}
        >
          {text}
        </h4>
      ),
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
    },
    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color =
              tag == "Available"
                ? "green"
                : tag == "Not Available"
                ? "red"
                : "gold";
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    // {
    //   title: "Action",
    //   key: "action",
    //   render: (_, record) => (
    //     <Space size="middle">
    //       {/* <a>Edit {record.name}</a> */}
    //       <a>Edit</a>
    //       <Popconfirm
    //         title="Sure to delete?"
    //         onConfirm={() => handleDelete(record.key)}
    //       >
    //         <a>Delete</a>
    //       </Popconfirm>
    //     </Space>
    //   ),
    // },
  ];

  // const {
  //   dashboard: { activeTab: selectedView },
  //   dispatch,
  // } = useContext(RootContext);

  return (
    <MainLayout selectedMenuKey={"4"} style={{ alignItems: "center" }}>
      <Layout
        className="content-container"
        style={{
          display: "flex",
          alignItems: "center",
          // justifyContent: "center",
          width: "100%",
          height: "100%",
          padding: "10px 16px",
          paddingTop: 0,
        }}
      >
        <Row
          gutter={[8, 8]}
          className="content"
          style={{
            width: "100%",
            maxWidth: "1800px",
          }}
        >
          <Col span={24}>
            <Row
              gutter={[8, 8]}
              style={{ paddingBottom: 0, justifyContent: "space-evenly" }}
            >
              {kpis.map((item, index) => (
                <Col
                  className="gutter-row"
                  sm={24}
                  md={12}
                  lg={6}
                  key={`col-${index + 1}`}
                >
                  <Card
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "12px 20px",
                      borderRadius: "1.25rem",
                    }}
                    bodyStyle={{ padding: 0 }}
                  >
                    <Stat
                      StatIcon={CheckCircleOutlined}
                      statText={item.label}
                      statSuffix={"%"}
                      statValue={96}
                      arrow={"down"}
                      arrowColor={"red"}
                      // titleLevel={4}
                    />
                    <Line
                      options={lineChartOptions}
                      data={lineChartData}
                      style={{ width: "100%" }}
                    />
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
          <Col span={24}>
            <Card
              style={{
                justifyContent: "center",
                alignItems: "center",
                padding: "24px",
                borderRadius: "1.25rem",
              }}
              bodyStyle={{
                padding: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  height: "600px",
                  width: "100%",
                  borderRadius: "1rem",
                  overflow: "hidden",
                }}
              >
                <Map
                  borderRadius={"1.25rem"}
                  defaultCenter={[33.52493481489739, -7.637054622716135]}
                  defaultZoom={16}
                >
                  <ZoomControl />
                  <Marker anchor={[33.52493481489739, -7.637054622716135]} />
                </Map>
              </div>
            </Card>
          </Col>
          <Col span={24}>
            <AICard />
          </Col>
          <Col span={24}>
            {/* <Button
                onClick={handleAdd}
                type="primary"
                style={{
                  width: "200px",
                  marginBottom: 5,
                  marginLeft: 5,
                }}
              >
                Add a row
              </Button> */}
            <Table
              columns={columns}
              dataSource={columnsData}
              style={{ width: "100%", borderRadius: "1.25rem" }}
            />
          </Col>
        </Row>
      </Layout>
    </MainLayout>
  );
};

export default AssetsPerformance;
