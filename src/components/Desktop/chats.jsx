import React from "react";
import styled from "styled-components";
import { Colors } from "../../assets/styles";
import profile1 from "../../assets/profile.png";
import profile from "../../assets/profile1.png";

const Wrapper = styled.div`
  background-color: ${Colors.GREY};
  height: 65vh;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  width: 60%;
`;
const ChatList = styled.div`
  width: 95%;
  height: 90%;
  margin: 10px 0px 10px 20px;
  overflow-y: scroll;
`;
const ChatWrapper = styled.div`
  padding: 10px 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 3px solid white;
  width: 90%;
  float: right;
`;

const ImageContainer = styled.div`
  cursor: pointer;
`;

const ChatContainer = styled.div`
  width: 100%;
`;

const Chats = () => {
  return (
    <>
      <Wrapper>
        <ChatList>
          <ChatWrapper>
            <ImageContainer>
              <img
                src={profile}
                alt="profile"
                style={{ borderRadius: "50%", width: "50px", height: "50px" }}
              />
            </ImageContainer>
            <ChatContainer>
              <div
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: "900",
                  fontSize: "1rem",
                  padding: "0px 10px",
                }}
              >
                Samuel Dare-Owonibi
              </div>
              <div
                style={{
                  fontFamily: "Montserrat",
                  fontStyle: "italic",
                  width: "100%",
                  padding: "10px",
                  fontSize: "0.6rem",
                }}
              >
                Please what’s the final price? Can you please make the price a
                little reduced? It’s quite on the high . . .
              </div>
            </ChatContainer>
          </ChatWrapper>
          <ChatWrapper>
            <ImageContainer>
              <img
                src={profile1}
                alt="profile"
                style={{ borderRadius: "50%", width: "50px", height: "50px" }}
              />
            </ImageContainer>
            <ChatContainer>
              <div
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: "900",
                  fontSize: "1rem",
                  padding: "0px 10px",
                }}
              >
                Abdulhazeez Razak
              </div>
              <div
                style={{
                  fontFamily: "Montserrat",
                  fontStyle: "italic",
                  width: "100%",
                  padding: "10px",
                  fontSize: "0.6rem",
                }}
              >
                Please what’s the final price? Can you please make the price a
                little reduced? It’s quite on the high . . .
              </div>
            </ChatContainer>
          </ChatWrapper>
          <ChatWrapper>
            <ImageContainer>
              <img
                src={profile}
                alt="profile"
                style={{ borderRadius: "50%", width: "50px", height: "50px" }}
              />
            </ImageContainer>
            <ChatContainer>
              <div
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: "900",
                  fontSize: "1rem",
                  padding: "0px 10px",
                }}
              >
                Samuel Dare-Owonibi
              </div>
              <div
                style={{
                  fontFamily: "Montserrat",
                  fontStyle: "italic",
                  width: "100%",
                  padding: "10px",
                  fontSize: "0.6rem",
                }}
              >
                Please what’s the final price? Can you please make the price a
                little reduced? It’s quite on the high . . .
              </div>
            </ChatContainer>
          </ChatWrapper>
          <ChatWrapper>
            <ImageContainer>
              <img
                src={profile1}
                alt="profile"
                style={{ borderRadius: "50%", width: "50px", height: "50px" }}
              />
            </ImageContainer>
            <ChatContainer>
              <div
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: "900",
                  fontSize: "1rem",
                  padding: "0px 10px",
                }}
              >
                Abdulhazeez Razak
              </div>
              <div
                style={{
                  fontFamily: "Montserrat",
                  fontStyle: "italic",
                  width: "100%",
                  padding: "10px",
                  fontSize: "0.6rem",
                }}
              >
                Please what’s the final price? Can you please make the price a
                little reduced? It’s quite on the high . . .
              </div>
            </ChatContainer>
          </ChatWrapper>
                <ChatWrapper>
            <ImageContainer>
              <img
                src={profile}
                alt="profile"
                style={{ borderRadius: "50%", width: "50px", height: "50px" }}
              />
            </ImageContainer>
            <ChatContainer>
              <div
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: "900",
                  fontSize: "1rem",
                  padding: "0px 10px",
                }}
              >
                Samuel Dare-Owonibi
              </div>
              <div
                style={{
                  fontFamily: "Montserrat",
                  fontStyle: "italic",
                  width: "100%",
                  padding: "10px",
                  fontSize: "0.6rem",
                }}
              >
                Please what’s the final price? Can you please make the price a
                little reduced? It’s quite on the high . . .
              </div>
            </ChatContainer>
          </ChatWrapper>
          <ChatWrapper>
            <ImageContainer>
              <img
                src={profile1}
                alt="profile"
                style={{ borderRadius: "50%", width: "50px", height: "50px" }}
              />
            </ImageContainer>
            <ChatContainer>
              <div
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: "900",
                  fontSize: "1rem",
                  padding: "0px 10px",
                }}
              >
                Abdulhazeez Razak
              </div>
              <div
                style={{
                  fontFamily: "Montserrat",
                  fontStyle: "italic",
                  width: "100%",
                  padding: "10px",
                  fontSize: "0.6rem",
                }}
              >
                Please what’s the final price? Can you please make the price a
                little reduced? It’s quite on the high . . .
              </div>
            </ChatContainer>
          </ChatWrapper>
                <ChatWrapper>
            <ImageContainer>
              <img
                src={profile}
                alt="profile"
                style={{ borderRadius: "50%", width: "50px", height: "50px" }}
              />
            </ImageContainer>
            <ChatContainer>
              <div
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: "900",
                  fontSize: "1rem",
                  padding: "0px 10px",
                }}
              >
                Samuel Dare-Owonibi
              </div>
              <div
                style={{
                  fontFamily: "Montserrat",
                  fontStyle: "italic",
                  width: "100%",
                  padding: "10px",
                  fontSize: "0.6rem",
                }}
              >
                Please what’s the final price? Can you please make the price a
                little reduced? It’s quite on the high . . .
              </div>
            </ChatContainer>
          </ChatWrapper>
          <ChatWrapper>
            <ImageContainer>
              <img
                src={profile1}
                alt="profile"
                style={{ borderRadius: "50%", width: "50px", height: "50px" }}
              />
            </ImageContainer>
            <ChatContainer>
              <div
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: "900",
                  fontSize: "1rem",
                  padding: "0px 10px",
                }}
              >
                Abdulhazeez Razak
              </div>
              <div
                style={{
                  fontFamily: "Montserrat",
                  fontStyle: "italic",
                  width: "100%",
                  padding: "10px",
                  fontSize: "0.6rem",
                }}
              >
                Please what’s the final price? Can you please make the price a
                little reduced? It’s quite on the high . . .
              </div>
            </ChatContainer>
          </ChatWrapper>
                <ChatWrapper>
            <ImageContainer>
              <img
                src={profile}
                alt="profile"
                style={{ borderRadius: "50%", width: "50px", height: "50px" }}
              />
            </ImageContainer>
            <ChatContainer>
              <div
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: "900",
                  fontSize: "1rem",
                  padding: "0px 10px",
                }}
              >
                Samuel Dare-Owonibi
              </div>
              <div
                style={{
                  fontFamily: "Montserrat",
                  fontStyle: "italic",
                  width: "100%",
                  padding: "10px",
                  fontSize: "0.6rem",
                }}
              >
                Please what’s the final price? Can you please make the price a
                little reduced? It’s quite on the high . . .
              </div>
            </ChatContainer>
          </ChatWrapper>
          <ChatWrapper>
            <ImageContainer>
              <img
                src={profile1}
                alt="profile"
                style={{ borderRadius: "50%", width: "50px", height: "50px" }}
              />
            </ImageContainer>
            <ChatContainer>
              <div
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: "900",
                  fontSize: "1rem",
                  padding: "0px 10px",
                }}
              >
                Abdulhazeez Razak
              </div>
              <div
                style={{
                  fontFamily: "Montserrat",
                  fontStyle: "italic",
                  width: "100%",
                  padding: "10px",
                  fontSize: "0.6rem",
                }}
              >
                Please what’s the final price? Can you please make the price a
                little reduced? It’s quite on the high . . .
              </div>
            </ChatContainer>
          </ChatWrapper>
          <ChatWrapper>
            <ImageContainer>
              <img
                src={profile}
                alt="profile"
                style={{ borderRadius: "50%", width: "50px", height: "50px" }}
              />
            </ImageContainer>
            <ChatContainer>
              <div
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: "900",
                  fontSize: "1rem",
                  padding: "0px 10px",
                }}
              >
                Samuel Dare-Owonibi
              </div>
              <div
                style={{
                  fontFamily: "Montserrat",
                  fontStyle: "italic",
                  width: "100%",
                  padding: "10px",
                  fontSize: "0.6rem",
                }}
              >
                Please what’s the final price? Can you please make the price a
                little reduced? It’s quite on the high . . .
              </div>
            </ChatContainer>
          </ChatWrapper>
          <ChatWrapper>
            <ImageContainer>
              <img
                src={profile1}
                alt="profile"
                style={{ borderRadius: "50%", width: "50px", height: "50px" }}
              />
            </ImageContainer>
            <ChatContainer>
              <div
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: "900",
                  fontSize: "1rem",
                  padding: "0px 10px",
                }}
              >
                Abdulhazeez Razak
              </div>
              <div
                style={{
                  fontFamily: "Montserrat",
                  fontStyle: "italic",
                  width: "100%",
                  padding: "10px",
                  fontSize: "0.6rem",
                }}
              >
                Please what’s the final price? Can you please make the price a
                little reduced? It’s quite on the high . . .
              </div>
            </ChatContainer>
          </ChatWrapper>
                <ChatWrapper>
            <ImageContainer>
              <img
                src={profile}
                alt="profile"
                style={{ borderRadius: "50%", width: "50px", height: "50px" }}
              />
            </ImageContainer>
            <ChatContainer>
              <div
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: "900",
                  fontSize: "1rem",
                  padding: "0px 10px",
                }}
              >
                Samuel Dare-Owonibi
              </div>
              <div
                style={{
                  fontFamily: "Montserrat",
                  fontStyle: "italic",
                  width: "100%",
                  padding: "10px",
                  fontSize: "0.6rem",
                }}
              >
                Please what’s the final price? Can you please make the price a
                little reduced? It’s quite on the high . . .
              </div>
            </ChatContainer>
          </ChatWrapper>
          <ChatWrapper>
            <ImageContainer>
              <img
                src={profile1}
                alt="profile"
                style={{ borderRadius: "50%", width: "50px", height: "50px" }}
              />
            </ImageContainer>
            <ChatContainer>
              <div
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: "900",
                  fontSize: "1rem",
                  padding: "0px 10px",
                }}
              >
                Abdulhazeez Razak
              </div>
              <div
                style={{
                  fontFamily: "Montserrat",
                  fontStyle: "italic",
                  width: "100%",
                  padding: "10px",
                  fontSize: "0.6rem",
                }}
              >
                Please what’s the final price? Can you please make the price a
                little reduced? It’s quite on the high . . .
              </div>
            </ChatContainer>
          </ChatWrapper>
        </ChatList>
      </Wrapper>
    </>
  );
};

export default Chats;
