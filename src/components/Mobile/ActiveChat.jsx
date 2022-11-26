import React from "react";
import styled from "styled-components";
import { Colors } from "../../assets/styles";
import profile from "../../assets/profile.png";
import sender from "../../assets/sender.png";
import reciever from "../../assets/reciever.png";

const ActiveChats = () => {
  return (
    <>
      <ActiveChatWrapper>
        <ChatHead>
          <HeadLeftContent>
            <img
              src={profile}
              alt="profile-chat"
              width={"50px"}
              height={"50px"}
            />
            <ChatName>Adewunmi Sunkanmi</ChatName>
          </HeadLeftContent>
          <HeadRightContent>-Toyota Corolla 1996</HeadRightContent>
        </ChatHead>
        <Divider />
        <ChatMessageWrapper>
          <SenderChatWrapper>
            Hello, Please is this car still available?
            <SenderChatAngle src={sender} alt="sender" />
          </SenderChatWrapper>
          <SenderTimeStamp>Mon, 9:00pm</SenderTimeStamp>
          <SenderChatWrapper>
            Hello, Please is this car still available?
            <SenderChatAngle src={sender} alt="sender" />
          </SenderChatWrapper>
          <SenderTimeStamp>Mon, 9:01pm</SenderTimeStamp>
          <RecieverChatWrapper>
            Yes, It's still very much available.
            <RecieverChatAngle src={reciever} alt="reciever" />
          </RecieverChatWrapper>
          <RecieverTimeStamp>Tue, 12:00am</RecieverTimeStamp>
        </ChatMessageWrapper>
        <Divider />
        <SendBox>
          <SendInput placeholder="Type Message Here..."></SendInput>
          <SendButton>Send</SendButton>
        </SendBox>
      </ActiveChatWrapper>
    </>
  );
};

const ActiveChatWrapper = styled.div`
  border-radius: 8px;
  background: ${Colors.GREY};
  width: 90%;
  margin: 5%;
  height: fit-content;
  padding: 10px 0px;
`;

const ChatMessageWrapper = styled.div`
  background: transparent;
  height: 45vh;
  overflow-y: scroll;
  width: 100%;
`;

const ChatHead = styled.div`
  width: 100%;
  padding: 10px 0px 0px 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Divider = styled.div`
  height: 2px;
  width: 80%;
  margin: 10%;
  background: ${Colors.WHITE};
`;

const HeadLeftContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 50%;
`;

const HeadRightContent = styled.div`
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  background: ${Colors.DIRTY_GREEN};
  padding: 15px;
  height: stretch;
  font-family: Montserrat;
  color: white;
  width: 45%;
  font-size: 0.6rem;
`;

const ChatName = styled.div`
  font-family: Montserrat;
  font-size: 0.6rem;
  font-weight: 900;
`;

const SenderChatWrapper = styled.div`
  float: left;
  max-width: 60%;
  width: fit-content;
  font-family: Montserrat;
  background: white;
  font-style: italics;
  padding: 10px;
  border-radius: 8px;
  font-size: 0.8rem;
  position: relative;
  margin: 10px 0px 0px 10px;
`;
const SenderChatAngle = styled.img`
  bottom: 0px;
  left: -5px;
  width: 20px;
  height: 20px;
  position: absolute;
`;

const SenderTimeStamp = styled.div`
  width: 40%;
  float: left;
  font-family: Montserrat;
  font-weight: 900;
  padding: 5px 10px;
  font-size: 0.6rem;
  color: ${Colors.PRIMARY};
  text-align: left;
`;

const RecieverChatWrapper = styled.div`
  float: right;
  max-width: 60%;
  width: fit-content;
  font-family: Montserrat;
  background: ${Colors.SENDER_CHAT};
  font-style: italics;
  padding: 10px;
  border-radius: 8px;
  font-size: 0.8rem;
  position: relative;
  margin: 10px 10px 0px 0px;
  color: white;
`;
const RecieverChatAngle = styled.img`
  bottom: 0px;
  right: -5px;
  width: 20px;
  height: 20px;
  position: absolute;
`;
const RecieverTimeStamp = styled.div`
  width: 40%;
  float: right;
  font-family: Montserrat;
  font-weight: 900;
  padding: 5px 10px;
  font-size: 0.6rem;
  color: ${Colors.PRIMARY};
  text-align: right;
`;

const SendBox = styled.div`
  width: 90%;
  margin: 5%;
  border-radius: 8px;
  background: white;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const SendButton = styled.div`
  color: white;
  background: ${Colors.DIRTY_GREEN};
  padding: 10px 20px;
  text-align: center;
  font-family: Montserrat;
  font-weight: 900;
  border-radius: 8px;
`;

const SendInput = styled.textarea`
  font-family: Montserrat;
  padding: 5px 5px;
  border: 1px solid white;
  &:focus {
    outline: none;
  }
`;

export default ActiveChats;
