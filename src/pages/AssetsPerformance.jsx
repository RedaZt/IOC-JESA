import React, { useEffect, useState, useContext } from "react";
import { RootContext } from "../store";
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
import Loader from "../components/common/Loader";
import GraphCard from "../components/common/GraphCard";

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

const maintenanceKPIs = {
  MTBF: "Hrs",
  "Maintenance Cost": "$",
  MMH: "Hrs",
  MTTR: "Hrs",
  MDT: "Hrs",
  "Maintenance Ratio": "",
  "Asset Availability": "%",
  "Maintenance Duration": "Hrs",
  "Equipment Failures/Day": "",
};

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const AssetsPerformance = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const {
    dashboard: { activeTab: selectedView },
    dispatch,
  } = useContext(RootContext);
  const [maintenanceData, setMaintenanceData] = useState(null);

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

  useEffect(() => {
    setMaintenanceData(null);
    const interval = setInterval(() => {
      const url = "http://localhost:8000/categories";
      const queryParams = new URLSearchParams({ process: selectedView });
      const requestUrl = `${url}/Maintenance?${queryParams}`;
      // console.log(requestUrl);
      async function fetchData() {
        try {
          const response = await fetch(requestUrl);
          if (!response.ok) {
            throw new Error("Failed to fetch data");
          }
          const data = await response.json();
          setMaintenanceData(data);
        } catch (error) {
          console.error("Error fetching maintenance data:", error);
        }
      }

      fetchData();
    }, 1000);
    return () => clearInterval(interval);
  }, [selectedView]);

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
        {maintenanceData ? (
          <Flex style={{ width: "100%" }}>
            <Row
              gutter={[8, 8]}
              className="content"
              style={{
                maxWidth: "1800px",
              }}
            >
              <Col span={24}>
                <Row
                  gutter={[8, 8]}
                  style={{ paddingBottom: 0, justifyContent: "space-evenly" }}
                >
                  {Object.keys(maintenanceData).map((item, index) => (
                    <Col
                      className="gutter-row"
                      sm={24}
                      md={12}
                      lg={8}
                      key={`col-${index + 1}`}
                    >
                      {/* <GraphCard title={item} data={maintenanceData[item].datasets[0].data} unit={maintenanceKPIs[item]} /> */}
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
                          statText={item}
                          statSuffix={maintenanceKPIs[item]}
                          statValue={
                            maintenanceData[item].datasets[0].data[
                              maintenanceData[item].datasets[0].data.length - 1
                            ]
                          }
                          arrow={"down"}
                          arrowColor={item === "MTTR" ? "green" : "red"}
                          // titleLevel={4}
                        />
                        <Line
                          options={lineChartOptions}
                          data={maintenanceData[item]}
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
                      <Marker
                        anchor={[33.52493481489739, -7.637054622716135]}
                      />
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
          </Flex>
        ) : (
          <Loader />
        )}
      </Layout>
    </MainLayout>
  );
};

export default AssetsPerformance;
