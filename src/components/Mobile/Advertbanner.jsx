import React from "react";
import styled from "styled-components";
import { Colors } from "../../assets/styles";
import { Adverts } from "../../assets/data";
import { Welcome } from "./WelcomeText";

const AdvertBannerWrapper = styled.div`
display: flex;
flex-direction: row;
align-items: center;
overflow-x: scroll;
width: auto;
`;

const AdvertDisplay = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: fit-content;
  height: 20vh;
  background-color: ${(props)=>props.background};
  border-radius: 15px;
  margin: 5vh 5vw 5vh 5px;
`;

const AdvertDisplayText = styled.div`
  font-family: Montserrat;
  font-weight: 700;
  font-size: 1rem;
  color: ${Colors.WHITE};
  height: 7vh;
  margin-left: 20px;
  border-left: 3px solid ${Colors.WHITE};
  margin: 20px;
  padding-left: 10px
`;

const AdvertBanner = () => {
  return (
    <>
      <Welcome />
      <AdvertBannerWrapper>
        {Adverts.map((ads, id) => {
          return (
            <>
              <AdvertDisplay key={id} background={ads.background}>
                <AdvertDisplayText>{ads.text}</AdvertDisplayText>
                <img src={ads.img_src} alt="advert" height="180" width="150"/>
              </AdvertDisplay>
            </>
          );
        })}
      </AdvertBannerWrapper>
    </>
  );
};

export default AdvertBanner;
