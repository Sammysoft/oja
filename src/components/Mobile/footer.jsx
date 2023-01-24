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
margin: 5vh 0px 10px 0px;
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

const Footer = () => {
  const showYear =()=>{
    const date = new Date();
    return date.getFullYear()
  }
  return (
    <>
      <FooterWrapper>
        <Wrapper1>
          <img src={logo} alt="profile" width="50px" height="50px" />
          <span
            style={{
              fontFamily: "Montserrat",
              fontWeight: "900",
              fontSize: "2.5rem",
            }}
          >
            OJA
          </span>
          <div style={{ fontFamily: "Montserrat", lineHeight: "1.5rem" }}>
            Oja is an online store where entrepreneurs and business owners and
            professionals can showcase their products, items, and goods for
            clients and customers or consumers to buy.
          </div>
        </Wrapper1>
        <Wrapper2>

        </Wrapper2>
        <ButtonWrapper>
            <SelectorButton>Sell Items</SelectorButton>
            <SelectorButton>Categories</SelectorButton>
          </ButtonWrapper>
      </FooterWrapper>
      <CopyWriteSection> COPYRIGHT (C) {showYear()}. OJAONLINE.NG</CopyWriteSection>
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
  padding-bottom: 10vh;
`;

const ButtonWrapper = styled.div`
width: 100%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
padding: 0px 30px 0px 30px;
`

const SelectorButton = styled.div`
color: ${Colors.PRIMARY};
background: white;
border-radius: 8px;
padding: 6px 30px;
text-align: center;
font-weight: 800;
font-family: Montserrat;
width: 100%:
`
