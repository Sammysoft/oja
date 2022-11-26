import React from "react";
import styled from "styled-components";
import { Colors } from "../../assets/styles";

const Footer = () => {
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
                justifyContent: "space-between",
                width: "25%",
              }}
            >
              <img
                src={require("../../assets/logo2.png")}
                style={{ height: 80, width: 80 }}
                alt="little-display"
              />
              <span style={{ fontFamily: "Montserrat", fontSize: "2rem" }}>
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
          <CategoryHeaderText>Quick Links</CategoryHeaderText>
          <LinkList>Home</LinkList>
          <LinkList>Product Listings</LinkList>
          <LinkList>Sell my items</LinkList>
          <LinkList>Terms of Service</LinkList>
        </SecondCategory>
        <ThirdCategory>
          <CategoryHeaderText>Contact Us</CategoryHeaderText>
          <CategoryBody>
            No 34, adesida ayomide street off ojota bus stop, lagos. +234 (801)
            12 345 6789 +234 (801) 12 345 6789
          </CategoryBody>
        </ThirdCategory>
      </FooterWrapper>
      <CopyWriteSection>
        OJA is a subscription based system, built to scale-up a free enterprise
        solution; an online market platform for sellers and buyers, brands and
        corporate entities, seeking a channel to reach mass consumer markets, or
        sell that one item for a quick cash. Ojaoneline.ng is a secured
        user-friendly marketing tool with a turnaround time for subscription
        happening in real-time, reinforced through custom programming interface,
        application topographies and flexibility to end-users. With OJA the
        result is always what you sought.COPYRIGHT (C) 2022. OJAONLINE.NG
      </CopyWriteSection>
    </>
  );
};

const CopyWriteSection = styled.div`
  width: 100%;
  height: fit-content;
  padding: 40px;
  text-align: center;
  font-family: Montserrat;
`;

const FirstCategory = styled.div`
  flex: 2;
`;

const SecondCategory = styled.div`
  flex: 1;
`;

const ThirdCategory = styled.div`
  flex: 1;
`;

const CategoryHeaderText = styled.div`
  color: ${Colors.WHITE};
  font-weight: 900;
  font-size: 1.5rem;
  margin-bottom: 10vh;
  font-family: Montserrat;
`;
const CategoryBody = styled.div`
  width: 70%;
  color: ${Colors.WHITE};
  font-family: Montserrat;
  line-height: 2.5;
`;

const LinkList = styled.div`
  color: ${Colors.WHITE};
  font-family: Montserrat;
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: left;
  width: 100%;
  cursor: pointer;
`;

const FooterWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 5%;
  background-color: ${Colors.PRIMARY_DEEP};
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export default Footer;
