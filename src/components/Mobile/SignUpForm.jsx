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

const SignUpForm = () => {
  const navigate = useNavigate();
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [state, setState] = useState("");
  const [local_government, setLocalGovernment] = useState("");

  //indicators
  const [loading, setLoading] = useState(Boolean);

  const _submitForm = () => {
    setLoading(true);
    if (password !== confirmPassword) {
      setLoading(false);
      Swal.fire({
        icon: "warning",
        title: "Password mismatch",
        text: "Ensure passwords are matching",
      });
    } else if (
      !password ||
      !confirmPassword ||
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
          navigate("/sign-in");
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
      <FormWrapper>
        <HeadText>Create your account to get started!</HeadText>
        <FormInputWrapper>
          <Input
            type="text"
            placeholder="Full Name"
            value={fullname}
            onChange={(e) => {
              setFullName(e.target.value);
            }}
          />
          <Input
            type="text"
            placeholder="Email Address"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Input
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
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
          <Input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
          <Input
            type="text"
            placeholder="State"
            value={state}
            onChange={(e) => {
              setState(e.target.value);
            }}
          />
          <Input
            type="text"
            placeholder="LGA"
            value={local_government}
            onChange={(e) => {
              setLocalGovernment(e.target.value);
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
              <> Create Account</>
            )}
          </Button>
          <LinkAway>
            Already have an account?{" "}
            <Link
              to="/sign-in"
              style={{ textDecoration: "none", color: `${Colors.PRIMARY}` }}
            >
              SIGN IN
            </Link>{" "}
            here
          </LinkAway>
        </FormInputWrapper>
      </FormWrapper>
    </>
  );
};

export default SignUpForm;
