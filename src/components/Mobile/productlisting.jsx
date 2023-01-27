import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Colors } from "../../assets/styles";
import man_hair from "../../assets/man_hair2.png";
import { Loader } from "semantic-ui-react";
import Advert from "./advert";
import car from "../../assets/svg/truck.svg";
import house from "../../assets/svg/house.svg";
import phone from "../../assets/svg/phone.svg";
import television from "../../assets/svg/television.svg";
import fashion from "../../assets/svg/fashion.svg";
import decor from "../../assets/svg/decor.svg";
import bag from "../../assets/svg/bag.svg";
import medic from "../../assets/svg/medic.svg";
import service from "../../assets/svg/service.svg";
import sport from "../../assets/svg/sport.svg";
import agro from "../../assets/svg/agro.svg";
import kids from "../../assets/svg/kid.svg";
import work from "../../assets/svg/work.svg";
import axios from "axios";
import { api } from "../../strings";
import NaijaStates from "naija-state-local-government";
import { useNavigate } from "react-router";

import whatsapp from "../../assets/svg/whatsapp.svg";
import email from "../../assets/svg/email.svg";
import mobile from "../../assets/svg/mobile.svg";

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

  const [products, setProducts] = useState([]);


  //Loading States
  const [loading, setLoading] = useState(Boolean);

  const _getRegions = (state) => {
    setRegions(NaijaStates.lgas(state).lgas);
  };
  useEffect(() => {
    setLoading(true);
    setStates(NaijaStates.states());

    axios.get(`${api}/products/approved`).then((res) => {
      setProducts(res.data.data);
      setLoading(false);
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
          <ProductOption>States</ProductOption>
          {states.map((state, id) => {
            return (
              <ProductOption key={id} value={state}>
                {state}
              </ProductOption>
            );
          })}
        </ProductChoiceSelect>
        <ProductChoiceSelect>
          <ProductOption>LGA</ProductOption>
          {regions ? (
            <>
              {regions.map((local, id) => {
                return <ProductOption key={id}>{local}</ProductOption>;
              })}
            </>
          ) : (
            <>
              <ProductOption>LGA</ProductOption>
            </>
          )}
        </ProductChoiceSelect>
      </ProductFilterWrapper>
      {loading === true ? (
        <>
          <div
            style={{
              width: "100vw",
              height: "60vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Loader active inline="centered" />
          </div>
        </>
      ) : (
        <>
          <ProductListWrapper cat={"cars"} products={products} />
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
        </>
      )}
      <Advert
        background={Colors.DIRTY_GREEN}
        text={"Find the style that fits YOU!"}
        image={man_hair}
        button={"Go to fashion"}
        orientation={false}
      />
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

// const Button = styled.div`
// color: white;
// background-color: ${Colors.PRIMARY};
// border-radius: 5px;
// padding: 5px 15px;
// text-align: center;
// font-family: Montserrat;
// margin; 20px;
// width: 80%;
// `;

const ProductListWrapper = ({ cat, products }) => {

  // const [phone, setPhone]= useState([])
  // const generateMadUrl = (id) =>{
  //   // axios.get(`${api}/product/${id}`).then((res) => {
  //   //   axios
  //   //     .post(`${api}/product/seller`, { user_id: res.data.data.user_id })
  //   //     .then((res) => {
  //   //       setPhone([...phone, res.data.data.phone])
  //   //     });
  //   // });

  //   console.log(phone)
  // }
  const navigate = useNavigate();
  return (
    <>
      {/* {cat === "cars" ? (
        <> */}
      <ProductListingWrapper>
        {products.map((ads, index) => (
          <ProductItem key={index}>
            <ProductImage
              src={ads.item_pictures[0]}
              // alt="img_product"
              onClick={() => {
                navigate(`/item/description/${ads._id}`);
              }}
            ></ProductImage>
            <ProductItemName>{ads.item_name}</ProductItemName>
            <ProductPrice>
              NGN{" "}
              {Number(ads.item_price).toLocaleString("en-US", {
                minimumFractionDigits: 0,
              })}
            </ProductPrice>
            {/* <Button
              onClick={() => {
                navigate(`/item/description/${ads._id}`);
              }}
            >
              View
            </Button> */}
            <ItemContact>
              <ItemContactIcon>
                <a
                  href={`http://wa.me/${ads.phone}?text=I am messaging you about ${ads.item_name} on oja-online for ${ads.price}, `}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={whatsapp} alt="whatsapp" />
                </a>
              </ItemContactIcon>
              <ItemContactIcon>
              <a
                  href={`mailto:${ads.email}`}
                  target="_blank"
                  rel="noreferrer"
                >
                <img src={email} alt="email" />
                </a>
              </ItemContactIcon>
              <ItemContactIcon>
                <img src={mobile} alt="mobile" />
              </ItemContactIcon>
            </ItemContact>
          </ProductItem>
        ))}
      </ProductListingWrapper>
      {/* </>
      ) : cat === "phones" ? (
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
      )} */}
    </>
  );
};

const ItemContact = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  padding: 5px;
`;
const ItemContactIcon = styled.div`
width: 100px,
height: 100px;
`;
const ProductListingWrapper = styled.div`
  width: 100vw;
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 5%;
  margin-top: 5vh;
  padding: 5%;
  height: 120vh;
  overflow-y: scroll;
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

const ProductImage = styled.img`
  width: 100%;
  height: 50%;
  background-image: url(${(props) => props.background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
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
  font-size: 1rem;
  color: ${Colors.PRIMARY_DEEP};
  padding: 10px;
  text-align: center;
`;
export default ProductListing;
