import React from "react";
import styled from "styled-components";
import { Colors } from "../../assets/styles";
import chat from "../../assets/svg/chat.svg";

const FloatingActionButton = () => {
  return (
    <>
      <Wrapper>
        <img src={chat} alt="chat" height={50} width={50} />
        <Text> Live Chat</Text>
      </Wrapper>
    </>
  );
};

const Text = styled.span`
  color: ${Colors.PRIMARY_DEEP};
  font-family: Montserrat;
  font-weight: 700;
  font-size: 1.5rem;
`;

const Wrapper = styled.div`
  width: 14%;
  background: ${Colors.WHITE};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 15px;
  border: 3px solid ${Colors.PRIMARY_DEEP};
  box-shadow: 0px 4px 36px rgba(0, 0, 0, 0.25);
  padding: 10px;
  position: fixed;
  bottom: 10px;
  right: 10vw;
`;

export default FloatingActionButton;
