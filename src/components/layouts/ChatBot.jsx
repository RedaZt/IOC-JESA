import React, { useState, useEffect } from "react";
import { OpenAIOutlined, ArrowUpOutlined } from "@ant-design/icons";
import {
  theme,
  Flex,
  FloatButton,
  List,
  Drawer,
  Input,
  Button,
  Spin,
} from "antd";
import "../../css/components/layouts/ChatBot.css";

const { TextArea } = Input;

function ChatBot() {
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

  return (
    <>
      <FloatButton
        icon={<OpenAIOutlined />}
        type="default"
        // onClick={() => {
        //   console.log("Clicked!");
        // }}
        onClick={showDrawer}
        style={{ right: 40 }}
      />
      <Drawer title="ChatBot" onClose={onClose} open={open} width={720}>
        <Flex
          style={{
            width: "100%",
            height: "100%",
            flexDirection: "column",
            // marginBottom: "10px",
            // padding: "24px",
          }}
        >
          {messagesList.length === 0 ? (
            <Flex
              style={{
                height: "100%",
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h1 style={{ fontFamily: "myFont" }}>
                Hello There, What Can I Do For You?
              </h1>
            </Flex>
          ) : (
            <List
              // header={<h3>Top 10 Vulnerabilities</h3>}
              // footer={<div>Footer</div>}
              bordered
              dataSource={messagesList}
              renderItem={(item, index) => (
                <List.Item>
                  <div
                    style={{
                      width: "100%",
                      textWrap: "wrap",
                      wordWrap: "break-word",
                    }}
                  >
                    <b>{item.sender}</b> : {item.text}
                  </div>
                </List.Item>
              )}
              style={{
                background: colorBgContainer,
                border: "1px solid #f0f0f0",
                borderRadius: "1.25rem",
                width: "100%",
                marginBottom: "5px",
                maxHeight: "95%",
                overflowY: "scroll",
                scrollbarWidth: "none",
              }}
            />
          )}
          <Flex
            style={{
              width: "100%",
              alignSelf: "flex-end",
              marginTop: "auto",
              height: "fit-content",
            }}
          >
            <TextArea
              placeholder="What can I help you with?"
              // placeholder="textarea with clear icon"
              // allowClear
              value={text}
              // onChange={onChange}
              onChange={handleTextChange}
              autoSize={{
                minRows: 1,
                maxRows: 5,
              }}
            />
            <div
              style={{
                alignSelf: "flex-end",
                marginTop: "auto",
                marginLeft: "10px",
              }}
            >
              <Button
                type="primary"
                icon={<ArrowUpOutlined />}
                onClick={handleSubmit}
              ></Button>
            </div>
          </Flex>
        </Flex>
      </Drawer>
    </>
  );
}

export default ChatBot;
