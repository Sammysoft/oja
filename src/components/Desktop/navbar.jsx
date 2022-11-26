import React from "react";
import styled from "styled-components";
import logo from "../../assets/logo.png";
import profile from "../../assets/profile.png";
import arrow from "../../assets/svg/arrow-down.svg";
import { Colors } from "../../assets/styles";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
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
        <ProfileBar />
      </SearchBarWrapper>
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
  const navigate = useNavigate()

  const _makeSearch = (query) => {
    if (query) {
      navigate(`/search/?item_name=${query}`)
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

const ProfileBar = () => {
  return (
    <>
      <ProfileBarWrapper>
        <img src={profile} alt="profile" style={{ width: 50, height: 50 }} />
        <span style={{ padding: "10px" }}>Olanrewaju</span>
        <img src={arrow} alt="arrow-down" />
      </ProfileBarWrapper>
    </>
  );
};

export default NavBar;
