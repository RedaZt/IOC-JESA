import React from "react";
import { Flex, Spin } from "antd";
import "../../css/components/common/Loader.css";

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
    className="loader-container"
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
