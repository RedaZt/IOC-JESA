import React, { useEffect, useState } from "react";
import { Card } from "antd";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const doughnutChartData = {
  labels: ["Identified", "Shelved", "Progress", "Done"],
  datasets: [
    {
      label: "Opportunity",
      data: [138, 21, 56, 47],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

function OpportunityCard() {
  return (
    <Card
      title="Opportunity"
      style={{
        justifyContent: "center",
        // height: "200px",
        // height: "fit-content",
        height: "100%",
        width: "100%",
        // padding: "auto",
        borderRadius: "1.25rem",
        // margin: "auto",
        // alignItems: "center",
        // justifyContent: "center",
      }}
      bodyStyle={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ width: "85%" }}>
        <Doughnut
          data={doughnutChartData}
          options={{
            plugins: {
              legend: {
                position: "right",
                labels: {
                  usePointStyle: true,
                  pointStyle: "circle",
                },
              },
              title: {
                position: "bottom",
                display: true,
                text: "Total Opportunity",
              },
            },
          }}
        />
      </div>
    </Card>
  );
}

export default OpportunityCard;
