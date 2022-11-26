import React from "react";
import styled from "styled-components";
import { Colors } from "../../assets/styles";


const Advert = ({ background, text, orientation, image, button, headText }) => {
  return (
    <>
      <AdvertWrapper orientation={orientation} background={background}>
        <ImageWrapper
          src={image}
          alt={"advert_img"}
        />
        <TextWrapper>
          <div
            style={{
              fontFamily: "Montserrat",
              fontWeight: "900",
              fontSize: "1.2rem",
              color: Colors.PRIMARY_DEEP
            }}
          >
            {headText}
          </div>
          <div
            style={{
              fontFamily: "Montserrat",
              fontWeight: "900",
              fontSize: "1rem",
            }}
          >
            {text}
          </div>
          <Button>{button}</Button>
        </TextWrapper>
      </AdvertWrapper>
    </>
  );
};

const AdvertWrapper = styled.div`
  width: 100%
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around;
  height: 30vh;
  background-color: ${(props) => props.background};
  margin: 8vh 5px 8vh 5px;
  border-radius: 8px;

`;

const ImageWrapper = styled.img`
  height: 200px;
  width: 200px;
`;

const TextWrapper = styled.div`
  width: 70%;
  height: 90%;
  font-family: Montserrat;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  color: ${Colors.WHITE};
  padding: 10px;
`;

const Button = styled.div`
  padding: 5px 5px;
  color: ${Colors.PRIMARY_DEEP};
  background-color: ${Colors.WHITE};
  border-radius: 4px;
  text-align: center;
`;
export default Advert;
