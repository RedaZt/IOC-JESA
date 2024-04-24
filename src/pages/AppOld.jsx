import React, { useEffect, useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  SettingOutlined,
  EditOutlined,
  EllipsisOutlined,
  AudioOutlined,
  DashboardOutlined,
  SettingFilled,
  DashboardFilled,
} from "@ant-design/icons";
// import StatCard1 from "../components/statCard";
import {
  Layout,
  Menu,
  Button,
  theme,
  Card,
  Avatar,
  Row,
  Flex,
  Input,
  Space,
} from "antd";
import { Typography } from "antd";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
// import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";

ChartJS.register(ArcElement, Tooltip, Legend);

// useEffect(
//   () => {
//     // execute side effect
//     return () => {
//       // cleanup function on unmounting or re-running effect
//     }
//   },
//   // optional dependency array
//   [/* 0 or more entries */]
// )

const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      // borderColor: [
      //   "rgba(255, 99, 132, 1)",
      //   "rgba(54, 162, 235, 1)",
      //   "rgba(255, 206, 86, 1)",
      //   "rgba(75, 192, 192, 1)",
      //   "rgba(153, 102, 255, 1)",
      //   "rgba(255, 159, 64, 1)",
      // ],
      borderWidth: 1,
    },
  ],
};

const { Title } = Typography;
const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1677ff",
    }}
  />
);

// StatCard1.defaultProps = {
//   cardTitle: "None",
// };

const onSearch = (value, _e, info) => console.log(info?.source, value);

const { Meta } = Card;
const { Header, Sider, Content } = Layout;

