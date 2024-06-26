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
    <Card
      title="AI Recommendations"
      style={{
        height: "100%",
        width: "100%",
        borderRadius: "1.25rem",
      }}
      bodyStyle={{
        display: "flex",
        height: "80%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* <div
        style={{
          width: "95%",
          overflow: "hidden",
          overflowX: "scroll",
          scrollbarWidth: "none",
          display: "flex",
        }}
      >
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </div> */}
      {/* <div
        style={{
          width: "95%",
          height: "100px",
          overflow: "hidden",
          overflowX: "scroll",
          scrollbarWidth: "none",
          display: "flex",
        }}
      > */}
      <div style={{ width: "95%" }}>
        <Carousel
          className="ai-carousel"
          style={{
            width: "100%",
            // height: "160px",
            color: "red",
          }}
          autoplay
        >
          <div style={{ height: "500px", width: "70%" }}>
            <Card
              className="ai-observation"
              type="inner"
              // title="Observation"
              title={
                <Flex style={{ alignItems: "center" }}>
                  <CheckCircleOutlined />
                  <h3 style={{ marginLeft: 5 }}>Observation</h3>
                </Flex>
              }
              // extra={<a href="#">More</a>}
              style={{ height: "80%", width: "100%" }}
            >
              <h4>8% increase in asset availability.</h4>
            </Card>
          </div>
          <div style={{ height: "500px", width: "70%" }}>
            <Card
              className="ai-warning"
              type="inner"
              title={
                <Flex style={{ alignItems: "center" }}>
                  <InfoCircleOutlined />
                  <h3 style={{ marginLeft: 5 }}>Warning</h3>
                </Flex>
              }
              // title="Alert"
              // extra={<a href="#">More</a>}
              style={{
                height: "100%",
                width: "100%",
              }}
            >
              <h4>Heavy rain expected next week.</h4>
            </Card>
          </div>
          <div style={{ height: "500px", width: "70%" }}>
            <Card
              className="ai-alert"
              type="inner"
              title={
                <Flex style={{ alignItems: "center" }}>
                  <CloseCircleOutlined />
                  <h3 style={{ marginLeft: 5 }}>Alert</h3>
                </Flex>
              }
              // title="Alert"
              // extra={<a href="#">More</a>}
              style={{
                height: "100%",
                width: "100%",
              }}
            >
              <h4>System Failure in 8hrs.</h4>
            </Card>
          </div>
        </Carousel>
      </div>
      {/* </div> */}
    </Card>
  );
}

export default AICard;
