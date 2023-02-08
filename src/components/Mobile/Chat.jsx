/* eslint-disable */

import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Colors } from "../../assets/styles";
import { useNavigate } from "react-router";
import { AuthContext } from "../../loginContext";
import Swal from "sweetalert2";
import axios from "axios";
import { api } from "../../strings";

const Chat = () => {
  const navigate = useNavigate();
  const { getUser } = useContext(AuthContext);
  const token = localStorage.getItem("oja-token");
  const [chats, setChats] = useState([]);
  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token]);

  useEffect(() => {
    axios.post(`${api}/chat/view`, { sender: getUser.fullname }).then((res) => {
      console.log(res.data.data);
      setChats(res.data.data);
    });
  }, []);


  return (
    <>
      <ChatWrapper>
        {chats.map((chat, id) => {
          return (
            <>
              <ChatItems key={id}>
                <ImageWrapper>
                  <img
                    src={chat.chat[chat.chat.length - 1].sender.profile}
                    alt="chat-head"
                    width={"50px"}
                    height={"50px"}
                    style={{borderRadius: "50%"}}
                  />
                </ImageWrapper>
                <ChatContent
                  onClick={() => {
                    navigate(
                      `/chat/picture_${chat.chat[chat.chat.length - 1].sender.profile}_/?&name=${chat.chat[chat.chat.length - 1].sender.fullname}&item=${chat.subject}`
                    );
                  }}
                >
                  <ChatHead>{chat.reciever}</ChatHead>
                  <ChatBody>{chat.chat[chat.chat.length - 1].message}</ChatBody>
                </ChatContent>
              </ChatItems>
              <LineBreak />
            </>
          );
        })}
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
  justify-content: space-around;
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
  padding: 0px 5px 0px 5px;
  width: 80%;
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
