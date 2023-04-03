/* eslint-disable */

import React from "react";
import styled from "styled-components";
// import { Doughnut, Line } from "react-chartjs-2";
import ReactApexChart from "react-apexcharts";
import ApexCharts from "apexcharts";

const options = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  labels: [
    "AUTOMOBILE",
    "LANDED PROPERTIES",
    "PHONES, COMPUTERS AND ACCESSORIES",
    "ELECTRONICS AND ACCESSORIES",
    "MEDICALS / COSMETICS / BEAUTIES",
    "SPORTS",
    "FASHION",
    "KIDDIES / BABIES",
    "HOME DECORS",
    "ANIMALS / LIVESTOCK / AGRICULTURE",
    "GROCERIES / BREWERIES",
    "SERVICES",
    "FACTORY / INDUSTRIAL / CONSTRUCTIONS",
  ],
  colors: [
    "#feb019",
    "#DB0000",
    "#FEB52E",
    "#de8423",
    "#de4a14",
    "#e6b335",
    "#5c3d11",
    "#8a6058",
    "#003C0D33",
    "#003C11",
    "#08003C",
    "#00313C",
    "#3C0300",
  ],
  legend: {
    position: "right",
  },
  dataLabels: {
    enabled: true,
    position: "bottom",
  },
};

const series = [10, 8, 6, 3, 0, 0, 12, 0, 2, 1, 0, 2, 4];
// import {
//   Chart,
//   LineController,
//   LineElement,
//   PointElement,
//   LinearScale,
//   Title,
//   CategoryScale,
// } from "chart.js";
// Chart.register(
//   LineController,
//   LineElement,
//   PointElement,
//   LinearScale,
//   Title,
//   CategoryScale
// );

// import { CategoryScale, Chart } from "chart.js";

// import {
//   Chart as ChartJS,
//   LineController,
//   CategoryScale,
//   ArcElement,
//   LineElement,
//   PointElement,
//   LinearScale,
//   Title,
// } from "chart.js";

// ChartJS.register(
//   LineController,
//   LineElement,
//   PointElement,
//   LinearScale,
//   CategoryScale,
//   ArcElement,
//   Title
// );

const Metrics = () => {
  return (
    <>
      <Header>Overall Metrics</Header>
      <div
        style={{
          fontFamily: "Montserrat",
          fontWeight: 800,
          width: "100%",
          textAlign: "center",
          fontSize: "1.5rem",
        }}
      >
        Products
      </div>
      <Wrapper>
        <ReactApexChart
          options={options}
          series={series}
          type="pie"
          height={350}
        />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 100%;
  padding: 10px;
`;
const Header = styled.div`
  margin-top: 15vh;
  width: 100%;
  font-family: Montserrat;
  font-weight: 800;
  font-size: 1.5rem;
  text-align: center;
`;
export default Metrics;
