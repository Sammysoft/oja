import React from "react";
import styled from "styled-components";
import Favourites from "../../components/Mobile/Favourites";
import Footer from "../../components/Mobile/footer";
import NavBar from "../../components/Mobile/navbar";

const FavouritePage = () => {
  return (
    <>
      <PageWrapper>
        <NavBar />
      </PageWrapper>
      <Favourites />
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
export default FavouritePage;
