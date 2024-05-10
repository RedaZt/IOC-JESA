import React, { useEffect, useState } from "react";
import { Layout, Card, Typography, Flex, Divider } from "antd";

// const { Title } = Typography;
// const { Header, Sider, Content } = Layout;

function TimeCard() {
  const date = new Date();
  // const date = new Date(2009, 10, 10);  // 2009-11-10
  // const testDate = new Date();
  // const day = testDate.getDay();
  // const month = testDate.toLocaleString("default", { month: "short" });
  // const year = testDate.getFullYear();
  // console.log(day, month, year);
  // const testTime = new Date().toLocaleTimeString([], {
  //   hour: "2-digit",
  //   minute: "2-digit",
  // });
  // console.log(testTime);

  const [currTime, setCurrTime] = useState({
    day: date.getDay(),
    month: date.toLocaleString("default", { month: "short" }),
    year: date.getFullYear(),
    time: date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }),
  });

  const zeroPad = (num, places) => String(num).padStart(places, "0");

  useEffect(() => {
    const interval = setInterval(() => {
      const currDate = new Date();
      setCurrTime({
        day: currDate.getDay(),
        month: currDate.toLocaleString("default", { month: "short" }),
        year: currDate.getFullYear(),
        time: currDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
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
      // title="Date & Time"
      style={{
        // justifyContent: "center",
        // height: "fit-content",
        width: "100%",
        borderRadius: "1.25rem",
      }}
      bodyStyle={{
        display: "flex",
        // flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Flex style={{ flexDirection: "column" }}>
        <h1 style={{ marginBottom: -15 }}>{zeroPad(currTime.day, 2)}</h1>
        <h1>{currTime.month}</h1>
      </Flex>
      <Divider type="vertical" style={{ height: "70px" }} />
      <Flex style={{ flexDirection: "column" }}>
        <h1 style={{ fontWeight: 200, marginBottom: -15 }}>
          {currTime.time.split(" ")[0]}
        </h1>
        <h1 style={{ fontWeight: 200 }}>{currTime.time.split(" ")[1]}</h1>
      </Flex>
    </Card>
  );
}

export default TimeCard;
