/* eslint-disable */

import React, { useContext, useState } from "react";
import styled from "styled-components";
import logo from "../../assets/logo.png";
import profile from "../../assets/profile.png";
import arrow from "../../assets/svg/arrow-down.svg";
import { Colors } from "../../assets/styles";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../loginContext";
import Swal from "sweetalert2";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const { getUser } = useContext(AuthContext);
  
  return (
    <>
      <SearchBarWrapper>
        <NavBarIcon>
          <img src={logo} alt={"logo-img"} style={{ height: 50, width: 50 }} />
          <span
            style={{
              fontWeight: "bolder",
              textTransform: "capitalize",
              fontSize: "1.5rem",
              color: Colors.PRIMARY,
            }}
          >
            OJA
          </span>
        </NavBarIcon>
        <SearchBar />
        <ProfileBar toggle={toggle} setToggle={setToggle} getUser={getUser} />
      </SearchBarWrapper>
      {toggle === true && <Toggler setToggle={setToggle} />}
    </>
  );
};

const SearchBarWrapper = styled.div`
  width: 100%;
  height: 15vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-vertical: 5vh;
  font-family: Montserrat;
`;

const NavBarIcon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 8vw;
`;

const InputBar = styled.input`
  background: ${Colors.WHITE};
  border: 2px solid ${Colors.PRIMARY};
  border-radius: 10px 0px 0px 10px;
  padding: 5px 15px 5px 15px;
  width: 73%;
  font-family: Montserrat;
`;

const WrapperSearchBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 30%;
  cursor: pointer;
`;

const SearchButton = styled.div`
  background-color: ${Colors.PRIMARY};
  color: ${Colors.WHITE};
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 5px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  font-family: Montserrat;
  cursor: pointer;
`;

const ProfileBarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 20;
  cursor: pointer;
`;

const SearchBar = () => {
  const [query, setQuery] = React.useState("");
  const navigate = useNavigate();

  const _makeSearch = (query) => {
    if (query) {
      navigate(`/search/?item_name=${query}`);
    }
  };
  return (
    <>
      <WrapperSearchBar>
        <InputBar
          placeholder="Search OJA..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        ></InputBar>
        <SearchButton
          onClick={() => {
            _makeSearch(query);
          }}
        >
          Search
        </SearchButton>
      </WrapperSearchBar>
    </>
  );
};

const ProfileBar = ({ setToggle, toggle, getUser }) => {
  const navigate = useNavigate();
  return (
    <>
      {getUser.fullname != undefined ? (
        <>
          <ProfileBarWrapper
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            <img
              src={getUser.profile_picture}
              alt="profile"
              style={{ width: 50, height: 50 }}
            />
            <span style={{ padding: "10px" }}>{getUser.fullname}</span>
            <img src={arrow} alt="arrow-down" />
          </ProfileBarWrapper>
        </>
      ) : (
        <>
          <LoginWrapper
            onClick={() => {
              navigate("/login");
            }}
          >
            <LoginButton>Login</LoginButton>
          </LoginWrapper>
        </>
      )}
    </>
  );
};

const Toggler = ({ setToggle }) => {
  const navigate = useNavigate();
  const _logout = () => {
    localStorage.removeItem("oja-token");
    Swal.fire({
      title: "Logged Out",
      text: "You have logged out successfully",
    });
    window.location.reload();
  };
  return (
    <>
      <ToggleWrapper>
        <ToggleTransparent
          onClick={() => {
            setToggle(false);
          }}
        ></ToggleTransparent>
        <ToggleMain>
          <Choice
            onClick={() => {
              navigate("/dashboard");
            }}
          >
            My Dashboard
          </Choice>
          <Choice
            onClick={() => {
              navigate("/item-list");
            }}
          >
            Sell Items
          </Choice>
          <Choice
            onClick={() => {
              navigate("/about");
            }}
          >
            About
          </Choice>
          <Choice
            onClick={() => {
              _logout();
            }}
          >
            Logout
          </Choice>
        </ToggleMain>
      </ToggleWrapper>
    </>
  );
};

const ToggleWrapper = styled.div`
  width: 100vw;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 50px;
  top: 12vh;
`;

const ToggleTransparent = styled.div`
background-color; red;
width: 60%;
height: 100%;
`;

const ToggleMain = styled.div`
  width: 20%;
  height: 100%;
  background-color: ${Colors.PRIMARY_DEEP};
  z-index: 1;
  margin-right: 5px;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  cursor: pointer;
`;

const Choice = styled.div`
  font-family: Montserrat;
  color: #ffffff;
  padding: 10px;
  border-bottom: 1px solid white;
  width: 100%;
  font-weight: 900;
`;

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 20;
  cursor: pointer;
`;

const LoginButton = styled.div`
  color: #ffffff;
  background-color: ${Colors.PRIMARY_DEEP};
  padding: 10px 40px;
  border-radius: 10px;
  width: 100%;
`;

export default NavBar;
