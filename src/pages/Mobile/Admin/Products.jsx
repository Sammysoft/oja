/* eslint-disable */

import React  from "react";
import styled from "styled-components";
import NavBar from "../../../components/Mobile/navbar";
import Advert from "../../../components/Mobile/advert";
import { Colors } from "../../../assets/styles";
import man_hair from "../../../assets/man_hair.png";
import Footer from "../../../components/Mobile/footer";
import AllProducts from "../../../components/Mobile/AllProducts";
// import { LoginContext } from "../../../loginContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
// import { LoginContext } from "../../../loginContext";
// import { useNavigate } from "react-router";
// import Swal from "sweetalert2";

const Product = () => {
    const navigate = useNavigate()
    // const { user } = useContext(LoginContext);
    // useEffect(()=>{
    //     if (user.fullname === "" || user.usertype !== "Admin") {
    //         navigate("/");
    //         Swal.fire({
    //           title: "Oops ",
    //           text: "You are unauthorized, please login again!",
    //         });
    //       }
    // }, [user])
  return (
    <>
      <PageWrapper>
        <NavBar />
      </PageWrapper>
      <ProductApprovalPageWrapper>
        <AllProducts />
      </ProductApprovalPageWrapper>
      <br/><br/><br/>
      <Advert
        background={Colors.DIRTY_GREEN}
        text={"Find the style that fits YOU!"}
        image={man_hair}
        button={"Go to fashion"}
        orientation={false}
      />
      <Footer />
    </>
  );
};


const PageWrapper = styled.div`
width: 100%;
height: fit-content:
padding: 0px;
box-sizing: border-box;
`;

const ProductApprovalPageWrapper = styled.div`
  width: 100%;
  height: fit-content;
  margin: 10vh 0px 0px 0px;
`;
export default Product;
