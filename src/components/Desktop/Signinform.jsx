import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Colors } from "../../assets/styles";

const SignInForm = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/dashboard");
  };
  return (
    <>
      <Header>Sign in to your account</Header>
      <FormBody>
        <FormInput type={"text"} placeholder={"Email / Phone number"} />
        <FormInput type={"password"} placeholder={"Password"} />
      </FormBody>
      <SubmitButtonWrapper>
        <SubmitButton
          onClick={() => {
            handleLogin();
          }}
        >
          Login
        </SubmitButton>
      </SubmitButtonWrapper>
      <BottomTextWrapper>
        <BottomText>
          <Link
            to="/onboard"
            style={{
              textDecorationColor: "",
              textDecoration: "none",
              textDecorationLine: "none",
              color: "black",
            }}
          >
            Don’t have an account? SIGN UP here
          </Link>
        </BottomText>
        <BottomText style={{ textAlign: "right" }}>
          <Link
            to="/reset-password"
            style={{
              textDecorationColor: "black",
              textDecoration: "none",
              textDecorationLine: "none",
              color: "black",
            }}
          >
            {" "}
            <i>Forgot Password?</i>
          </Link>
        </BottomText>
      </BottomTextWrapper>
    </>
  );
};

const Header = styled.div`
  width: 100%;
  text-align: center;
  font-family: Montserrat;
  font-weight: 800;
  font-size: 2rem;
  color: ${Colors.DEEP};
  align-self: center;
`;

const FormInput = styled.input`
  border: 3px solid ${Colors.DEEP};
  padding: 15px 40px;
  border-radius: 15px;
  width: 100%;
  font-family: Montserrat;
  margin: 10px 0px;
  background-color: transparent;
`;

const FormBody = styled.div`
  width: 100%;
  padding: 20px;
`;

const SubmitButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SubmitButton = styled.div`
  background-color: ${Colors.PRIMARY_DEEP};
  color: ${Colors.WHITE};
  font-family: Montserrat;
  padding: 15px;
  border-radius: 15px;
  width: 95%;
  text-align: center;
  cursor: pointer;
`;

const BottomTextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 15px;
  cursor: pointer;
`;
const BottomText = styled.div`
  width: 40%;
  color: ${Colors.DEEP};
  font-family: Montserrat;
`;

export default SignInForm;
