import React from "react";
import styled from "styled-components";
import { Colors } from "../../assets/styles";
import { Link } from "react-router-dom";

const SignUpForm = () => {
  return (
    <>
      <Header>Create your account to get started!</Header>
      <FormBody>
        <FormInput type={"text"} placeholder={"Enter Your Fullname"} />
        <FormFieldDivider>
          <FormInput type={"text"} placeholder={"Enter Your Email Address"} />
          <FormInput type={"text"} placeholder={"Enter Your Phone Number"} />
          <FormInput type={"password"} placeholder={"Enter Your Password"} />
          <FormInput type={"text"} placeholder={"Enter Your Username"} />
          <FormInputSelect>
            <FormFieldOption>State</FormFieldOption>
          </FormInputSelect>
          <FormInputSelect>
            <FormFieldOption>L G A</FormFieldOption>
          </FormInputSelect>
        </FormFieldDivider>
      </FormBody>
      <SubmitButtonWrapper>
        <SubmitButton>Create Account</SubmitButton>
      </SubmitButtonWrapper>
      <BottomText>
        Already have an account?
        <Link
          to="/login"
          style={{
            textDecoration: "none",
            textDecorationLine: "none",
            color: "black",
          }}
        >
          SIGN IN here
        </Link>
      </BottomText>
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

const FormBody = styled.div`
  width: 100%;
  padding: 20px;
`;

const FormInputSelect = styled.select`
  border: 3px solid ${Colors.DEEP};
  padding: 15px 40px;
  border-radius: 15px;
  width: 100%;
  font-family: Montserrat;
  margin: 10px 0px;
  background-color: transparent;
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
const FormFieldDivider = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 10%;
`;

const FormFieldOption = styled.option`
  font-family: Montserrat;
  background-color: rgba(0, 60, 13, 0.2);
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

const BottomText = styled.div`
  width: 100%;
  text-align: center;
  color: ${Colors.DEEP};
  font-family: Montserrat;
  padding: 10px;
  cursor: pointer;
`;

const SubmitButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default SignUpForm;
