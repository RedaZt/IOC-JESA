import React, { useEffect, useState, useContext } from "react";
import { RootContext } from "../../../store";
import { Card, Table, Button, Drawer, Flex, Tag } from "antd";
import { Map, Marker, ZoomControl } from "pigeon-maps";
import Loader from "../../common/Loader";
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
import { Line } from "react-chartjs-2";
import { getMachineData } from "../../../data/testData";
ChartJS.register(
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
  // ChartTitle,
);

const lineChartOptions = {
  responsive: true,
  scales: {
    // to remove the labels
    x: {
      display: false,
    },
    // to remove the y-axis labels
    // y: {
    //   display: false,
    // },
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

function AssetsMap() {
  // const {
  //   dashboard: { activeTab: selectedView },
  //   dispatch,
  // } = useContext(RootContext);
  // const [machineData, setMachineData] = useState(null);
  // const [loading, setLoading] = useState(true);
  const { loading, machineData } = getMachineData();

  // useEffect(() => {
  //   setLoading(true);
  //   const fetchMachines = async () => {
  //     try {
  //       const url = "http://localhost:8000/machines";
  //       const queryParams = new URLSearchParams({ process: selectedView });
  //       const requestUrl = `${url}?${queryParams}`;
  //       const response = await fetch(requestUrl);
  //       if (!response.ok) {
  //         throw new Error("Failed to fetch data");
  //       }
  //       const data = await response.json();
  //       setMachineData(data);
  //     } catch (error) {
  //       console.error("Error fetching sustainability data:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchMachines();
  // }, [selectedView]);

  return (
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
        {loading ? (
          <Loader />
        ) : (
          <Map
            borderRadius={"1.25rem"}
            defaultCenter={[29.007027, -9.506982]}
            defaultZoom={5.5}
          >
            <ZoomControl />
            {machineData.machines.map((item, index) => {
              return (
                <Marker key={`machine-${index}`} anchor={[item[2], item[3]]} />
              );
            })}
          </Map>
        )}
      </div>
    </Card>
  );
}

function AssetsTable() {
  // const {
  //   dashboard: { activeTab: selectedView },
  //   dispatch,
  // } = useContext(RootContext);
  // const [machineData, setMachineData] = useState(null);
  // const [loading, setLoading] = useState(true);
  const { loading, machineData } = getMachineData();
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
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
        // <h4
        //   style={{
        //     margin: 0,
        //   }}
        // >
        //   {text}
        // </h4>
        <>
          <Button type="text" onClick={showDrawer}>
            <h4>{text}</h4>
          </Button>
          <Drawer
            title="Machine Information"
            onClose={onClose}
            open={open}
            size="large"
          >
            <Flex
              style={{
                width: "100%",
                flexDirection: "column",
                // border: "1px solid red",
              }}
            >
              <Card
                title="Temperature"
                style={{ borderRadius: "1.25rem", marginBottom: 10 }}
              >
                <div style={{ width: "100%", height: "100%" }}>
                  <Line
                    options={lineChartOptions}
                    data={{
                      ...lineChartData,
                      datasets: [
                        {
                          ...lineChartData.datasets[0],
                          borderColor: "rgb(255, 25, 0)",
                          backgroundColor: "rgba(255, 25, 0, 0.25)",
                        },
                      ],
                    }}
                    style={{ width: "100%" }}
                  />
                </div>
              </Card>
              <Card title="Vibration" style={{ borderRadius: "1.25rem" }}>
                <div style={{ width: "100%", height: "100%" }}>
                  <Line
                    options={lineChartOptions}
                    data={{
                      ...lineChartData,
                      datasets: [
                        {
                          ...lineChartData.datasets[0],
                          borderColor: "rgb(255, 200, 10)",
                          backgroundColor: "rgba(255, 200, 10, 0.25)",
                        },
                      ],
                    }}
                    style={{ width: "100%" }}
                  />
                </div>
              </Card>
              {/* <Card> */}
              {/* </Card> */}
            </Flex>
            <h2></h2>
          </Drawer>
        </>
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
              tag == "AVAILABLE"
                ? "green"
                : tag == "NOT AVAILABLE"
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

  // useEffect(() => {
  //   setLoading(true);
  //   const fetchMachines = async () => {
  //     try {
  //       const url = "http://localhost:8000/machines";
  //       const queryParams = new URLSearchParams({ process: selectedView });
  //       const requestUrl = `${url}?${queryParams}`;
  //       const response = await fetch(requestUrl);
  //       if (!response.ok) {
  //         throw new Error("Failed to fetch data");
  //       }
  //       const data = await response.json();
  //       setMachineData(data);
  //     } catch (error) {
  //       console.error("Error fetching sustainability data:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchMachines();
  // }, [selectedView]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Table
          columns={columns}
          dataSource={machineData.machines.map((item) => {
            return {
              key: `${item[0]}`,
              id: `${item[0]}`,
              name: item[1],
              location: `${item[2]}, ${item[3]}`,
              tags: [`${item[4]}`],
            };
          })}
          pagination={{ pageSize: 5 }}
          style={{ width: "100%", borderRadius: "1.25rem" }}
        />
      )}
    </>
  );
}

export { AssetsMap, AssetsTable };
