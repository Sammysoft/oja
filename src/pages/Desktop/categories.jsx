import React from "react";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import FloatingActionButton from "../../components/Desktop/floating_action_button";
import Footer from "../../components/Desktop/Footer";
import NavBar from "../../components/Desktop/navbar";
import car from "../../assets/svg/truck.svg";
import house from "../../assets/svg/house.svg";
import phone from "../../assets/svg/phone.svg";
import television from "../../assets/svg/television.svg";
import fashion from "../../assets/svg/fashion.svg";
import decor from "../../assets/svg/decor.svg";
import bag from "../../assets/svg/bag.svg";
import service from "../../assets/svg/service.svg";
import { Colors } from "../../assets/styles";
import { category } from "../../assets/data";
import advert from "../../assets/ads3.png";
import advert2 from "../../assets/car.png";

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

const Categories = () => {
  return (
    <>
      <PageWrapper>
        <FloatingActionButton />
        <NavBar />
      </PageWrapper>
      <ProductListing />
      <Footer />
    </>
  );
};

const ProductListing = ({ right }) => {
  const [searchParams] = useSearchParams();
  let query = searchParams.get("category");
  console.log(query);
  const [item, setItem] = React.useState("");

  React.useEffect(() => {
    setItem(query);
  }, [query]);

  return (
    <>
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
                {" "}
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
                <AdCapsuleWrapper>
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
                        width: "30%",
                        fontFamily: "Montserrat",
                        fontSize: "2rem",
                        padding: 10,
                      }}
                    >
                      Find the style that fits YOU!
                    </div>
                    <AdvertButtonWrapper> Go to Fashion</AdvertButtonWrapper>
                  </div>
                </AdCapsuleWrapper>
              </>
            )}
          </FlexWrapper>
          <FlexWrapper right={right}>
            <ItemSearchedWrapper>{item}</ItemSearchedWrapper>
            <FilterWrapper>
              <FilterPoints>
                <option>All sub-categories</option>
              </FilterPoints>
              <FilterPoints>
                <option>Lagos</option>
              </FilterPoints>
              <FilterPoints>
                <option>Surulere</option>
              </FilterPoints>

              <FilterPoints>
                <option>Sort By</option>
              </FilterPoints>
            </FilterWrapper>
            <ProductListingWrapper>
              <ProductCapsules category={category.phones} />
            </ProductListingWrapper>
            <div
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
            </div>
          </FlexWrapper>
        </ProductSection>
      </ProductSectionWrapper>
    </>
  );
};

const ProductCapsules = ({ category }) => {
  return (
    <>
      {category.map((product, id) => {
        return (
          <>
            <ProductCapsuleWrapper key={id}>
              <img
                src={product.img_src}
                alt="product-img"
                style={{
                  width: 150,
                  height: 100,
                  borderTopLeftRadius: "5px",
                  borderTopRightRadius: "5px",
                }}
              />
              <div
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: 600,
                  width: "90%",
                  textAlign: "center",
                  paddingTop: "10px",
                  color: Colors.PRIMARY_DEEP,
                  fontSize: "16px",
                }}
              >
                {product.item_name}
              </div>
              <div
                style={{
                  fontFamily: "Montserrat",
                  textAlign: "center",
                  paddingTop: "10px",
                  color: Colors.PRIMARY_DEEP,
                  fontWeight: 900,
                  fontSize: "1.5rem",
                }}
              >
                {product.item_price}
              </div>
              <div
                style={{
                  color: Colors.WHITE,
                  backgroundColor: Colors.PRIMARY_DEEP,
                  padding: "5px 5px",
                  borderRadius: "10px",
                  width: "80%",
                  textAlign: "center",
                  marginTop: "5px",
                  fontFamily: "Montserrat",
                  marginBottom: "5px",
                  cursor: "pointer",
                }}
              >
                View
              </div>
            </ProductCapsuleWrapper>
          </>
        );
      })}
    </>
  );
};
export default Categories;

const ItemSearchedWrapper = styled.div`
  width: 100%;
  text-align: left;
  font-family: Montserrat;
  color: ${Colors.PRIMARY_DEEP};
  font-weight: 900;
  font-size: 2rem;
`;

const FilterWrapper = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0px;
  flex-direction: row;
`;

const FilterPoints = styled.select`
  background-color: ${Colors.GREY};
  border-radius: 5px;
  padding: 10px;
  text-align: center;
  width: 25%;
`;

const PageWrapper = styled.div`
  margin-left: 10vw;
  margin-right: 10vw;
`;

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
  grid-template-columns: auto auto auto auto;
  gap: 20px;
  align-items: flex-start;
  justify-content: flex-start;
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
