import React from "react";
import { Card, Space } from "antd";
import Stat from "../../common/Stat";

function CriticalEventsCard() {
  return (
    <Card
      title={
        <div style={{ width: "100%", textWrap: "wrap" }}>
          Critical Events Count
        </div>
      }
      style={{
        justifyContent: "center",
        // height: "500px",
        // height: "500px",
        width: "100%",
        borderRadius: "1.25rem",
      }}
      headStyle={{ height: "fit-content", padding: "10px 24px" }}
      bodyStyle={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ width: "100%", padding: "0 35%" }}>
        <Stat
          // StatIcon={CheckCircleOutlined}
          statText={15}
          // statSuffix={"%"}
          statValue={4}
          arrow={"down"}
          titleLevel={1}
          // arrowColor={"red"}
        />
      </div>
    </Card>
  );
}

export default CriticalEventsCard;
