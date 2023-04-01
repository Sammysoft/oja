import React from "react";
import styled from "styled-components";
import About from "../../components/Desktop/About";
// import Footer from "../../components/Desktop/Footer";
import NavBar from "../../components/Desktop/navbar";

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
  margin-left: 10vw;
  margin-right: 10vw;
`;
export default AboutPage;
