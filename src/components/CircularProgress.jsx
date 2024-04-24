import React from "react";
import { Card, Progress } from "antd";

function CircularProgress({ cardTitle, size, percent }) {
  return (
    <Card
      title={cardTitle}
      style={{
        height: `${size}px`,
        width: `${size}px`,
        // alignItems: "center",
        // justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Progress
          type="dashboard"
          percent={percent}
          size={size - 100}
          strokeColor="#1d3b7e"
          // style={{ width: "300px" }}
        />
      </div>
    </Card>
  );
}

CircularProgress.defaultProps = {
  cardTitle: "Untitled",
  size: 300,
  percent: 0,
};

export default CircularProgress;
