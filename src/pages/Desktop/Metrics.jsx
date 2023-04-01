/* eslint-disable */

import React from "react";
// import Footer from "../../../components/Desktop/Footer";
import styled from "styled-components";
import Metrics from "../../components/Desktop/Metrics";
import NavBar from "../../components/Desktop/navbar";

const PageWrapper = styled.div`
  padding: 0vh 10vw;
`;

const MetricsAdmin = () => {
  return (
    <>
      <PageWrapper>
       <NavBar />
      </PageWrapper>
      <Metrics />
      {/* <Footer /> */}
    </>
  );
};

export default MetricsAdmin;
