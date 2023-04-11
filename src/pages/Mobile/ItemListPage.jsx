import React from "react";
import styled from "styled-components";
import Footer from "../../components/Mobile/footer";
import NavBar from "../../components/Mobile/navbar";
import { Colors } from "../../assets/styles";
import man_hair from "../../assets/man_hair.png";
import Advert from "../../components/Mobile/advert";
import ItemList from "../../components/Mobile/ItemList";

const ItemListPage = () => {
  return (
    <>
      <PageWrapper>
        <NavBar />
      </PageWrapper>
      <ItemList />
      <br/><br/><br/>
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

export default ItemListPage;

const PageWrapper = styled.div`
width: 100vw;
height: fit-content:
padding: 0px;
box-sizing: border-bpx;
`;

