import React from "react";
import styled from "styled-components";
import left from "../../assets/svg/left_arrow.svg";
import image from "../../assets/phone2.png";
import { Colors } from "../../assets/styles";
import chat from "../../assets/svg/chat_dot.svg";
import call from "../../assets/svg/call.svg";

const ItemDescription = () => {
  return (
    <>
      <ItemDescriptionWrapper>
        <HeaderWrapper>
          <img src={left} alt="left-arrow" width={30} height={50} />
          <ItemName>Apple Iphone XR 64GB with Face ID</ItemName>
        </HeaderWrapper>
        <ProductOwner>
          Uploaded By: Idowu shopping {"  "} 🌟 3.5/5.0
        </ProductOwner>
        <ProductFilterWrapper>
          <ProductChoiceSelect>
            <ProductOption>All Categories</ProductOption>
          </ProductChoiceSelect>
          <ProductChoiceSelect>
            <ProductOption>Lagos</ProductOption>
          </ProductChoiceSelect>
          <ProductChoiceSelect>
            <ProductOption>Surulere</ProductOption>
          </ProductChoiceSelect>
        </ProductFilterWrapper>
      </ItemDescriptionWrapper>
      <ProductGalleryWrapper>
        <ProductGallery>
          <img
            src={image}
            alt="product"
            width={"100%"}
            height={"100%"}
            style={{ borderRadius: "15px" }}
          />
        </ProductGallery>
        <RightGallery>
          <LittleGallery>
            <img
              src={image}
              alt="product"
              width={"100%"}
              height={"100%"}
              style={{ borderRadius: "15px" }}
            />
          </LittleGallery>
          <LittleGallery>
            <img
              src={image}
              alt="product"
              width={"100%"}
              height={"100%"}
              style={{ borderRadius: "15px" }}
            />
          </LittleGallery>
          <LittleGallery>
            <img
              src={image}
              alt="product"
              width={"100%"}
              height={"100%"}
              style={{ borderRadius: "15px" }}
            />
          </LittleGallery>
          <LittleGallery>
            <img
              src={image}
              alt="product"
              width={"100%"}
              height={"100%"}
              style={{ borderRadius: "15px" }}
            />
          </LittleGallery>
        </RightGallery>
      </ProductGalleryWrapper>
      <ProductPrice>Asking Price: #190,000</ProductPrice>
      <ProductDescription>
        Maecenas pulvinar sagittis sit vehicula urna in at. Ele at scelerisque
        et, nunc. Etiam enim neque sollicitudin proin nisi commodo ornare eu.
        Volutpat nisl sed pulvin ac cursus ultrices volutpat tincidunt mi.
        Placerat nunc quis pretium velit rhoncus pharetra.Volutpat nisl sed
        pulvin ac cursus ultrices volutpat tincidunt mi. Placer nunc quis
        pretium velit rhoncus pharetra. Deux nima.
      </ProductDescription>
      <ContactButtonWrapper>
        <ContactButton>
          <img src={call} alt="call seller" height={"25px"} width={"25px"} />{" "}
          09064545706
        </ContactButton>
        <ContactButton>
          <img src={chat} alt="chat seller" height={"25px"} width={"25px"} />{" "}
          start chat with seller
        </ContactButton>
      </ContactButtonWrapper>
    </>
  );
};

const ProductPrice = styled.div`
  width: 95%;
  margin: 5%;
  border-top: 2px solid ${Colors.GREY};
  border-bottom: 2px solid ${Colors.GREY};
  text-align: center;
  font-weight: 900;
  font-size: 1.5rem;
  font-family: Montserrat;
  padding: 10px;
`;

const ProductOwner = styled.div`
  width: 100%;
  padding: 0px 5% 5% 5%;
  font-family: Montserrat;
  font-weight: 800;
`;

const ProductDescription = styled.div`
  width: 100%;
  padding: 5px;
  font-family: Montserrat;
  text-align: justify;
`;

const ContactButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;

const ContactButton = styled.div`
  background: #ffffff;
  border: 2px solid #08003c;
  box-shadow: 0px 4px 36px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  font-family: Montserrat;
  color: ${Colors.PRIMARY};
  padding: 10px;
  margin: 10px 0px;
  font-size: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const ProductGalleryWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 40vh;
  align-items: center;
  justify-content: space-between;
`;

const ProductGallery = styled.div`
  height: 100%;
  width: 75%;
  border-radius: 15px;
  box-shadow: 1px 3px 11px rgba(0, 0, 0, 0.2);
`;

const RightGallery = styled.div`
  height: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 23%;
`;

const LittleGallery = styled.div`
  width: 100%;
  border-radius: 8px;
  height: 9vh;
  box-shadow: 1px 3px 11px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
`;

const ItemDescriptionWrapper = styled.div`
  margin: 10vh 0px;
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 10px;
`;
const ItemName = styled.div`
  font-family: Montserrat;
  font-weight: 900;
  font-size: 2rem;
  text-align: center;
  width: 90%;
`;

const ProductFilterWrapper = styled.div`
  width: 100%;
  padding: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const ProductChoiceSelect = styled.select`
  background-color: ${Colors.DIRTY_WHITE};
  width: fit-content;
  font-family: Montserrat;
  padding: 15px;
  border-radius: 4px;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.17);
`;
const ProductOption = styled.option`
  font-family: Montserrat;
  color: ${Colors.PRIMARY_DEEP};
`;
export default ItemDescription;
