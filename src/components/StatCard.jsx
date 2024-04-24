import React from "react";
import {
  FundProjectionScreenOutlined,
  ArrowUpOutlined,
  RadarChartOutlined,
  ArrowDownOutlined,
} from "@ant-design/icons";
import { Card, Flex, Button, Col, Row, Statistic } from "antd";
import { Typography } from "antd";
// import testFun from "./testFun";

const { Title } = Typography;

function StatCard1({ cardTitle, handleClick }) {
  return (
    <Card
      //   title={
      //     <Title level={4} style={{ margin: 0, color: "#6E6E91" }}>
      //       Test Card 1
      //     </Title>
      //   }
      bordered={true}
      draggable="true"
      style={{
        width: 300,
        // height: "100%",
        cursor: "pointer",
        // borderColor: "#1d3b7e",
        border: "2px solid rgba(29, 59, 126, .08)",
        // background: "#E2E8F0",
        boxShadow: "0 2px 4px rgba(22, 30, 50, .04)",
      }}
      // bodyStyle={{ padding: 0 }}
      onClick={handleClick}
    >
      <Title level={4} style={{ margin: 0, color: "#6C7486" }}>
        {/* Test Card 1 */}
        {cardTitle}
      </Title>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Title
          level={1}
          style={{
            margin: 0,
            color: "#000",
            fontSize: "45px",
            // marginLeft: "10px",
          }}
        >
          99999
        </Title>
        <Statistic
          // title="Production"
          value={34.4}
          // precision={2}
          valueStyle={{ color: "#3f8600", fontSize: 20 }}
          prefix={<ArrowUpOutlined />}
          suffix="%"
          style={{ alignSelf: "flex-end" }}
        />
      </div>
    </Card>
  );
}
// function StatCard1({ cardTitle, handleClick }) {
//   return (
//     <Card
//       //   title={
//       //     <Title level={4} style={{ margin: 0, color: "#6E6E91" }}>
//       //       Test Card 1
//       //     </Title>
//       //   }
//       bordered={true}
//       style={{
//         width: 300,
//         height: "100%",
//         cursor: "pointer",
//         // background: "#E2E8F0",
//       }}
//       onClick={handleClick}
//     >
//       <Title level={4} style={{ margin: 0, color: "#6E6E91" }}>
//         {/* Test Card 1 */}
//         {cardTitle}
//       </Title>
//       <Flex style={{ justifyContent: "space-between", alignItems: "center" }}>
//         <div style={{ alignItems: "center", justifyContent: "center" }}>
//           <Title style={{ margin: 0, fontSize: "45px" }}>99999</Title>
//         </div>
//         <Button
//           type="text"
//           size="large"
//           // shape="circle"
//           style={{
//             background: "#c6ebcb",
//             // borderColor: "#42BD53",
//             // borderColor: "#dedede",
//             width: "100px",
//           }}
//           onClick={() => {}}
//         >
//           <Title level={5} style={{ margin: 0, color: "#42BD53" }}>
//             34.3%
//             <ArrowUpOutlined />
//           </Title>
//           {/* <FundProjectionScreenOutlined /> */}
//           {/* <RadarChartOutlined /> */}
//         </Button>
//       </Flex>
//     </Card>
//   );
// }

function StatCard2() {
  return (
    <Row gutter={16}>
      <Col span={12}>
        <Card
          title="Production"
          bordered={false}
          style={{
            width: 300,
            height: "100%",
            cursor: "pointer",
            background: "#E2E8F0",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Title
              level={1}
              style={{
                margin: 0,
                color: "#000",
                fontSize: "45px",
                marginLeft: "10px",
              }}
            >
              99999
            </Title>
            <Statistic
              // title="Production"
              value={34.4}
              // precision={2}
              valueStyle={{ color: "#3f8600" }}
              prefix={<ArrowUpOutlined />}
              suffix="%"
              style={{ alignSelf: "flex-end" }}
            />
          </div>
        </Card>
      </Col>
    </Row>
  );
}

export { StatCard1, StatCard2 };
