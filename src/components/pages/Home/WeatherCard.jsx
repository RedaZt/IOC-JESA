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
} from "antd";
import { Typography } from "antd";
import "../../../css/components/pages/Home/WeatherCard.css";

// visualcrossing.com/weather/weather-data-services account: wi.lli.am.fda.n.iel.l717@googlemail.com
// visualcrossing.com/weather/weather-data-services account: s.ara.hs.ag.ar.e.n.o@googlemail.com
// visualcrossing.com/weather/weather-data-services account: p.ar.islowe.r.y1.86@gmail.com

const { Title } = Typography;

const weatherConditions = {
  "Mostly sunny": "/svg/a_1_sunny.svg",
  "Partially sunny": "/svg/a_2_little_sunny.svg",
  "Partially cloudy": "/svg/b_1_partly_cloudy.svg",
  "Mostly cloudy": "/svg/b_3_very_cloudy.svg",
  Cloudy: "/svg/b_2_cloudy.svg",
  Hazy: "/svg/d_4_fog.svg",
  Thunderstorm: "/svg/c_3_thunderstorm.svg",
  Rain: "/svg/c_1_rainy.svg",
  Sleet: "/svg/c_2_heavy_rain.svg",
};

function capitalizeTxt(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

async function getWeather() {
  try {
    const res = await fetch(
      // "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/casablanca?unitGroup=us&key=UJD43NQB8XKRQT9X8CQSVMU8Q&contentType=json"
      "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/casablanca?unitGroup=us&key=3SU46A3LWKXMM8ZP93A5SYTWN&contentType=json"
      // "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/casablanca?unitGroup=us&key=KCYWW8ZNPYJUET284B8SBL937&contentType=json"
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
  let [isLoading, setIsLoading] = useState(true);
  const [weatherInfos, setWeatherInfos] = useState({
    city: null,
    temperature: null,
    condition: null,
  });
  useEffect(() => {
    getWeather()
      .then((data) => {
        if (data) {
          const weather = {
            city: data.address,
            temperature: data.currentConditions.temp,
            condition: data.currentConditions.conditions,
          };
          console.log(weather);
          setWeatherInfos(weather);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      getWeather()
        .then((data) => {
          if (data) {
            const weather = {
              city: data.address,
              temperature: data.currentConditions.temp,
              condition: data.currentConditions.conditions,
            };
            console.log(weather);
            setWeatherInfos(weather);
            setIsLoading(false);
          }
        })
        .catch((error) => {
          console.error("Error fetching weather data:", error);
        });
    }, 3600 * 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <Card
      title="Weather"
      style={{
        width: "100%",
        height: "100%",
        borderRadius: "1.25rem",
      }}
      bodyStyle={{
        height: "80%",
        display: "flex",
        // flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* <div class="wrapper"> */}
      {isLoading ? (
        <Spin tip="Loading" size="large" />
      ) : (
        <>
          <Flex style={{ flexDirection: "column", padding: "20px" }}>
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
              src={weatherConditions[weatherInfos.condition]}
              width={150}
              // height={200}
              // width={"100%"}
              style={{ border: "none" }}
            ></iframe>
          </Flex>
        </>
      )}
    </Card>
  );
}

export default WeatherCard;
