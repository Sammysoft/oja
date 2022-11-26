import React from "react";
import styled from "styled-components";
import { Colors } from "../../assets/styles";

const HeadText = () => {
  return (
    <>
      <HeadTextWrapper>
        <HeadTextWrapper style={{ padding: "5vh" }}>
          <section
            style={{ fontSize: "2rem", fontWeight: 900, lineHeight: "40px" }}
          >
            Welcome to Oja. The Online Marketplace.
          </section>
          <section
            style={{
              paddingLeft: "10vw",
              paddingRight: "10vw",
              paddingTop: "2vh",
              color: Colors.DEEP,
              fontWeight: 700,
              width: "90%",
              lineHeight: "20px"
            }}
          >
            Oja is an online store where entrepreneurs and business owners and
            professionals can showcase their products, items, and goods for
            clients and customers to buy.
          </section>
        </HeadTextWrapper>
      </HeadTextWrapper>
    </>
  );
};

const HeadTextWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  font-family: Montserrat;
  color: ${Colors.PRIMARY};
  align-items:center
`;

export default HeadText;
