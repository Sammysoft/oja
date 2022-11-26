/* eslint-disable */

import React from "react";
import styled from "styled-components";
import { Colors } from "../../assets/styles";
import { Adverts } from "../../assets/data";
import ads3 from "../../assets/ads3.png";
import ads1 from "../../assets/ads1.png";
import { category } from "../../assets/data";
import plus from "../../assets/svg/plus_circle.svg";

const ItemsList = ({ setShowModal }) => {
  return (
    <>
      <ItemsListWrapper>
        <LeftWrapper>
          <AdvertBanner
            advert={Adverts[2]}
            reverse={2}
            img_src={ads3}
            background={Colors.DEEP_GREEN}
            button={"Shop Now"}
          />
          <AdvertBanner
            advert={Adverts[0]}
            reverse={1}
            img_src={ads1}
            background={Colors.CHOCOLATE}
            text={`3px solid ${Colors.WHITE}`}
            button={"Sell my item"}
          />
        </LeftWrapper>
        <RightWrapper>
          <Items Items={category.cars} setShowModal={setShowModal} />
        </RightWrapper>
      </ItemsListWrapper>
    </>
  );
};

const ItemsListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 80%;
  height: fit-content;
`;

const LeftWrapper = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

const RightWrapper = styled.div`
  margin-left: 5vw;
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 2.5%;
`;

const ItemCapsule = styled.div`
  height: stretch;
  box-shadow: 1px 3px 11px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: ${Colors.WHITE};
  margin: 30px 0px;
  cursor: pointer;
  min-height: 30vh;
`;
const AddItem = styled.div`
  height: stretch;
  box-shadow: 1px 3px 11px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: ${Colors.CHOCOLATE};
  font-family: Montserrat;
  text-align: center;
  color: ${Colors.WHITE};
  min-height: 30vh;
  width: 100%;
  cursor: pointer;
  margin: 30px 0px;
`;

const StateButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: space-between;
  justify-content: space-between;
  width: 100%;
`;

const StateButton = styled.div`
  font-family: Montserrat;
  text-align: center;
  padding: 5px;
  border-radius: 5px;
  width: 45%;
  background-color: ${(props) =>
    props.state === "edit" ? `${Colors.DEEP_GREEN}` : `${Colors.RED}`};
  color: ${Colors.WHITE};
`;

var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {''
    preventDefault(e);
    return false;
  }
}

var supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; }
  }));
} catch(e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';
function preventDefault(e) {
  e.preventDefault();
}

function disableScroll() {
  window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.addEventListener(wheelEvent, preventDefault, wheelOpt);
  window.addEventListener('touchmove', preventDefault, wheelOpt);
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

const Items = ({ img_src, Items, setShowModal }) => {
  return (
    <>
      <AddItem>
        <img src={plus} alt="plus" />
        <span
          onClick={() => {
            setShowModal(true);
            disableScroll();
          }}
        >
          Add new Item for sale
        </span>
      </AddItem>
      {Items.map((item) => (
        <ItemCapsule img={img_src} Items={Items}>
          <img src={item.img_src} alt="about" width={"95%"} />
          <span style={{ fontFamily: "Montserrat", textAlign: "center" }}>
            {item.item_name}
          </span>
          <StateButtonWrapper>
            <StateButton state={"edit"}>Edit</StateButton>
            <StateButton state={"delete"}>Delete</StateButton>
          </StateButtonWrapper>
        </ItemCapsule>
      ))}
      {Items.map((item) => (
        <ItemCapsule img={item.img_src} Items={Items}>
          <img src={item.img_src} alt="about" width={"95%"} />
          <span style={{ fontFamily: "Montserrat", textAlign: "center" }}>
            {item.item_name}
          </span>
          <StateButtonWrapper>
            <StateButton state={"edit"}>Edit</StateButton>
            <StateButton state={"delete"}>Delete</StateButton>
          </StateButtonWrapper>
        </ItemCapsule>
      ))}
    </>
  );
};

const AdvertBanner = ({
  advert,
  reverse,
  img_src,
  background,
  text,
  button,
}) => {
  return (
    <>
      <AdvertWrapper advert={advert} background={background}>
        <AdvertBannerLeft reverse={2} advert={advert}>
          <img
            src={img_src}
            alt={"ads"}
            width="120%"
            height={200}
            style={{ marginBottom: "-40px", top: "0px" }}
          />
        </AdvertBannerLeft>
        <AdvertBannerRight reverse={reverse}>
          <AdvertTextWrapper advert={advert} text={text}>
            {advert.text}
          </AdvertTextWrapper>
          <Button>{button}</Button>
        </AdvertBannerRight>
      </AdvertWrapper>
    </>
  );
};

const AdvertWrapper = styled.div`
  background-color: ${(props) => props.background};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 25vh;
  width: 100%;
  border-radius: 0px 15px 15px 0px;
  margin: 30px 0px;
`;

const AdvertBannerLeft = styled.div`
  order: ${(props) => props.reverse};
  width: 45%;
`;

const AdvertBannerRight = styled.div`
  width: 55%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  order: ${(props) => props.reverse};
`;

const AdvertTextWrapper = styled.div`
  color: ${Colors.WHITE};
  font-weight: 900;
  font-family: Montserrat;
  text-align: left;
  padding-left: 5px;
  border-left: ${(props) => props.text};
  margin-left: 10px;
  font-family: Montserrat;
  font-size: 1.2rem;
`;

const Button = styled.div`
  padding: 10px;
  color: ${Colors.PRIMARY_DEEP};
  background-color: ${Colors.WHITE};
  margin-left: 10px;
  border-radius: 10px;
  font-family: Montserrat;
  cursor: pointer;
`;

export default ItemsList;
