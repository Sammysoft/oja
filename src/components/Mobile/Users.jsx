import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
import { Colors } from "../../assets/styles";
import { api } from "../../strings";
import left from "../../assets/svg/left_arrow.svg"
import { useNavigate } from "react-router-dom";




const Users = () => {
    const navigate = useNavigate()
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(`${api}/get/users`).then((res) => {
      setUsers(res.data.data);
    });
  }, [users]);

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
        Swal.fire({
          title: "Done 👍",
          text: `${res.data.data} has been ${action} on OJA!`,
        });
        console.log(res.data.data);
      })
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text: error.response.data,
        });
      });
  };

  const _dateFormat = date=>{
    const d = new Date(date);
    const month =  ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

    return(
        `${month[d.getMonth()]} ${d.getDay()} ${d.getFullYear()}`
    )
  }

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
              style={{ width: 40, height: 40 }}
            />{" "}
            back
          </span>
          <RegisteredUsers>Registered Users ({users.length})</RegisteredUsers>
        </Header>
      <UsersWrapper>
        {users.map((user, id) => {
          return (
            <>
              <UsersCard key={id}>
                <UsersImage src={user.profile_picture} />
                <UsersDetails>
                  <NameWrapper>{user.fullname}</NameWrapper>
                  <TimeWrapper>
                    <i>Joined {_dateFormat(user.createdAt)}</i>
                  </TimeWrapper>
                </UsersDetails>
                <Button
                  onClick={() => {
                    _blockUser(user._id, user.status);
                  }}
                  background={user.status}
                >
                  {user.status === false ? <>Unblock</> : <>Block</>}
                </Button>
              </UsersCard>
              <Divider />
            </>
          );
        })}
      </UsersWrapper>
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

const RegisteredUsers = styled.div`
  font-family: Montserrat;
  font-weight: 800;
  width: 60%;
  text-align: center;
`;

const UsersWrapper = styled.div`
  width: 90%;
  margin: 10px 5% 10px 5%;
  padding: 10px;
  border-radius: 8px;
  background-color: ${Colors.GREY};
  height: 90vh;
  overflow-y: scroll;
`;

const UsersCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 20px 5px;
`;

const UsersImage = styled.img`
  border-radius: 50%;
  height: 60px;
  width: 60px;
`;

const UsersDetails = styled.div`
  font-family: Montserrat;
  color: ${Colors.PRIMARY};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  width: 60%;
  text-align: left;
  padding: 0px 0px 0px 5px;
`;
const NameWrapper = styled.div`
  font-weight: 900;
  font-size: 1rem;
  text-align: left;
`;
const TimeWrapper = styled.div`
  font-style: italics;
  font-weight: 300;
  text-align: left;
  font-size: 0.8rem;
`;

const Divider = styled.div`
  background-color: white;
  height: 2px;
  width: 90%;
  margin: 10px 5%;
  border-radius: 5px;
`;

const Button = styled.div`
  color: white;
  border-radius: 8px;
  font-family: Montserrat;
  text-align: center;
  width: 23%;
  background: ${(props) => (props.background === false ? "green" : "red")};
  padding: 15px 5px;
  font-weight: 900;
`;

export default Users;
