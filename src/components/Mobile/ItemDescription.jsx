import React, { useContext, useState } from "react";
import styled from "styled-components";
import left from "../../assets/svg/left_arrow.svg";
import image from "../../assets/phone2.png";
import { Colors } from "../../assets/styles";
import chat from "../../assets/svg/chat_dot.svg";
import call from "../../assets/svg/call.svg";
import { LoginContext } from "../../loginContext";
import axios from "axios";
import { api } from "../../strings";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Loader } from "semantic-ui-react";

const ItemDescription = () => {
  const navigate = useNavigate();
  const { user } = useContext(LoginContext);
  const [toggleLogin, setToggleLogin] = useState(Boolean);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(Boolean);

  const _login = () => {
    setLoading(true);
    const payload = {
      email,
      password,
    };

    axios
      .post(`${api}/auth`, payload)
      .then((res) => {
        localStorage.setItem("oja-token", res.data.token);
        navigate("/dashboard")
        setLoading(false);
        setToggleLogin(false)
        Swal.fire({
          title: "Done 👍",
          text: "Logged In!",
        });
      })
      .catch((error) => {
        setLoading(false);
        Swal.fire({
          title: "Oops 😟",
          text: error.response.data.data,
        });
      });
  };
  return (
    <>
      <ItemDescriptionWrapper>
        <HeaderWrapper>
          <img src={left} alt="left-arrow" width={30} height={50} />
          <ItemName>Apple Iphone XR 64GB with Face ID</ItemName>
        </HeaderWrapper>
        <ProductOwner>
          Uploaded By: Idowu shopping {"  "} 🌟 3.5/5.0
        </ProductOwner>
      </ItemDescriptionWrapper>
      <ProductGalleryWrapper>
        <ProductGallery>
          <img
            src={image}
            alt="product"
            width={"100%"}
            height={"100%"}
            style={{ borderRadius: "15px" }}
          />
        </ProductGallery>
        <RightGallery>
          <LittleGallery>
            <img
              src={image}
              alt="product"
              width={"100%"}
              height={"100%"}
              style={{ borderRadius: "15px" }}
            />
          </LittleGallery>
          <LittleGallery>
            <img
              src={image}
              alt="product"
              width={"100%"}
              height={"100%"}
              style={{ borderRadius: "15px" }}
            />
          </LittleGallery>
          <LittleGallery>
            <img
              src={image}
              alt="product"
              width={"100%"}
              height={"100%"}
              style={{ borderRadius: "15px" }}
            />
          </LittleGallery>
          <LittleGallery>
            <img
              src={image}
              alt="product"
              width={"100%"}
              height={"100%"}
              style={{ borderRadius: "15px" }}
            />
          </LittleGallery>
        </RightGallery>
      </ProductGalleryWrapper>
      <ProductPrice>Asking Price: #190,000</ProductPrice>
      <ProductDescription>
        Maecenas pulvinar sagittis sit vehicula urna in at. Ele at scelerisque
        et, nunc. Etiam enim neque sollicitudin proin nisi commodo ornare eu.
        Volutpat nisl sed pulvin ac cursus ultrices volutpat tincidunt mi.
        Placerat nunc quis pretium velit rhoncus pharetra.Volutpat nisl sed
        pulvin ac cursus ultrices volutpat tincidunt mi. Placer nunc quis
        pretium velit rhoncus pharetra. Deux nima.
      </ProductDescription>
      <ContactButtonWrapper>
        {user.fullname === "" ? (
          <>
            <ContactButton
              onClick={() => {
                setToggleLogin(true);
              }}
            >
              <img
                src={call}
                alt="call seller"
                height={"25px"}
                width={"25px"}
              />
              View Phone number
            </ContactButton>
            <ContactButton>
              <img
                src={chat}
                alt="chat seller"
                height={"25px"}
                width={"25px"}
              />
              start chat with seller
            </ContactButton>
          </>
        ) : (
          <>
            <ContactButton>
              <img
                src={call}
                alt="call seller"
                height={"25px"}
                width={"25px"}
              />
              09064545706
            </ContactButton>
            <ContactButton>
              <img
                src={chat}
                alt="chat seller"
                height={"25px"}
                width={"25px"}
              />
              start chat with seller
            </ContactButton>
          </>
        )}
      </ContactButtonWrapper>
      {toggleLogin && (
        <LoginModalWrapper>
          <LoginModal>
            <HeaderText>Sign in to continue</HeaderText>
            <InputField
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <InputField
              placeholder="password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <Button
              onClick={() => {
                _login();
              }}
            >
              {loading === true ? (
                <>
                  <Loader active inline="centered" />
                </>
              ) : (
                <>Sign in</>
              )}
            </Button>
            <BottomText>Don't have an account? SIGN UP here</BottomText>
            <div
              style={{
                fontFamily: "Montserrat",
                width: "90%",
                margin: "5%",
                color: Colors.PRIMARY,
                textAlign: "center",
              }}
            >
              <i>forgot password</i>
            </div>
          </LoginModal>
        </LoginModalWrapper>
      )}
    </>
  );
};

const LoginModalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  padding: 0px;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 1;
`;
const LoginModal = styled.div`
  width: 90%;
  margin: 5%;
  background: white;
  position: relative;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 90%;
  padding: 50px 0px;
`;

const InputField = styled.input`
  border: 2px solid ${Colors.PRIMARY};
  border-radius: 8px;
  background: transparent;
  font-family: Montserrat;
  padding: 20px;
  width: 90%;
  margin: 5%;
`;

const HeaderText = styled.div`
font-family:Montserrat;
font-weight: 900;
color: ${Colors.PRIMARY};
font-size: 2rem;
text-align: center;
width: 100%:
`;

const Button = styled.div`
  width: 90%;
  margin: 5%;
  padding: 20px;
  color: white;
  background: ${Colors.PRIMARY};
  font-family: Montserrat;
  text-align: center;
  font-weight: 900;
  border-radius: 8px;
`;

const BottomText = styled.div`
  width: 90%;
  margin: 5%;
  font-family: Montserrat;
  color: ${Colors.PRIMARY};
  font-weight: 700;
  text-align: center;
`;

const ProductPrice = styled.div`
  width: 95%;
  margin: 5%;
  border-top: 2px solid ${Colors.GREY};
  border-bottom: 2px solid ${Colors.GREY};
  text-align: center;
  font-weight: 900;
  font-size: 1.5rem;
  font-family: Montserrat;
  padding: 10px;
`;

const ProductOwner = styled.div`
  width: 100%;
  padding: 0px 5% 5% 5%;
  font-family: Montserrat;
  font-weight: 800;
`;

const ProductDescription = styled.div`
  width: 100%;
  padding: 5px;
  font-family: Montserrat;
  text-align: justify;
`;

const ContactButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;

const ContactButton = styled.div`
  background: #ffffff;
  border: 2px solid #08003c;
  box-shadow: 0px 4px 36px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  font-family: Montserrat;
  color: ${Colors.PRIMARY};
  padding: 5px;
  margin: 10px 0px;
  font-size: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const ProductGalleryWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 40vh;
  align-items: center;
  justify-content: space-between;
`;

const ProductGallery = styled.div`
  height: 100%;
  width: 75%;
  border-radius: 15px;
  box-shadow: 1px 3px 11px rgba(0, 0, 0, 0.2);
`;

const RightGallery = styled.div`
  height: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 23%;
`;

const LittleGallery = styled.div`
  width: 100%;
  border-radius: 8px;
  height: 9vh;
  box-shadow: 1px 3px 11px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
`;

const ItemDescriptionWrapper = styled.div`
  margin: 10vh 0px;
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 10px;
`;
const ItemName = styled.div`
  font-family: Montserrat;
  font-weight: 900;
  font-size: 2rem;
  text-align: center;
  width: 90%;
  line-height: 2rem;
`;


export default ItemDescription;
