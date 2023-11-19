/* eslint-disable */

import React, { useEffect } from "react";
import styled from "styled-components";

const Message = ({ text, background, show, setShow }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 3000);

    return () => clearInterval(timer);
  }, [show]);

  return (
    <>
      {show === true ? (
        <MessageWrapper background={background}>
          <MessageText>{text}</MessageText>
        </MessageWrapper>
      ) : (
        <></>
      )}
    </>
  );
};

const MessageWrapper = styled.div`
  width: 100vw;
  position: fixed;
  text-align: center;
  font-family: Montserrat;
  top: 10vh;
  background-color: ${(props) => props.background};
  z-index: 9999;
`;

const MessageText = styled.div`
  color: white;
  text-align: center;
  font-family: Montserrat;
  padding: 10px;
  width: 100%;
  font-size: 1rem;
  font-weight: 800;
`;
export default Message;
