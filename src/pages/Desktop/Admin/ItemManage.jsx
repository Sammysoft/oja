/* eslint-disable */

import React from "react";
import Footer from "../../../components/Desktop/Footer";
import NavBar from "../../../components/Desktop/navbar";
import styled from "styled-components";
import ItemManageList from "../../../components/Desktop/ItemManageList";

const PageWrapper = styled.div`
  padding: 0vh 10vw;
`;

const ItemManage = () => {
  return (
    <>
      <PageWrapper>
        <NavBar />
      </PageWrapper>
       <ItemManageList />
      <Footer />
    </>
  );
};

export default ItemManage;
