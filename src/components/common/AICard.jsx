import React from "react";
import { Layout, Card, Carousel } from "antd";
import { Typography } from "antd";

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
  background: "#364d79",
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
          style={{
            width: "100%",
            // height: "160px",
          }}
          autoplay
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
        </Carousel>
      </div>
      {/* </div> */}
    </Card>
  );
}

export default AICard;
