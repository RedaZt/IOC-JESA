import React, { useState, useEffect } from "react";
import { Layout, theme, Flex } from "antd";
import SideBar from "../components/layouts/SideBar.jsx";
import NavBar from "../components/layouts/NavBar.jsx";
// import NavBar from "../components/layouts/NavBarOld.jsx";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

const MainLayout = ({ children, selectedMenuKey }) => {
  let collapsedState = false;
  const dimension = getWindowDimensions();
  if (dimension.width <= 1100) {
    collapsedState = true;
  }

  const [collapsed, setCollapsed] = useState(collapsedState);
  const [menuKey, setMenuKey] = useState(selectedMenuKey);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Flex>
      <Layout style={{ minHeight: "100vh", width: "100%" }}>
        <SideBar
          collapsed={collapsed}
          menuKey={menuKey}
          // handleClick={(key) => {
          //   // window.scrollTo({ top: 0, behavior: "smooth" });
          //   setMenuKey(key.key);
          //   console.log(menuKey);
          // }}
        ></SideBar>
        <Layout>
          <NavBar
            // colorBgContainer={colorBgContainer}
            collapsed={collapsed}
            setCollapsed={setCollapsed}
          ></NavBar>
          {children}
        </Layout>
      </Layout>
    </Flex>
  );
};

export default MainLayout;
