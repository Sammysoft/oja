import React, { useContext } from "react";
import styled from "styled-components";
import { Colors } from "../../assets/styles";
import logo from "../../assets/logo.png";
import menu from "../../assets/menu.png";
import sell from "../../assets/sell.png";
import chat from "../../assets/chat.png";
import pro from "../../assets/pro.png";
import { Link, useNavigate } from "react-router-dom";
import car from "../../assets/svg/truck.svg";
import house from "../../assets/svg/house.svg";
import phone from "../../assets/svg/phone.svg";
import television from "../../assets/svg/television.svg";
import fashion from "../../assets/svg/fashion.svg";
import decor from "../../assets/svg/decor.svg";
import bag from "../../assets/svg/bag.svg";
import service from "../../assets/svg/service.svg";
import { LoginContext } from "../../loginContext";
import Swal from "sweetalert2";

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

const NavBar = () => {
  const { user } = useContext(LoginContext);
  const navigate = useNavigate();
  const [toggleMenu, setToggleMenu] = React.useState(false);
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
          username={user.fullname}
          profile_picture={user.profile_picture}
        />
      )}
    </>
  );
};

const ToggleBar = ({ profile_picture, username }) => {
  const _logout = () => {
    localStorage.removeItem("oja-token");
    Swal.fire({
      title: "Logged Out",
      text: "You have logged out successfully",
    });
    window.location.reload()
  };
  const navigate = useNavigate();
  return (
    <>
      <ToggleBarWrapper>
        <MenuWrapper>
          {username === "" ? (
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
          <br />
          <br />
          <Link
            to="/items"
            style={{
              textDecoration: "none",
              textDecorationLine: "none",
              color: `${Colors.PRIMARY}`,
            }}
          >
            <MenuOptions>
              <MenuIcon src={sell} />
              <MenuName>Sell Items</MenuName>
            </MenuOptions>
          </Link>
          <Link
            to="/chats"
            style={{
              textDecoration: "none",
              textDecorationLine: "none",
              color: `${Colors.PRIMARY}`,
            }}
          >
            <MenuOptions>
              <MenuIcon src={chat} />
              <MenuName>Chats</MenuName>
            </MenuOptions>
          </Link>
          <Link
            to="/profile"
            style={{
              textDecoration: "none",
              textDecorationLine: "none",
              color: `${Colors.PRIMARY}`,
            }}
          >
            <MenuOptions>
              <MenuIcon src={pro} />
              <MenuName>Profile</MenuName>
            </MenuOptions>
          </Link>
          <br />
          <br />
          <CategoryBanner>PRODUCT CATEGORIES</CategoryBanner>
          {data.map((item, id) => (
            <>
              <CategoryMenu key={id}>
                <CategoryIcon src={item.icon} />
                <CategoryItem>{item.category}</CategoryItem>
              </CategoryMenu>
            </>
          ))}
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
