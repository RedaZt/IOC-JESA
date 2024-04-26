import React, { useEffect, useState } from "react";

// Math.floor(Math.random() * (max - min + 1) + min)
// Object.keys(myObject).forEach(function(key, index) {
//   myObject[key] *= 2;
// });

export function getSustainabilityData() {
  const [sustainabilityData, setSustainabilityData] = useState([
    {
      title: "Carbon Footprint (CO2-e)",
      value: 192,
      unit: "MT CO2e",
    },
    {
      title: "Specific Electricity Consumption",
      value: 80,
      unit: "MWh",
    },
    {
      title: "Specific Water Consumption",
      value: 140,
      unit: "ML",
    },
    {
      title: "Specific Fuel Consumption",
      value: 67,
      unit: "ML",
    },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSustainabilityData((prevData) =>
        prevData.map((item) => ({
          ...item,
          // value: item.value + 1,
          value: item.value + Math.floor(Math.random() * (3 + 3 + 1) - 3),
        }))
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return sustainabilityData;
}

export function getProductivityChartData() {
  const productivityChartLabels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
  ];
  const [productivityChartData, setProductivityChartData] = useState({
    labels: productivityChartLabels,
    datasets: [
      {
        label: "Actual",
        data: [100, 50, 250, 200, 210, 230, 300, 290, 250, 200, 240],
        borderColor: "rgba(54, 162, 235)",
        backgroundColor: "rgba(54, 162, 235, 0.5)",
      },
      {
        label: "Target",
        data: [50, 100, 50, 150, 200, 220, 250, 300, 320, 300, 290],
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.5)",
      },
    ],
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setProductivityChartData((prevChartData) => ({
        ...prevChartData,
        datasets: prevChartData.datasets.map((dataset) => ({
          ...dataset,
          data: dataset.data.slice(-(prevChartData.labels.length - 1)).concat([
            dataset.data[prevChartData.labels.length - 1] +
              Math.floor(Math.random() * (30 + 10 + 1) - 10),
            // Math.floor(Math.random() * (15 + 15 + 1) - 15),
            // Math.floor(Math.random() * (max - min + 1) + min)
          ]),
          // data: prevChartData.labels.map((item) =>
          //   Math.floor(Math.random() * (350 - 50 + 1) + 50)
          // ),
        })),
      }));
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return productivityChartData;
}

export function getAssetsInfos() {
  const [assetsInfos, setAssetsInfos] = useState({ OAE: 98, OAA: 96 });

  useEffect(() => {
    const interval = setInterval(() => {
      setAssetsInfos((prevData) => {
        const newData = { ...prevData };
        Object.keys(newData).forEach(function (key, index) {
          newData[key] = Math.floor(Math.random() * (99 - 95 + 1) + 95);
        });
        return newData;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  // console.log(assetsInfos);
  return assetsInfos;
}
