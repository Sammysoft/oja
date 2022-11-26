import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Colors } from "../../assets/styles";

const FormWrapper = styled.div`
  width: 100%;
  background-color: ${Colors.LIGHT_GREEN};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: fit-content;
  padding: 20px 0px;
  margin: 20px 0px;
`;

const HeadText = styled.div`
  font-family: Montserrat;
  color: ${Colors.PRIMARY};
  font-weight: 900;
  font-size: 1rem;
  width: 80%;
  margin: 2vh 0px;
  text-align: center;
`;

const FormInputWrapper = styled.div`
  width: 80%;
`;

const Input = styled.input`
  border: 2px solid ${Colors.PRIMARY_DEEP};
  border-radius: 5px;
  padding: 2vh 0px 2vh 10%;
  width: 100%;
  background-color: transparent;
  color: ${Colors.PRIMARY_DEEP};
  margin: 2px 0px 20px 0px;
  font-family: Montserrat;
  font-weight: 700;
`;
const Button = styled.div`
  width: 100%;
  border-radius: 5px;
  padding: 2vh 0px;
  text-align: center;
  color: white;
  background-color: ${Colors.PRIMARY};
  font-weight: 800;
  font-family: Montserrat;
`;

const LinkAway = styled.div`
  width: 100%;
  font-family: Montserrat;
  font-weight: 900;
  color: ${Colors.PRIMARY};
  font-size: 0.9rem;
  padding: 10px 0px;
`;
const SignInForm = () => {
  return (
    <>
      <FormWrapper>
        <HeadText>Sign in to your account</HeadText>
        <FormInputWrapper>
          <Input type="text" placeholder="Email Address" />
          <Input type="password" placeholder="Password" />
          <Button>Sign In</Button>
          <LinkAway>
            Already have an account?{" "}
            <Link
              to="/onboard"
              style={{ textDecoration: "none", color: `${Colors.PRIMARY}` }}
            >
              SIGN UP
            </Link>{" "}
            here
          </LinkAway>
        </FormInputWrapper>
      </FormWrapper>
    </>
  );
};

export default SignInForm;
