import React from "react";
import styled from "styled-components";
import phone1 from "../../assets/phone1.png";
import { Colors } from "../../assets/styles";
import call from "../../assets/svg/call.svg";
import chat from "../../assets/svg/chat_dot.svg";

const ProductDescription = () => {
  return (
    <>
      <ProductDescriptionWrapper>
        <ImageGallery>
          <ImageEmphasis src={phone1} alt="desc" />
          <ImageDisplayWrapper>
            <ImageDisplay src={phone1} alt="desc" />
            <ImageDisplay src={phone1} alt="desc" />
            <ImageDisplay src={phone1} alt="desc" />
            <ImageDisplay src={phone1} alt="desc" />
          </ImageDisplayWrapper>
        </ImageGallery>
        <DescriptionGallery>
          <DescriptionHeader>
            Apple iPhone XR 64gb with FaceID
          </DescriptionHeader>
          <DescriptionRatings>
            Uploaded by: Adbul Olakehinde {"  "} ⭐ 3.5/5.0
          </DescriptionRatings>
          <DescriptionPrice># 109,500</DescriptionPrice>
          <DescriptionInfo>
            Maecenas pulvinar sagittis sit vehicula urna in at. Elementum, at
            scelerisque et, nunc. Etiam enim neque sollicitudin proin nisi
            commodo ornare eu. Volutpat nisl sed pulvinar ac cursus ultrices
            volutpat tincidunt mi. Placerat nunc quis pretium velit rhoncus
            pharetra.
          </DescriptionInfo>
          <ContactOptionWrapper>
            <img src={call} alt="phone" />
            <ContactCapsule>View Contact</ContactCapsule>
          </ContactOptionWrapper>
          <ContactOptionWrapper>
            <img src={chat} alt="whatsapp" />
            <ContactCapsule>Start Chat with seller</ContactCapsule>
          </ContactOptionWrapper>
        </DescriptionGallery>
      </ProductDescriptionWrapper>
    </>
  );
};

const ProductDescriptionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-between;
  margin-bottom: 5vh;
`;

const ImageGallery = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 45%;
`;
const DescriptionGallery = styled.div`
  font-family: Montserrat;
  width:50%;
`;
const ImageEmphasis = styled.img`
  border-radius: 10px;
  height: 100%;
  width: 65%;
`;
const ImageDisplayWrapper = styled.div`
  height: 100%;
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const ImageDisplay = styled.img`
  border-radius: 10px;
  width: 100%;
  height: 20%;
`;

const DescriptionHeader = styled.div`
  width: 100%;
  font-family: Montserrat;
  font-weight: 900;
  font-size: 1.5rem;
  color: ${Colors.DEEP};
  padding: 10px;
`;

const DescriptionRatings = styled.div`
  width: 100%;
  padding: 10px;
`;
const DescriptionPrice = styled.div`
  font-family: Montserrat;
  font-weight: 900;
  font-size: 1.8rem;
  padding: 15px 10px;
  border-top: 1px solid ${Colors.GREY};
  border-bottom: 1px solid ${Colors.GREY};
`;
const DescriptionInfo = styled.div`
  // width: 100%;
  // padding: 10px 0px;
  font-family: Montserrat;
  font-size: 0.7rem;
`;
const ContactOptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
`;

const ContactCapsule = styled.div`
  padding: 5px;
  border: 3px solid ${Colors.PRIMARY_DEEP};
  border-radius: 10px;
  text-align: center;
  font-family: Montserrat;
  font-weight: 600;
  font-size: 0.7rem;
  width: 65%;
`;

export default ProductDescription;
