import React from "react";
import styled from "styled-components";
import NavBar from "../../../components/Mobile/navbar";
import Advert from "../../../components/Mobile/advert";
import { Colors } from "../../../assets/styles";
import man_hair from "../../../assets/man_hair.png";
import Footer from "../../../components/Mobile/footer";
import Users from "../../../components/Mobile/Users";

const UserList = () => {
  return (
    <>
      <PageWrapper>
        <NavBar />
      </PageWrapper>
      <UserPageWrapper>
        <Users />
      </UserPageWrapper>
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
width: 100%;
height: fit-content:
padding: 0px;
box-sizing: border-box;
`;



const UserPageWrapper = styled.div`
  width: 100%;
  height: fit-content;
  margin: 10vh 0px 0px 0px;
`;

export default UserList;
