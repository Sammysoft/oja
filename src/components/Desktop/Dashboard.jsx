/* eslint-disable */

import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../loginContext";
import styled from "styled-components";
import { Colors } from "../../assets/styles";
import new_item from "../../assets/new_item.png";
import item from "../../assets/items.png";
import user from "../../assets/users.png";
import admin_logout from "../../assets/svg/long_bar.svg";
import plus_circle from "../../assets/svg/plus_circle.svg";
import chat_dot from "../../assets/svg/chat_dot.svg";
import person from "../../assets/svg/person.svg";
import logout from "../../assets/svg/logout.svg";
import { Link, useNavigate } from "react-router-dom";

const DashboardComponent = () => {
  const { getUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const _logout = () => {
    localStorage.removeItem("oja-token");
    _setUser({});
    navigate("/");
    Swal.fire({
      title: "Logged Out",
      text: "You have logged out successfully",
    });
  };

  switch (getUser.usertype) {
    case "Admin":
      return (
        <>
          <PageBody>
            {/* <AdCapsuleWrapper>
              <img
                src={require("../../assets/man_hair.png")}
                alt="ads"
                style={{ height: 500, width: 300 }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  height: "80%",
                }}
              >
                <div
                  style={{
                    color: Colors.WHITE,
                    fontWeight: 900,
                    width: "70%",
                    fontFamily: "Montserrat",
                    fontSize: "3rem",
                    lineHeight: "3rem",
                    padding: 10,
                  }}
                >
                  Find the style that fits YOU!
                </div>
                <AdvertButtonWrapper> Go to Fashion</AdvertButtonWrapper>
              </div>
            </AdCapsuleWrapper> */}
            <Choices>
              <ChoicesCard
                color={Colors.CHOCOLATE}
                onClick={() => {
                  navigate("/admin/item_approval");
                }}
              >
                <img src={new_item} alt="plus" />
                <Link
                  to="/admin/item_approval"
                  style={{
                    textDecorationLine: "none",
                    color: "white",
                    textDecoaration: "none",
                    fontFamily: "Montserrat",
                  }}
                >
                  New Items for Approval
                </Link>
              </ChoicesCard>
              <ChoicesCard
                color={Colors.PRIMARY_DEEP}
                onClick={() => {
                  navigate("/admin/manage_items");
                }}
              >
                <img src={item} alt="plus" />
                <Link
                  to="/admin/manage_items"
                  style={{
                    textDecorationLine: "none",
                    color: "white",
                    textDecoaration: "none",
                    fontFamily: "Montserrat",
                  }}
                >
                  Manage All Items
                </Link>
              </ChoicesCard>
              <ChoicesCard
                color={Colors.DEEP_GREEN}
                onClick={() => {
                  navigate("/admin/users");
                }}
              >
                <img src={user} alt="chat" />
                <Link
                  style={{
                    textDecorationLine: "none",
                    color: "white",
                    textDecoaration: "none",
                    fontFamily: "Montserrat",
                  }}
                >
                  Manage Users
                </Link>
              </ChoicesCard>
              <ChoicesCard
                color={Colors.DIRTY_GREEN}
                onClick={() => {
                  navigate("/admin/metrics");
                }}
              >
                <img src={admin_logout} alt="plus" />
                <Link
                  style={{
                    textDecorationLine: "none",
                    color: "white",
                    textDecoaration: "none",
                    fontFamily: "Montserrat",
                  }}
                >
                  Metrics
                </Link>
              </ChoicesCard>
            </Choices>
          </PageBody>
        </>
      );

      break;

    case "User":
      return (
        <>
          <PageBody>
            <AdCapsuleWrapper>
              <img
                src={require("../../assets/man_hair.png")}
                alt="ads"
                style={{ height: 500, width: 300 }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  height: "80%",
                }}
              >
                <div
                  style={{
                    color: Colors.WHITE,
                    fontWeight: 900,
                    width: "70%",
                    fontFamily: "Montserrat",
                    fontSize: "3rem",
                    lineHeight: "3rem",
                    padding: 10,
                  }}
                >
                  Find the style that fits YOU!
                </div>
                <AdvertButtonWrapper> Go to Fashion</AdvertButtonWrapper>
              </div>
            </AdCapsuleWrapper>
            <Choices>
              <ChoicesCard
                color={Colors.CHOCOLATE}
                onClick={() => {
                  navigate("/item-list");
                }}
              >
                <img src={plus_circle} alt="plus" />
                <Link
                  to="/item-list"
                  style={{
                    textDecorationLine: "none",
                    color: "white",
                    textDecoaration: "none",
                    fontFamily: "Montserrat",
                  }}
                >
                  Upload / Manage your items
                </Link>
              </ChoicesCard>
              <ChoicesCard
                color={Colors.PRIMARY_DEEP}
                onClick={() => navigate("/")}
              >
                <img src={chat_dot} alt="plus" />
                <Link
                  style={{
                    textDecorationLine: "none",
                    color: "white",
                    textDecoaration: "none",
                    fontFamily: "Montserrat",
                  }}
                >
                  Chats
                </Link>
              </ChoicesCard>
              <ChoicesCard
                color={Colors.DEEP_GREEN}
                onClick={() => {
                  navigate("/profile");
                }}
              >
                <img src={person} alt="profile" />
                <Link
                  to="/profile"
                  style={{
                    textDecorationLine: "none",
                    color: "white",
                    textDecoaration: "none",
                    fontFamily: "Montserrat",
                  }}
                >
                  Manage Profile
                </Link>
              </ChoicesCard>
              <ChoicesCard
                color={Colors.DIRTY_GREEN}
                onClick={() => {
                  _logout();
                }}
              >
                <img src={logout} alt="plus" style={{width: 50, }}/>
                <div
                  style={{
                    textDecorationLine: "none",
                    color: "white",
                    textDecoaration: "none",
                    fontFamily: "Montserrat",
                  }}
                >
                  Logout
                </div>
              </ChoicesCard>
            </Choices>
          </PageBody>
        </>
      );
      break;

    default:
      return <></>;
      break;
  }
  return <></>;
};

const AdvertButtonWrapper = styled.div`
  background-color: ${Colors.WHITE};
  color: ${Colors.PRIMARY_DEEP};
  padding: 10px 15px;
  font-family: Montserrat;
  border-radius: 10px;
`;

const PageBody = styled.div`
  width: 100%;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  height: fit-content;
  margin: 10px 0px 10vh 0px;
`;

const AdCapsuleWrapper = styled.div`
  //   margin-top: 15vh;
  width: 35%;
  background-color: ${Colors.DIRTY_GREEN};
  //   height: 55vh;
  border-radius: 0px 15px 15px 0px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
const Choices = styled.div`
  width: 63%;
  padding: 20px;
  height: auto;
  display: grid;
  grid-template-columns: 40% 40%;
  align-items: flex-start;
  justify-content: center;
  gap: 10vh;
`;

const ChoicesCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  font-family: Montserrat;
  background-color: ${(props) => props.color};
  border-radius: 15px;
  height: 100%;
  cursor:pointer;
`;

export default DashboardComponent;
