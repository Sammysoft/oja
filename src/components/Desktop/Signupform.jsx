/* eslint-disable */

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Colors } from "../../assets/styles";
import { Link } from "react-router-dom";
import NaijaStates from "naija-state-local-government";
import axios from "axios";
import { Loader } from "semantic-ui-react";
import Swal from "sweetalert2";
import { api } from "../../strings";

const SignUpForm = () => {
  const [loading, setLoading] = useState(false);
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [state, setState] = useState("");
  const [local_government, setLocalGovernment] = useState("");

  const [states, setStates] = useState([]);
  const [regions, setRegions] = useState([]);

  const _getRegions = (state) => {
    setRegions(NaijaStates.lgas(state).lgas);
  };

  useEffect(() => {
    setStates(NaijaStates.states());
  }, []);

  const _submitForm = () => {
    setLoading(true);
    if (
      !password ||
      !phone ||
      !email ||
      !fullname ||
      !state ||
      !local_government
    ) {
      setLoading(false);
      Swal.fire({
        icon: "warning",
        title: "Missing details",
        text: "Please, fill in all required details",
      });
    } else {
      const payload = {
        fullname,
        email,
        phone,
        state,
        local_government,
        password,
      };
      axios
        .post(`${api}/onboard`, payload)
        .then((res) => {
          setLoading(false);
          console.log(res.data.data);
          navigate("/login");
          Swal.fire({
            icon: "success",
            title: "Account Registered",
            text: `Welcome onboard 🎉🎉, ${res.data.data.fullname}. Login now to get started!`,
          });
        })
        .catch((error) => {
          setLoading(false);
          Swal.fire({
            icon: "error",
            title: "Oops!",
            text: error.response.data.data,
          });
        });
    }
  };
  return (
    <>
      <Header>Create your account to get started!</Header>
      <FormBody>
        <FormInput
          type={"text"}
          placeholder={"Enter Your Fullname"}
          value={fullname}
          onChange={(e) => {
            setFullname(e.target.value);
          }}
        />
        <FormFieldDivider>
          <FormInput
            type={"text"}
            placeholder={"Enter Your Email Address"}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <FormInput
            type={"text"}
            placeholder={"Enter Your Phone Number"}
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
          <FormInput
            type={"password"}
            placeholder={"Enter Your Password"}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <FormInput
            type={"text"}
            placeholder={"Enter Your Username"}
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <FormInputSelect
            value={state}
            onChange={(e) => {
              setState(e.target.value);
              _getRegions(e.target.value);
            }}
          >
            <FormFieldOption>State</FormFieldOption>
            {states.map((state, idx) => {
              return (
                <FormFieldOption key={idx} value={state}>
                  {state}
                </FormFieldOption>
              );
            })}
          </FormInputSelect>
          <FormInputSelect
            value={local_government}
            onChange={(e) => {
              setLocalGovernment(e.target.value);
            }}
          >
            <FormFieldOption>L G A</FormFieldOption>
            {regions.map((region, idx) => {
              return (
                <FormFieldOption key={idx} value={region}>
                  {region}
                </FormFieldOption>
              );
            })}
          </FormInputSelect>
        </FormFieldDivider>
      </FormBody>
      <SubmitButtonWrapper>
        <SubmitButton
          onClick={() => {
            _submitForm();
          }}
        >
          {loading === true ? (
            <>
              <Loader active inline="centered" />
            </>
          ) : (
            <>Create Account</>
          )}
        </SubmitButton>
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
  column-gap: 5%;
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
