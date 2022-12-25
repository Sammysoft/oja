/* eslint-disable */

import React, { useState, useEffect } from "react";
import { Colors } from "../../assets/styles";
import styled from "styled-components";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { api } from "../../strings";
import Swal from "sweetalert2";


const SearchItems = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .post(`${api}/product/category`, { query: searchParams.get("category") })
      .then((res) => {
        setProducts(res.data.data);
      })
      .catch((error) => console.log(error.response.data));
  }, [searchParams]);

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
                {" "}
                {products.map((product, index) => (
                  <ProductItem key={index}>
                    <img
                      src={product.item_pictures[0]}
                      alt="product"
                      style={{
                        height: "50%",
                        width: "100%",
                        padding: "5px",
                        borderTopLeftRadius: "8px",
                        borderTopRightRadius: "8px",
                      }}
                    />
                    <ProductItemName>{product.item_name}</ProductItemName>
                    <ProductPrice>
                      NGN{" "}
                      {Number(product.item_price).toLocaleString("en-US", {
                        minimumFractionDigits: 0,
                      })}
                    </ProductPrice>
                    <Button
                      onClick={() => {
                        navigate(`/item/description/${product._id}`);
                      }}
                    >
                      View
                    </Button>
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
  opacity: .7;
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
