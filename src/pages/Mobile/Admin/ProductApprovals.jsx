/* eslint-disable */

import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import NavBar from "../../../components/Mobile/navbar";
import Advert from "../../../components/Mobile/advert";
import { Colors } from "../../../assets/styles";
import man_hair from "../../../assets/man_hair.png";
import Footer from "../../../components/Mobile/footer";
import ProductApproval from "../../../components/Mobile/productApprovals";
import { LoginContext } from "../../../loginContext";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";


const ProductApprovals = () => {
    const navigate = useNavigate()
    const { user }  = useContext(LoginContext);
    useEffect(()=>{
        if(user.fullname === "" || user.usertype !== "Admin"){
                navigate("/");
                Swal.fire({
                    title:"Please Login",
                    text: "Please login before you can approve products!"
                })
        }
    },[user])

  return (
    <>
      <PageWrapper>
        <NavBar />
      </PageWrapper>
      <ProductApprovalPageWrapper>
        <ProductApproval />
      </ProductApprovalPageWrapper>
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

export default ProductApprovals;
