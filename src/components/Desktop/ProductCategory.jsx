/* eslint-disable */

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Colors } from "../../assets/styles";
import axios from "axios";
import { api } from "../../strings";
import { Loader } from "semantic-ui-react";

const ProductsCategory = ({ products }) => {
  const [loading, setLoading] = useState(Boolean);

  return (
    <>
      {products.length === 0 ? (
        <></>
      ) : (
        <>
          <ProductListingWrapper>
            {loading === true ? (
              <>
                <Loader active inline="centered" />
              </>
            ) : (
              <>
                <ProductCapsules products={products} />
              </>
            )}
          </ProductListingWrapper>
        </>
      )}
    </>
  );
};

const ProductCapsules = ({ products }) => {
  const navigate = useNavigate();
  return (
    <>
      {products.map((ads, id) => {
        // console.log(ads);
        return (
          <>
            <ProductCapsuleWrapper key={id}>
              <div
                 onClick={() => {
                  navigate(`/product/${ads._id}`);
                }}
                style={{
                  backgroundImage: `url('${ads.item_pictures[0]}')`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "25% center",
                  borderTopRightRadius: "15px",
                  borderTopLeftRadius: " 15px",
                  height: "60%",
                  width: " 100%",
                }}
              ></div>
              <div
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: 500,
                  width: "90%",
                  textAlign: "center",
                  paddingTop: "5px",
                  color: Colors.PRIMARY_DEEP,
                  fontSize: "12px",
                }}
              >
                {ads.item_name}
              </div>
              <div
                style={{
                  fontFamily: "Montserrat",
                  textAlign: "center",
                  paddingTop: "5px",
                  color: Colors.PRIMARY_DEEP,
                  fontWeight: 700,
                  fontSize: "14px",
                }}
              >
                NGN{" "}
                {Number(ads.item_price).toLocaleString("en-US", {
                  minimumFractionDigits: 0,
                })}
              </div>
              <div
                onClick={() => {
                  navigate(`/product/${ads._id}`);
                }}
                style={{
                  color: Colors.WHITE,
                  backgroundColor: Colors.PRIMARY_DEEP,
                  padding: "5px 5px",
                  borderRadius: "10px",
                  width: "80%",
                  textAlign: "center",
                  marginTop: "5px",
                  fontFamily: "Montserrat",
                  marginBottom: "5px",
                  cursor: "pointer",
                }}
              >
                View
              </div>
            </ProductCapsuleWrapper>
          </>
        );
      })}
    </>
  );
};

const ProductListingWrapper = styled.div`
  width: fit-content;
  height: 150vh;
  display: grid;
  grid-template-columns: 23% 23% 23% 23%;
  gap: 10px;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  overflow-y: scroll;
`;

const ProductCapsuleWrapper = styled.div`
  box-shadow: 1px 3px 11px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  background: ${Colors.WHITE};
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 40vh;
`;
export default ProductsCategory;
