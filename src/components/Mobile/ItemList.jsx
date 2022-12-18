/* eslint-disable */

import React, { useState, useRef, useContext, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";
import { Colors } from "../../assets/styles";
import left_arrow from "../../assets/svg/left_arrow.svg";
import plus from "../../assets/svg/plus_circle.svg";
import { Loader } from "semantic-ui-react";
import { storage } from "../../firebase";
import { LoginContext } from "../../loginContext";

import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  getStorage,
} from "firebase/storage";

import { v4 } from "uuid";
import Swal from "sweetalert2";
import axios from "axios";
import { api } from "../../strings";

import car from "../../assets/svg/truck.svg";
import house from "../../assets/svg/house.svg";
import phone from "../../assets/svg/phone.svg";
import television from "../../assets/svg/television.svg";
import fashion from "../../assets/svg/fashion.svg";
import decor from "../../assets/svg/decor.svg";
import bag from "../../assets/svg/bag.svg";
import service from "../../assets/svg/service.svg";

const data = [
  {
    category: "Automobile",
    icon: car,
  },
  {
    category: "Landed properties",
    icon: house,
  },
  {
    category: "Phones, computers and accessories",
    icon: phone,
  },
  {
    category: "Electronics and electronic accessory",
    icon: television,
  },
  {
    category: "Fashion",
    icon: fashion,
  },
  {
    category: "Home decor",
    icon: decor,
  },
  {
    category: "Groceries",
    icon: bag,
  },
  {
    category: "Services",
    icon: service,
  },
];

const ListWrapper = styled.div`
  width: 100%;
  padding: 5px;
  display: grid;
  grid-template-columns: 48% 48%;
  gap: 4%;
  height: 90vh;
  overflow-y: scroll;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0px;
`;

