import React from "react";
import styled from "styled-components";
import Footer from "../../../components/Mobile/footer";
import Metrics from "../../../components/Mobile/Metrics";
import NavBar from "../../../components/Mobile/navbar";
const MetricsPage = () => {
  return (
    <>
      <PageWrapper>
        <NavBar />
      </PageWrapper>
      <Metrics />
      <Footer />
    </>
  );
};

const PageWrapper = styled.div`
width: 100vw;
height: fit-content:
padding: 0px;
box-sizing: border-bpx;
`;
export default MetricsPage;
