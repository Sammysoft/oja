/* eslint-disable */

import React from "react";
import NavBar from "../../components/Desktop/navbar";
import styled from "styled-components";
import Footer from "../../components/Desktop/Footer";
import { Colors } from "../../assets/styles";
import plus_circle from "../../assets/svg/plus_circle.svg";
import chat_dot from "../../assets/svg/chat_dot_white.svg";
import person from "../../assets/svg/person.svg";
import logout from "../../assets/svg/logout.svg";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <PageWrapper>
        <NavBar />
      </PageWrapper>
      <PageBody>
        <AdCapsuleWrapper>
          <img
            src={require("../../assets/man_hair.png")}
            alt="ads"
            style={{ height: 500, width: 300 }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "space-between",
              height: "80%",
            }}
          >
            <div
              style={{
                color: Colors.WHITE,
                fontWeight: 900,
                width: "70%",
                fontFamily: "Montserrat",
                fontSize: "3rem",
                lineHeight:"3rem",
                padding: 10,
              }}
            >
              Find the style that fits YOU!
            </div>
            <AdvertButtonWrapper> Go to Fashion</AdvertButtonWrapper>
          </div>
        </AdCapsuleWrapper>
        <Choices>
          <ChoicesCard color={Colors.CHOCOLATE}>
            <img src={plus_circle} alt="plus" />
            <Link
              to="/item-list"
              style={{
                textDecorationLine: "none",
                color: "white",
                textDecoaration: "none",
                fontFamily: "Montserrat",
              }}
            >
              Upload / Manage your items
            </Link>
          </ChoicesCard>
          <ChoicesCard color={Colors.PRIMARY_DEEP}>
            <img src={chat_dot} alt="plus" />
            <Link
              style={{
                textDecorationLine: "none",
                color: "white",
                textDecoaration: "none",
                fontFamily: "Montserrat",
              }}
            >
              Chats (1 new)
            </Link>
          </ChoicesCard>
          <ChoicesCard color={Colors.DEEP_GREEN}>
            <img src={person} alt="chat" />
            <Link
              style={{
                textDecorationLine: "none",
                color: "white",
                textDecoaration: "none",
                fontFamily: "Montserrat",
              }}
            >
              Manage Profile
            </Link>
          </ChoicesCard>
          <ChoicesCard color={Colors.DIRTY_GREEN}>
            <img src={logout} alt="plus" />
            <Link
              style={{
                textDecorationLine: "none",
                color: "white",
                textDecoaration: "none",
                fontFamily: "Montserrat",
              }}
            >
              Logout
            </Link>
          </ChoicesCard>
        </Choices>
      </PageBody>
      <Footer />
    </>
  );
};

const PageWrapper = styled.div`
  margin-left: 10vw;
  margin-right: 10vw;
`;

const AdvertButtonWrapper = styled.div`
  background-color: ${Colors.WHITE};
  color: ${Colors.PRIMARY_DEEP};
  padding: 10px 15px;
  font-family: Montserrat;
  border-radius: 10px;
`;

const PageBody = styled.div`
  width: 100%;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  height: fit-content;
  margin: 10px 0px 10vh 0px;
`;

const AdCapsuleWrapper = styled.div`
  //   margin-top: 15vh;
  width: 35%;
  background-color: ${Colors.DIRTY_GREEN};
  //   height: 55vh;
  border-radius: 0px 15px 15px 0px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
const Choices = styled.div`
  width: 63%;
  padding: 20px;
  height: auto;
  display: grid;
  grid-template-columns: 40% 40%;
  align-items: flex-start;
  justify-content: center;
  gap: 10vh;
`;

const ChoicesCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  font-family: Montserrat;
  background-color: ${(props) => props.color};
  border-radius: 15px;
  height: 100%;
`;
export default Dashboard;
