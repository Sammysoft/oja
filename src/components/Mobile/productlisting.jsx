import React, { useState, useEffect, useContext } from "react";
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
import love from "../../assets/svg/heart_empty.svg";
import no_love from "../../assets/svg/heart_filled.svg";
import axios from "axios";
import { api } from "../../strings";
import NaijaStates from "naija-state-local-government";
import { useNavigate } from "react-router";
import whatsapp from "../../assets/svg/whatsapp.svg";
import email from "../../assets/svg/email.svg";
import mobile from "../../assets/svg/mobile.svg";
import { AuthContext } from "../../loginContext";
import Swal from "sweetalert2";

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
              width: "100%",
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

const ProductListWrapper = ({ cat, products }) => {
  const { getUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState(null);

  const setLiked = (id) => {
    axios
      .post(`${api}/product/like`, { id: id, user_id: getUser._id })
      .then((res) => {
        Swal.fire({
          title: "Added to favourites",
          text: `${res.data.data}`,
        });
      })
      .catch((error) =>
        Swal.fire({ title: "Oops", text: error.response.data.data })
      );
  };

  const handleCall = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber}`;
  };
  return (
    <>
      <ProductListingWrapper>
        {products.map((ads, index) => (
          <ProductItem key={index}>
            <div
              style={{
                backgroundImage: `url('${ads.item_pictures[0]}')`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "25% center",
                borderTopRightRadius: "15px",
                borderTopLeftRadius: " 15px",
                height: "60%",
                width: "100%",
                position: "relative",
              }}
            >
              <img
                src={
                  selectedItem === index ||
                  ads.item_likes.indexOf(getUser._id) !== -1
                    ? no_love
                    : love
                }
                style={{
                  position: "absolute",
                  top: "10px",
                  left: "10px",
                  width: "30px",
                  height: "30px",
                }}
                alt={"love"}
                onClick={() => {
                  setSelectedItem(index);
                  setLiked(ads._id);
                }}
              />
              <div
                onClick={() => {
                  navigate(`/item/description/${ads._id}`);
                }}
                style={{
                  position: "absolute",
                  height: "75%",
                  width: "100%",
                  bottom: "0px",
                }}
              ></div>
            </div>
            <ProductItemName>{ads.item_name}</ProductItemName>
            <ProductPrice>
              NGN{" "}
              {Number(ads.item_price).toLocaleString("en-US", {
                minimumFractionDigits: 0,
              })}
            </ProductPrice>
            <ItemContact>
              <ItemContactIcon>
                <a
                  href={`http://wa.me/${ads.item_phone}?text=I am messaging you about ${ads.item_name} on oja-online for NGN ${ads.item_price}, `}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={whatsapp} alt="whatsapp" />
                </a>
              </ItemContactIcon>
              <ItemContactIcon>
                <a
                  href={`mailto:${ads.item_email}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={email} alt="email" />
                </a>
              </ItemContactIcon>
              <ItemContactIcon
                onClick={() => {
                  handleCall(ads.item_phone);
                }}
              >
                <img src={mobile} alt="mobile" />
              </ItemContactIcon>
            </ItemContact>
          </ProductItem>
        ))}
      </ProductListingWrapper>
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
  width: 100%;
  display: grid;
  grid-template-columns: 48% 48%;
  gap: 2%;
  margin-top: 5vh;
  padding-left: 1%;
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
  padding: ${(props) => props.padding};
  height: 35vh;
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
