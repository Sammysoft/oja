/* eslint-disable */

import React from "react";
import Footer from "../../../components/Desktop/Footer";
import NavBar from "../../../components/Desktop/navbar";
import styled from "styled-components";
import ItemApprovalList from "../../../components/Desktop/ItemApprovalList";

const PageWrapper = styled.div`
  padding: 0vh 10vw;
`;

const ItemApproval = () => {
  return (
    <>
      <PageWrapper>
        <NavBar />
      </PageWrapper>
        <ItemApprovalList />
      <Footer />
    </>
  );
};

export default ItemApproval;
