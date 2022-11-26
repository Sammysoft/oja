/* eslint-disable */

import React from "react";
import Footer from "../../components/Desktop/Footer";
import NavBar from "../../components/Desktop/navbar";
import ItemsList from "../../components/Desktop/ItemsList";
import styled from "styled-components";
import { Colors } from "../../assets/styles";
import UploadItemForm from "../../components/Desktop/uploaditemform";


const PageWrapper = styled.div`
  padding: 0vh 10vw;
`;

const ModalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0px;
  z-index: 1;
  top: 0px;
  background-color: rgba(0,0,0,0.6);
`;

const ModalBody = styled.div`
background-color: white;
border-radius: 8px;
padding: 20px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 80vw:
height: 70vh;
position: relative;
`;

const ModalHead = styled.div`
  width: 100%;
  text-align: center;
  font-size: 2rem;
  color: ${Colors.PRIMARY_DEEP};
  font-family: Montserrat;
  font-weight: 900;
  padding: 10px 20vw;
`;

const ModalContent = styled.div`
padding: 10px;
width: 80%;
height: 80vh;
`

const ItemListPage = () => {
  const [showModal, setShowModal] = React.useState(Boolean);
  return (
    <>
      <PageWrapper>
        <NavBar />
      </PageWrapper>
      <ItemsList setShowModal={setShowModal} />
      <br />
      <br />
      <Footer />
      {showModal === true ? (
        <>
          <ModalWrapper>
            <ModalBody>
              <ModalHead>Upload Your Item</ModalHead>
              <ModalContent>
                <UploadItemForm setShowModal={setShowModal} />
              </ModalContent>
            </ModalBody>
          </ModalWrapper>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default ItemListPage;
