import React from "react";
import styled from "styled-components";
import NavBar from "../../components/Mobile/navbar";
// import Advert from "../../components/Mobile/advert";
// import Footer from "../../components/Mobile/footer";
// import man_hair from "../../assets/man_hair.png";
import left from "../../assets/svg/left_arrow.svg";
// import { Colors } from "../../assets/styles";
import { useNavigate } from "react-router";
import Profile from "../../components/Mobile/Profile";

const ProfilePage = () => {
    const navigate = useNavigate();
  return (
    <>
      <PageWrapper>
        <NavBar />
      </PageWrapper>
      <ProfilePageWrapper>
        <Header>
          <span
            style={{
              fontFamily: "Montserrat",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <img
              src={left}
              alt="pointer"
              onClick={() => {
                navigate(-1);
              }}
              style={{ width: 40, height: 40 }}
            />{" "}
            back
          </span>
          <ProfileHead>Edit Profile</ProfileHead>
        </Header>
        <Profile />
      </ProfilePageWrapper>
      <br/><br/><br/>
      {/* <Advert
        background={Colors.DIRTY_GREEN}
        text={"Find the style that fits YOU!"}
        image={man_hair}
        button={"Go to fashion"}
        orientation={false}
      />
      <Footer /> */}
    </>
  );
};

export default ProfilePage;

const ProfileHead = styled.div`
  font-family: Montserrat;
  font-weight: 800;
  width: 80%;
  text-align: center;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 20px;
`;
const ProfilePageWrapper = styled.div`
  width: 100%;
  height: fit-content;
  margin: 10vh 0px 0px 0px;
`;
const PageWrapper = styled.div`
width: 100vw;
height: fit-content:
padding: 0px;
box-sizing: border-box;
`;
