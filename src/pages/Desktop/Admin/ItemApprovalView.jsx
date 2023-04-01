/* eslint-disable */

import React from "react";
// import Footer from "../../../components/Desktop/Footer";
import NavBar from "../../../components/Desktop/navbar";
import styled from "styled-components";
import ItemApproval from "../../../components/Desktop/ItemApprovalView";


const PageWrapper = styled.div`
  padding: 0vh 10vw;
`;

const ItemApprovalView= () => {
  return (
    <>
      <PageWrapper>
        <NavBar />
      </PageWrapper>
       <ItemApproval />
      {/* <Footer /> */}
    </>
  );
};

export default ItemApprovalView;
