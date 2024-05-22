import React, { useContext, useEffect, useState, useRef } from "react";
import { Card } from "antd";

function CCTV() {
  return (
    <Card
      title={
        <a href="/HSE" style={{ color: "black" }}>
          CCTV-Footage
        </a>
      }
      style={{
        width: "100%",
        borderRadius: "1.25rem",
      }}
      bodyStyle={{
        padding: 15,
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
          borderRadius: "0.75rem",
        }}
      >
        <img
          src="/img/CCTV.png"
          alt="CCTV-Footage"
          style={{
            maxWidth: "100%",
          }}
        />
      </div>
    </Card>
  );
}

export default CCTV;
