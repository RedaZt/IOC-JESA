import React, { useEffect, useState } from "react";
import { Layout, Card, Typography } from "antd";

// const { Title } = Typography;
// const { Header, Sider, Content } = Layout;

function TimeCard() {
  const [currTime, setCurrTime] = useState({
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString(),
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrTime({
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
      });
      // setCurrTime((prevData) => {
      //   const newData = { ...prevData };
      //   newData.date = new Date().toLocaleDateString();
      //   newData.time = new Date().toLocaleTimeString();
      //   return newData;
      // });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Card
      title="Date & Time"
      style={{
        // justifyContent: "center",
        // height: "fit-content",
        width: "100%",
        borderRadius: "1.25rem",
      }}
      bodyStyle={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h3>{currTime.date}</h3>
      <h1>{currTime.time}</h1>
    </Card>
  );
}

export default TimeCard;
