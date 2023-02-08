/* eslint-disable */

import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { Colors } from "../../assets/styles";
import sender from "../../assets/sender.png";
import reciever from "../../assets/reciever.png";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import { api } from "../../strings";
import { AuthContext } from "../../loginContext";

const ActiveChats = () => {
  const { getUser } = useContext(AuthContext);
  const location = useLocation();
  const [searchparams] = useSearchParams();
  const token = searchparams.get("token");
  const middle =
    location.pathname.split("_").pop().split("_")[0] +
    "?alt=media&token=" +
    token;

  const [message, setMessage] = useState("");
  const [chats, setChats] = useState([]);
  const localtoken = localStorage.getItem("oja-token");
  const navigate = useNavigate()

  const _sendMessage = () => {
    if (message === "" || message === null) {
      Swal.fire({
        text: "Please enter something",
        title: "Send a message",
      });
    } else {
      const payload = {
        id: getUser._id,
        profile: middle,
        fullname: searchparams.get("name"),
        sender: getUser.fullname,
        reciever: searchparams.get("name"),
        subject: searchparams.get("item"),
        message: message,
      };
      axios
        .post(`${api}/chat/send`, payload)
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          Swal.fire({
            title: "Error",
            text: error.response.data.data,
          });
        });
    }
  };

  const _formatDate = (val) => {
    let date = new Date(val);
    let month = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    return `${month[date.getDay()]} ${date.getDate()} ${date.getFullYear()}`;
  };

  useEffect(() => {
    if(!localtoken){
      navigate("/")
    }
    const payload = {
      sender: getUser.fullname,
      reciever: searchparams.get("name"),
      subject: searchparams.get("item"),
      message: message,
    };
    axios.post(`${api}/chat/get`, payload).then((res) => {
      setChats(res.data.data[0].chat);
    });
  }, [chats, localtoken]);

  return (
    <>
      <ActiveChatWrapper>
        <ChatHead>
          <HeadLeftContent>
            <ProfilePicture src={middle} alt="chat" />
            <ChatName>{searchparams.get("name")}</ChatName>
          </HeadLeftContent>
          <HeadRightContent>-{searchparams.get("item")}</HeadRightContent>
        </ChatHead>
        <Divider />
        <ChatMessageWrapper>
          {chats.map((chat, id) => {
            return (
              <>
                {chats.reciever === getUser.fullname ? (
                  <>
                    <SenderChatWrapper key={id}>
                      {chat.message}
                      <SenderChatAngle src={sender} alt="Sender" />
                    </SenderChatWrapper>
                    <SenderTimeStamp>
                      {_formatDate(chat.timestamp)}
                    </SenderTimeStamp>
                  </>
                ) : (
                  <>
                    <RecieverChatWrapper key={id}>
                      {chat.message}
                      <RecieverChatAngle src={reciever} alt="Reciever" />
                    </RecieverChatWrapper>
                    <RecieverTimeStamp>
                      {_formatDate(chat.timestamp)}
                    </RecieverTimeStamp>
                  </>
                )}
              </>
            );
          })}
         {/* {chats.map((val)=> console.log(val))} */}
        </ChatMessageWrapper>
        <Divider />
        <SendBox>
          <SendInput
            placeholder="Type Message Here..."
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          ></SendInput>
          <SendButton
            onClick={() => {
              _sendMessage();
              setMessage("");
            }}
          >
            Send
          </SendButton>
        </SendBox>
      </ActiveChatWrapper>
    </>
  );
};

const ProfilePicture = styled.img`
  border-radius: 50%;
  width: 50px;
  height: 50px;
`;

const ActiveChatWrapper = styled.div`
  border-radius: 8px;
  background: ${Colors.GREY};
  width: 90%;
  margin: 2% 5% 2% 5%;
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
  font-size: 0.8rem;
`;

const ChatName = styled.div`
  font-family: Montserrat;
  font-size: 0.8rem;
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
  width: 100%;
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
  width: 100%;
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