const ItemList = () => {
  const { user } = useContext(LoginContext);
  const [toggleAdd, setToggleAdd] = useState(Boolean);
  const navigate = useNavigate();
  const token = localStorage.getItem("oja-token");

  useEffect(() => {
    if (!token) {
      navigate("/sign-in");
      Swal.fire({
        icon: "info",
        title: "Oops 😟",
        text: "You need to create an account or login to post items on OJA",
        position: "top",
      });
    }
  }, [token]);

  return (
    <>
      <Header>
        <span
          onClick={() => {
            navigate(-1);
          }}
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <img src={left_arrow} alt="back" width={25} height={40} />{" "}
          <span
            style={{
              fontFamily: "Montserrat",
              color: `${Colors.PRIMARY}`,
              fontWeight: "300",
            }}
          >
            back
          </span>
          <span
            style={{
              fontFamily: "Montserrat",
              padding: "0px 10px",
              color: `${Colors.PRIMARY}`,
              fontWeight: "700",
            }}
          >
            Active Items
          </span>
          <span
            style={{
              fontFamily: "Montserrat",
              padding: "0px 10px",
              color: `${Colors.PRIMARY}`,
              fontWeight: "700",
            }}
          >
            Declined
          </span>
        </span>
      </Header>
      <ListWrapper>
        <Items setToggleAdd={setToggleAdd} />
      </ListWrapper>
      {toggleAdd === true ? (
        <>
          <AddItemModal setToggleAdd={setToggleAdd} />
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default ItemList;

const AddItemWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  top: 0px;
  left: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ItemModalWrapper = styled.div`
  background: white;
  width: 90%;
  height: 95vh;
  position: relative;
  overflow-y: scroll;
  border-radius: 10px;
`;

const ItemModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: fit-content;
  border-radius: 8px;
`;

const InputField = styled.input`
  width: 80%;
  border: 2px solid ${Colors.PRIMARY};
  border-radius: 8px;
  padding: 2vh 0px 2vh 20px;
  font-family: Montserrat;
  background-color: transparent;
  margin: 1vh 0px;
`;

const InputTextArea = styled.textarea`
  width: 80%;
  border: 2px solid ${Colors.PRIMARY};
  border-radius: 8px;
  padding: 2vh 0px 2vh 20px;
  font-family: Montserrat;
  background-color: transparent;
  margin: 1vh 0px;
  height: 15vh;
`;

const Head = styled.div`
  width: 100%;
  text-align: center;
  color: ${Colors.PRIMARY};
  font-weight: 800;
  font-family: Montserrat;
  padding: 20px 0px;
  font-size: 1.3rem;
`;

const ImageSectionWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const ImageSelector = styled.div`
  background-color: ${Colors.CHOCOLATE};
  font-family: Montserrat;
  color: white;
  border-radius: 8px;
  width: 48%;
  height: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ImageIndicatorWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 12%;
  height: 20vh;
  width: 48%;
`;
const ImageIndicator = styled.div`
  font-family: Montserrat;
  font-weight: 700;
  color: white;
  background: ${Colors.CHOCOLATE};
  text-align: center;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
`;

const SubmitButton = styled.div`
background: ${Colors.PRIMARY};
color: white;
width: 80%;
padding: 2vh 0px;
text-align: center;
font-family: Montserrat;
border-radius: 8px;
margin: 5px; 0px;
font-weight: 900;
`;

const AddItemModal = ({ setToggleAdd }) => {
  const { user } = useContext(LoginContext);
  const [item_name, setItemName] = useState("");
  const [item_category, setItemCategory] = useState("");
  const [item_subcategory, setItemSubCategory] = useState("");
  const [item_price, setItemPrice] = useState("");
  const [item_description, setItemDescription] = useState("");
  const [item_pictures, setItemPictures] = useState([]);

  // Status indeicator states
  const [status, setUploadStatus] = useState("Upload photos (Max.4)");
  const [picture, setPicture] = useState([]);
  const [pickFile, setPickFile] = useState(null);
  const [loading, setLoading] = useState(Boolean);
  const [imageLoad, setImageLoad] = useState("");

  const pick = useRef("");

  const uploadFile = (pickFile) => {
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
              position: "bottom",
              text: "One image of the product has been added to your store!",
              title: "Image uploaded 👍",
              timer: 1500,
            });
            // setPicture(downloadURL);
            setItemPictures([...item_pictures, downloadURL]);
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
        if (picture.length <= 3) {
          setPicture([...picture, reader.result]);
        } else {
          Swal.fire({
            title: "Oops 😟",
            text: "You cannot post more than 4 images!",
          });
        }
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const _submitForm = () => {
    setLoading(true);
    const payload = {
      item_price,
      item_category,
      item_description,
      item_name,
      item_pictures,
      item_subcategory,
      user_id: user._id,
    };

    axios
      .post(`${api}/upload`, payload)
      .then((res) => {
        setLoading(false);
        setToggleAdd(false);
        Swal.fire({
          title: `Uploaded ${res.data.data.item_name}`,
          text: `${res.data.data.item_name} has been uploaded to ${res.data.data.item_category} category`,
          position: "top",
          timer: 1500,
        });
      })
      .catch((error) => {
        setLoading(false);
        Swal.fire({
          title: "Oops",
          text: error.response.data.data,
        });
      });
  };

  return (
    <>
      <AddItemWrapper>
        <ItemModalWrapper>
          <ItemModal>
            <Head>Upload your item</Head>
            <ImageSectionWrapper>
              <ImageSelector
                onClick={() => {
                  pick.current.click();
                }}
              >
                <img src={plus} alt="plus" />
                <div
                  style={{
                    width: "100%",
                    fontFamily: "Montserrat",
                    fontWeight: "700",
                    textAlign: "center",
                    padding: "5px",
                  }}
                >
                  {status}
                </div>
                {imageLoad && <Loader active inline="centered" />}
              </ImageSelector>
              <ImageIndicatorWrapper>
                {picture.length !== 0 ? (
                  <>
                    {picture.map((item, id) => {
                      return (
                        <ImageIndicator key={id}>
                          <img
                            src={item}
                            width={"100%"}
                            height={"100%"}
                            style={{
                              position: "relative",
                              borderRadius: "8px",
                            }}
                          />
                        </ImageIndicator>
                      );
                    })}
                  </>
                ) : (
                  <>
                    <ImageIndicator>1</ImageIndicator>
                    <ImageIndicator>2</ImageIndicator>
                    <ImageIndicator>3</ImageIndicator>
                    <ImageIndicator>4</ImageIndicator>
                  </>
                )}
              </ImageIndicatorWrapper>
            </ImageSectionWrapper>
            <InputField
              type="text"
              placeholder="Item name"
              value={item_name}
              onChange={(e) => {
                setItemName(e.target.value);
              }}
            />
            <Select
              value={item_category}
              onChange={(e) => {
                setItemCategory(e.target.value);
              }}
            >
              <Option>Select Category</Option>
              {data.map((item, id) => (
                <Option key={id} value={item.category}>
                  {item.category}
                </Option>
              ))}
            </Select>
            <InputField
              onChange={(e) => {
                handlePictureChange(e);
                setPickFile(e.target.files[0]);
                if (picture.length <= 3) {
                  uploadFile(e.target.files[0]);
                }
              }}
              ref={pick}
              style={{ display: "none" }}
              type="file"
              accept="image/*"
            />
            <InputField
              type="text"
              placeholder="Select Item sub-category"
              value={item_subcategory}
              onChange={(e) => {
                setItemSubCategory(e.target.value);
              }}
            />
            <InputTextArea
              type="text"
              placeholder="Item Description"
              value={item_description}
              onChange={(e) => {
                setItemDescription(e.target.value);
              }}
            ></InputTextArea>
            <InputField
              type="text"
              placeholder="Asking Price"
              value={item_price}
              onChange={(e) => {
                setItemPrice(e.target.value);
              }}
            />
            <SubmitButton
              onClick={() => {
                _submitForm();
              }}
            >
              {loading === true ? (
                <>
                  <Loader active inline="centered" />
                </>
              ) : (
                <>Submit Item for Approval</>
              )}
            </SubmitButton>
          </ItemModal>
        </ItemModalWrapper>
      </AddItemWrapper>
    </>
  );
};

const Card = ({ color, background, element }) => {
  return (
    <>
      <CardWrapper color={color} background={background}>
        {element}
      </CardWrapper>
    </>
  );
};

const AddItem = ({ setToggleAdd }) => {
  return (
    <>
      <AddItemElement
        onClick={() => {
          setToggleAdd(true);
        }}
      >
        <div style={{ flex: "1" }}>
          <img src={plus} alt="plus" />
        </div>
        <div
          style={{
            flex: "1",
            padding: "10px",
            fontFamily: "Montserrat",
            textAlign: "center",
          }}
        >
          Add new Item for sale
        </div>
      </AddItemElement>
    </>
  );
};

const Items = ({ setToggleAdd }) => {
  const [loading, setLoading] = useState(Boolean);
  const [items, setItems] = useState([]);
  const { user } = useContext(LoginContext);
  useEffect(() => {
    setLoading(true);
    axios.get(`${api}/item/${user._id}`).then((res) => {
      setItems(res.data.data);
      setLoading(false);
    });
  }, [user._id]);

  return (
    <>
      {loading === true ? (
        <>
          <div
            style={{
              width: "100vw",
              height: "90vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Loader active inline="centered" />
            <div style={{ fontFamily: "Montserrat", opacity: ".5" }}>
              Fetching Products...
            </div>
          </div>
        </>
      ) : (
        <>
          <Card
            color={"white"}
            background={"#3C0300"}
            element={<AddItem setToggleAdd={setToggleAdd} />}
          />
          {items.map((item, id) => (
            <ItemWrapper key={id}>
              <ItemImage src={item.item_pictures[0]} alt="items" />
              <ItemDesc>{item.item_name}</ItemDesc>
              <ItemPrice>
                NGN{" "}
                {Number(item.item_price).toLocaleString("en-US", {
                  minimumFractionDigits: 0,
                })}
              </ItemPrice>
              {item.item_approval === true ? (
                <>
                  <ActionButtonWrapper>
                    <Button background={"green"}>Edit</Button>
                    <Button background={"red"}>Delete</Button>
                  </ActionButtonWrapper>
                </>
              ) : (
                <>
                  <Awaiting>Awaiting approval</Awaiting>
                </>
              )}
            </ItemWrapper>
          ))}
        </>
      )}
    </>
  );
};

const Awaiting = styled.div`
  background: ${Colors.PRIMARY};
  color: white;
  text-align: center;
  font-family: Montserrat;
  padding: 10px;
  width: 100%;
  border-radius: 8px;
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: 1px 3px 11px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
`;

const ItemImage = styled.img`
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  width: 100%;
  height: 150px;
`;

const ItemDesc = styled.div`
  color: ${Colors.PRIMARY};
  font-family: Montserrat;
  text-align: center;
  width: 70%;
`;

const ItemPrice = styled.div`
  color: ${Colors.PRIMARY};
  font-family: Montserrat;
  text-align: center;
  font-weight: 900;
  text-align: center;
  width: 70%;
  padding: 10px 0px;
`;

const ActionButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 5px;
`;

const Button = styled.div`
  color: white;
  background: ${(props) => props.background};
  padding: 10px 10px;
  font-family: Montserrat;
  width: 48%;
  border-radius: 5px;
  text-align: center;
`;

const AddItemElement = styled.div`
  width: 100%;
  min-height: 30vh;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
`;

const CardWrapper = styled.div`
  box-shadow: 1px 3px 11px rgba(0, 0, 0, 0.2);
  background: ${(props) => props.background};
  min-height: 30vh;
  height: stretch;
  color: ${(props) => props.color};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Select = styled.select`
  background-color: ${Colors.DIRTY_WHITE};
  width: 80%;
  font-family: Montserrat;
  padding: 15px;
  border-radius: 4px;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.17);
`;

const Option = styled.option`
  font-family: Montserrat;
  color: ${Colors.PRIMARY_DEEP};
  font-size: 0.5rem;
`;
