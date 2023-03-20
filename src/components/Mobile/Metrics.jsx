import React from "react";
import styled from "styled-components";
import { Doughnut, Line } from "react-chartjs-2";
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

import {
  Chart as ChartJS,
  LineController,
  CategoryScale,
  ArcElement,
  LineElement,
  PointElement,
  LinearScale,
  Title,
} from "chart.js";

ChartJS.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  ArcElement,
  Title
);

const Metrics = () => {
  return (
    <>
      <Header>Overall Metrics</Header>
      <Wrapper>
        <Line
          data={{
            labels: [
              "Jan",
              "Feb",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "Sept",
              "Oct",
              "Nov",
              "Dec",
            ],
            datasets: [
              {
                label: "Products Posted",
                data: [10, 12, 1, 0, 78, 20, 11, 3, 4, 90, 89, 2],
                backgroundColor: "#08003C",
                borderColor: "#08003C",
                borderWidth: 1,
              },
            ],
          }}
          height={200}
          width={200}
          options={{
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  ticks: { beginAtZero: true },
                },
              ],
            },
          }}
        />
      </Wrapper>
      <div
        style={{
          fontFamily: "Montserrat",
          fontWeight: 800,
          width: "100%",
          textAlign: "center",
          fontSize: "1.5rem",
        }}
      >
        Users
      </div>
      <Wrapper>
        <Doughnut
          data={{
            labels: ["Users", "No-Users"],
            datasets: [
              {
                label: "Users",
                data: [10, 0],
                backgroundColor: ["#08003C", "#FFFFFF"],
                borderColor: "#ffffff",
                borderWidth: 1,
              },
            ],
          }}
          height={200}
          width={200}
          options={{
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  ticks: { beginAtZero: true },
                },
              ],
            },
          }}
        />
      </Wrapper>
      <div
        style={{
          fontFamily: "Montserrat",
          fontWeight: 800,
          width: "100%",
          textAlign: "center",
          fontSize: "1.5rem",
        }}
      >
        Categories
      </div>
      <Wrapper>
        <Line
          data={{
            labels: [
              "Jan",
              "Feb",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "Sept",
              "Oct",
              "Nov",
              "Dec",
            ],
            datasets: [
              {
                label: "Products Posted",
                data: [0, 0, 30, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: "#08003C",
                borderColor: "#08003C",
                borderWidth: 1,
              },
            ],
          }}
          height={200}
          width={200}
          options={{
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  ticks: { beginAtZero: true },
                },
              ],
            },
          }}
        />
      </Wrapper>

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
        <Doughnut
          data={{
            labels: ["Products", "No-Products"],
            datasets: [
              {
                label: "Products Posted",
                data: [10, 0],
                backgroundColor: ["#08003C", "#FFFFFF"],
                borderColor: "#ffffff",
                borderWidth: 1,
              },
            ],
          }}
          height={200}
          width={200}
          options={{
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  ticks: { beginAtZero: true },
                },
              ],
            },
          }}
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
