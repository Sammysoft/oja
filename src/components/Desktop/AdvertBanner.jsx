/* eslint-disable */

import React from "react";
import styled from "styled-components";
import { Colors } from "../../assets/styles";


const AdvertBanner = ({ adverts }) => {

  return (
    <>
      {adverts.map((element, id) => {
        return (
          <>
            <AdvertWrapper style={{backgroundColor: element.background}} key={id}>
              <TextHolder>{element.text}</TextHolder>
              <img
                src={element.img_src}
                alt="ads"
                style={{ width: 200, height: "40vh" }}
              />
            </AdvertWrapper>
          </>
        );
      })}
    </>
  );
};

const AdvertWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 25vh;
  border-radius: 15px;
  width: 30%;
  padding-left: 20px;
  position: relative;
  justify-content: center;
  z-index: -1;
`;
const TextHolder = styled.div`
  color: ${Colors.WHITE};
  font-family: Montserrat;
  width: 40%;
  padding: 20px;
  border-left: 6px solid ${Colors.WHITE};
`;
export default AdvertBanner;
