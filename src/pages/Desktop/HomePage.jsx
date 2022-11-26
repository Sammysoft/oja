import React from "react";
import NavBar from "../../components/Desktop/navbar";
import styled from "styled-components";
import HeadText from "../../components/Desktop/HeadText";
import AdvertBanner from "../../components/Desktop/AdvertBanner";
import { Adverts } from "../../assets/data";
import ProductListing from "../../components/Desktop/productlistings";
import FloatingActionButton from "../../components/Desktop/floating_action_button";
import LongAdvert from "../../components/Desktop/longAdvert";
import Footer from "../../components/Desktop/Footer";

const HomePage = () => {
  return (
    <>
      <PageWrapper>
        <FloatingActionButton />
        <NavBar />
        <HeadText />
        <AdvertBannerWrapper>
          <AdvertBanner adverts={Adverts} />
        </AdvertBannerWrapper>
      </PageWrapper>
      <ProductListing />
      <LongAdvert />
      <div
        style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}
      >
        <ProductListing right={true} />
      </div>
      <Footer />
    </>
  );
};

const PageWrapper = styled.div`
  margin-left: 10vw;
  margin-right: 10vw;
`;

const AdvertBannerWrapper = styled.div`
  margin-top: 3vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export default HomePage;
