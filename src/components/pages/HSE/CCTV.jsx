import React, { useContext, useEffect, useState, useRef } from "react";
import { Card } from "antd";

function CCTV() {
  return (
    <Card
      // title={"CCTV-Footage"}
      style={{
        width: "100%",
        height: "100%",
        borderRadius: "1.25rem",
        alignItems: "center",
        justifyContent: "center",
      }}
      bodyStyle={{
        height: "100%",
        // padding: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          width: "100%",
          height: "100%",
          // borderRadius: "0.75rem",
        }}
      >
        {/* <img
          src="/img/CCTV.png"
          alt="CCTV-Footage"
          style={{
            maxWidth: "100%",
          }}
        /> */}
        <video
          src={"/vid/JESA's corporate video.mp4"}
          //   width="100%"
          //   height="100%"
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            borderRadius: "1rem",
          }}
          autoPlay
          loop
          muted
        />
      </div>
    </Card>
  );
}

export default CCTV;
