/* eslint-disable */

import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Colors } from "../../assets/styles";
import logo from "../../assets/logo.png";
import menu from "../../assets/menu.png";
import sell from "../../assets/svg/upload.svg";
import chat from "../../assets/svg/mobile_chat.svg";
import pro from "../../assets/svg/profile.svg";
import { Link, useNavigate } from "react-router-dom";
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
import dashboard from "../../assets/svg/dashboard.svg";
import love from "../../assets/svg/heart_empty.svg";
import { AuthContext } from "../../loginContext";
import Swal from "sweetalert2";
import Message from "./Message";

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

const NavBar = () => {
  const { getUser } = useContext(AuthContext);
  // console.log(getUser)
  const navigate = useNavigate();
  const [toggleMenu, setToggleMenu] = useState(false);
  const [showComponent, setShowComponent] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [show, setShow] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollPos < currentScrollPos) {
      setShowComponent(true);
    } else {
      setShowComponent(false);
    }
    setPrevScrollPos(currentScrollPos);
  };

  return (
    <>
      <NavWrapper>
        <Logo
          onClick={() => {
            navigate("/");
          }}
        >
          <img src={logo} alt="oja" width="30" height="30" />
          <span
            style={{
              fontFamily: "Montserrat",
              fontWeight: 900,
              fontSize: "1.8rem",
            }}
          >
            OJA
          </span>
        </Logo>
        <SearchBar placeholder="Search OJA" />
        <Menu
          src={menu}
          alt="toggler"
          height="35"
          width="35"
          onClick={() => {
            setToggleMenu(!toggleMenu);
          }}
        />
      </NavWrapper>
      {toggleMenu && (
        <ToggleBar
          username={getUser.fullname}
          profile_picture={getUser.profile_picture}
          setToggleMenu={setToggleMenu}
        />
      )}
      {showComponent && <BottomNav />}
    </>
  );
};

const ToggleBar = ({ profile_picture, username, setToggleMenu }) => {
  const _logout = () => {
    localStorage.removeItem("oja-token");
    Swal.fire({
      title: "Logged Out",
      text: "You have logged out successfully",
    });
    window.location.reload();
  };
  const navigate = useNavigate();
  return (
    <>
      <ToggleBarWrapper>
        <MenuWrapper>
          {!username ? (
            <>
              <LoginButton
                onClick={() => {
                  navigate("/sign-in");
                }}
              >
                Login
              </LoginButton>
            </>
          ) : (
            <>
              <ProfileBanner>
                <ProfileName>{username}</ProfileName>
                <Link
                  to="/dashboard"
                  style={{
                    textDecoration: "none",
                    textDecorationLine: "none",
                    color: `${Colors.PRIMARY}`,
                  }}
                >
                  <ProfilePicture src={profile_picture} />
                </Link>
              </ProfileBanner>
            </>
          )}
          <br />
          <Link
            to="/dashboard"
            style={{
              textDecoration: "none",
              textDecorationLine: "none",
              color: `${Colors.PRIMARY}`,
            }}
          >
            <MenuOptions>
              <MenuIcon src={dashboard} />
              <MenuName>My Dashboard</MenuName>
            </MenuOptions>
          </Link>
          <br />
          <br />
          <CategoryBanner>PRODUCT CATEGORIES</CategoryBanner>
          {data.map((item, id) => (
            <>
              <CategoryMenu key={id}>
                <CategoryIcon src={item.icon} />
                <CategoryItem>
                  <Link
                    to={`/search/?category=${item.category}`}
                    onClick={() => {
                      setToggleMenu(false);
                    }}
                    style={{
                      textDecoration: "none",
                      textDecorationLine: "none",
                      color: "black",
                    }}
                  >
                    {item.category}
                  </Link>
                </CategoryItem>
              </CategoryMenu>
            </>
          ))}{" "}
          <br />
          <hr />
          <br />
          <Logout
            onClick={() => {
              navigate("/about");
            }}
          >
            About OJA
          </Logout>
          <br />
          <hr />
          <br />
          {username !== "" && (
            <Logout
              onClick={() => {
                _logout();
              }}
            >
              Logout
            </Logout>
          )}
        </MenuWrapper>
      </ToggleBarWrapper>
    </>
  );
};

