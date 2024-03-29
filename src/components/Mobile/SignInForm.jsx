import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Colors } from "../../assets/styles";
import axios from "axios";
import { api } from "../../strings";
import { Loader } from "semantic-ui-react";
import { AuthContext } from "../../loginContext";
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
  text-align: center;
`;

const FormInputWrapper = styled.div`
  width: 80%;
`;

const Input = styled.input`
  border: 2px solid ${Colors.PRIMARY_DEEP};
  border-radius: 5px;
  padding: 2vh 0px 2vh 10%;
  width: ${(props) => (props.pass === true ? "80%" : "100%")};
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
const SignInForm = () => {
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setToken } = useContext(AuthContext);

  //State indicators
  const [loading, setLoading] = useState(Boolean);
  const [showPassword, setShowPassword] = useState(Boolean);
  const [show, setShow ] = useState(true)
  const [message, setMessage] = useState("")
  const [color, setColor] = useState("")

  const _submitForm = () => {
    setLoading(true);
    if (!email || !password) {
      setLoading(false);
      setShow(true)
      setMessage("Ensure you enter your email and password");
      setColor("red")
    } else {
      const payload = {
        email,
        password,
      };
      axios
        .post(`${api}/auth`, payload)
        .then((res) => {
          localStorage.setItem("oja-token", res.data.token);
          setToken(res.data.token);
          axios
            .get(`${api}/dashboard`, {
              headers: {
                Authorization: res.data.token,
              },
            })
            .then((res) => {
              setLoading(false);
              setUser(res.data.data);
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
                // Swal.fire({
                //   icon: "warning",
                //   text: "Help us know you better",
                //   title: "Add a profile picture",
                // });
                setShow(true)
                setMessage("Add a profile picture, help us know you better");
                setColor("red")
              }
            })
            .catch((error) => {
              console.log(error);
              if (error.response.data === "Unauthorized") {
                localStorage.removeItem("oja-token");
                navigate("/");
              }
            });
        })
        .catch((error) => {
          setLoading(false);
          // Swal.fire({
          //   icon: "error",
          //   title: "Oops",
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
      <Message
        background={color}
        text={message}
        show={show}
        setShow={setShow}
      />
    </>
  );
};

export default SignInForm;
