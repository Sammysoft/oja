/* eslint-disable */

import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";
import { Colors } from "../../assets/styles";
import left_arrow from "../../assets/svg/left_arrow.svg";
import plus from "../../assets/svg/plus_circle.svg";
import { category } from "../../assets/data";
import { useState } from "react";

const ListWrapper = styled.div`
  width: 100%;
  padding: 5px;
  display: grid;
  grid-template-columns: 48% 48%;
  gap: 4%;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0px;
`;

const ItemList = () => {
  const [toggleAdd, setToggleAdd] = useState(Boolean);
  const navigate = useNavigate();
  return (
    <>
      <Header>
        <span
          onClick={() => {
            navigate(-1);
          }}
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <img src={left_arrow} alt="back" width={25} height={40} />{" "}
          <span
            style={{
              fontFamily: "Montserrat",
              color: `${Colors.PRIMARY}`,
              fontWeight: "300",
            }}
          >
            back
          </span>
          <span
            style={{
              fontFamily: "Montserrat",
              padding: "0px 10px",
              color: `${Colors.PRIMARY}`,
              fontWeight: "700",
            }}
          >
            Active Items
          </span>
          <span
            style={{
              fontFamily: "Montserrat",
              padding: "0px 10px",
              color: `${Colors.PRIMARY}`,
              fontWeight: "700",
            }}
          >
            Declined
          </span>
        </span>
      </Header>
      <ListWrapper>
        <Card
          color={"white"}
          background={"#3C0300"}
          element={<AddItem setToggleAdd={setToggleAdd} />}
        />
        <Items />
      </ListWrapper>
      {toggleAdd === true ? (
        <>
          <AddItemModal />
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default ItemList;

const AddItemWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  top: 0px;
  left: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ItemModalWrapper = styled.div`
  background: white;
  width: 90%;
  height: 95vh;
  position: relative;
  overflow-y: scroll;
  border-radius: 10px;
`;

const ItemModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: fit-content;
  border-radius: 8px;
`;

const InputField = styled.input`
  width: 80%;
  border: 2px solid ${Colors.PRIMARY};
  border-radius: 8px;
  padding: 2vh 0px 2vh 20%;
  font-family: Montserrat;
  background-color: transparent;
  margin: 1vh 0px;
`;

const InputTextArea = styled.textarea`
  width: 80%;
  border: 2px solid ${Colors.PRIMARY};
  border-radius: 8px;
  padding: 2vh 0px 2vh 20%;
  font-family: Montserrat;
  background-color: transparent;
  margin: 1vh 0px;
  height: 15vh;
`;

const Head = styled.div`
  width: 100%;
  text-align: center;
  color: ${Colors.PRIMARY};
  font-weight: 800;
  font-family: Montserrat;
  padding: 20px 0px;
  font-size: 1.3rem;
`;

const ImageSectionWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const ImageSelector = styled.div`
  background-color: ${Colors.CHOCOLATE};
  font-family: Montserrat;
  color: white;
  border-radius: 8px;
  width: 48%;
  height: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ImageIndicatorWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 12%;
  height: 20vh;
  width: 48%;
`;
const ImageIndicator = styled.div`
  font-family: Montserrat;
  font-weight: 700;
  color: white;
  background: ${Colors.CHOCOLATE};
  text-align: center;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SubmitButton = styled.div`
background: ${Colors.PRIMARY};
color: white;
width: 80%;
padding: 2vh 0px;
text-align: center;
font-family: Montserrat;
border-radius: 8px;
margin: 5px; 0px;
font-weight: 900;
`;

const AddItemModal = () => {

  return (
    <>
      <AddItemWrapper>
        <ItemModalWrapper>
          <ItemModal>
            <Head>Upload your item</Head>
            <ImageSectionWrapper>
              <ImageSelector>
                <img src={plus} alt="plus" />
                <div
                  style={{
                    width: "100%",
                    fontFamily: "Montserrat",
                    fontWeight: "700",
                    textAlign: "center",
                    padding: "5px",
                  }}
                >
                  Upload photos (max.5)
                </div>
              </ImageSelector>
              <ImageIndicatorWrapper>
                <ImageIndicator>1</ImageIndicator>
                <ImageIndicator>2</ImageIndicator>
                <ImageIndicator>3</ImageIndicator>
                <ImageIndicator>4</ImageIndicator>
              </ImageIndicatorWrapper>
            </ImageSectionWrapper>
            <InputField type="text" placeholder="Item name" />
            <InputField type="text" placeholder="Select Item category" />
            <InputField type="text" placeholder="Select Item sub-category" />
            <InputTextArea
              type="text"
              placeholder="Item Description"
            ></InputTextArea>
            <InputField type="text" placeholder="Asking Price" />
            <SubmitButton
              onClick={() => {
               window.location.reload()
              }}
            >
              Submit Item for Approval
            </SubmitButton>
          </ItemModal>
        </ItemModalWrapper>
      </AddItemWrapper>
    </>
  );
};

const Card = ({ color, background, element }) => {
  return (
    <>
      <CardWrapper color={color} background={background}>
        {element}
      </CardWrapper>
    </>
  );
};

const AddItem = ({ setToggleAdd }) => {

  var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

  function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
      preventDefault(e);
      return false;
    }
  }

  var supportsPassive = false;
  try {
    window.addEventListener(
      "test",
      null,
      Object.defineProperty({}, "passive", {
        get: function () {
          supportsPassive = true;
        },
      })
    );
  } catch (e) {}

  var wheelOpt = supportsPassive ? { passive: false } : false;
  var wheelEvent =
    "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";
  function preventDefault(e) {
    e.preventDefault();
  }

  function disableScroll() {
    window.addEventListener("DOMMouseScroll", preventDefault, false);
    window.addEventListener(wheelEvent, preventDefault, wheelOpt);
    window.addEventListener("touchmove", preventDefault, wheelOpt);
    window.addEventListener("keydown", preventDefaultForScrollKeys, false);
  }

  return (
    <>
      <AddItemElement
        onClick={() => {
          disableScroll();
          setToggleAdd(true);
        }}
      >
        <div style={{ flex: "1" }}>
          <img src={plus} alt="plus" />
        </div>
        <div
          style={{
            flex: "1",
            padding: "10px",
            fontFamily: "Montserrat",
            textAlign: "center",
          }}
        >
          Add new Item for sale
        </div>
      </AddItemElement>
    </>
  );
};

const Items = () => {
  return (
    <>
      {category.phones.map((item, id) => (
        <ItemWrapper key={id}>
          <ItemImage src={item.img_src} alt="items" />
          <ItemDesc>{item.item_name}</ItemDesc>
          <ItemPrice>{item.item_price}</ItemPrice>
          <ActionButtonWrapper>
            <Button background={"green"}>Edit</Button>
            <Button background={"red"}>Delete</Button>
          </ActionButtonWrapper>
        </ItemWrapper>
      ))}
    </>
  );
};

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: 1px 3px 11px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
`;

const ItemImage = styled.img`
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  width: 100%;
  height: 50%;
`;

const ItemDesc = styled.div`
  color: ${Colors.PRIMARY};
  font-family: Montserrat;
  text-align: center;
  width: 70%;
`;

const ItemPrice = styled.div`
  color: ${Colors.PRIMARY};
  font-family: Montserrat;
  text-align: center;
  font-weight: 900;
  text-align: center;
  width: 70%;
  padding: 10px 0px;
`;

const ActionButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 5px;
`;

const Button = styled.div`
  color: white;
  background: ${(props) => props.background};
  padding: 10px 10px;
  font-family: Montserrat;
  width: 48%;
  border-radius: 5px;
  text-align: center;
`;

const AddItemElement = styled.div`
  width: 100%;
  min-height: 30vh;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
`;

const CardWrapper = styled.div`
  box-shadow: 1px 3px 11px rgba(0, 0, 0, 0.2);
  background: ${(props) => props.background};
  min-height: 30vh;
  height: stretch;
  color: ${(props) => props.color};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
