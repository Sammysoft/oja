/* eslint-disable */

import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import phone1 from "../../assets/phone1.png";
import { Colors } from "../../assets/styles";
import call from "../../assets/svg/call_dark.svg";
import chat from "../../assets/svg/chat_dark.svg";
import { AuthContext } from "../../loginContext";
import axios from "axios";
import { api } from "../../strings";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Loader } from "semantic-ui-react";

const ProductDescription = () => {
  const url = window.location.pathname;
  const item_id = url.slice(-24);
  const navigate = useNavigate();
  const { getUser } = useContext(AuthContext);
  const [toggleLogin, setToggleLogin] = useState(Boolean);
  const [item, setItem] = useState({});
  const [itemPictures, setItemPictures] = useState([]);
  const [seller, setSeller] = useState({});

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(Boolean);
  const [picker, setPicker] = useState(0);

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

  return (
    <>
      <div style={{ width: "100%", fontFamily: "Montserrat", fontWeight: 600 }}>
        {item.item_category}
      </div>
      <ProductDescriptionWrapper>
        <ImageGallery>
          <div
            style={{
              backgroundImage: `url('${itemPictures[picker]}')`,
              backgroundRepeat: "no-repeat",
              backgroundOrigin: "content-box",
              backgroundSize: "100%",
              backgroundPosition: "center",
              borderRadius: "15px",
              height: "100%",
              width: "65%",
            }}
            alt="picks"
          ></div>

          <div style={{ height: "45vh", width: "30%", overflowY: "scroll" }}>
            <ImageDisplayWrapper>
              {itemPictures.map((source, id) => (
                <ImageDisplay>
                  <div
                    key={id}
                    onClick={() => {
                      setPicker(id);
                    }}
                    style={{
                      background: `url('${source}')`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "100%",
                      backgroundPosition: "center",
                      backgroundOrigin: "content-box",
                      borderRadius: "15px",
                      height: "100%",
                      width: "100%",
                      marginBottom: "20px",
                    }}
                    alt="pick"
                  ></div>
                </ImageDisplay>
              ))}
            </ImageDisplayWrapper>
          </div>
        </ImageGallery>
        <DescriptionGallery>
          <DescriptionHeader>
            {loading === true ? (
              <>
                <Loader active inline="centered" />
              </>
            ) : (
              <>{item.item_name}</>
            )}
          </DescriptionHeader>
          <DescriptionRatings>
            Uploaded by:{" "}
            {loading === true ? (
              <>
                <Loader active inline="centered" />
              </>
            ) : (
              <>{seller.fullname}</>
            )}
            {"  "} 🌟 3.5/5.0
          </DescriptionRatings>
          <DescriptionPrice>
            #{" "}
            {loading === true ? (
              <>
                <Loader active inline="centered" />
              </>
            ) : (
              <>
                {Number(item.item_price).toLocaleString("en-US", {
                  minimumFractionDigits: 0,
                })}
              </>
            )}
          </DescriptionPrice>
          <DescriptionInfo>{item.item_description}</DescriptionInfo>
          {!getUser.fullname ? (
            <>
              {" "}
              <ContactOptionWrapper>
                <img src={call} alt="phone" />
                <ContactCapsule>View Contact</ContactCapsule>
              </ContactOptionWrapper>
              <ContactOptionWrapper>
                <img src={chat} alt="whatsapp" />
                <ContactCapsule>Start Chat with seller</ContactCapsule>
              </ContactOptionWrapper>
            </>
          ) : (
            <>
              {" "}
              <ContactOptionWrapper>
                <img src={call} alt="phone" />
                <ContactCapsule>{seller.phone}</ContactCapsule>
              </ContactOptionWrapper>
              <ContactOptionWrapper>
                <img src={chat} alt="whatsapp" />
                <ContactCapsule>Start Chat with seller</ContactCapsule>
              </ContactOptionWrapper>
            </>
          )}
        </DescriptionGallery>
      </ProductDescriptionWrapper>
    </>
  );
};

const ProductDescriptionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-between;
  margin-bottom: 5vh;
`;

const ImageGallery = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 55%;
  height: 45vh;
`;
const DescriptionGallery = styled.div`
  font-family: Montserrat;
  width: 40%;
  height: 45vh;
`;
const ImageEmphasis = styled.div`
  background-image: url("${(props) => {
    props.background;
  }}");
  backgroundrepeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  height: 100%;
  width: 65%;
`;
const ImageDisplayWrapper = styled.div`
  height: fit-content;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const ImageDisplay = styled.div`
  border-radius: 10px;
  width: 100%;
  height: 120px;
  margin: 5px;
`;

const DescriptionHeader = styled.div`
  width: 100%;
  font-family: Montserrat;
  font-weight: 900;
  font-size: 1.5rem;
  color: ${Colors.DEEP};
  padding: 10px;
`;

const DescriptionRatings = styled.div`
  width: 100%;
  padding: 10px;
`;
const DescriptionPrice = styled.div`
  font-family: Montserrat;
  font-weight: 900;
  font-size: 1.8rem;
  padding: 15px 10px;
  border-top: 1px solid ${Colors.GREY};
  border-bottom: 1px solid ${Colors.GREY};
`;
const DescriptionInfo = styled.div`
  // width: 100%;
  // padding: 10px 0px;
  font-family: Montserrat;
  font-size: 0.7rem;
`;
const ContactOptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
`;

const ContactCapsule = styled.div`
  padding: 5px;
  border: 3px solid ${Colors.PRIMARY_DEEP};
  border-radius: 10px;
  text-align: center;
  font-family: Montserrat;
  font-weight: 600;
  font-size: 0.7rem;
  width: 65%;
`;

export default ProductDescription;
