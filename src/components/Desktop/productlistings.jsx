/* eslint-disable */

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import car from "../../assets/svg/truck.svg";
import house from "../../assets/svg/house.svg";
import phone from "../../assets/svg/phone.svg";
import television from "../../assets/svg/television.svg";
import fashion from "../../assets/svg/fashion.svg";
import decor from "../../assets/svg/decor.svg";
import bag from "../../assets/svg/bag.svg";
import service from "../../assets/svg/service.svg";
import { Colors } from "../../assets/styles";
import advert from "../../assets/ads3.png";
import advert2 from "../../assets/car.png";
import kids from "../../assets/svg/kid.svg";
import medic from "../../assets/svg/medic.svg";
import work from "../../assets/svg/work.svg";
import agro from "../../assets/svg/agro.svg";
import sport from "../../assets/svg/sport.svg";

import axios from "axios";
import { api } from "../../strings";
import NaijaStates from "naija-state-local-government";

import ProductsCategory from "./ProductCategory";

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

const ProductListing = ({ right }) => {
  const [states, setStates] = useState([]);
  const [pickedState, setPickedState] = useState("");
  const [regions, setRegions] = useState([]);
  const [loading, setLoading] = useState(Boolean);
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");
  const [filterUrl, setFilterUrl] = useState("products/approved");

  const _getRegions = (state) => {
    setRegions(NaijaStates.lgas(state).lgas);
  };

  useEffect(() => {
    setLoading(true);
    setStates(NaijaStates.states());

    axios.get(`${api}/${filterUrl}`).then((res) => {
      setProducts(res.data.data);
      // console.log(res.data.data)
      setLoading(false);
    });
  }, [filterUrl]);


  return (
    <>
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
          <Select
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              console.log(e.target.value);
            }}
          >
            <Option value={"All"}>All Categories</Option>
            {data.map((item, id) => (
              <Option key={id} value={item.category}>
                {item.category}
              </Option>
            ))}
          </Select>
          <Select
            value={pickedState}
            onChange={(e) => {
              setPickedState(e.target.value);
              _getRegions(e.target.value);
              setFilterUrl(`products/filter/${category}/${e.target.value}`);
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
      <ProductSectionWrapper right={right}>
        <ProductSection right={right}>
          <FlexWrapper>
            {right ? (
              <>
                <RightAdvertBannerWrapper color={Colors.CHOCOLATE}>
                  <RightAdvertBanner>
                    <AdvertImageWrapper src={advert} alt="advert" />
                    <AdvertTextWrapper>
                      Good TVs for sale near you!
                    </AdvertTextWrapper>
                    <AdvertButtonWrapper> Shop Now</AdvertButtonWrapper>
                  </RightAdvertBanner>
                </RightAdvertBannerWrapper>
                <RightAdvertBannerWrapper color={Colors.DEEP_GREEN}>
                  <RightAdvertBanner>
                    <AdvertImageWrapper src={advert2} alt="advert" />
                    <AdvertTextWrapper>
                      Find the right Car just for you!
                    </AdvertTextWrapper>
                    <AdvertButtonWrapper> Shop Now</AdvertButtonWrapper>
                  </RightAdvertBanner>
                </RightAdvertBannerWrapper>
              </>
            ) : (
              <>
                <ProductCategory>
                  {data.map((datum, id) => {
                    return (
                      <>
                        <ProductWrapper key={id}>
                          <div
                            style={{
                              borderBottom: "3px solid #FFFFFF",
                              width: "100%",
                            }}
                          >
                            <img src={datum.icon} alt="category" />
                            <span style={{ paddingLeft: "5px" }}>
                              <Link
                                to={`/categories/?category="${datum.category}"`}
                                style={{
                                  textDecoration: "none",
                                  textDecorationLine: "none",
                                  color: `${Colors.PRIMARY_DEEP}`,
                                }}
                              >
                                {datum.category}
                              </Link>
                            </span>
                          </div>
                        </ProductWrapper>
                      </>
                    );
                  })}
                </ProductCategory>
                {/* <AdCapsuleWrapper>
                  <img
                    src={require("../../assets/man_hair.png")}
                    alt="ads"
                    style={{ height: 500, width: 300, marginBottom: "20vh" }}
                  />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                    }}
                  >
                    <div
                      style={{
                        color: Colors.WHITE,
                        fontWeight: 900,
                        width: "70%",
                        fontFamily: "Montserrat",
                        fontSize: "2.5rem",
                        padding: 10,
                        lineHeight: "3rem",
                      }}
                    >
                      Find the style that fits YOU!
                    </div>
                    <AdvertButtonWrapper> Go to Fashion</AdvertButtonWrapper>
                  </div>
                </AdCapsuleWrapper> */}
              </>
            )}
          </FlexWrapper>
          <FlexWrapper right={right}>
            {/* <ProductListingWrapper>
              <ProductCapsules category={products} />
            </ProductListingWrapper> */}
            {/* <div
              style={{
                width: "50%",
                color: Colors.PRIMARY_DEEP,
                paddingTop: 10,
                paddingBottom: 10,
                fontFamily: "Montserrat",
                cursor: "pointer",
              }}
            >
              View More in Mobile Phones {">>>"}
            </div> */}

            {/* <ProductsCategory category={"AUTOMOBILE"}/>
            <ProductsCategory category={"FASHION"}/> */}
            {/* {data.map((item, id) => ( */}
            <ProductsCategory products={products} />
            {/* ))} */}
          </FlexWrapper>
        </ProductSection>
      </ProductSectionWrapper>
    </>
  );
};

