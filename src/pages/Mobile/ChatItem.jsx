import React from "react";
import Footer from "../../components/Mobile/footer";
import NavBar from "../../components/Mobile/navbar";
import left from "../../assets/svg/left_arrow.svg";
import { useNavigate } from "react-router";
import { Colors } from "../../assets/styles";
import Advert from "../../components/Mobile/advert";
import man_hair from "../../assets/man_hair.png";
import styled from "styled-components";
import ActiveChats from "../../components/Mobile/ActiveChat";

const ChatItem = () => {
    const navigate = useNavigate();
  return (
    <>
      <PageWrapper>
        <NavBar />
      </PageWrapper>
      <ChatPageWrapper>
        <Header>
          <span
            style={{
              fontFamily: "Montserrat",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <img
              src={left}
              alt="pointer"
              onClick={() => {
                navigate(-1);
              }}
              style={{ width: 40, height: 40 }}
            />{" "}
            back
          </span>
          <ActiveChat>Active Chats (5)</ActiveChat>
        </Header>
      </ChatPageWrapper>
      <ActiveChats />
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

const PageWrapper = styled.div`
width: 100%;
height: fit-content:
padding: 0px;
box-sizing: border-bpx;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 20px;
`;

const ActiveChat = styled.div`
  font-family: Montserrat;
  font-weight: 800;
  width: 80%;
  text-align: center;
`;

const ChatPageWrapper = styled.div`
  width: 100%;
  height: fit-content;
  margin: 10vh 0px 0px 0px;
`;

export default ChatItem;
