import React from "react";
import styled from "styled-components";






const Footer = () => {
  const showYear =()=>{
    const date = new Date();
    return date.getFullYear()
  }
  return (
    <>
      <CopyWriteSection> COPYRIGHT (C) {showYear()}. OJAONLINE.NG</CopyWriteSection>
    </>
  );
};

export default Footer;

const CopyWriteSection = styled.div`
  width: 100%;
  height: fit-content;
  padding: 10px;
  text-align: center;
  font-family: Montserrat;
  padding-bottom: 10vh;
`;


