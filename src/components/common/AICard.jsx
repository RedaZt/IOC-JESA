import React from "react";
import { Layout, Card, Carousel, Flex } from "antd";
import {
  CloseCircleOutlined,
  InfoCircleOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import { Typography } from "antd";
import "../../css/components/common/AICard.css";

const { Title } = Typography;
const { Header, Sider, Content } = Layout;

// const contentStyle = {
//   margin: 0,
//   marginRight: 5,
//   height: "160px",
//   width: "500px",
//   color: "#fff",
//   lineHeight: "160px",
//   textAlign: "center",
//   // background: "#364d79",
//   background: "#1b3a71",
// };

const contentStyle = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  // background: "#364d79",
  background: "#1b3a71",
};

function AICard() {
  return (
    // <Card
    //   title="AI Recommendations"
    //   style={{
    //     height: "100%",
    //     width: "100%",
    //     borderRadius: "1.25rem",
    //   }}
    //   bodyStyle={{
    //     display: "flex",
    //     height: "80%",
    //     justifyContent: "center",
    //     alignItems: "center",
    //   }}
    // >
    <div style={{ width: "100%", height: "100%", border: "1px solid red" }}>
      <Carousel
        className="ai-carousel"
        style={{
          width: "100%",
          height: "100%",
          // height: "160px",
          // color: "red",
          border: "1px solid blue",
        }}
        autoplay
      >
        <Flex
          style={{
            width: "100%",
            height: "100%",
            // height: "160px",
            // color: "red",
            border: "1px solid green",
          }}
        >
          <Card
            className="ai-observation"
            // type="inner"
            // title="Observation"
            title={
              <Flex style={{ alignItems: "center" }}>
                <CheckCircleOutlined />
                <h3 style={{ marginLeft: 5 }}>Observation</h3>
              </Flex>
            }
            style={{
              height: "100%",
              width: "100%",
              height: "100%",
              borderRadius: "1.25rem",
              // background: "rgba(0, 200, 50, 0.2)",
              overflow: "hidden",
            }}
            headStyle={{ background: "rgba(0, 200, 50, 0.2)" }}
            // bodyStyle={{
            //   background: "#ffffff",
            //   borderRadius: "0 0 1.25rem 1.25rem",
            // }}
          >
            <h4>8% increase in asset availability.</h4>
          </Card>
        </Flex>
        {/* <div>
          <Card
            className="ai-warning"
            // type="inner"
            // title="Observation"
            title={
              <Flex style={{ alignItems: "center" }}>
                <InfoCircleOutlined />
                <h3 style={{ marginLeft: 5 }}>Warning</h3>
              </Flex>
            }
            style={{
              height: "100%",
              width: "100%",
              borderRadius: "1.25rem",
              // background: "rgba(0, 200, 50, 0.2)",
              overflow: "hidden",
            }}
            headStyle={{ background: "rgba(255, 200, 0, 0.2)" }}
            // bodyStyle={{
            //   background: "#ffffff",
            //   borderRadius: "0 0 1.25rem 1.25rem",
            // }}
          >
            <h4>Heavy rain expected next week.</h4>
          </Card>
        </div>
        <div>
          <Card
            className="ai-alert"
            // type="inner"
            // title="Observation"
            title={
              <Flex style={{ alignItems: "center" }}>
                <CloseCircleOutlined />
                <h3 style={{ marginLeft: 5 }}>Alert</h3>
              </Flex>
            }
            style={{
              height: "100%",
              width: "100%",
              borderRadius: "1.25rem",
              // background: "rgba(0, 200, 50, 0.2)",
              overflow: "hidden",
            }}
            headStyle={{ background: "rgba(255, 0, 0, 0.2)" }}
            // bodyStyle={{
            //   background: "#ffffff",
            //   borderRadius: "0 0 1.25rem 1.25rem",
            // }}
          >
            <h4>System Failure in 8hrs.</h4>
          </Card>
        </div> */}
      </Carousel>
    </div>
  );
}

export default AICard;
