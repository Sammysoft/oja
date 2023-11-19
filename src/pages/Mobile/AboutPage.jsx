import React from "react";
import styled from "styled-components";
import About from "../../components/Mobile/About";
// import Footer from "../../components/Mobile/footer";
import NavBar from "../../components/Mobile/navbar";

const AboutPage = () => {
  return (
    <>
      <PageWrapper>
        <NavBar />
      </PageWrapper>
      <About />
      {/* <Footer /> */}
    </>
  );
};

const PageWrapper = styled.div`
width: 100vw;
height: fit-content:
padding: 0px;
box-sizing: border-bpx;
`;
export default AboutPage;
