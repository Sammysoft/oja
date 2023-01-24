import React, { useState, useEffect } from "react";
import styled from "styled-components";
import left from "../../assets/svg/left_arrow.svg";
import { Colors } from "../../assets/styles";
import chat from "../../assets/svg/cancel.svg";
import call from "../../assets/svg/check.svg";
import axios from "axios";
import { api } from "../../strings";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Loader } from "semantic-ui-react";

const ViewItem = () => {
  const url = window.location.pathname;
  const item_id = url.slice(-24);
  const navigate = useNavigate();
  const [toggleLogin, setToggleLogin] = useState(Boolean);
  const [item, setItem] = useState({});
  const [itemPictures, setItemPictures] = useState([]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [seller, setSeller] = useState({});

  const [loading, setLoading] = useState(Boolean);

  useEffect(() => {
    setLoading(true);
    axios.get(`${api}/product/${item_id}`).then((res) => {
      axios
        .post(`${api}/product/seller`, { user_id: res.data.data.user_id })
        .then((res) => {
          setSeller(res.data.data);
        });
      setItem(res.data.data);
      setItemPictures(res.data.data.item_pictures[0]);
      setLoading(false);
    });
  }, [item_id]);

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
        navigate("/dashboard");
        setLoading(false);
        setToggleLogin(false);
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

  const _approveProduct = (user_id) => {
    axios
      .get(`${api}/product/approve/${user_id}`)
      .then((res) => {
        Swal.fire({
          title: `Approved Product 👍`,
          text: `Successfully approved ${res.data.data}'s product on OJA`,
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "Oops",
          text: error.response.data.data,
        });
      });
  };
  return (
    <>
      <ViewItemWrapper>
        <HeaderWrapper>
          <img
            src={left}
            alt="left-arrow"
            width={30}
            height={50}
            onClick={() => {
              navigate(-1);
            }}
          />
          <ItemCategory>
            {loading === true ? (
              <>
                <Loader active inline="centered" />
              </>
            ) : (
              <>{item.item_category}</>
            )}
          </ItemCategory>
        </HeaderWrapper>
        <ItemName>
          {loading === true ? (
            <>
              <Loader active inline="centered" />
            </>
          ) : (
            <>{item.item_name}</>
          )}
        </ItemName>
        <ProductOwner>
          Uploaded By:{" "}
          {loading === true ? (
            <>
              <Loader active inline="centered" />
            </>
          ) : (
            <>{seller.fullname}</>
          )}
          {"  "} 🌟 3.5/5.0
        </ProductOwner>
      </ViewItemWrapper>
      <ProductGalleryWrapper>
        <ProductGallery>
          {loading === true ? (
            <>
              <Loader active inline="centered" />
            </>
          ) : (
            <>
              <img
                src={itemPictures[0]}
                alt="product"
                style={{
                  borderRadius: "15px",
                  maxWidth: "100%",
                  minWidth: "100%",
                }}
              />
            </>
          )}
        </ProductGallery>
        <RightGallery>
          {itemPictures.map((source, id) => (
            <LittleGallery key={id}>
              <img
                src={source}
                alt="product"
                width={"100%"}
                height={"100%"}
                style={{ borderRadius: "15px" }}
              />
            </LittleGallery>
          ))}
        </RightGallery>
      </ProductGalleryWrapper>
      <ProductPrice>
        Asking Price: NGN{" "}
        {Number(item.item_price).toLocaleString("en-US", {
          minimumFractionDigits: 0,
        })}
      </ProductPrice>
      <ProductDescription>{item.item_description}</ProductDescription>
      <ContactButtonWrapper>
        <ActionButton
          background={"green"}
          onClick={() => {
            _approveProduct(item._id);
          }}
        >
          <img src={call} alt="call seller" height={"25px"} width={"25px"} />
          Approve
        </ActionButton>
        <ActionButton background={"red"}>
          <img src={chat} alt="chat seller" height={"25px"} width={"25px"} />
          Decline
        </ActionButton>
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

// const ContactButton = styled.div`
//   background: #ffffff;
//   border: 2px solid #08003c;
//   box-shadow: 0px 4px 36px rgba(0, 0, 0, 0.25);
//   border-radius: 8px;
//   font-family: Montserrat;
//   color: ${Colors.PRIMARY};
//   padding: 5px;
//   margin: 10px 0px;
//   font-size: 15px;
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: space-between;
// `;

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
  overflow-y: scroll;
`;

const LittleGallery = styled.div`
  width: 100%;
  border-radius: 8px;
  height: 9vh;
  box-shadow: 1px 3px 11px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  margin-bottom: 10px;
`;

const ViewItemWrapper = styled.div`
  margin: 10vh 0px 10px 0px;
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
  font-weight: 500;
  font-size: 1rem;
  text-align: center;
  width: 100%;
  line-height: 2rem;
`;

const ItemCategory = styled.div`
  font-family: Montserrat;
  font-weight: 900;
  font-size: 1.5rem;
  text-align: center;
  width: 90%;
  line-height: 2rem;
`;

const ActionButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  background: ${(props) => props.background};
  border-radius: 8px;
  padding: 15px 10px;
  font-family: Montserrat;
  color: white;
  width: 48%;
  font-weight: 900;
`;

export default ViewItem;
