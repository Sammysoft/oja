/* eslint-disable */

import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router";
// import Swal from "sweetalert2";
import left from "../../assets/svg/left_arrow.svg";
import axios from "axios";
import { api } from "../../strings";
import { Colors } from "../../assets/styles";
import styled from "styled-components";
import { AuthContext } from "../../loginContext";
import Message from "./Message";

const AllProducts = () => {
  const { getUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [deleteProduct, setDeleteProduct] = useState(false);

  const [show, setShow] = useState(true);
  const [message, setMessage] = useState("");
  const [color, setColor] = useState("");

  useEffect(() => {
    axios.get(`${api}/products`).then((res) => {
      setProducts(res.data.data);
    });
  }, [deleteProduct]);

  // useEffect(()=>{
  //   if(getUser.fullname === null){
  //     navigate("/")
  //   }
  // },[getUser])

  const _deleteProduct = (id) => {
    axios
      .post(`${api}/item/delete/${id}`)
      .then((res) => {
        // Swal.fire({
        //   title: "Deleted Successfully",
        //   text: res.data.data,
        // });
        setShow(true);
        setMessage(`Deleted successfully,, ${res.data.data}`);
        setColor("green");
        setDeleteProduct(!deleteProduct);
      })
      .catch((error) => {
        // Swal.fire({
        //   title: "Oops",
        //   text: error.response.data,
        // });
        setShow(true);
        setMessage(`Oops, ${error.response.data.data}`);
        setColor("red");
      });
  };

  return (
    <>
      <Message
        background={color}
        text={message}
        show={show}
        setShow={setShow}
      />
      <Header>
        <span
          style={{
            fontFamily: "Montserrat",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <img
            src={left}
            alt="pointer"
            onClick={() => {
              navigate(-1);
            }}
            style={{ width: 40, height: 40 }}
          />{" "}
          back
        </span>
        <AvailableProducts>
          Manage Products ({products.length})
        </AvailableProducts>
      </Header>
      <ProductWrapper>
        {products.map((item, id) => {
          return (
            <>
              <ProductCard key={id}>
                <ProductImage src={item.item_pictures[0]}></ProductImage>
                <ProductName>{item.item_name}</ProductName>
                <ProductPrice>
                  NGN{" "}
                  {Number(item.item_price).toLocaleString("en-US", {
                    minimumFractionDigits: 0,
                  })}
                </ProductPrice>
                <ButtonWrapper>
                  <Button
                    background={"#08003C"}
                    onClick={() => {
                      navigate(`/product/view/${item._id}`);
                    }}
                  >
                    View
                  </Button>
                  <Button
                    background={"#DD1919"}
                    onClick={() => {
                      _deleteProduct(item._id);
                    }}
                  >
                    Delete
                  </Button>
                </ButtonWrapper>
              </ProductCard>
            </>
          );
        })}
      </ProductWrapper>
    </>
  );
};

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 20px;
`;

const AvailableProducts = styled.div`
  font-family: Montserrat;
  font-weight: 800;
  width: 60%;
  text-align: center;
`;

const ProductWrapper = styled.div`
  width: 90%;
  margin: 10px 5% 10px 5%;
  padding: 10px;
  border-radius: 8px;
  background-color: ${Colors.WHITE};
  height: 90vh;
  overflow-y: scroll;
  display: grid;
  grid-template-columns: 48% 48%;
  column-gap: 4%;
  row-gap: 10px;
`;

const ProductCard = styled.div`
  background: #ffffff;
  box-shadow: 1px 3px 11px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  height: 35vh;
`;

const ProductImage = styled.div`
  width: 100%;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  height: 60%;
  background-image: url("${(props) => props.src}");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 25% center;
`;

const ProductName = styled.div`
  width: 100%;
  text-align: center;
  font-family: Montserrat;
  color: ${Colors.PRIMARY};
  padding: 5px;
`;

const ProductPrice = styled.div`
  color: ${Colors.PRIMARY};
  font-family: Montserrat;
  font-weight: 900;
  font-size: 1rem;
  width: 100%;
  text-align: center;
  padding: 5px;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.div`
  border-radius: 8px;
  padding: 10px 5px;
  text-align: center;
  color: white;
  font-weight: 800;
  font-famly: Montserrat;
  background: ${(props) => props.background};
  width: 48%;
`;

export default AllProducts;
