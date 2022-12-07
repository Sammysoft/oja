import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Colors } from "../../assets/styles";
import axios from "axios";
import { api } from "../../strings";
import Swal from "sweetalert2";
import { Loader } from "semantic-ui-react";

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
  text-align: center;
`;
const SignInForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //State indicators
  const [loading, setLoading] = useState(Boolean);

  const _submitForm = () => {
    setLoading(true);
    if (!email || !password) {
      setLoading(false);
      Swal.fire({
        icon: "error",
        title: "Missing Details",
        text: "Ensure you enter your email and password!",
      });
    } else {
      const payload = {
        email,
        password,
      };
      axios
        .post(`${api}/auth`, payload)
        .then((res) => {
          setLoading(false)
          localStorage.setItem("oja-token", res.data.token);
          navigate('/dashboard');
        })
        .catch((error) => {
          setLoading(false)
          Swal.fire({
            icon: "error",
            title: "Oops",
            text: error.response.data.data,
          });
        });
    }
  };
  return (
    <>
      <FormWrapper>
        <HeadText>Sign in to your account</HeadText>
        <FormInputWrapper>
          <Input
            type="text"
            placeholder="Email Address"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Button
            onClick={() => {
              _submitForm();
            }}
          >
            {loading === true ? (
              <>
                <Loader active inline="centered" />
              </>
            ) : (
              <> Sign In</>
            )}
          </Button>
          <LinkAway>
            Don't have an account?{" "}
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
