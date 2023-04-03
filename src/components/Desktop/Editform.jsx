import React from "react";
import styled from "styled-components";
import { Colors } from "../../assets/styles";
import profile from "../../assets/profile.png";

const EditForm = () => {
  return (
    <>
      <EditFormWrapper>
        <FormWrap>
          <ProfileField>
            <FormLabel>Profile Photo:</FormLabel>
            <FormField>
              <ProfilePicture>
                <Image src={profile}/>
                <div style={{width:"70%"}}>
                  <TextWrapper>Upload profile photo</TextWrapper>
                  <br />
                  <UploadButton>Select</UploadButton>
                </div>
              </ProfilePicture>
            </FormField>
          </ProfileField>
          <ProfileField>
            <FormLabel>Full name: </FormLabel>
            <InputField type={"text"} placeholder={"Full name"}/>
          </ProfileField>
          <ProfileField>
            <FormLabel>Phone: </FormLabel>
            <InputField type={"text"} placeholder={"Phone Number"}/>
          </ProfileField>
        </FormWrap>
        <FormWrap>
        <ProfileField>
            <FormLabel>Password: </FormLabel>
            <InputField type={"password"} placeholder={"Password"}/>
          </ProfileField>
          <ProfileField>
            <FormLabel>State: </FormLabel>
            <InputField type={"text"} placeholder={"State"}/>
          </ProfileField>
          <ProfileField>
            <FormLabel>L G A: </FormLabel>
            <InputField type={"text"} placeholder={"L G A"}/>
          </ProfileField>
        </FormWrap>
      </EditFormWrapper>
      <EditButtonWrapper>
      <EditButton>Update my details</EditButton>
      </EditButtonWrapper>

    </>
  );
};

const EditFormWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 5%;
  padding: 5vh;
  height: 90%;

`;

const FormWrap = styled.div`
display: flex:
width: 100%;
flex-diretion: column;
align-items: center;
justify-content: space-between;
height: 100%;
`;

const ProfileField = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
    height: 20vh;
`;
const FormLabel = styled.div`
  font-family: Montserrat;
  width: 30%;
`;
const FormField = styled.div`
  width: 100%;
`;

const ProfilePicture = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
const Image = styled.img`
  border-radius: 50;
  width: 50;
  height: 50;
`;

const TextWrapper = styled.div`
  font-family: Montserrat;
  font-weight: 900;
  text-align: center;
`;

const UploadButton = styled.div`
  padding: 10px;
  color: ${Colors.DEEP};
  background-color: ${Colors.WHITE};
  cursor: pointer;
  border-radius: 15px;
  font-family: Montserrat;
  text-align: center;
`;

const InputField = styled.input`
padding: 15px;
border: 3px solid ${Colors.PRIMARY_DEEP};
border-radius: 15px;
background-color: transparent;
width: 100%;
font-family: Montserrat;
font-weight: 900;
color: ${Colors.PRIMARY_DEEP};
`
const EditButton = styled.div`
color: ${Colors.WHITE};
background-color:  ${Colors.PRIMARY_DEEP};
padding: 15px;
width: 100%;
border-radius: 15px;
text-align: center;
font-family: Montserrat;
cursor: pointer;
`
const EditButtonWrapper = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`
export default EditForm;
