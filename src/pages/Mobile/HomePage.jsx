import React from "react";
import styled from "styled-components";
import AdvertBanner from "../../components/Mobile/Advertbanner";
// import Footer from "../../components/Mobile/footer";
import NavBar from "../../components/Mobile/navbar";
import ProductListing from "../../components/Mobile/productlisting";

const HomePage = () => {
  return (
    <>
      <PageWrapper>
        <NavBar />
      </PageWrapper>
      <AdvertBanner />
      <ProductListing />
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
export default HomePage;
