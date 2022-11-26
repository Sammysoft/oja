import React from "react";
import styled from "styled-components";
import { Colors } from "../../assets/styles";
import camera from "../../assets/svg/camera.svg";

const Profile = () => {
  return (
    <>
      <ProfilePageWrapper>
        <PictureBlock>
          <PictureHolder>
            <img
              src={camera}
              alt="capture"
              style={{ left: "50px", top: "55px", position: "absolute" }}
            />
          </PictureHolder>
          <br />
          <PictureTag>Upload New Photo</PictureTag>
        </PictureBlock>
        <Input placeholder="Full Name:" type="text" />
        <Input placeholder="Phone:" type="text" />
        <Input placeholder="Email:" type="email" />
        <Input placeholder="Password:" type="password" />
        <Input placeholder="State:" type="text" />
        <Input placeholder="LGA:" type="text" />
        <Button>Update Profile</Button>
      </ProfilePageWrapper>
    </>
  );
};

export default Profile;

const ProfilePageWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
height: fit-content:
padding: 10px;
width: 90%;
margin: 5%;
background: ${Colors.GREY};
border-radius: 8px;
`;

const Input = styled.input`
  background: transparent;
  font-family: Montserrat;
  color: ${Colors.PRIMARY};
  border-radius: 8px;
  border: 2px solid ${Colors.PRIMARY};
  padding: 10px;
  width: 80%;
  margin: 0px 10%;
  margin: 2vh 0px;
`;

const PictureBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 20px 0px;
  position: relative;
`;

const PictureHolder = styled.div`
  border-radius: 50%;
  width: 130px;
  height: 130px;
  background: rgba(0, 0, 0, 0.6);
  position: relative;
`;

const PictureTag = styled.div`
  font-family: Montserrat;
  font-weight: 900;
  color: ${Colors.PRIMARY};
`;

const Button = styled.div`
  color: white;
  font-family: Montserrat;
  background: ${Colors.PRIMARY};
  font-weight: 800;
  text-align: center;
  padding: 10px;
  width: 80%;
  margin: 10%;
  border-radius: 8px;
`;
