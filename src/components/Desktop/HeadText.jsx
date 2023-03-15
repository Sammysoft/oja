import React from "react";
import styled from "styled-components";
import { Colors } from "../../assets/styles";

const HeadText = () => {
  return (
    <>
      <HeadTextWrapper>
        <HeadTextWrapper style={{ padding: "5vh" }}>
          <section
            style={{ fontSize: "2.5rem", fontWeight: 900, lineHeight: "40px" }}
          >
            Welcome to Oja
          </section>
          <section
            style={{
              paddingLeft: "10vw",
              paddingRight: "10vw",
              paddingTop: "2vh",
              fontWeight: 500,
              width: "90%",
              lineHeight: "20px",
              fontSize: "2rem",
              color: Colors.PRIMARY_DEEP,
            }}
          >
            The Online Marketplace.
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
  align-items: center;
`;

export default HeadText;
