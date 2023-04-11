import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Colors } from "../../assets/styles";
import axios from "axios";
import { api } from "../../strings";
// import Swal from "sweetalert2";
import { Loader } from "semantic-ui-react";
import eye from "../../assets/svg/eye.svg";
import eye_cancel from "../../assets/svg/eye-cancel.svg";
import Message from "./Message";

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

const PassView = styled.div`
  background-color: ${Colors.PRIMARY_DEEP};
  color: white;
  font-family: Montserrat;
  width: 20%;
  text-align: center;
  padding: 2vh;
  margin-bottom: 20px;
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
  const [showPassword, setShowPassword] = useState(Boolean);
  const [show, setShow ] = useState(true)
  const [message, setMessage] = useState("")
  const [color, setColor] = useState("")

  const _submitForm = () => {
    setLoading(true);
    if (password !== confirmPassword) {
      setLoading(false);
      // Swal.fire({
      //   icon: "warning",
      //   title: "Password mismatch",
      //   text: "Ensure passwords are matching",
      // });
      setShow(true)
      setMessage("Password mismatch, ensure passwords are matching");
      setColor("red")
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
      // Swal.fire({
      //   icon: "warning",
      //   title: "Missing details",
      //   text: "Please, fill in all required details",
      // });
      setShow(true)
      setMessage("Missing details. Please, fill in all required details");
      setColor("red")
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
          // Swal.fire({
          //   icon: "success",
          //   title: "Account Registered",
          //   text: `Welcome onboard 🎉🎉, ${res.data.data.fullname}. Login now to get started!`,
          // });
          setShow(true)
          setMessage(`Account Registered. Welcome onboard 🎉🎉, ${res.data.data.fullname}. Login now to get started!`);
          setColor("green")
        })
        .catch((error) => {
          setLoading(false);
          // Swal.fire({
          //   icon: "error",
          //   title: "Oops!",
          //   text: error.response.data.data,
          // });
          setShow(true)
          setMessage(`${error.response.data.data}`);
          setColor("red")
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
                   <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
            }}
          >
            <Input
              type={showPassword === true ? "text":"password"}
              placeholder="Password"
              pass={true}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <PassView
              onClick={() => {
                setShowPassword(!showPassword);
              }}
            >
              {showPassword === true && <><img src={eye} alt={"eye"} /></>}
              {showPassword === false && <><img src={eye_cancel} alt={"eye"} /></>}
            </PassView>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
            }}
          >
            <Input
              type={showPassword === true ? "text":"password"}
              placeholder="Password"
              pass={true}
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />
            <PassView
              onClick={() => {
                setShowPassword(!showPassword);
              }}
            >
              {showPassword === true && <><img src={eye} alt={"eye"} /></>}
              {showPassword === false && <><img src={eye_cancel} alt={"eye"} /></>}
            </PassView>
          </div>
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
      <Message
        background={color}
        text={message}
        show={show}
        setShow={setShow}
      />
    </>
  );
};

export default SignUpForm;