const BottomNav = () => {
  const navigate = useNavigate();
  return (
    <>
      <BottomNavWrapper>
        <BottomNavItem
          onClick={() => {
            navigate("/");
          }}
        >
          <BottomNavIcon src={house} alt="home" width={20} height={20} />
          <BottomNavText>Home</BottomNavText>
        </BottomNavItem>

        <BottomNavItem
          onClick={() => {
            navigate("/favourites");
          }}
        >
          <BottomNavIcon src={love} alt="love" width={20} height={20} />
          <BottomNavText>Favourites</BottomNavText>
        </BottomNavItem>
        <BottomNavItem
          onClick={() => {
            navigate("/items");
          }}
        >
          <BottomNavIcon src={sell} alt="sell" width={20} height={20} />
          <BottomNavText>Sell</BottomNavText>
        </BottomNavItem>
        <BottomNavItem
          onClick={() => {
            navigate("/chats");
          }}
        >
          <BottomNavIcon src={chat} alt="chat" width={20} height={20} />
          <BottomNavText>Chats</BottomNavText>
        </BottomNavItem>
        <BottomNavItem
          onClick={() => {
            navigate("/profile");
          }}
        >
          <BottomNavIcon src={pro} alt="chat" width={20} height={20} />
          <BottomNavText>Profile</BottomNavText>
        </BottomNavItem>
      </BottomNavWrapper>
    </>
  );
};

const BottomNavWrapper = styled.div`
  position: fixed;
  bottom: 0px;
  width: 100vw;
  z-index: 999;
  height: fit-content;
  padding: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: ${Colors.WHITE};
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.8);
`;

const BottomNavItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-contnet: center;
  align-items: center;
`;

const BottomNavIcon = styled.img``;

const BottomNavText = styled.div`
  font-family: Montserrat;
  text-align: center;
  color: ${Colors.PRIMARY};
  font-weight: 700;
  padding-top: 5px;
  font-size: 0.8rem;
`;

const Logout = styled.div`
  font-family: Montserrat;
  color: ${Colors.PRIMARY};
  padding: 10px;
  margin: 15px 0px;
  font-size: 1rem;
  width: 100%;
  text-align: center;
  font-weight: 800;
`;
const CategoryMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin: 2vh 0px;
  width: 100%;
`;

const CategoryItem = styled.div`
  font-family: Montserrat;
  font-weight: 700;
  padding: 0px 25px;
  font-size: 0.8rem;
  font-weight: 900;
`;

const CategoryIcon = styled.img`
  width: 30px;
  height: 30px;
`;

const ToggleBarWrapper = styled.div`
  position: fixed;
  top: 10vh;
  right: 0px;
  width: 100vw;
  overflow-y: scroll;
  height: 90vh;
  background: rgba(0, 0, 0, 0.6);
  z-index: 9999;
`;

const MenuWrapper = styled.div`
  background: white;
  padding: 10px;
  width: 70%;
  position: relative;
  height: fit-content;
  float: right;
`;

const ProfilePicture = styled.img`
  border-radius: 50%;
  width: 50px;
  height: 50px;
`;
const ProfileBanner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  float: right;
`;

const ProfileName = styled.div`
  font-family: Montserrat;
  font-weight: 800;
  color: ${Colors.PRIMARY};
`;

const MenuOptions = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin: 2vh 0px;
  padding: 5px;
`;
const MenuIcon = styled.img`
  width: 30px;
  height: 30px;
`;
const MenuName = styled.div`
  font-family: Montserrat;
  font-weight: 700;
  padding: 0px 20px;
  color: ${Colors.PRIMARY};
`;

const CategoryBanner = styled.div`
  width: 100%;
  font-family: Montserrat;
  color: ${Colors.DEEP};
  text-align: center;
`;

//NavBar
const NavWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  height: 10vh;
  padding: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  background-color: ${Colors.WHITE};
  position: fixed;
  top: 0px;
  z-index: 1;
`;

const Logo = styled.div`
display: flex:
flex-direction: row;
width: 25%;
align-items: center;
justify-content: space-between;
`;

const SearchBar = styled.input`
  padding: 5px 5px 5px 10%;
  font-family: Montserrat;
  width: 50%;
  border-radius: 10px;
  border: 2px solid ${Colors.PRIMARY_DEEP};
  background-color: transparent;
`;

const LoginButton = styled.div`
  background: ${Colors.PRIMARY};
  color: white;
  border-radius: 8px;
  padding: 10px;
  text-align: center;
  font-family: Montserrat;
`;

const Menu = styled.img``;

export default NavBar;
