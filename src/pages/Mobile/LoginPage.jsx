import React from "react";
import styled from "styled-components";
import NavBar from "../../components/Mobile/navbar";
import { Welcome } from "../../components/Mobile/WelcomeText";
import Advert from "../../components/Mobile/advert";
import { Colors } from "../../assets/styles";
import man_hair from "../../assets/man_hair.png";
import Footer from "../../components/Mobile/footer";
import SignInForm from "../../components/Mobile/SignInForm";

const LoginPage = () => {
  return (
    <>
      <PageWrapper>
        <NavBar />
        <Welcome />
        <SignInForm />
      </PageWrapper>
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

export default LoginPage;

const PageWrapper = styled.div`
width: 100vw;
height: fit-content:
padding: 0px;
box-sizing: border-bpx;
`;
