/* eslint-disable */

import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { Colors } from "../../assets/styles";
import image from "../../assets/profile.png";
import { useNavigate } from "react-router";
import { LoginContext } from "../../loginContext";
import Swal from "sweetalert2";

const Chat = () => {
    const navigate = useNavigate();
    const { user } = useContext(LoginContext)
    useEffect(()=>{
        if(user.fullname === ""){
          navigate("/sign-in");
          Swal.fire({
            icon:"info",
            title:"Oops 😟",
            text:"You have to sign up or login to your account to view chats on OJA"
          })
        }
    },[user]);


  return (
    <>
      <ChatWrapper>
        <ChatItems>
          <ImageWrapper>
            <img src={image} alt="chat-head" width={"100%"} height={"100%"} />
          </ImageWrapper>
          <ChatContent
            onClick={() => {
              navigate("/chat?name=Sunkanmi Adewumi/jashdjasjidjiasd");
            }}
          >
            <ChatHead>Adewumi Sunkanmi</ChatHead>
            <ChatBody>
              We’re sorry to inform you that your item has been taken . . .
            </ChatBody>
          </ChatContent>
        </ChatItems>
        <LineBreak />
        <ChatItems>
          <ImageWrapper>
            <img src={image} alt="chat-head" width={"100%"} height={"100%"} />
          </ImageWrapper>
          <ChatContent
            onClick={() => {
              navigate("/chat?name=Sunkanmi Adewumi/jashdjasjidjiasd");
            }}
          >
            <ChatHead>Adewumi Sunkanmi</ChatHead>
            <ChatBody>
              We’re sorry to inform you that your item has been taken . . .
            </ChatBody>
          </ChatContent>
        </ChatItems>
        <LineBreak />
        <ChatItems>
          <ImageWrapper>
            <img src={image} alt="chat-head" width={"100%"} height={"100%"} />
          </ImageWrapper>
          <ChatContent
            onClick={() => {
              navigate("/chat?name=Sunkanmi Adewumi/jashdjasjidjiasd");
            }}
          >
            <ChatHead>Adewumi Sunkanmi</ChatHead>
            <ChatBody>
              We’re sorry to inform you that your item has been taken . . .
            </ChatBody>
          </ChatContent>
        </ChatItems>
        <LineBreak />
        <ChatItems>
          <ImageWrapper>
            <img src={image} alt="chat-head" width={"100%"} height={"100%"} />
          </ImageWrapper>
          <ChatContent
            onClick={() => {
              navigate("/chat?name=Sunkanmi Adewumi/jashdjasjidjiasd");
            }}
          >
            <ChatHead>Adewumi Sunkanmi</ChatHead>
            <ChatBody>
              We’re sorry to inform you that your item has been taken . . .
            </ChatBody>
          </ChatContent>
        </ChatItems>
        <LineBreak />
        <ChatItems>
          <ImageWrapper>
            <img src={image} alt="chat-head" width={"100%"} height={"100%"} />
          </ImageWrapper>
          <ChatContent
            onClick={() => {
              navigate("/chat?name=Sunkanmi Adewumi/jashdjasjidjiasd");
            }}
          >
            <ChatHead>Adewumi Sunkanmi</ChatHead>
            <ChatBody>
              We’re sorry to inform you that your item has been taken . . .
            </ChatBody>
          </ChatContent>
        </ChatItems>
        <LineBreak />
        <ChatItems>
          <ImageWrapper>
            <img src={image} alt="chat-head" width={"100%"} height={"100%"} />
          </ImageWrapper>
          <ChatContent
            onClick={() => {
              navigate("/chat?name=Sunkanmi Adewumi/jashdjasjidjiasd");
            }}
          >
            <ChatHead>Adewumi Sunkanmi</ChatHead>
            <ChatBody>
              We’re sorry to inform you that your item has been taken . . .
            </ChatBody>
          </ChatContent>
        </ChatItems>
        <LineBreak />
        <ChatItems>
          <ImageWrapper>
            <img src={image} alt="chat-head" width={"100%"} height={"100%"} />
          </ImageWrapper>
          <ChatContent
            onClick={() => {
              navigate("/chat?name=Sunkanmi Adewumi/jashdjasjidjiasd");
            }}
          >
            <ChatHead>Adewumi Sunkanmi</ChatHead>
            <ChatBody>
              We’re sorry to inform you that your item has been taken . . .
            </ChatBody>
          </ChatContent>
        </ChatItems>
        <LineBreak />
      </ChatWrapper>
    </>
  );
};

const ChatWrapper = styled.div`
  background-color: ${Colors.GREY};
  height: 60vh;
  overflow-y: scroll;
  padding: 10px;
  margin: 10px;
  border-radius: 8px;
`;

const ChatItems = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ImageWrapper = styled.div`
  border-radius: 50%;
  width: 100px;
  height: 50px;
`;

const ChatContent = styled.div`
  font-family: Montserrat;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: stretch;
  padding: 0px 5px 0px 10px;
`;
const ChatHead = styled.div`
  font-family: Montserrat;
  font-weight: 800;
`;
const ChatBody = styled.div`
  font-family: Montserrat;
`;

const LineBreak = styled.div`
  height: 2px;
  width: 90%;
  margin: 5%;
  background-color: ${Colors.WHITE};
  font-weight: 900;
`;
export default Chat;
