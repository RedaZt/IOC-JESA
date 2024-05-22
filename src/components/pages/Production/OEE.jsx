import React, { useEffect, useState } from "react";
import { Flex, Divider, Progress, Card, Typography, Spin } from "antd";

const { Title } = Typography;

function OEE({ data }) {
  return (
    <Card
      // title="OEE"
      style={{
        display: "flex",
        height: "100%",
        width: "100%",
        borderRadius: "1.25rem",
      }}
      bodyStyle={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        width: "100%",
      }}
    >
      <Flex
        style={{
          height: "100%",
          width: "100%",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Flex
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Flex
            style={{
              width: "20%",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Progress
              key="OEE"
              type="dashboard"
              strokeColor="#1d3b7e"
              size={150}
              percent={Math.round(
                (data.Availability.data[9] *
                  data.Performance.data[9] *
                  data.Quality.data[9]) /
                  10_000
              )}
              gapDegree={50}
            />
            <Title
              level={4}
              style={{
                margin: 0,
              }}
            >
              OEE
            </Title>
          </Flex>
          <Divider type="vertical" style={{ height: 150 }} />
          <Flex
            style={{
              width: "50%",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <Flex
              style={{
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Progress
                key="Availability"
                type="dashboard"
                strokeColor="#1d3b7e"
                percent={data.Availability.data[9]}
                gapDegree={50}
              />
              <Title
                level={5}
                style={{
                  margin: 0,
                }}
              >
                Availability
              </Title>
            </Flex>
            <Flex
              style={{
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Progress
                key="Performance"
                type="dashboard"
                strokeColor="#1d3b7e"
                // size={150}
                percent={data.Performance.data[9]}
                gapDegree={50}
              />
              <Title
                level={5}
                style={{
                  margin: 0,
                }}
              >
                Performance
              </Title>
            </Flex>
            <Flex
              style={{
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Progress
                key="Quality"
                type="dashboard"
                strokeColor="#1d3b7e"
                // size={150}
                percent={data.Quality.data[9]}
                gapDegree={50}
              />
              <Title
                level={5}
                style={{
                  margin: 0,
                }}
              >
                Quality
              </Title>
            </Flex>
          </Flex>
        </Flex>
        {/* <Divider /> */}
        <Flex
          style={{
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "0 15px",
          }}
        >
          <Flex style={{ flexDirection: "column" }}>
            <Title
              level={4}
              style={{
                margin: 0,
              }}
            >
              Production Target
            </Title>
            <Progress
              percent={69}
              strokeColor="#1d3b7e"
              size={[, 20]}
              showInfo={false}
            />
          </Flex>
          <Flex
            style={{
              justifyContent: "space-between",
            }}
          >
            <Flex style={{ flexDirection: "column" }}>
              <Title
                level={2}
                style={{
                  margin: 0,
                }}
              >
                18630
              </Title>
              <Title
                level={5}
                style={{
                  margin: 0,
                }}
              >
                Actual Quantity
              </Title>
            </Flex>
            <Flex style={{ flexDirection: "column" }}>
              <Title
                level={2}
                style={{
                  margin: 0,
                }}
              >
                17510
              </Title>
              <Title
                level={5}
                style={{
                  margin: 0,
                }}
              >
                Projected Quantity
              </Title>
            </Flex>
            <Flex style={{ flexDirection: "column" }}>
              <Title
                level={2}
                style={{
                  margin: 0,
                }}
              >
                27000
              </Title>
              <Title
                level={5}
                style={{
                  margin: 0,
                }}
              >
                Target Quantity
              </Title>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
}

export default OEE;
