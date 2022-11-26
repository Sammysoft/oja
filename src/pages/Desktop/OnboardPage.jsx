import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";
import { Colors } from "../../assets/styles";
import Footer from "../../components/Desktop/Footer";
import NavBar from "../../components/Desktop/navbar";
import SignUpForm from "../../components/Desktop/Signupform";
import left from "../../assets/svg/left_arrow.svg";

const OnboardPage = () => {
  const navigate = useNavigate()
  return (
    <>
      <PageWrapper>
        <NavBar />
      </PageWrapper>
      <NavigateBack>
        <div
          style={{
            width: "60%",
            alignItems: "center",
            display: "flex",
            cursor: "pointer",
          }}
          onClick={()=>{navigate(-1)}}
        >
          <img src={left} alt="pointer" />
          <span style={{ fontFamily: "Montserrat", paddingLeft: "5px" }}>
            Go Back
          </span>
        </div>
      </NavigateBack>
      <PageBody>
        <AdCapsuleWrapper>
          <img
            src={require("../../assets/man_hair.png")}
            alt="ads"
            style={{ height: 500, width: 300 }}
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
        <FormWrapper>
          <SignUpForm />
        </FormWrapper>
      </PageBody>
      <Footer />
    </>
  );
};

const NavigateBack = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

const PageWrapper = styled.div`
  margin-left: 10vw;
  margin-right: 10vw;
`;

const AdvertButtonWrapper = styled.div`
  background-color: ${Colors.WHITE};
  color: ${Colors.PRIMARY_DEEP};
  padding: 10px 15px;
  font-family: Montserrat;
  border-radius: 10px;
`;

const PageBody = styled.div`
  width: 100%;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  height: fit-content;
  margin: 10px 0px 10vh 0px;
`;

const AdCapsuleWrapper = styled.div`
  //   margin-top: 15vh;
  width: 35%;
  background-color: ${Colors.DIRTY_GREEN};
  //   height: 55vh;
  border-radius: 0px 15px 15px 0px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const FormWrapper = styled.div`
  width: 63%;
  padding: 20px;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  background-color: rgba(0, 60, 13, 0.2);
  height: auto;
`;

export default OnboardPage;
