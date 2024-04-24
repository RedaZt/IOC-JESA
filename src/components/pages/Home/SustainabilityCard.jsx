import React, { useEffect, useState } from "react";
import { Card, Progress, Divider, Row, Col } from "antd";
import {
  Chart as ChartJS,
  Legend,
  Title,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { getSustainabilityData } from "../../../data/data";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend,
  Title,
  Filler
);

// Line chart test data
const lineChartLabels1 = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
];
const lineChartOptions1 = {
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
      position: "top",
      display: false,
    },
    // title: {
    //   display: true,
    //   text: "Chart.js Line Chart",
    // },
  },
};
const lineChartData1 = {
  labels: lineChartLabels1,
  datasets: [
    {
      label: "Dataset 1",
      data: [600, 550, 580, 700, 720, 600, 570],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

function SustainabilityCard() {
  const sustainabilityData = getSustainabilityData();

  // Use useEffect to update data when component mounts
  // useEffect(() => {
  //   updateData();
  // }, []);
  // const [sustainabilityData, setSustainabilityData] =
  //   useState(sustainabilityData);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setSustainabilityData((prevData) =>
  //       prevData.map((item) => ({
  //         ...item,
  //         value: item.value + 1,
  //       }))
  //     );
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, []);
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setSustainabilityData((prevData) => {
  //       let newData = [...prevData];
  //       newData[3] = { ...newData[3], value: newData[3].value + 1 };
  //       return newData;
  //     });
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <Card
      title="Sustainability"
      style={{
        justifyContent: "center",
        height: "100%",
        width: "50%",
        boxSizing: "border-box",
        // padding: "auto",
        borderRadius: "1.25rem",
        // margin: "auto",
        alignItems: "center",
        // justifyContent: "center",
      }}
    >
      <Row
        style={{
          justifyContent: "space-evenly",
        }}
      >
        {sustainabilityData.map((item, index) => {
          return (
            <Col
              key={`col-${index}`}
              xs={{ flex: "100%" }}
              sm={{ flex: "50%" }}
              md={{ flex: "40%" }}
              lg={{ flex: "20%" }}
              xl={{ flex: "10%" }}
              // style={{ height: "100%" }}
              // style={{ marginLeft: "auto" }}
            >
              <div
                key={`sustainability-${index}`}
                style={{
                  display: "flex",
                  // height: "100%",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* <Title level={5} style={{ margin: 0, color: "#6C7486" }}>
                        Carbon Footprint <br></br>&#40;CO2-e&#41;
                      </Title> */}
                <h6 style={{ marginBottom: "5px" }}>{item.title}</h6>
                <Progress
                  key={`sustainability-progress-${index}`}
                  type="dashboard"
                  strokeColor="#1b3a71"
                  // size={"small"}
                  percent={
                    (item.value / (Math.ceil(item.value / 100) * 100)) * 100
                  }
                  // format={(percent) => `${item.value} ${item.unit}`}
                  format={(percent) => (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <h5>{item.value}</h5>
                      <h6>{item.unit}</h6>
                    </div>
                  )}
                  gapDegree={50}
                  success={{ percent: null }}
                  // style={{ margin: "0 5px" }}
                />
                <Line
                  options={lineChartOptions1}
                  data={lineChartData1}
                  style={{ width: "100%", height: "100px" }}
                />
                <h6 style={{ marginBottom: "5px" }}>Last 12 Months</h6>
              </div>
              {/* <Divider type="vertical" dashed={true} /> */}
            </Col>
          );
        })}
      </Row>
    </Card>
  );
}

export default SustainabilityCard;
