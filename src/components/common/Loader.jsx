import React from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Flex, Spin } from "antd";

const Loader = () => (
  // <Spin
  //   indicator={
  //     <LoadingOutlined
  //       style={{
  //         fontSize: 24,
  //       }}
  //       spin
  //     />
  //   }
  // />
  <Flex
    style={{
      width: "100%",
      height: "100%",
      alignItems: "center",
      justifyContent: "center",
      // maxWidth: "1800px",
    }}
  >
    <Spin size="large" />
  </Flex>
);

export default Loader;
