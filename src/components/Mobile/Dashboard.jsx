import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { Colors } from "../../assets/styles";
import plus from "../../assets/svg/plus_circle.svg";
import chat from "../../assets/svg/chat_dot_white.svg";
import profile from "../../assets/svg/person.svg";
import logout from "../../assets/svg/logout.svg";
import Swal from "sweetalert2"

const Dashboard = () => {
  const navigate = useNavigate()


  const _logout = () =>{
    localStorage.removeItem("oja-token");
    navigate("/sign-in");
    Swal.fire({
        icon: "success",
        title: "Logged Out.",
        text: "Bye for now, thanks for using OJA"
    })
  }
  return (
    <>
      <AdvertUpperText>
        <DeepText>
          Welcome to Oja.
          <br /> The Online Marketplace.
        </DeepText>
        <DashMenuWrapper>
          <Link
            to="/items"
            style={{
              textDecoration: "none",
              textDecorationLine: "none",
              color: "white",
            }}
          >
            <DashMenu background={"#3C0300"}>
              <img src={plus} alt="plus-icon" />
              <LittleText>Upload/Manage Items</LittleText>
            </DashMenu>
          </Link>
          <Link
            to="/chats"
            style={{
              textDecoration: "none",
              textDecorationLine: "none",
              color: "white",
            }}
          >
            <DashMenu background={"#00002F"}>
              <img src={chat} alt="plus-icon" />
              <LittleText>Chats</LittleText>
            </DashMenu>
          </Link>
          <Link
            to="/profile"
            style={{
              textDecoration: "none",
              textDecorationLine: "none",
              color: "white",
            }}
          >
            <DashMenu background={"#00313C"}>
              <img src={profile} alt="profile" />
              <LittleText>Manage Profile</LittleText>
            </DashMenu>
          </Link>
          <DashMenu background={"#003C11"} onClick={()=>{_logout()}}>
            <img src={logout} alt="logout" />
            <LittleText>Logout</LittleText>
          </DashMenu>
        </DashMenuWrapper>
      </AdvertUpperText>
    </>
  );
};

export default Dashboard;

const DashMenuWrapper = styled.div`
  display: grid;
  grid-template-columns: 48% 48%;
  gap: 10px;
  margin: 15px 0px;
  width: 100%;
  padding: 5px;
`;

const DashMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: stretch;
  background: ${(props) => props.background};
  border-radius: 10px;
  min-height: 25vh;
`;
const LittleText = styled.div`
  color: ${Colors.WHITE};
  font-weight: 900;
  font-family: Montserrat;
  text-align: center;
  padding: 10px;
  margin: 10px 0px;
  font-size: 1rem;
`;

const DeepText = styled.div`
  font-weight: 900;
  font-family: Montserrat;
  font-size: 1.5rem;
  color: ${Colors.PRIMARY_DEEP};
  width: 90%;
`;

const AdvertUpperText = styled.div`
  font-family: Montserrat;
  width: 100vw;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 13vh 0px;
`;
