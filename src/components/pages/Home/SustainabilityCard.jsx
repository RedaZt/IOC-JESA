import React, { useEffect, useState, useContext, useRef } from "react";
import { RootContext } from "../../../store";
import { Card, Progress, Row, Col } from "antd";
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
    x: { display: false },
    y: { display: false },
  },
  plugins: {
    legend: { display: false },
  },
};

function SustainabilityCard() {
  // const {
  //   token: { colorBgContainer, borderRadiusLG },
  // } = theme.useToken();
  const {
    dashboard: { activeTab: selectedView },
  } = useContext(RootContext);
  const [sustainabilityData, setSustainabilityData] = useState(null);
  const [loading, setLoading] = useState(true);
  let isFetching = true;

  const fetchData = async () => {
    if (!isFetching) return;
    isFetching = false;
    try {
      const url = "http://localhost:8000/categories";
      const queryParams = new URLSearchParams({ process: selectedView });
      const requestUrl = `${url}/Sustainability?${queryParams}`;
      const response = await fetch(requestUrl);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setSustainabilityData(data);
    } catch (error) {
      console.error("Error fetching sustainability data:", error);
    } finally {
      setLoading(false);
    }
    isFetching = true;
  };

  useEffect(() => {
    setLoading(true);

    const interval = setInterval(fetchData, 1000);
    fetchData();

    return () => clearInterval(interval);
  }, [selectedView]);

  return (
    <Card
      title={"Sustainability"}
      extra={<a href="/Sustainability">More</a>}
      style={{
        justifyContent: "center",
        height: "100%",
        width: "100%",
        borderRadius: "1.25rem",
        alignItems: "center",
      }}
      bodyStyle={{
        justifyContent: "center",
        height: "80%",
        width: "100%",
        borderRadius: "1.25rem",
        alignItems: "center",
      }}
    >
      {loading ? (
        <Loader />
      ) : (
        sustainabilityData && (
          <Row style={{ justifyContent: "space-evenly" }}>
            {Object.keys(sustainabilityData).map((item, index) => (
              <Col
                key={`col-${index}`}
                xs={{ flex: "100%" }}
                sm={{ flex: "50%" }}
                md={{ flex: "40%" }}
                lg={{ flex: "20%" }}
                xl={{ flex: "10%" }}
              >
                <div
                  key={`sustainability-${index}`}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <h6 style={{ marginBottom: "5px" }}>
                    {sustainabilityData[item].datasets[0].label}
                  </h6>
                  <Progress
                    key={`sustainability-progress-${index}`}
                    type="dashboard"
                    strokeColor="#1b3a71"
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
                    format={(percent) => (
                      <div style={{ display: "flex", flexDirection: "column" }}>
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
                  />
                  <Line
                    options={lineChartOptions}
                    data={sustainabilityData[item]}
                    style={{ width: "100%", height: "100px" }}
                  />
                  <h6 style={{ marginBottom: "5px" }}>
                    {`Last ${sustainabilityData[item].datasets[0].data.length} Minutes`}
                  </h6>
                </div>
              </Col>
            ))}
          </Row>
        )
      )}
    </Card>
  );
}

export default SustainabilityCard;
