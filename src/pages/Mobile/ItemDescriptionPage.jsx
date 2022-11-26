import React from "react";
import styled from "styled-components";
import NavBar from "../../components/Mobile/navbar";
import Footer from "../../components/Mobile/footer";
import man_hair from "../../assets/man_hair.png";
import Advert from "../../components/Mobile/advert";
import { Colors } from "../../assets/styles";
import ItemDescription from "../../components/Mobile/ItemDescription";

const ItemDescriptionPage = () => {
  return (
    <>
      <PageWrapper>
        <NavBar />
      </PageWrapper>
      <ItemDescription />
      <Advert
        background={Colors.DIRTY_GREEN}
        text={"Find the style that fits YOU!"}
        image={man_hair}
        button={"Go to fashion"}
        orientation={false}
      />
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

export default ItemDescriptionPage;
