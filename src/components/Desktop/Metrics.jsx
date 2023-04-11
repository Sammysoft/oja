/* eslint-disable */

import React, { useEffect } from "react";
import styled from "styled-components";
import ReactApexChart from "react-apexcharts";
import Chart from "react-apexcharts";
import ApexCharts from "apexcharts";
import axios from "axios";
import { api } from "../../strings";
import left from "../../assets/svg/left_arrow.svg";
import { useNavigate } from "react-router";

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

const Metrics = () => {
  const [count, setCount] = React.useState([]);
  const navigate = useNavigate()
  useEffect(() => {
    axios.get(`${api}/product/metrics/all`).then((res) => {
      console.log(res.data.data);
      setCount(res.data.data);
    });
  }, []);
  return (
    <>
      <div
        style={{
          width: "60%",
          alignItems: "center",
          display: "flex",
          cursor: "pointer",
          margin: "2vh",
        }}
        onClick={() => {
          navigate(-1);
        }}
      >
        <img src={left} alt="pointer" />
        <span style={{ fontFamily: "Montserrat", paddingLeft: "5px" }}>
          Go Back
        </span>
        <span
          style={{
            fontFamily: "Montserrat",
            paddingLeft: "20px",
            fontWeight: 900,
            fontSize: "1,5rem",
          }}
        >
          Admin Metrics
        </span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          height: "100vh",
          padding: "50px",
        }}
      >
        <div style={{ width: "49%", height: "100%" }}>
          <div
            style={{
              fontFamily: "Montserrat",
              fontWeight: 800,
              width: "100%",
              textAlign: "center",
              fontSize: "1.5rem",
              padding: "40px",
            }}
          >
            Monthly Product Upload
          </div>
          <Chart
            type="area"
            width={"100%"}
            height={"70%"}
            series={[
              {
                name: "Company",
                color: "#00002F",
                data: count,
              },
            ]}
            options={{
              dataLabels: {
                show: false,
              },
              xaxis: {
                tickPlacement: "on",
                categories: [
                  "Jan",
                  "Feb",
                  "Mar",
                  "April",
                  "May",
                  "June",
                  "July",
                  "Aug",
                  "Sept",
                  "Oct",
                  "Nov",
                  "Dec",
                ],
              },
              yaxis: {
                labels: {
                  formatter: (val) => {
                    return `${val}`;
                  },
                },
              },
              legend: {
                show: false,
              },
            }}
          />
        </div>
        <div style={{ width: "49%", height: "100%" }}>
          <div
            style={{
              fontFamily: "Montserrat",
              fontWeight: 800,
              width: "100%",
              textAlign: "center",
              fontSize: "1.5rem",
              padding: "40px",
            }}
          >
            Product Categories Overview
          </div>
          <Chart
            type="pie"
            width={"100%"}
            height={"100%"}
            series={[10, 8, 6, 3, 0, 0, 12, 0, 2, 1, 0, 2, 4]}
            options={{
              colors: [
                "#00002F",
                "#4545de",
                "#000000",
                "#08003C",
                "#00313C",
                "#D7D8CC",
                "#3C0300",
                "#F7F7F7",
                "#DD1919",
                "#003C11",
                "#003C0D33",
                "#00313C",
                "#4A5D62",
              ],
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
            }}
          />
        </div>
      </div>
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
