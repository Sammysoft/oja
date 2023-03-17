/* eslint-disable */

import React from "react";
import NavBar from "../../../components/Desktop/navbar";
import styled from "styled-components";
import Footer from "../../../components/Desktop/Footer";
import DashboardComponent from "../../../components/Desktop/Dashboard";



const Dashboard = () => {
  return (
    <>
      <PageWrapper>
        <NavBar />
      </PageWrapper>
        <DashboardComponent />
      <Footer />
    </>
  );
};

const PageWrapper = styled.div`
  margin-left: 10vw;
  margin-right: 10vw;
`;


export default Dashboard;
