/* eslint-disable */

import React from "react";
// import Footer from "../../../components/Desktop/Footer";
import NavBar from "../../../components/Desktop/navbar";
import styled from "styled-components";
import ListUsers from "../../../components/Desktop/ListUsers";

const PageWrapper = styled.div`
  padding: 0vh 10vw;
`;

const UsersList = () => {
  return (
    <>
      <PageWrapper>
        <NavBar />
      </PageWrapper>
       <ListUsers />
      {/* <Footer /> */}
    </>
  );
};

export default UsersList;
