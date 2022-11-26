import React from "react";
import styled from "styled-components";
import { Colors } from "../../assets/styles";
import ads from "../../assets/man_blue.png";

const LongAdvert = () => {
  return (
    <>
      <Wrapper>
        <div
          style={{
            width: "90%",
            backgroundColor: Colors.GREY,
            borderTopLeftRadius: "15px",
            borderBottomLeftRadius: "15px",
            paddingInline:"10vh",
            display:"flex",
            justifyContent:"flex-end"
          }}
        >
          <Container>
            <TextWrapper>
              <div
                style={{
                  fontWeight: 900,
                  fontSize: "1.5rem",
                  color: Colors.DEEP,
                  fontFamily: "Montserrat",
                  paddingBottom: 20
                }}
              >
                Sell at your convenience!
              </div>
              <div style={{ fontFamily: "Montserrat" }}>
                Do you know you can sell right from the convenience of your
                home? All you have to do is register as a seller and upload your
                item.
              </div>
              <Button>Register Here</Button>
            </TextWrapper>
            <img
              src={ads}
              alt="advert"
              style={{ height: 400, width: 400, marginBottom: "20vh" }}
            />
          </Container>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
  box-sizing: border-box;
  padding-top: 10vh;
`;

const Container = styled.div`
  background-color: ${Colors.GREY};
  height: 40vh;
  width: 90%;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const TextWrapper = styled.div`
  padding-bottom: 10px;
`;

const Button = styled.div`
padding: 10px;
border-radius: 10px;
background-color: ${Colors.PRIMARY_DEEP};
color: ${Colors.WHITE};
font-family: Montserrat;
width: 20%;
text-align:center;
margin-top: 20px;
cursor: pointer;
`

export default LongAdvert;
