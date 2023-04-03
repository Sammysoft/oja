/* eslint-disable */

import React, { useState, useEffect } from "react";
import NavBar from "../../components/Desktop/navbar";
import styled from "styled-components";
import HeadText from "../../components/Desktop/HeadText";
import AdvertBanner from "../../components/Desktop/AdvertBanner";
import { Adverts } from "../../assets/data";
import ProductListing from "../../components/Desktop/productlistings";
import FloatingActionButton from "../../components/Desktop/floating_action_button";
import LongAdvert from "../../components/Desktop/longAdvert";
// import Footer from "../../components/Desktop/Footer";
import car from "../../assets/svg/truck.svg";
import house from "../../assets/svg/house.svg";
import phone from "../../assets/svg/phone.svg";
import television from "../../assets/svg/television.svg";
import fashion from "../../assets/svg/fashion.svg";
import decor from "../../assets/svg/decor.svg";
import bag from "../../assets/svg/bag.svg";
import service from "../../assets/svg/service.svg";
import { Colors } from "../../assets/styles";
// import advert from "../../assets/ads3.png";
// import advert2 from "../../assets/car.png";
import kids from "../../assets/svg/kid.svg";
import medic from "../../assets/svg/medic.svg";
import work from "../../assets/svg/work.svg";
import agro from "../../assets/svg/agro.svg";
import sport from "../../assets/svg/sport.svg";

// import axios from "axios";
// import { api } from "../../strings";
import NaijaStates from "naija-state-local-government";

const data = [
  {
    category: "AUTOMOBILE",
    icon: car,
  },
  {
    category: "LANDED PROPERTIES",
    icon: house,
  },
  {
    category: "PHONES, COMPUTERS AND ACCESSORIES",
    icon: phone,
  },
  {
    category: "ELECTRONICS AND ACCESSORIES",
    icon: television,
  },
  {
    category: "MEDICALS / COSMETICS / BEAUTIES",
    icon: medic,
  },
  {
    category: "SPORTS",
    icon: sport,
  },
  {
    category: "FASHION",
    icon: fashion,
  },
  {
    category: "KIDDIES / BABIES",
    icon: kids,
  },
  {
    category: "HOME DECORS",
    icon: decor,
  },
  {
    category: "ANIMALS / LIVESTOCK / AGRICULTURE",
    icon: agro,
  },
  {
    category: "GROCERIES / BREWERIES",
    icon: bag,
  },
  {
    category: "SERVICES",
    icon: service,
  },
  {
    category: "FACTORY / INDUSTRIAL / CONSTRUCTIONS",
    icon: work,
  },
];


const HomePage = () => {
  const [states, setStates] = useState([]);
  const [pickedState, setPickedState] = useState("");
  const [regions, setRegions] = useState([]);
  // const [loading, setLoading] = useState(Boolean);


  const _getRegions = (state) => {
    setRegions(NaijaStates.lgas(state).lgas);
  };
  useEffect(() => {
    // setLoading(true);
    setStates(NaijaStates.states());

    // axios.get(`${api}/products/approved`).then((res) => {
    //   setProducts(res.data.data);
    //   console.log(res.data.data)
    //   setLoading(false);
    // });
  }, []);
  return (
    <>
      <PageWrapper>
        <FloatingActionButton />
        <NavBar />
        <HeadText />
        <AdvertBannerWrapper>
          <AdvertBanner adverts={Adverts} />
        </AdvertBannerWrapper>
      </PageWrapper>
      <div
        style={{
          marginTop: 100,
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <div
          style={{
            fontFamily: "Montserrat",
            fontWeight: 900,
            paddingLeft: 150,
            width: "40%",
          }}
        >
          PRODUCT LISTING
        </div>
        <div style={{ width: "60%" }}>
          <Select>
            <Option>All Categories</Option>
            {data.map((item, id) => (
              <Option key={id}>{item.category}</Option>
            ))}
          </Select>
          <Select
            value={pickedState}
            onChange={(e) => {
              setPickedState(e.target.value);
              _getRegions(e.target.value);
            }}
          >
            <Option>States</Option>
            {states.map((state, id) => {
              return (
                <Option key={id} value={state}>
                  {state}
                </Option>
              );
            })}
          </Select>
          <Select>
            {regions.length > 0 ? (
              <>
                {regions.map((local, id) => {
                  return <Option key={id}>{local}</Option>;
                })}
              </>
            ) : (
              <>
                <Option>LGA</Option>
              </>
            )}
          </Select>
        </div>
      </div>
      <ProductListing />
      {/* <LongAdvert />
      <div
        style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}
      >
        <ProductListing right={true} />
      </div> */}
      {/* <Footer /> */}
    </>
  );
};

const PageWrapper = styled.div`
  margin-left: 10vw;
  margin-right: 10vw;
`;

const AdvertBannerWrapper = styled.div`
  margin-top: 3vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  z-index: -999;
`;

const Select = styled.select`
  background: #f7f7f7;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.17);
  border-radius: 10px;
  font-family: Montserrat;
  padding: 15px;
  font-weight: 800;
  border: 0px solid white;
  margin-right: 20px;
  width: 200px;
`;
const Option = styled.option`
  font-family: Montserrat;
  color: ${Colors.PRIMARY_DEEP};
  font-size: 1rem;
`;

export default HomePage;
