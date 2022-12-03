/* eslint-disable */

import React, { useState, useRef, useEffect, useContext } from "react";
import styled from "styled-components";
import { LoginContext } from "../../loginContext";
import { Colors } from "../../assets/styles";
import camera from "../../assets/svg/camera.svg";
import { storage } from "../../firebase";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  getStorage,
} from "firebase/storage";

import { v4 } from "uuid";
import axios from "axios";
import { api } from "../../strings";
import Swal from "sweetalert2";
import { Loader } from "semantic-ui-react";

const Profile = () => {
  const { user } = useContext(LoginContext);
  const pick = useRef("");

  // const [userID ,setUserID] = useState(user._id)
  const [email, setEmail] = useState(user.email);
  const [fullname, setFullName] = useState(user.fullname);
  const [phone, setPhone] = useState(user.phone);
  const [state, setState] = useState(user.state);
  const [local_government, setLocalGovernment] = useState(
    user.local_government
  );
  const [password, setPassword] = useState("");
  const [imageLoad, setImageLoad] = useState(Boolean);
  const [profilepicture, setProfilePicture] = useState("");

  // dependencies
  const [status, setUploadStatus] = useState("Upload");
  const [picture, setPicture] = useState("");
  const [pickFile, setPickFile] = useState(null);
  const [loading, setLoading] = useState(Boolean);

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
          setUploadStatus(`${Math.round(progress)}%`);
          switch (snapshot.state) {
            case "paused":
              setUploadStatus("Paused");
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
              text: "Successfully uploaded image to the cloud!",
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
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const _submitForm = () => {
    setLoading(true);
    if (password === "") {
      setLoading(false)
        Swal.fire({
          icon: "warning",
          title:"Enter Password",
          text:"Please enter your password!"
        })
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

      axios.post(`${api}/profile/update/${user._id}`, payload).then((res) => {
        setLoading(false);
        Swal.fire({
          icon: "success",
          title: "Updated Profile",
          text: "Account has been updated successfully",
        });
      });
    }
  };

  useEffect(() => {
    axios.get(`${api}/user/${user._id}`).then((res) => {
      setEmail(res.data.data.email);
      setFullName(res.data.data.fullname);
      setLocalGovernment(res.data.data.local_government);
      setPhone(res.data.data.phone);
      setState(res.data.data.state);
      setProfilePicture(res.data.data.profile_picture);
    });
  }, [user]);

  return (
    <>
      <ProfilePageWrapper>
        <PictureBlock>
          {picture === "" ? (
            <>
             {
              profilepicture === "" || null || !profilepicture ? <>
               <PictureHolder background={profilepicture}>
                <img
                  src={camera}
                  alt="capture"
                  style={{ left: "50px", top: "55px", position: "absolute" }}
                  onClick={() => {
                    pick.current.click();
                  }}
                />
              </PictureHolder>
              </>:<>
              <NewPictureHolder background={profilepicture}>
                <img
                  src={camera}
                  alt="capture"
                  style={{ left: "50px", top: "55px", position: "absolute" }}
                  onClick={() => {
                    pick.current.click();
                  }}
                />
              </NewPictureHolder>
              </>
             }
            </>
          ) : (
            <>
              <SelectedImage profile={picture}>
                <UploadButton
                  onClick={() => {
                    uploadFile();
                  }}
                >
                  {status}
                </UploadButton>
                <ChangeButton
                  onClick={() => {
                    pick.current.click();
                  }}
                >
                  Change
                </ChangeButton>
              </SelectedImage>
            </>
          )}

          <br />
          <PictureTag>Upload New Photo</PictureTag>
        </PictureBlock>
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
        <Input
          placeholder="Full Name:"
          type="text"
          value={fullname}
          onChange={(e) => {
            setFullName(e.target.value);
          }}
        />
        <Input
          placeholder="Phone:"
          type="text"
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
        <Input
          placeholder="Email:"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Input
          placeholder="Password:"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Input
          placeholder="State:"
          type="text"
          value={state}
          onChange={(e) => {
            setState(e.target.value);
          }}
        />
        <Input
          placeholder="LGA:"
          type="text"
          value={local_government}
          onChange={(e) => {
            setLocalGovernment(e.target.value);
          }}
        />
        <Input
          style={{ display: "none" }}
          type="text"
          value={profilepicture}
          onChange={(e) => {
            setProfilePicture(e.target.value);
          }}
        />
        <Button
          onClick={() => {
            _submitForm();
          }}
        >
          {loading === true ? (
            <>
              <Loader active inline="centered" />
            </>
          ) : (
            <>Update Profile</>
          )}
        </Button>
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
  background: rgba(0,0,0,0.6);
  position: relative;
`;

const NewPictureHolder = styled.div`
border-radius: 50%;
width: 130px;
height: 130px;
background: url(${(props)=> props.background});
position: relative;
background-position: center;
background-size: cover;
background-repeat: no-repeat;
`

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

const SelectedImage = styled.div`
  border-radius: 50%;
  width: 130px;
  height: 130px;
  background: url(${(props) => props.profile});
  position: relative;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;
const UploadButton = styled.div`
  padding: 10px 15px;
  border-radius: 8px;
  background-color: ${Colors.PRIMARY};
  color: white;
  font-family: Montserrat;
  text-align: center;
  position: absolute;
  right: -15px;
  bottom: -10px;
  font-weight: 900;
  font-size: 0.5rem;
`;

const ChangeButton = styled.div`
  padding: 10px 15px;
  border-radius: 8px;
  background-color: ${Colors.PRIMARY};
  color: white;
  font-family: Montserrat;
  text-align: center;
  position: absolute;
  left: -15px;
  bottom: -10px;
  font-size: 0.5rem;
  font-weight: 900;
`;
