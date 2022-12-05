import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Colors } from "../../assets/styles";
import { category } from "../../assets/data";
import man_hair from "../../assets/man_hair2.png";
import man from "../../assets/man_blue.png";
import Advert from "./advert";
import car from "../../assets/svg/truck.svg";
import house from "../../assets/svg/house.svg";
import phone from "../../assets/svg/phone.svg";
import television from "../../assets/svg/television.svg";
import fashion from "../../assets/svg/fashion.svg";
import decor from "../../assets/svg/decor.svg";
import bag from "../../assets/svg/bag.svg";
import service from "../../assets/svg/service.svg";
import axios from "axios";

const data = [
  {
    category: "Automobile",
    icon: car,
  },
  {
    category: "Landed properties",
    icon: house,
  },
  {
    category: "Phones, computers and accessories",
    icon: phone,
  },
  {
    category: "Electronics and electronic accessory",
    icon: television,
  },
  {
    category: "Fashion",
    icon: fashion,
  },
  {
    category: "Home decor",
    icon: decor,
  },
  {
    category: "Groceries",
    icon: bag,
  },
  {
    category: "Services",
    icon: service,
  },
];

const ProductListing = () => {
  return (
    <>
      <ProductFilter />
    </>
  );
};

const ProductFilter = () => {
  const [states, setStates] = useState([]);
  const [pickedState, setPickedState] = useState("");
  const [regions, setRegions] = useState([]);

  const _getRegions = (state) => {
    axios.get(`https://locus.fkkas.com/api/regions/${state}`).then((res) => {
      console.log(res.data.data);
      setRegions(res.data.data);
    });
  };
  useEffect(() => {
    axios.get(`https://locus.fkkas.com/api/states`).then((res) => {
      setStates(res.data.data);
    });
  }, []);

  return (
    <>
      <ProductFilterWrapper>
        <ProductChoiceSelect>
          <ProductOption>All Categories</ProductOption>
          {data.map((item, id) => (
            <ProductOption key={id}>{item.category}</ProductOption>
          ))}
        </ProductChoiceSelect>
        <ProductChoiceSelect
          value={pickedState}
          onChange={(e) => {
            setPickedState(e.target.value);
            _getRegions(e.target.value);
          }}
        >
          {states.map((state, id) => {
            return (
              <ProductOption key={id} value={state.alias}>
                {state.name}
              </ProductOption>
            );
          })}
        </ProductChoiceSelect>
        <ProductChoiceSelect>
          {regions ? <> {regions.map((local, id) => {
            return <ProductOption key={id}>{local.name}</ProductOption>;
          })}</>:<> <ProductOption>Abuja (FCT)</ProductOption></>}
        </ProductChoiceSelect>
      </ProductFilterWrapper>
      <ProductListWrapper cat={"phones"} />
      <br />
      <br />
      <div
        style={{
          fontFamily: "Montserrat",
          paddingLeft: "20px",
          color: Colors.PRIMARY_DEEP,
          textAlign: "center",
        }}
      >
        View more in Mobile Phones {">>>"}
      </div>
      <Advert
        background={Colors.DIRTY_GREEN}
        text={"Find the style that fits YOU!"}
        image={man_hair}
        button={"Go to fashion"}
        orientation={false}
      />
      <ProductListWrapper cat={"cars"} />
      <br />
      <br />
      <div
        style={{
          fontFamily: "Montserrat",
          paddingLeft: "20px",
          color: Colors.PRIMARY_DEEP,
          textAlign: "center",
        }}
      >
        View more in Automobile {">>>"}
      </div>
      <Advert
        background={Colors.GREY}
        headText={"Sell at your convenience!"}
        text={"Do you know you can sell from the comfort of your home?"}
        image={man}
        button={"Register to begin"}
        orientation={false}
      />
      <ProductListWrapper cat={"tvs"} />
      <br />
      <br />
      <div
        style={{
          fontFamily: "Montserrat",
          paddingLeft: "20px",
          color: Colors.PRIMARY_DEEP,
          textAlign: "center",
        }}
      >
        View more in Electronics {">>>"}
      </div>
    </>
  );
};
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
  width: 35%;
  font-family: Montserrat;
  padding: 15px;
  border-radius: 4px;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.17);
`;
const ProductOption = styled.option`
  font-family: Montserrat;
  color: ${Colors.PRIMARY_DEEP};
  font-size: 0.5rem;
`;

const Button = styled.div`
color: white;
background-color: ${Colors.PRIMARY};
border-radius: 5px;
padding: 5px 15px;
text-align: center;
font-family: Montserrat;
margin; 20px;
width: 80%;
`;

const ProductListWrapper = ({ cat }) => {
  return (
    <>
      {cat === "phones" ? (
        <>
          <ProductListingWrapper>
            {category.phones.map((ads, index) => (
              <ProductItem key={index}>
                <img
                  src={ads.img_src}
                  alt="product"
                  style={{ height: 150, width: 180, padding: "5px" }}
                />
                <ProductItemName>{ads.item_name}</ProductItemName>
                <ProductPrice>{ads.item_price}</ProductPrice>
                <Button>View</Button>
              </ProductItem>
            ))}
          </ProductListingWrapper>
        </>
      ) : cat === "cars" ? (
        <>
          <ProductListingWrapper>
            {category.cars.map((ads, index) => (
              <ProductItem key={index}>
                <img
                  src={ads.img_src}
                  alt="product"
                  style={{ height: 150, width: 180, padding: "5px" }}
                />
                <ProductItemName>{ads.item_name}</ProductItemName>
                <ProductPrice>{ads.item_price}</ProductPrice>
                <Button>View</Button>
              </ProductItem>
            ))}
          </ProductListingWrapper>
        </>
      ) : cat === "tvs" ? (
        <>
          <ProductListingWrapper>
            {category.tvs.map((ads, index) => (
              <ProductItem key={index}>
                <img
                  src={ads.img_src}
                  alt="product"
                  style={{ height: 150, width: 180, padding: "5px" }}
                />
                <ProductItemName>{ads.item_name}</ProductItemName>
                <ProductPrice>{ads.item_price}</ProductPrice>
                <Button>View</Button>
              </ProductItem>
            ))}
          </ProductListingWrapper>
        </>
      ) : (
        <></>
      )}
    </>
  );
};
const ProductListingWrapper = styled.div`
  width: 100vw;
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 5%;
  margin-top: 5vh;
  padding: 5%;
`;
const ProductItem = styled.div`
  background: ${Colors.WHITE};
  border-radius: 15px;
  box-shadow: 1px 3px 11px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: ${(props) => props.padding};
  height: 40vh;
`;

const ProductItemName = styled.div`
  font-family: Montserrat;
  font-weight: 400;
  font-size: 1rem;
  color: ${Colors.PRIMARY_DEEP};
  padding: 10px;
  text-align: center;
`;

const ProductPrice = styled.div`
  font-family: Montserrat;
  font-weight: 900;
  font-size: 1.5rem;
  color: ${Colors.PRIMARY_DEEP};
  padding: 10px;
  text-align: center;
`;
export default ProductListing;
