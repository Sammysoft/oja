/* eslint-disable */

import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Colors } from "../../assets/styles";
import axios from "axios";
import { api } from "../../strings";
import Swal from "sweetalert2";
import { Loader } from "semantic-ui-react";
import { AuthContext } from "../../loginContext";

const SignInForm = () => {
  const {_setUser} = useContext(AuthContext)
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
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
          setLoading(false);
          localStorage.setItem("oja-token", res.data.token);
          axios
            .get(`${api}/dashboard`, {
              headers: {
                Authorization: res.data.token,
              },
            })
            .then((res) => {
              _setUser(res.data.data);
              if (res.data.data.usertype === "Admin") {
                navigate("/dashboard");
              } else {
                navigate("/");
              }
              if (res.data.data === null) {
                alert("Empty data");
              }
              if (!res.data.data.profile_picture) {
                navigate(`/profile?settings/${res.data.data._id}`);
                Swal.fire({
                  icon: "warning",
                  text: "Help us know you better",
                  title: "Add a profile picture",
                });
              }
            })
            .catch((error) => {
              console.log(error)
              if (error.response.data === "Unauthorized") {
                localStorage.removeItem("oja-token");
                navigate("/");
              }
            });
        })
        .catch((error) => {
          setLoading(false);
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
      <div>
        <Header>Sign in to your account</Header>
        <FormBody>
          <FormInput
            type={"text"}
            placeholder={"Email / Phone number"}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <FormInput
            type={"password"}
            placeholder={"Password"}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </FormBody>
        <SubmitButtonWrapper>
          <SubmitButton
            onClick={() => {
              handleLogin();
            }}
          >
            {loading === true ? (
              <>
                <Loader active inline="centered" />
              </>
            ) : (
              <> Login</>
            )}
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
      </div>
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
  width: 50%;
  color: ${Colors.DEEP};
  font-family: Montserrat;
`;

export default SignInForm;
