import React, { useEffect, useState, useContext } from "react";
import { RootContext } from "../store";
// import MainLayout from "../layouts/MainLayout";
// import Stat from "../components/common/Stat";
// import AICard from "../components/common/AICard";
// import Loader from "../components/common/Loader";
// import {
//   AssetsMap,
//   AssetsTable,
// } from "../components/pages/AssetsPerformance/AssetsInfos";
// import { theme, Flex, Layout, Card, Row, Col } from "antd";
// import { CheckCircleOutlined } from "@ant-design/icons";
// import {
//   Chart as ChartJS,
//   ArcElement,
//   BarElement,
//   CategoryScale,
//   LinearScale,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import { Line } from "react-chartjs-2";
// import "../css/pages/AssetsPerformance.css";

export function getMachineData() {
  const {
    dashboard: { activeTab: selectedView },
    dispatch,
  } = useContext(RootContext);
  const [machineData, setMachineData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchMachines = async () => {
      try {
        const url = "http://localhost:8000/machines";
        const queryParams = new URLSearchParams({ process: selectedView });
        const requestUrl = `${url}?${queryParams}`;
        const response = await fetch(requestUrl);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setMachineData(data);
      } catch (error) {
        console.error("Error fetching sustainability data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMachines();
  }, [selectedView]);

  return { loading, machineData };
}