const App2 = () => {
  const [counter, setCounter] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const key = setInterval(() => {
  //     setCounter((count) => count + 1);
  //   }, 1000);

  //   return () => {
  //     clearInterval(key);
  //   };
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsLoading(false);
    };

    fetchData();
  }, []);

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     console.log("Scroll");
  //   });
  // }, []);

  const [collapsed, setCollapsed] = useState(false);
  const [menuKey, setMenuKey] = useState("1");
  const handleButtonClick = () => {
    // window.location.href = "http://www.google.com";
    console.log(menuKey);
  };
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Flex>
      <Layout style={{ minHeight: "100vh" }}>
        <div
          style={{
            height: "100vh",
            // padding: "10px",
            position: "sticky",
            top: 0,
          }}
        >
          <Sider
            trigger={null}
            collapsible
            collapsed={collapsed}
            width={250}
            style={{
              // height: "100vh",
              width: "200px",
              color: "rgba(0, 0, 0, 0.87)",
              // transition: "boxShadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
              // boxShadow: "none",
              // overflowY: "auto",
              // display: "flex",
              // flexDirection: "column",
              // flex: "1 0 auto",
              zIndex: "1200",
              position: "sticky",
              // top: "0px",
              // outline: "0px",
              // left: "0px",
              // width: "30rem",
              backgroundColor: "rgba(255, 255, 255, 1)",
              // backdropFilter: "saturate(200%) blur(1.875rem)",
              // height: "calc(-2rem + 100vh)",
              height: "100%",
              // margin: "15px",
              // borderRadius: "0 1.25rem 1.25rem 0",
              // borderRadius: "1.25rem",
              // // border: "none",
              // // borderRadius: "1.25rem",
              // boxShadow:
              //   "rgba(255, 255, 255, 0.9) 0rem 0rem 0.0625rem 0.0625rem inset, rgba(0, 0, 0, 0.05) 0rem 1.25rem 1.6875rem 0rem",
              // backdropFilter: "blur(2.625rem)",
            }}
          >
            {/* <div
            className="demo-logo-vertical"
            style={{ height: "50px;", width: "50px" }}
          /> */}
            <div
              className="logo"
              style={{
                alignItems: "center",
                justifyContent: "center",
                padding: "15px",
              }}
            >
              <img
                src="https://www.valiantech.ma/wp-content/uploads/2022/01/JESA-logo.png"
                style={{
                  display: "block",
                  margin: "auto",
                  height: "100%",
                  maxWidth: "169px",
                  width: "100%",
                  // borderColor: "#1d3b7e",
                  // borderBottomStyle: "solid",
                  // borderBottomWidth: "thin",
                  // paddingBottom: "15px",
                  // padding: "auto",
                  // height: "24px",
                }}
              />
              <div
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  borderColor: "#1d3b7e",
                  borderBottomStyle: "solid",
                  borderBottomWidth: "thin",
                  paddingBottom: "15px",
                }}
              ></div>
            </div>
            <Menu
              theme="light"
              mode="inline"
              defaultSelectedKeys={[menuKey]}
              items={[
                {
                  key: "1",
                  icon:
                    menuKey === "1" ? (
                      <DashboardFilled
                        style={{ color: "#1d3b7e", fontSize: "16px" }}
                      />
                    ) : (
                      <DashboardOutlined
                        style={{ color: "#1d3b7e", fontSize: "16px" }}
                      />
                    ),
                  // label: <span style={{ color: "#1d3b7e" }}>nav 1</span>,
                  label: (
                    <a href="#">
                      <Title
                        level={5}
                        style={{
                          margin: 0,
                          color: collapsed ? "white" : "#1d3b7e",
                          fontFamily: "myFont",
                        }}
                      >
                        Home
                      </Title>
                    </a>
                  ),
                },
                {
                  key: "2",
                  icon: (
                    <VideoCameraOutlined
                      style={{ color: "#1d3b7e", fontSize: "16px" }}
                    />
                  ),
                  label: (
                    <Title
                      level={5}
                      style={{
                        margin: 0,
                        color: collapsed ? "white" : "#1d3b7e",
                        fontFamily: "myFont",
                      }}
                    >
                      Security
                    </Title>
                  ),
                },
                {
                  key: "3",
                  icon: (
                    <UploadOutlined
                      style={{ color: "#1d3b7e", fontSize: "16px" }}
                    />
                  ),
                  label: (
                    <Title
                      level={5}
                      style={{
                        margin: 0,
                        color: collapsed ? "white" : "#1d3b7e",
                        fontFamily: "myFont",
                      }}
                    >
                      nav 3
                    </Title>
                  ),
                },
                {
                  key: "4",
                  icon:
                    menuKey === "4" ? (
                      <SettingFilled
                        style={{ color: "#1d3b7e", fontSize: "16px" }}
                      />
                    ) : (
                      <SettingOutlined
                        style={{ color: "#1d3b7e", fontSize: "16px" }}
                      />
                    ),
                  label: (
                    <Title
                      level={5}
                      style={{
                        margin: 0,
                        color: collapsed ? "white" : "#1d3b7e",
                        fontFamily: "myFont",
                      }}
                    >
                      Maintenance
                    </Title>
                  ),
                },
              ]}
              style={{ border: "none" }}
              onClick={(key) => {
                // console.log(key);
                window.scrollTo({ top: 0, behavior: "smooth" });
                setMenuKey(key.key);
              }}
            />
          </Sider>
        </div>
        <Layout>
          <div
            style={{
              // position: "sticky",
              top: 0,
              // zIndex: "1100",
            }}
          >
            <Header
              style={{
                padding: 0,
                background: colorBgContainer,
                flexDirection: "column",
                flexShrink: 0,
                // position: "sticky",
                // zIndex: "1100",
                // left: "auto",
                // right: "0px",
                boxShadow:
                  "rgba(255, 255, 255, 0.9) 0rem 0rem 0.0625rem 0.0625rem inset, rgba(0, 0, 0, 0.05) 0rem 1.25rem 1.6875rem 0rem",
                backdropFilter: "blur(2.625rem)",
                color: "rgb(255, 255, 255)",
                // top: "0.75rem",
                // minHeight: "4.6875rem",
                display: "grid",
                // -webkit-box-align: center,
                alignItems: "center",
                // justifyContent: "center",
                borderRadius: "1.25rem",
                // padding: "auto 0px",
                margin: "10px 16px",
                // backgroundColor: "transparent !important",
                // borderColor: "rgba(226, 232, 240, 0.3) !important",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  color: "#1d3b7e",
                  fontSize: "16px",
                  width: 64,
                  height: 64,
                  borderRadius: "1.25rem",
                }}
              />
              <Search
                placeholder="input search text"
                onSearch={onSearch}
                style={{ width: 200, marginRight: "20px", borderRadius: 0 }}
                // onInput={(e) => {
                //   console.log(e.target.value);
                //   console.log(e.target.defaultValue);
                // }}
              />
            </Header>
          </div>
          <Content
            style={{
              margin: "10px 16px",
              marginTop: 0,
              // padding: 24,
              padding: "20px 15px",
              minHeight: 280,
              // Height: "100vh",
              // width: "100%",
              background: colorBgContainer,
              borderRadius: "1.25rem",
              boxShadow:
                "rgba(255, 255, 255, 0.9) 0rem 0rem 0.0625rem 0.0625rem inset, rgba(0, 0, 0, 0.05) 0rem 1.25rem 1.6875rem 0rem",
              backdropFilter: "blur(2.625rem)",
            }}
          >
            <Flex
              wrap="wrap"
              gap={"middle"}
              style={{
                justifyContent: "space-evenly",
                padding: "auto",
                margin: "auto",
              }}
            >
              {[...Array(parseInt(menuKey) * 10)].map((x, i) => (
                <Card
                  style={{ width: 300 }}
                  cover={
                    <img
                      alt="example"
                      src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                    // <h1
                    //   style={{
                    //     padding: "10px",
                    //     justifyContent: "center",
                    //     alignItems: "center",
                    //     textAlign: "center",
                    //     borderBottom: "1px solid black",
                    //   }}
                    // >
                    //   Hello World
                    // </h1>
                  }
                  actions={[
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                  ]}
                  key={i}
                >
                  <Meta
                    avatar={
                      <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
                    }
                    title="Card title"
                    description="This is the description"
                  />
                </Card>
              ))}

              {/* <StatCard1
                // cardTitle={menuKey == "1" ? "Test" : "Testtt"}
                cardTitle={`Tes${"t".repeat(parseInt(menuKey))} ${counter}`}
                handleClick={handleButtonClick}
              /> */}
            </Flex>
            {/* Content */}
          </Content>

          <Flex
            style={{
              margin: "5px 16px",
              marginTop: 0,
              // height: "100vh",
              // padding: "20px 15px",
              // minHeight: 280,
              // Height: "100vh",
              // width: "100%",
              // background: colorBgContainer,
              // borderRadius: "1.25rem",
              // boxShadow:
              //   "rgba(255, 255, 255, 0.9) 0rem 0rem 0.0625rem 0.0625rem inset, rgba(0, 0, 0, 0.05) 0rem 1.25rem 1.6875rem 0rem",
              // backdropFilter: "blur(2.625rem)",
            }}
          >
            {isLoading ? (
              <Card
                style={{
                  width: 300,
                  marginTop: 16,
                  width: "50%",
                  borderRadius: "1.25rem",
                  boxShadow:
                    "rgba(255, 255, 255, 0.9) 0rem 0rem 0.0625rem 0.0625rem inset, rgba(0, 0, 0, 0.05) 0rem 1.25rem 1.6875rem 0rem",
                  backdropFilter: "blur(2.625rem)",
                }}
                loading={isLoading}
              >
                {" "}
              </Card>
            ) : (
              <Card
                title="Chart Test"
                // extra={<a href="#">More</a>}
                style={{
                  // width: "300px",
                  width: "50%",
                  borderRadius: "1.25rem",
                  boxShadow:
                    "rgba(255, 255, 255, 0.9) 0rem 0rem 0.0625rem 0.0625rem inset, rgba(0, 0, 0, 0.05) 0rem 1.25rem 1.6875rem 0rem",
                  backdropFilter: "blur(2.625rem)",
                }}
              >
                <Pie data={data} />
              </Card>
            )}
          </Flex>
        </Layout>
      </Layout>
    </Flex>
  );
};

export default App2;