const AdvertButtonWrapper = styled.div`
  background-color: ${Colors.WHITE};
  color: ${Colors.PRIMARY_DEEP};
  padding: 10px 15px;
  font-family: Montserrat;
  border-radius: 10px;
`;

const ProductSectionWrapper = styled.div`
  display: flex;
  justify-content: ${(props) => (props.right ? "flex-end" : "flex-start")};
  width: 85%;
  flex-direction: row;
`;

const FlexWrapper = styled.div`
  width: 100%;
  order: ${(props) => (props.right ? "1" : "2")};
`;

const ProductCategory = styled.div`
  background-color: rgba(0, 60, 13, 0.2);
  height: fit-content;
  width: 100%;
  border-radius: 0px 15px 15px 0px;
  padding: 10px;
`;

const ProductWrapper = styled.div`
  padding-left: 10vw;
  font-family: Montserrat;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin: 10px 0px 10px 0px;
  padding-top: 10px;
  width: 100%;
`;

const ProductSection = styled.div`
  margin-top: 10vh;
  display: grid;
  grid-template-columns: ${(props) => (props.right ? "60% 30%" : "40% 60%")};
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  height: fit-content;
  gap: 10vh;
`;

const ProductListingWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  display: grid;
  grid-template-columns: 23% 23% 23% 23%;
  gap: 10px;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
`;

const ProductCapsuleWrapper = styled.div`
  box-shadow: 1px 3px 11px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  background: ${Colors.WHITE};
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 40vh;
`;

const AdCapsuleWrapper = styled.div`
  margin-top: 15vh;
  width: 100%;
  background-color: ${Colors.DIRTY_GREEN};
  height: 55vh;
  border-radius: 0px 15px 15px 0px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const RightAdvertBanner = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 30px;
`;

const RightAdvertBannerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
  width: 100%;
  height: fit-content;
  right: 0px;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  background-color: ${(props) => props.color};
  margin-bottom: 30%;
`;

const AdvertTextWrapper = styled.div`
  width: 80%;
  color: ${Colors.WHITE};
  font-weight: 700;
  font-family: Montserrat;
  font-size: 1.5rem;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const AdvertImageWrapper = styled.img`
  width: 100%;
  height: 100%;
  margin-left: -20%;
`;

// const ProductCapsules = ({ category }) => {
//   const navigate = useNavigate();
//   return (
//     <>
//       {category.map((ads, id) => {
//         console.log(ads);
//         return (
//           <>
//             <ProductCapsuleWrapper key={id}>
//               <div
//                 onClick={() => {
//                   navigate(`/item/description/${ads._id}`);
//                 }}
//                 style={{
//                   backgroundImage: `url('${ads.item_pictures[0]}')`,
//                   backgroundRepeat: "no-repeat",
//                   backgroundSize: "cover",
//                   backgroundPosition: "25% center",
//                   borderTopRightRadius: "15px",
//                   borderTopLeftRadius: " 15px",
//                   height: "60%",
//                   width: " 100%",
//                 }}
//               ></div>
//               <div
//                 style={{
//                   fontFamily: "Montserrat",
//                   fontWeight: 600,
//                   width: "90%",
//                   textAlign: "center",
//                   paddingTop: "5px",
//                   color: Colors.PRIMARY_DEEP,
//                   fontSize: "14px",
//                 }}
//               >
//                 {ads.item_name}
//               </div>
//               <div
//                 style={{
//                   fontFamily: "Montserrat",
//                   textAlign: "center",
//                   paddingTop: "5px",
//                   color: Colors.PRIMARY_DEEP,
//                   fontWeight: 900,
//                   fontSize: "10px",
//                 }}
//               >
//                 NGN{" "}
//                 {Number(ads.item_price).toLocaleString("en-US", {
//                   minimumFractionDigits: 0,
//                 })}
//               </div>
//               <div
//                 onClick={() => {
//                   navigate(`/product/${ads._id}`);
//                 }}
//                 style={{
//                   color: Colors.WHITE,
//                   backgroundColor: Colors.PRIMARY_DEEP,
//                   padding: "5px 5px",
//                   borderRadius: "10px",
//                   width: "80%",
//                   textAlign: "center",
//                   marginTop: "5px",
//                   fontFamily: "Montserrat",
//                   marginBottom: "5px",
//                   cursor: "pointer",
//                 }}
//               >
//                 View
//               </div>
//             </ProductCapsuleWrapper>
//           </>
//         );
//       })}
//     </>
//   );
// };

export default ProductListing;
