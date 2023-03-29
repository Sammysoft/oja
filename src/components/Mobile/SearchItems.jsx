/* eslint-disable */

import React, { useState, useEffect, useContext } from "react";
import { Colors } from "../../assets/styles";
import styled from "styled-components";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { api } from "../../strings";
import Swal from "sweetalert2";
import { AuthContext } from "../../loginContext";
import love from "../../assets/svg/heart_empty.svg";
import no_love from "../../assets/svg/heart_filled.svg";
import whatsapp from "../../assets/svg/whatsapp.svg";
import email from "../../assets/svg/email.svg";
import mobile from "../../assets/svg/mobile.svg";

const SearchItems = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const { getUser } = useContext(AuthContext);
  useEffect(() => {
    axios
      .post(`${api}/product/category`, { query: searchParams.get("category") })
      .then((res) => {
        setProducts(res.data.data);
      })
      .catch((error) => console.log(error.response.data));
  }, [searchParams]);

  const [selectedItem, setSelectedItem] = useState(null);

  const setLiked = (id) => {
    axios
      .post(`${api}/product/like`, { id: id, user_id: getUser._id })
      .then((res) => {
        Swal.fire({
          title: "Added to favourites",
          text: `${res.data.data}`,
        });
      })
      .catch((error) =>
        Swal.fire({ title: "Oops", text: error.response.data.data })
      );
  };

  const handleCall = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <>
      <SearchItemWrapper>
        <Header>{searchParams.get("category")}</Header>
        <ProductListingWrapper>
          <ProductListingWrapper>
            {products.length === 0 ? (
              <>
                <Info>No Product Yet!</Info>
              </>
            ) : (
              <>
                {products.map((ads, index) => (
                  <ProductItem key={index}>
                    <div
                      style={{
                        backgroundImage: `url('${ads.item_pictures[0]}')`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "25% center",
                        borderTopRightRadius: "15px",
                        borderTopLeftRadius: " 15px",
                        height: "60%",
                        width: "100%",
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
                          setLiked(ads._id);
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
                      <ItemContactIcon
                        onClick={() => {
                          handleCall(ads.item_phone);
                        }}
                      >
                        <img src={mobile} alt="mobile" />
                      </ItemContactIcon>
                    </ItemContact>
                  </ProductItem>
                ))}
              </>
            )}
          </ProductListingWrapper>
        </ProductListingWrapper>
      </SearchItemWrapper>
    </>
  );
};

export default SearchItems;


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

const Info = styled.div`
  width: 90vw;
  height: 60vh;
  font-family: Montserrat;
  font-weight: 100;
  color: ${Colors.PRIMARY};
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.7;
`;

const SearchItemWrapper = styled.div`
  margin: 10vh 0px 10px 0px;
  width: 100%;
`;

const Header = styled.div`
  width: 100%;
  padding: 10px 30px 10px 10px;
  font-family: Montserrat;
  color: ${Colors.PRIMARY};
  font-weight: 800;
  text-align: center;
  font-size: 1.5rem;
`;

const ProductListingWrapper = styled.div`
  width: 95vw;
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 5%;
  margin-top: 2vh;
  padding: 5px;
  height: 70vh;
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
  height: 40vh;
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
const Button = styled.div`
color: white;
background-color: ${Colors.PRIMARY};
border-radius: 5px;
padding: 5px 15px;
text-align: center;
font-family: Montserrat;
margin; 20px;
width: 80%;
`;
