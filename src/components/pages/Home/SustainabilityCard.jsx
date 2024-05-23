import React, { useEffect, useState, useContext } from "react";
import { RootContext } from "../../../store";
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
import Loader from "../../common/Loader";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend,
  Title,
  Filler
);

const units = {
  "Carbon Footprint": "CO2-e",
  "Specific Electricity Consumption": "KWh",
  "Specific Water Consumption": "L",
  "Specific Fuel Consumption": "L",
};

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
      position: "top",
      display: false,
    },
    // title: {
    //   display: true,
    //   text: "Chart.js Line Chart",
    // },
  },
};

function SustainabilityCard() {
  // const sustainabilityData = getSustainabilityData();

  const {
    dashboard: { activeTab: selectedView },
    dispatch,
  } = useContext(RootContext);

  const [sustainabilityData, setSustainabilityData] = useState(null);

  useEffect(() => {
    // Fetch sustainability data
    setSustainabilityData(null);
    const interval = setInterval(() => {
      // fetch("http://localhost:8000/sustainability")
      //   .then((response) => response.json())
      //   .then((data) => {
      //     console.log(data);
      //     setSustainabilityData(data);
      //   });
      const url = "http://localhost:8000/categories";
      const queryParams = new URLSearchParams({ process: selectedView });
      // const requestUrl = `${url}?${queryParams}`;
      const requestUrl = `${url}/Sustainability?${queryParams}`;
      // console.log(requestUrl);
      async function fetchData() {
        try {
          const response = await fetch(requestUrl);
          if (!response.ok) {
            throw new Error("Failed to fetch data");
          }
          const data = await response.json();
          setSustainabilityData(data);
        } catch (error) {
          console.error("Error fetching sustainability data:", error);
        }
      }

      fetchData();
    }, 1000);
    return () => clearInterval(interval);
  }, [selectedView]);

  return (
    <Card
      title={
        <a href="/Sustainability" style={{ color: "black" }}>
          Sustainability
        </a>
      }
      style={{
        justifyContent: "center",
        height: "100%",
        width: "100%",
        boxSizing: "border-box",
        // padding: "auto",
        borderRadius: "1.25rem",
        // margin: "auto",
        alignItems: "center",
        // justifyContent: "center",
      }}
      bodyStyle={{
        justifyContent: "center",
        height: "80%",
        width: "100%",
        boxSizing: "border-box",
        // padding: "auto",
        borderRadius: "1.25rem",
        // margin: "auto",
        alignItems: "center",
        // justifyContent: "center",
      }}
    >
      {sustainabilityData ? (
        <Row
          style={{
            justifyContent: "space-evenly",
          }}
        >
          {Object.keys(sustainabilityData).map((item, index) => {
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
                  <h6 style={{ marginBottom: "5px" }}>
                    {sustainabilityData[item].datasets[0].label}
                  </h6>
                  <Progress
                    key={`sustainability-progress-${index}`}
                    type="dashboard"
                    strokeColor="#1b3a71"
                    // size={"small"}
                    percent={
                      (sustainabilityData[item].datasets[0].data[
                        sustainabilityData[item].datasets[0].data.length - 1
                      ] /
                        (Math.ceil(
                          sustainabilityData[item].datasets[0].data[
                            sustainabilityData[item].datasets[0].data.length - 1
                          ] / 100
                        ) *
                          100)) *
                      100
                    }
                    // format={(percent) => `${sustainabilityData[item].datasets[0].data[sustainabilityData[item].datasets[0].data.length - 1]} ${item.unit}`}
                    format={(percent) => (
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <h5>
                          {
                            sustainabilityData[item].datasets[0].data[
                              sustainabilityData[item].datasets[0].data.length -
                                1
                            ]
                          }
                        </h5>
                        <h6>
                          {units[sustainabilityData[item].datasets[0].label]}
                        </h6>
                      </div>
                    )}
                    gapDegree={50}
                    success={{ percent: null }}
                    // style={{ margin: "0 5px" }}
                  />
                  <Line
                    options={lineChartOptions}
                    data={sustainabilityData[item]}
                    style={{ width: "100%", height: "100px" }}
                  />
                  <h6
                    style={{ marginBottom: "5px" }}
                  >{`Last ${sustainabilityData[item].datasets[0].data.length} Minutes`}</h6>
                </div>
                {/* <Divider type="vertical" dashed={true} /> */}
              </Col>
            );
          })}
        </Row>
      ) : (
        <Loader />
      )}
    </Card>
  );
}

export default SustainabilityCard;
