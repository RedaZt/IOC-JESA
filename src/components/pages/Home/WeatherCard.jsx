import React, { useEffect, useState } from "react";
import {
  theme,
  Flex,
  Layout,
  Card,
  Progress,
  Divider,
  Row,
  Col,
  Statistic,
  Segmented,
  Spin,
  Input,
} from "antd";
import { Typography } from "antd";
import "../../../css/components/pages/Home/WeatherCard.css";

// visualcrossing.com/weather/weather-data-services account: wi.lli.am.fda.n.iel.l717@googlemail.com
// visualcrossing.com/weather/weather-data-services account: s.ara.hs.ag.ar.e.n.o@googlemail.com
// visualcrossing.com/weather/weather-data-services account: p.ar.islowe.r.y1.86@gmail.com

const { Search } = Input;

const weatherConditions = {
  snow: "/svg/weather svgs/d_1_snow.svg",
  rain: "/svg/weather svgs/c_1_rainy.svg",
  fog: "/svg/weather svgs/d_4_fog.svg",
  windy: "/svg/weather svgs/f_4_very_windy.svg",
  cloudy: "/svg/weather svgs/b_2_cloudy.svg",
  "partly-cloudy-day": "/svg/weather svgs/b_1_partly_cloudy.svg",
  "partly-cloudy-night": "/svg/weather svgs/b_4_cloudy_night.svg",
  "clear-day": "/svg/weather svgs/a_1_sunny.svg",
  "clear-night": "/svg/weather svgs/a_4_night.svg",
};

function capitalizeTxt(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

async function getWeather(selectedLocation) {
  try {
    const res = await fetch(
      // `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${selectedLocation.toLowerCase()}?unitGroup=us&key=UJD43NQB8XKRQT9X8CQSVMU8Q&contentType=json`
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${selectedLocation.toLowerCase()}?unitGroup=us&key=3SU46A3LWKXMM8ZP93A5SYTWN&contentType=json`
      // `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${selectedLocation.toLowerCase()}?unitGroup=us&key=KCYWW8ZNPYJUET284B8SBL937&contentType=json`
    );
    const data = await res.json();
    // console.log(data);
    // const weatherInfo = {
    //   city: data.address,
    //   temperature: data.currentConditions.temp,
    //   condition: data.currentConditions.conditions,
    // };
    return data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null;
  }
}

function WeatherCard() {
  const [weatherInfos, setWeatherInfos] = useState(null);
  const [daysWeather, setDaysWeather] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState("casablanca");

  const onSearch = (value, _e, info) => {
    setWeatherInfos(null);
    setSelectedLocation(value);
  };

  useEffect(() => {
    getWeather(selectedLocation)
      .then((data) => {
        setWeatherInfos(null);
        if (data) {
          const weather = {
            city: data.address,
            temperature: data.currentConditions.temp,
            condition: data.currentConditions.conditions,
            icon: data.currentConditions.icon,
          };
          // console.log(weather);
          setWeatherInfos(weather);
          setDaysWeather(data.days.slice(1, 5));
        } else {
          const weather = "No data";
          setWeatherInfos(weather);
        }
        // setWeatherInfos(weather);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  }, [selectedLocation]);

  return (
    <Card
      className="weather-card"
      // title="Weather"
      style={{
        width: "100%",
        height: "100%",
        borderRadius: "1.25rem",
      }}
      bodyStyle={{
        height: "100%",
        display: "flex",
        // flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      {/* <div class="wrapper"> */}
      {!weatherInfos ? (
        <Spin className="weather-spin" tip="Loading" size="large" />
      ) : weatherInfos === "No data" ? (
        <Row>
          <Col span={24} style={{ padding: "0 15px" }}>
            <Search placeholder="Choose Location" onSearch={onSearch} />
          </Col>
          <Col
            span={24}
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Flex style={{ padding: "15px", alignItems: "center" }}>
              <h1 style={{ paddingLeft: "5px" }}>
                Something Went Wrong, Please Try Again
              </h1>
              <iframe
                className="frame"
                src="/svg/weather svgs/e_1_temperature.svg"
                width={150}
                // height={200}
                // width={"100%"}
                style={{ border: "none", paddingRight: "-5px" }}
              ></iframe>
            </Flex>
          </Col>
        </Row>
      ) : (
        <Row>
          <Col span={24} style={{ padding: "0 15px" }}>
            <Search placeholder="Choose Location" onSearch={onSearch} />
          </Col>
          <Col
            span={24}
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Flex
              style={{
                flexDirection: "column",
                padding: " 10px 20px",
              }}
            >
              <h2>{capitalizeTxt(weatherInfos.city)}</h2>
              <h1 style={{ fontSize: 40 }}>
                {`${
                  Math.round((((weatherInfos.temperature - 32) * 5) / 9) * 10) /
                  10
                } °C`}
              </h1>
              <h1>{weatherInfos.condition}</h1>
            </Flex>
            <Flex>
              <iframe
                className="frame"
                src={weatherConditions[weatherInfos.icon]}
                width={150}
                // height={200}
                // width={"100%"}
                style={{ border: "none" }}
              />
            </Flex>
          </Col>
          {/* <Divider /> */}
          <Col
            span={24}
            style={{
              // padding: "0 15px",
              // display: "flex",
              height: "100%",
              // maxwidth: "60px",
              // border: "1px solid red",
            }}
          >
            <Row gutter={7} style={{ padding: "0 20px" }}>
              {daysWeather.map((item, index) => (
                <Col key={`day-${index + 1}`} span={6}>
                  <Flex
                    style={{
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "10px 0px",
                      border: "2px solid #f0f0f0",
                      borderRadius: "1.25rem",
                    }}
                  >
                    <h5>{`${item.datetime.split("-")[2]}-${
                      item.datetime.split("-")[1]
                    }`}</h5>
                    <iframe
                      className="mini-frame"
                      src={weatherConditions[item.icon]}
                      width={50}
                      height={60}
                      // width={"100%"}
                      style={{ border: "none" }}
                    />
                    <h5>
                      {`${
                        Math.round((((item.temp - 32) * 5) / 9) * 10) / 10
                      } °C`}
                    </h5>
                  </Flex>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      )}
    </Card>
  );
}

export default WeatherCard;
