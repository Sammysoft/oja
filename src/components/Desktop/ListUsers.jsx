/* eslint-disable */

import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { Colors } from "../../assets/styles";
import { Adverts } from "../../assets/data";
import ads3 from "../../assets/ads3.png";
import ads1 from "../../assets/ads1.png";
import { useNavigate } from "react-router";
import { AuthContext } from "../../loginContext";
import { api } from "../../strings";
import left from "../../assets/svg/left_arrow.svg";
import axios from "axios";
import Swal from "sweetalert2";

const ListUsers = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("oja-token");
  useEffect(() => {
    if (!token) {
      navigate("/login");
      //   Swal.fire({
      //     icon: "info",
      //     title: "Oops 😟",
      //     text: "You need to create an account or login to post items on OJA",
      //     position: "top",
      //   });
    }
  }, [token]);

  const [products, setProducts] = useState([]);
  const { getUser } = useContext(AuthContext);

  useEffect(() => {
    if (getUser.usertype !== "Admin") {
      navigate("/");
    }
    axios
      .get(`${api}/get/users`)
      .then((res) => {
        setProducts(res.data.data);
      })
      .catch((error) => {
        // Swal.fire({
        //   text: error.response.data,
        //   title: "Oops",
        // });
      });
  }, [products]);

  return (
    <>
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
            style={{ width: 35, height: 40 }}
          />{" "}
          back
        </span>
        <ItemApprove>Manage All Users({products.length})</ItemApprove>
      </Header>
      <ItemsListWrapper>
        <LeftWrapper>
          <AdvertBanner
            advert={Adverts[2]}
            reverse={2}
            img_src={ads3}
            background={Colors.DEEP_GREEN}
            button={"Shop Now"}
          />
          <AdvertBanner
            advert={Adverts[0]}
            reverse={1}
            img_src={ads1}
            background={Colors.CHOCOLATE}
            text={`3px solid ${Colors.WHITE}`}
            button={"Sell my item"}
          />
        </LeftWrapper>
        <RightWrapper>
          <Items Items={products} />
        </RightWrapper>
      </ItemsListWrapper>
    </>
  );
};

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 20px;
`;

const ItemApprove = styled.div`
  font-family: Montserrat;
  font-weight: 800;
  width: 60%;
  text-align: center;
`;

const ItemsListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 90%;
  height: fit-content;
  margin-bottom: 10vh;
`;

const LeftWrapper = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

const RightWrapper = styled.div`
  margin-left: 5vw;
  display: grid;
  grid-template-columns: 20% 20% 20% 20%;
  gap: 5%;
  height: 70vh;
  overflow-y: scroll;
  width: 70%;
`;

const ItemCapsule = styled.div`
  height: 35vh;
  box-shadow: 1px 3px 11px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: ${Colors.WHITE};
  margin: 30px 0px;
  cursor: pointer;
  min-height: 30vh;
`;

const StateButtonWrapper = styled.div`
  width: 100%;
`;

const StateButton = styled.div`
  color: white;
  border-radius: 8px;
  font-family: Montserrat;
  text-align: center;
  width: 100%;
  background: ${(props) => (props.background === false ? "green" : "red")};
  padding: 5px 5px;
  font-weight: 900;
`;

const Items = ({ Items }) => {
  const _blockUser = (id, status) => {
    let action = "";
    if (status === false) {
      action = "Unblocked";
    } else {
      action = "Blocked";
    }
    axios
      .post(`${api}/users/block/${id}`)
      .then((res) => {
        // Swal.fire({
        //   title: "Done 👍",
        //   text: `${res.data.data} has been ${action} on OJA!`,
        // });
        console.log(res.data.data);
      })
      .catch((error) => {
        // Swal.fire({
        //   title: "Error!",
        //   text: error.response.data,
        // });
      });
  };

  const _dateFormat = (date) => {
    const d = new Date(date);
    const month = [
      "Jan",
      "Feb",
      "Mar",
      "April",
      "May",
      "June",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];

    return `${month[d.getMonth()]} ${d.getDate()} ${d.getFullYear()}`;
  };
  return (
    <>
      {Items.map((item, id) => (
        <ItemCapsule Items={Items} key={id}>
          <div
            style={{
              backgroundImage: `url('${item.profile_picture}')`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "100%",
              height: "50%",
              width: "100%",
            }}
          ></div>
          <span
            style={{
              fontFamily: "Montserrat",
              textAlign: "center",
              fontSize: "1rem",
              fontWeight: 700,
            }}
          >
            {item.fullname}
          </span>
          <span
            style={{
              fontFamily: "Montserrat",
              textAlign: "center",
              fontSize: "0.7rem",
              //   fontWeight: 700,
            }}
          >
            <i>Joined {_dateFormat(item.createdAt)}</i>
            {/* N{" "}
            {Number(item.item_price).toLocaleString("en-US", {
              minimumFractionDigits: 0,
            })} */}
          </span>
          <StateButton
            onClick={() => {
              _blockUser(item._id, item.status);
            }}
            background={item.status}
          >
            {item.status === false ? <>Unblock</> : <>Block</>}
          </StateButton>
          {/* <StateButton state={"delete"}>Delete</StateButton> */}
        </ItemCapsule>
      ))}
    </>
  );
};

const AdvertBanner = ({
  advert,
  reverse,
  img_src,
  background,
  text,
  button,
}) => {
  return (
    <>
      <AdvertWrapper advert={advert} background={background}>
        <AdvertBannerLeft reverse={2} advert={advert}>
          <img
            src={img_src}
            alt={"ads"}
            width="120%"
            height={200}
            style={{ marginBottom: "-40px", top: "0px" }}
          />
        </AdvertBannerLeft>
        <AdvertBannerRight reverse={reverse}>
          <AdvertTextWrapper advert={advert} text={text}>
            {advert.text}
          </AdvertTextWrapper>
          <Button>{button}</Button>
        </AdvertBannerRight>
      </AdvertWrapper>
    </>
  );
};

const AdvertWrapper = styled.div`
  background-color: ${(props) => props.background};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 25vh;
  width: 100%;
  border-radius: 0px 15px 15px 0px;
  margin: 30px 0px;
`;

const AdvertBannerLeft = styled.div`
  order: ${(props) => props.reverse};
  width: 45%;
`;

const AdvertBannerRight = styled.div`
  width: 55%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  order: ${(props) => props.reverse};
`;

const AdvertTextWrapper = styled.div`
  color: ${Colors.WHITE};
  font-weight: 900;
  font-family: Montserrat;
  text-align: left;
  padding-left: 5px;
  border-left: ${(props) => props.text};
  margin-left: 10px;
  font-family: Montserrat;
  font-size: 1.2rem;
`;

const Button = styled.div`
  padding: 10px;
  color: ${Colors.PRIMARY_DEEP};
  background-color: ${Colors.WHITE};
  margin-left: 10px;
  border-radius: 10px;
  font-family: Montserrat;
  cursor: pointer;
`;

export default ListUsers;
