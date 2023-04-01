import React from "react";
import styled from "styled-components";
import { Colors } from "../../assets/styles";
import NavBar from "../../components/Desktop/navbar";
// import Footer from "../../components/Desktop/Footer";
import Chats from "../../components/Desktop/chats";
import left from "../../assets/svg/left_arrow.svg";
import { useNavigate } from "react-router";

const PageWrapper = styled.div`
  margin-left: 10vw;
  margin-right: 10vw;
`;

const PageBody = styled.div`
  width: 100%;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  height: fit-content;
  margin: 10px 0px 10vh 0px;
`;

const AdvertButtonWrapper = styled.div`
  background-color: ${Colors.WHITE};
  color: ${Colors.PRIMARY_DEEP};
  padding: 10px 15px;
  font-family: Montserrat;
  border-radius: 10px;
`;

const AdCapsuleWrapper = styled.div`
  //   margin-top: 15vh;
  width: 35%;
  background-color: ${Colors.DIRTY_GREEN};
  height: 65vh;
  border-radius: 0px 15px 15px 0px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const NavigatorWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const Navigator = styled.div`
  width: 60%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const ChatPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <PageWrapper>
        <NavBar />
      </PageWrapper>
      <NavigatorWrapper>
        <div style={{ width: "40%" }}></div>
        <Navigator>
          <img src={left} alt="left-arrow" />
          <div
            style={{
              fontFamily: "Montserrat",
              fontWeight: "700",
              fontSize: "1rem",
              padding: "0px 10px",
              cursor: "pointer"
            }}
            onClick={() => {
              navigate(-1);
            }}
          >
            Go Back
          </div>
          <div
            style={{
              padding: "0px 15px ",
              fontWeight: "900",
              fontFamily: "Montserrat",
            }}
          >
            Active Chats (3)
          </div>
        </Navigator>
      </NavigatorWrapper>
      <PageBody>
        <AdCapsuleWrapper>
          <img
            src={require("../../assets/man_hair.png")}
            alt="ads"
            style={{ height: "65vh", width: 300 }}
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
                width: "30%",
                fontFamily: "Montserrat",
                fontSize: "2rem",
                padding: 10,
              }}
            >
              Find the style that fits YOU!
            </div>
            <AdvertButtonWrapper> Go to Fashion</AdvertButtonWrapper>
          </div>
        </AdCapsuleWrapper>
        <Chats />
      </PageBody>

      {/* <Footer /> */}
    </>
  );
};

export default ChatPage;
