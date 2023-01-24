import React from "react";
import styled from "styled-components";
import { Colors } from "../../assets/styles";

const Footer = () => {


  const showYear =()=>{
    const date = new Date();
    return date.getFullYear()
  }
  return (
    <>
      <FooterWrapper>
        <FirstCategory>
          <CategoryHeaderText>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <img
                src={require("../../assets/logo2.png")}
                style={{ height: 80, width: 80 }}
                alt="little-display"
              />
              <span style={{ fontFamily: "Montserrat", fontSize: "3rem" }}>
                OJA
              </span>
            </div>
          </CategoryHeaderText>
          <CategoryBody>
            Oja is an online store where entrepreneurs and business owners and
            professionals can showcase their products, items, and goods for
            clients and customers or consumers to buy.
          </CategoryBody>
        </FirstCategory>
        <SecondCategory>
          {/* <CategoryHeaderText>Quick Links</CategoryHeaderText>
          <LinkList>Home</LinkList>
          <LinkList>Product Listings</LinkList>
          <LinkList>Sell my items</LinkList>
          <LinkList>Terms of Service</LinkList> */}

          <ButtonWrapper>
            <SelectorButton>Sell Items</SelectorButton>
            <SelectorButton>Categories</SelectorButton>
          </ButtonWrapper>
        </SecondCategory>
        {/* <ThirdCategory>
          <CategoryHeaderText>Contact Us</CategoryHeaderText>
          <CategoryBody>
            No 34, adesida ayomide street off ojota bus stop, lagos. +234 (801)
            12 345 6789 +234 (801) 12 345 6789
          </CategoryBody>
        </ThirdCategory> */}

      </FooterWrapper>
      <CopyWriteSection>
      COPYRIGHT (C) {showYear()}. OJAONLINE.NG
      </CopyWriteSection>
    </>
  );
};

const ButtonWrapper = styled.div`
width: 100%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-evenly;
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
width: 50%:
cursor: pointer;
`

const CopyWriteSection = styled.div`
  width: 100%;
  height: fit-content;
  padding: 40px;
  text-align: center;
  font-family: Montserrat;
`;

const FirstCategory = styled.div`
  // flex: 2;
`;

const SecondCategory = styled.div`
width: 50%;
`;

// const ThirdCategory = styled.div`
//   flex: 1;
// `;

const CategoryHeaderText = styled.div`
  color: ${Colors.WHITE};
  font-weight: 900;
  font-size: 1.5rem;
  margin-bottom: 10vh;
  font-family: Montserrat;
`;
const CategoryBody = styled.div`
  width: 100%;
  color: ${Colors.WHITE};
  font-family: Montserrat;
  line-height: 2.5;
  text-align: center;
  align-self: center;
  font-size:1.5rem;
  padding: 0px 20% 10% 20%;
`;

// const LinkList = styled.div`
//   color: ${Colors.WHITE};
//   font-family: Montserrat;
//   padding-top: 10px;
//   padding-bottom: 10px;
//   text-align: left;
//   width: 100%;
//   cursor: pointer;
// `;

const FooterWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 3%;
  background-color: ${Colors.PRIMARY_DEEP};
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

`;
export default Footer;
