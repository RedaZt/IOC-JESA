import React, { useState, useEffect } from "react";
import { OpenAIOutlined, ArrowUpOutlined } from "@ant-design/icons";
import {
  Layout,
  theme,
  Flex,
  FloatButton,
  List,
  Drawer,
  Input,
  Button,
  Spin,
} from "antd";
import SideBar from "../components/layouts/SideBar.jsx";
import NavBar from "../components/layouts/NavBar.jsx";
import ProcessSelector from "../components/layouts/ProcessSelector.jsx";
import ChatBot from "../components/layouts/ChatBot.jsx";
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

  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const { TextArea } = Input;
  const onChange = (e) => {
    console.log(e);
  };

  // chatbot logic
  const [text, setText] = useState("");

  const handleTextChange = (e) => {
    // console.log(e.value);
    setText(e.target.value);
  };

  const [messagesList, setMessagesList] = useState([]);
  // useEffect(() => {
  //   const connection = createConnection(serverUrl, roomId);
  //   connection.connect();
  //   return () => {
  //     connection.disconnect();
  //   };
  // }, [serverUrl, roomId]);

  const handleSubmit = () => {
    if (text) {
      console.log("Submitting text:", text);
      const url = "http://localhost:8000";
      const prompt = text;
      setMessagesList((prevData) => {
        const newData = prevData.concat([
          {
            sender: "User",
            text: text,
          },
        ]);
        return newData;
      });
      setMessagesList((prevData) => {
        const newData = prevData.concat([
          {
            sender: "AI",
            text: (
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  height: "100%",
                  marginBottom: 20,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Spin />
              </div>
            ),
          },
        ]);
        return newData;
      });
      setText("");

      // Construct the URL with query parameters
      const queryParams = new URLSearchParams({ prompt: text });
      // const requestUrl = `${url}?${queryParams}`;
      const requestUrl = `${url}/${queryParams}`;

      fetch(requestUrl)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          // console.log(data);
          setMessagesList((prevData) => {
            const newData = prevData.slice(0, prevData.length - 1).concat([
              {
                sender: "AI",
                text: data.output,
              },
            ]);
            return newData;
          });
        })
        .catch((error) => {
          console.error("Error:", error);
          setMessagesList((prevData) => {
            const newData = prevData.slice(0, prevData.length - 1).concat([
              {
                sender: "AI",
                text: "Something Went Wrong, Please Try Again...",
              },
            ]);
            return newData;
          });
        });
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

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
          <ChatBot />
          <NavBar
            // colorBgContainer={colorBgContainer}
            collapsed={collapsed}
            setCollapsed={setCollapsed}
          ></NavBar>
          <ProcessSelector />
          {children}
        </Layout>
      </Layout>
    </Flex>
  );
};

export default MainLayout;
