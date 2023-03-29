import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../loginContext";
import axios from "axios";
import { api } from "../../strings";
import styled from "styled-components";
import { Colors } from "../../assets/styles";
import whatsapp from "../../assets/svg/whatsapp.svg";
import email from "../../assets/svg/email.svg";
import mobile from "../../assets/svg/mobile.svg";
import love from "../../assets/svg/heart_empty.svg";
import no_love from "../../assets/svg/heart_filled.svg";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Favourites = () => {
  const { getUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [favourites, setFavourites] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    axios
      .get(`${api}/product/get/likes/${getUser._id}`)
      .then((res) => {
        setFavourites(res.data.data);
      })
      .catch((error) =>
        Swal.fire({ title: "Oops", text: error.response.data.data })
      );
  });

  return (
    <>
      <div
        style={{
          fontFamily: "Montserrat",
          fontWeight: 700,
          fontSize: "1.5rem",
          width: "100%",
          textAlign: "center",
          marginTop: "15vh"
        }}
      >
        My Favourites
      </div>
      <ProductListingWrapper>
        {favourites.map((ads, index) => (
          <ProductItem key={index}>
            <div
              style={{
                backgroundImage: `url('${ads.item_pictures[0]}')`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "25% center",
                borderTopRightRadius: "15px",
                borderTopLeftRadius: " 15px",
                height: " 60%",
                width: " 100%",
                position: "relative",
              }}
            >
              <img
                src={
                  selectedItem === index ||
                  ads.item_likes.indexOf(getUser._id) !== -1
                    ? no_love
                    : love
                }
                style={{
                  position: "absolute",
                  top: "10px",
                  left: "10px",
                  width: "30px",
                  height: "30px",
                }}
                alt={"love"}
                onClick={() => {
                  setSelectedItem(index);
                  // setLiked(ads._id);
                }}
              />
              <div
                onClick={() => {
                  navigate(`/item/description/${ads._id}`);
                }}
                style={{
                  position: "absolute",
                  height: "75%",
                  width: "100%",
                  bottom: "0px",
                }}
              ></div>
            </div>
            <ProductItemName>{ads.item_name}</ProductItemName>
            <ProductPrice>
              NGN{" "}
              {Number(ads.item_price).toLocaleString("en-US", {
                minimumFractionDigits: 0,
              })}
            </ProductPrice>
            <ItemContact>
              <ItemContactIcon>
                <a
                  href={`http://wa.me/${ads.item_phone}?text=I am messaging you about ${ads.item_name} on oja-online for NGN ${ads.item_price}, `}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={whatsapp} alt="whatsapp" />
                </a>
              </ItemContactIcon>
              <ItemContactIcon>
                <a
                  href={`mailto:${ads.item_email}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={email} alt="email" />
                </a>
              </ItemContactIcon>
              <ItemContactIcon>
                <img src={mobile} alt="mobile" />
              </ItemContactIcon>
            </ItemContact>
          </ProductItem>
        ))}
      </ProductListingWrapper>
    </>
  );
};

const ItemContact = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  padding: 5px;
`;
const ItemContactIcon = styled.div`
width: 100px,
height: 100px;
`;
const ProductListingWrapper = styled.div`
  width: 100vw;
  display: grid;
  grid-template-columns: 48% 48%;
  gap: 2%;
  margin-top: 3vh;
  padding-left: 2%;
  height: 80vh;
  overflow-y: scroll;
`;
const ProductItem = styled.div`
  background: ${Colors.WHITE};
  border-radius: 15px;
  box-shadow: 1px 3px 11px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: ${(props) => props.padding};
  height: 35vh;
`;

const ProductItemName = styled.div`
  font-family: Montserrat;
  font-weight: 400;
  font-size: 1rem;
  color: ${Colors.PRIMARY_DEEP};
  padding: 10px;
  text-align: center;
`;

const ProductPrice = styled.div`
  font-family: Montserrat;
  font-weight: 900;
  font-size: 1rem;
  color: ${Colors.PRIMARY_DEEP};
  padding: 10px;
  text-align: center;
`;
export default Favourites;
