import React from "react";
import styled from "styled-components";
import bug from "../assets/svg/bug.svg";

const ErrorPage = () => {
  return (
    <>
      <PageWrapper>
        <ErrorIcon src={bug} alt="error" />
        <ErrorText>
          <h4>Error 404</h4>
          <br />
          Page Does not exist!
        </ErrorText>
      </PageWrapper>
    </>
  );
};
const PageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ErrorIcon = styled.img`
  width: 200;
  height: 200;
`;

const ErrorText = styled.div`
  font-family: Montserrat;
  text-align: center;
  font-size: 2rem;
  padding: 10vh 0px;
`;

export default ErrorPage;
