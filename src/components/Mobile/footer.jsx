import React from "react";
import styled from "styled-components";
import { Colors } from "../../assets/styles";
import logo from "../../assets/logo2.png";

const FooterWrapper = styled.div`
background-color: ${Colors.PRIMARY};
padding: 10px;
margin: 0px;
color: white;
fomt-family: Montserrat;
display: flex:
flex-direction: column;
align-items: center;
justify-content: space-between;
height: fit-content;
width: 100%;
margin: 10vh 0px;
`;

const Wrapper1 = styled.div`
  text-align: center;
  width: 100%;
  padding: 20px;
`;
const Wrapper2 = styled.div`
  width: 100%;
  padding: 15px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;

const Header = styled.div`
  color: white;
  font-weight: 900;
  font-family: Montserrat;
  padding: 15px 5px;
`;
const LinkOptions = styled.div`
  padding: 10px 0px;
  font-family: Montserrat;
  color: white;
`;
const Footer = () => {
  return (
    <>
      <FooterWrapper>
        <Wrapper1>
          <img src={logo} alt="profile" width="50px" height="50px" />
          <span style={{ fontFamily: "Montserrat", fontWeight: "900", fontSize: "2.5rem" }}>
            OJA
          </span>
          <div style={{ fontFamily: "Montserrat", lineHeight: "1.5rem" }}>
            Oja is an online store where entrepreneurs and business owners and
            professionals can showcase their products, items, and goods for
            clients and customers or consumers to buy.
          </div>
        </Wrapper1>
        <Wrapper2>
          <div style={{ width: "45%", height: "stretch" }}>
            <Header>Quick Links</Header>
            <LinkOptions>Home</LinkOptions>
            <LinkOptions>Product Listing</LinkOptions>
            <LinkOptions>Sell my item</LinkOptions>
            <LinkOptions>Terms of service</LinkOptions>
          </div>
          <div
            style={{
              width: "50%",
              height: "stretch",
              fontSize: "1rem",
              lineHeight: "1.5rem",
            }}
          >
            <Header>Contact Us</Header>
            <div style={{ padding: "15px", fontFamily: "Montserrat" }}>
              No 34, adesida ayomide street off ojota bus stop, lagos. +234
              (904) 499 9323
            </div>
          </div>
        </Wrapper2>
      </FooterWrapper>
      <CopyWriteSection>COPYRIGHT (C) 2022. OJAONLINE.NG</CopyWriteSection>
    </>
  );
};

export default Footer;

const CopyWriteSection = styled.div`
  width: 100%;
  height: fit-content;
  padding: 10px;
  text-align: center;
  font-family: Montserrat;
`;
