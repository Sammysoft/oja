/* eslint-disable */

import React, { useState, useRef, useContext, useEffect } from "react";
import styled from "styled-components";
import { Colors } from "../../assets/styles";
import profile from "../../assets/profile.png";
import eye from "../../assets/svg/eye.svg";
import eye_cancel from "../../assets/svg/eye-cancel.svg";
import { storage } from "../../firebase";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  getStorage,
} from "firebase/storage";
import { AuthContext } from "../../loginContext";

import { v4 } from "uuid";
import axios from "axios";
import { api } from "../../strings";
import Swal from "sweetalert2";
import { Loader } from "semantic-ui-react";

const EditForm = () => {
  const { getUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState(getUser.email);
  const [fullname, setFullName] = useState(getUser.fullname);
  const [phone, setPhone] = useState(getUser.phone);
  const [state, setState] = useState(getUser.state);
  const [local_government, setLocal] = useState(getUser.local_government);
  const [password, setPassword] = useState("");

  const [imageLoad, setImageLoad] = useState(Boolean);
  const [profilepicture, setProfilePicture] = useState("");
  const [upload, setUpload] = useState(false);
  const [loading, setLoading] = useState(Boolean);
  const [pickFile, setPickFile] = useState(null);
  const [picture, setPicture] = useState("");

  const pick = useRef("");

  const _submitForm = () => {
    setLoading(true);
    if (password === "") {
      setLoading(false);
      Swal.fire({
        icon: "warning",
        title: "Enter Password",
        text: "Please enter your password!",
      });
    } else {
      const payload = {
        email,
        fullname,
        local_government,
        state,
        phone,
        profilepicture,
        state,
        password,
      };

      axios
        .post(`${api}/profile/update/${getUser._id}`, payload)
        .then((res) => {
          setLoading(false);
          Swal.fire({
            icon: "success",
            title: "Updated Profile",
            text: "Account has been updated successfully",
          });
        })
        .catch((error) =>
          Swal.fire({
            icon: "error",
            text: error.response.data.data,
            title: "Oops",
          })
        );
    }
  };

  const uploadFile = () => {
    setImageLoad(true);
    if (pickFile == null) {
      return null;
    } else {
      const imageRef = ref(getStorage(), `images/${pickFile.name + v4()}`);
      const uploadTask = uploadBytesResumable(imageRef, pickFile);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(Math.round(progress) + "% ");
          // setUploadStatus(`${Math.round(progress)}%`);
          switch (snapshot.state) {
            case "paused":
              // setUploadStatus("Paused");
              break;
            case "running":
              // setUploadStatus("Uploading...");
              break;
          }
        },
        (error) => {
          alert("Sorry, upload denied at the moment, Please try again later!");
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
            Swal.fire({
              text: "Successfully uploaded profile picture. Press Update to complete profile update!",
              title: "Image uploaded 👍",
            });
            setPicture(downloadURL);
            setProfilePicture(downloadURL);
            setImageLoad(false);
          });
        }
      );
    }
  };

  const handlePictureChange = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setPicture(reader.result);
        setUpload(true);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  useEffect(() => {
    // if (!user.fullname) {
    //   navigate("/sign-in");
    //   Swal.fire({
    //     icon: "info",
    //     title: "Oops 😟",
    //     text: "You have to sign up or login to update your profile on OJA",
    //     position:"top"
    //   });
    // }
    axios.get(`${api}/user/${getUser._id}`).then((res) => {
      setEmail(res.data.data.email);
      setFullName(res.data.data.fullname);
      setLocal(res.data.data.local_government);
      setPhone(res.data.data.phone);
      setState(res.data.data.state);
      setProfilePicture(res.data.data.profile_picture);
    });
  }, [getUser.fullname]);

  return (
    <>
      <EditFormWrapper>
        <FormWrap>
          <ProfileField>
            <FormLabel>Profile Photo:</FormLabel>
            <FormField>
              <ProfilePicture>
                <Image
                  src={profilepicture}
                  alt="profile"
                  style={{
                    width: "70px",
                    height: "70px",
                    borderRadius: "50px",
                  }}
                />
                <div style={{ width: "70%" }}>
                  <TextWrapper>Upload profile photo</TextWrapper>
                  <br />
                  <input
                    onChange={(e) => {
                      handlePictureChange(e);
                      setPickFile(e.target.files[0]);
                    }}
                    ref={pick}
                    style={{ display: "none" }}
                    type="file"
                    accept="image/*"
                  />
                  {upload === false && (
                    <>
                      <UploadButton
                        onClick={() => {
                          pick.current.click();
                        }}
                      >
                        Select
                      </UploadButton>
                    </>
                  )}
                  {upload === true && (
                    <>
                      <UploadButton
                        style={{
                          backgroundColor: Colors.PRIMARY_DEEP,
                          color: "white",
                        }}
                        onClick={() => {
                          uploadFile();
                        }}
                      >
                        Add Image
                      </UploadButton>
                    </>
                  )}
                </div>
              </ProfilePicture>
            </FormField>
          </ProfileField>
          <ProfileField>
            <FormLabel>Full name: </FormLabel>
            <InputField
              type={"text"}
              placeholder={"Full name"}
              value={fullname}
              onChange={(e) => {
                setFullName(e.target.value);
              }}
            />
          </ProfileField>
          <ProfileField>
            <FormLabel>Email </FormLabel>
            <InputField
              type={"text"}
              placeholder={"Email"}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </ProfileField>
          <ProfileField>
            <FormLabel>Phone: </FormLabel>
            <InputField
              type={"text"}
              placeholder={"Phone Number"}
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
          </ProfileField>
        </FormWrap>
        <FormWrap>
          <ProfileField>
            <FormLabel>Password: </FormLabel>
            <InputField
              type={showPassword === true ? "text" : "password"}
              placeholder={"Password"}
              button={true}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <ViewPassword
              onClick={() => {
                setShowPassword(!showPassword);
              }}
            >
              {showPassword === true && (
                <>
                  <img src={eye_cancel} alt="eye" />
                </>
              )}
              {showPassword === false && (
                <>
                  <img src={eye} alt="eye" />
                </>
              )}
            </ViewPassword>
          </ProfileField>
          <ProfileField>
            <FormLabel>State: </FormLabel>
            <InputField
              type={"text"}
              placeholder={"State"}
              value={state}
              onChange={(e) => {
                setState(e.target.value);
              }}
            />
          </ProfileField>
          <ProfileField>
            <FormLabel>L G A: </FormLabel>
            <InputField
              type={"text"}
              placeholder={"L G A"}
              value={local_government}
              onChange={(e) => {
                setLocal(e.target.value);
              }}
            />
          </ProfileField>
          <ProfileField>
            <EditButton
              onClick={() => {
                _submitForm();
              }}
            >
              {loading === true ? (
                <>
                  <Loader active inline="centered" />
                </>
              ) : (
                <>Update my details</>
              )}
            </EditButton>
          </ProfileField>
        </FormWrap>
      </EditFormWrapper>
      {/* <EditButtonWrapper>

      </EditButtonWrapper> */}
    </>
  );
};

const EditFormWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 5%;
  padding: 7vh;
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
  height: 15vh;
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
  padding: 10px;
  border: 2px solid ${Colors.PRIMARY_DEEP};
  border-radius: 15px;
  border-top-right-radius: ${(props) =>
    props.button === true ? "0px" : "15px"};
  border-bottom-right-radius: ${(props) =>
    props.button === true ? "0px" : "15px"};
  background-color: transparent;
  width: ${(props) => (props.button === true ? "80%" : "100%")};
  font-family: Montserrat;
  font-weight: 900;
  color: ${Colors.PRIMARY_DEEP};
`;
const ViewPassword = styled.div`
  width: 20%;
  padding: 10px;
  text-align: center;
  background-color: ${Colors.PRIMARY_DEEP};
  cursor: pointer;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
`;
const EditButton = styled.div`
  color: ${Colors.WHITE};
  background-color: ${Colors.PRIMARY_DEEP};
  padding: 10px;
  width: 100%;
  border-radius: 15px;
  text-align: center;
  font-family: Montserrat;
  cursor: pointer;
`;
const EditButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default EditForm;
