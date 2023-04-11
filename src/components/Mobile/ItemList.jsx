/* eslint-disable */

import React, { useState, useRef, useContext, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";
import { Colors } from "../../assets/styles";
import left_arrow from "../../assets/svg/left_arrow.svg";
import plus from "../../assets/svg/plus_circle.svg";
import { Loader } from "semantic-ui-react";
import { storage } from "../../firebase";
import { AuthContext } from "../../loginContext";
import cancel from "../../assets/svg/cancel_black.svg";
import { Categories } from "../../data";
import { AUTOMOBILE } from "../../data";
import { LANDED_PROPERTIES } from "../../data";
import { PHONES } from "../../data";
import { ELECTRONICS } from "../../data";
import { MEDICALS_COSMETICS_BEAUTIES } from "../../data";
import { HOME_DECORS } from "../../data";
import { FASHION } from "../../data";
import { SPORTS } from "../../data";
import { KIDDIES_BABIES } from "../../data";
import { ANIMALS_LIVESTOCK_AGRICULTURE } from "../../data";
import { GROCERIES_BREWERIES } from "../../data";
import { SERVICES } from "../../data";
import { FACTORY_INDUSTRIAL_CONSTRUCTIONS } from "../../data";
import NaijaStates from "naija-state-local-government";

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

const ListWrapper = styled.div`
  width: 100%;
  padding: 5px;
  display: grid;
  grid-template-columns: 48% 48%;
  gap: 4%;
  height: fit-content;
  overflow-y: scroll;
  height: 70vh;
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
  const [toggleAdd, setToggleAdd] = useState(true);
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
      <AddItem setToggleAdd={setToggleAdd} />
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
  width: 95%;
  height: 95vh;
  position: relative;
  overflow-y: scroll;
  border-radius: 10px;
  padding-bottom: 10vh;
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
  width: 90%;
  border: 2px solid ${Colors.PRIMARY};
  border-radius: 8px;
  padding: 2vh 0px 2vh 20px;
  font-family: Montserrat;
  background-color: transparent;
  margin: 1vh 0px;
`;

const InputTextArea = styled.textarea`
  width: 90%;
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
  width: 90%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;

const ImageSelector = styled.div`
  background-color: ${Colors.CHOCOLATE};
  font-family: Montserrat;
  color: white;
  border-radius: 50%;
  width: 70px;
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ImageIndicatorWrapper = styled.div`
  display: grid;
  // flex-direction: grid;
  grid-template-columns: auto auto auto auto auto auto;
  gap: 5px;
  align-items: center;
  height: 15vh;
  width: 70%;
  overflow-x: scroll;
  opacity: ${(props) => (props.opacity == true ? 0.4 : 1)};
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
  width: 100px;
  height: 100px;
`;

const Image = styled.div`
  background-image: url(${(props) => props.background});
  background-position: center;
  background-size: 100%;
  background-repeat: no-repeat;
  width: 100px;
  height: 100px;
  border-radius: 8px;
`;

const SubmitButton = styled.div`
background: ${Colors.PRIMARY};
color: white;
width: 90%;
padding: 2vh 0px;
text-align: center;
font-family: Montserrat;
border-radius: 8px;
margin: 5px; 0px;
font-weight: 900;
`;

const AddItemModal = ({ setToggleAdd }) => {
  const { getUser } = useContext(AuthContext);
  const [item_name, setItemName] = useState("");
  const [item_category, setItemCategory] = useState("");
  const [item_subcategory, setItemSubCategory] = useState("");
  const [item_price, setItemPrice] = useState("");
  const [item_description, setItemDescription] = useState("");
  const [item_pictures, setItemPictures] = useState([]);
  const [item_status, setItemStatus] = useState("");

  // Status indicator states
  const [status, setUploadStatus] = useState("Upload photos (Max.4)");
  const [picture, setPicture] = useState([]);
  const [pickFile, setPickFile] = useState(null);
  const [loading, setLoading] = useState(Boolean);
  const [imageLoad, setImageLoad] = useState("");
  const [opacity, setOpacity] = useState(false);

  const pick = useRef("");

  const uploadFile = (file) => {
    setImageLoad(true);
    if (picture == null) {
      return null;
    } else {
      setOpacity(true);
      file.map((image) => {
        const imageRef = ref(
          getStorage(),
          `images/oja-web-app-${Math.random + v4()}`
        );
        let promise = [];
        const uploadTask = uploadBytesResumable(imageRef, image);
        promise.push(uploadTask);
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
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
            alert(
              "Sorry, upload denied at the moment, Please try again later!"
            );
          },
          async () => {
            await getDownloadURL(uploadTask.snapshot.ref).then(
              (downloadURL) => {
                setItemPictures((prevImages) => prevImages.concat(downloadURL));
                setOpacity(false);
              }
            );
          }
        );
        Promise.all(promise).then(() => {
          // Swal.fire({
          //   position: "bottom",
          //   text: "All images uploaded, you can now proceed",
          //   title: "Image uploaded 👍",
          //   timer: 1500,
          // });
          setImageLoad(false);
        });
      });
    }
  };

  const handlePictureChange = (e) => {
    const fileArray = Array.from(e.target.files).map((file) =>
      URL.createObjectURL(file)
    );
    const uploadableFile = Array.from(e.target.files).map((files) => files);
    if (fileArray.length === 5 || fileArray.length === 6) {
      setPicture((prevImages) => prevImages.concat(fileArray));
      uploadFile(uploadableFile);
    } else {
      Swal.fire({
        title: "Upload the right amount!",
        text: "Please ensure the images you upload is 5 or 6 images only",
        position: "bottom",
      });
    }
  };

  const [states, setStates] = useState([]);
  const [pickedState, setPickedState] = useState("");
  const [pickedLocal, setPickedLocal] = useState("");
  const [regions, setRegions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setStates(NaijaStates.states());
  }, []);

  const _submitForm = () => {
    setLoading(true);
    if (!getUser.profile_picture) {
      setLoading(false);
      navigate("/profile");
      Swal.fire({
        icon: "info",
        text: "add a picture of yourself for a proper identification before you can post an item",
        title: "Add profile picture",
      });
    } else {
      const payload = {
        item_price,
        item_category,
        item_description,
        item_name,
        item_pictures,
        item_subcategory,
        user_id: getUser._id,
        item_status,
        item_state: pickedState,
        item_local: pickedLocal,
        item_phone: getUser.phone,
        item_email: getUser.email,
      };

      axios
        .post(`${api}/upload`, payload)
        .then((res) => {
          setLoading(false);
          setToggleAdd(false);
          // Swal.fire({
          //   title: `Uploaded ${res.data.data.item_name}`,
          //   text: `${res.data.data.item_name} has been uploaded to ${res.data.data.item_category} category`,
          //   position: "top",
          //   timer: 1500,
          // });
          window.location.reload();
        })
        .catch((error) => {
          setLoading(false);
          Swal.fire({
            title: "Oops",
            text: error.response.data.data,
          });
        });
    }
  };

  const _getRegions = (state) => {
    setRegions(NaijaStates.lgas(state).lgas);
  };

  return (
    <>
      <AddItemWrapper>
        <ItemModalWrapper>
          <Cancel
            src={cancel}
            alt="remove"
            onClick={() => {
              setToggleAdd(false);
            }}
          />
          <ItemModal>
            <Head>Upload your item</Head>
            <ImageSectionWrapper>
              <ImageSelector
                onClick={() => {
                  pick.current.click();
                }}
              >
                {imageLoad === true ? (
                  <>
                    <Loader active inline="centered" />
                  </>
                ) : (
                  <>
                    <img src={plus} alt="plus" />
                  </>
                )}
              </ImageSelector>
              <ImageIndicatorWrapper opacity={opacity}>
                {picture.length !== 0 ? (
                  <>
                    {picture.map((item, id) => {
                      return (
                        <ImageIndicator key={id}>
                          <Image background={item}></Image>
                        </ImageIndicator>
                      );
                    })}
                  </>
                ) : (
                  <>
                    <div>Can't upload more than 6 photos</div>
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
              {Categories.map((item, id) => (
                <Option key={id} value={item}>
                  {item}
                </Option>
              ))}
            </Select>
            {item_category === "AUTOMOBILE" ? (
              <>
                <Select
                  value={item_subcategory}
                  onChange={(e) => {
                    setItemSubCategory(e.target.value);
                  }}
                >
                  <Option>Select Sub-Category</Option>
                  {AUTOMOBILE.map((item, id) => (
                    <Option key={id} value={item}>
                      {item}
                    </Option>
                  ))}
                </Select>
              </>
            ) : item_category === "LANDED PROPERTIES" ? (
              <>
                <Select
                  value={item_subcategory}
                  onChange={(e) => {
                    setItemSubCategory(e.target.value);
                  }}
                >
                  <Option>Select Sub-Category</Option>
                  {LANDED_PROPERTIES.map((item, id) => (
                    <Option key={id} value={item}>
                      {item}
                    </Option>
                  ))}
                </Select>
              </>
            ) : item_category === "PHONES/COMPUTERS AND ACCESSORIES" ? (
              <>
                <Select
                  value={item_subcategory}
                  onChange={(e) => {
                    setItemSubCategory(e.target.value);
                  }}
                >
                  <Option>Select Sub-Category</Option>
                  {PHONES.map((item, id) => (
                    <Option key={id} value={item}>
                      {item}
                    </Option>
                  ))}
                </Select>
              </>
            ) : item_category === "ELECTRONICS/ACCESSORIES" ? (
              <>
                <Select
                  value={item_subcategory}
                  onChange={(e) => {
                    setItemSubCategory(e.target.value);
                  }}
                >
                  <Option>Select Sub-Category</Option>
                  {ELECTRONICS.map((item, id) => (
                    <Option key={id} value={item}>
                      {item}
                    </Option>
                  ))}
                </Select>
              </>
            ) : item_category === "MEDICALS/COSMETICS/BEAUTIES" ? (
              <>
                <Select
                  value={item_subcategory}
                  onChange={(e) => {
                    setItemSubCategory(e.target.value);
                  }}
                >
                  <Option>Select Sub-Category</Option>
                  {MEDICALS_COSMETICS_BEAUTIES.map((item, id) => (
                    <Option key={id} value={item}>
                      {item}
                    </Option>
                  ))}
                </Select>
              </>
            ) : item_category === "ANIMALS/LIVESTOCK/AGRICULTURE" ? (
              <>
                <Select
                  value={item_subcategory}
                  onChange={(e) => {
                    setItemSubCategory(e.target.value);
                  }}
                >
                  <Option>Select Sub-Category</Option>
                  {ANIMALS_LIVESTOCK_AGRICULTURE.map((item, id) => (
                    <Option key={id} value={item}>
                      {item}
                    </Option>
                  ))}
                </Select>
              </>
            ) : item_category === "HOME DECORS" ? (
              <>
                <Select
                  value={item_subcategory}
                  onChange={(e) => {
                    setItemSubCategory(e.target.value);
                  }}
                >
                  <Option>Select Sub-Category</Option>
                  {HOME_DECORS.map((item, id) => (
                    <Option key={id} value={item}>
                      {item}
                    </Option>
                  ))}
                </Select>
              </>
            ) : item_category === "FASHION" ? (
              <>
                <Select
                  value={item_subcategory}
                  onChange={(e) => {
                    setItemSubCategory(e.target.value);
                  }}
                >
                  <Option>Select Sub-Category</Option>
                  {FASHION.map((item, id) => (
                    <Option key={id} value={item}>
                      {item}
                    </Option>
                  ))}
                </Select>
              </>
            ) : item_category === "SPORTS" ? (
              <>
                <Select
                  value={item_subcategory}
                  onChange={(e) => {
                    setItemSubCategory(e.target.value);
                  }}
                >
                  <Option>Select Sub-Category</Option>
                  {SPORTS.map((item, id) => (
                    <Option key={id} value={item}>
                      {item}
                    </Option>
                  ))}
                </Select>
              </>
            ) : item_category === "KIDDIES/BABIES" ? (
              <>
                <Select
                  value={item_subcategory}
                  onChange={(e) => {
                    setItemSubCategory(e.target.value);
                  }}
                >
                  <Option>Select Sub-Category</Option>
                  {KIDDIES_BABIES.map((item, id) => (
                    <Option key={id} value={item}>
                      {item}
                    </Option>
                  ))}
                </Select>
              </>
            ) : item_category === "GROCERIES/BREWERIES" ? (
              <>
                <Select
                  value={item_subcategory}
                  onChange={(e) => {
                    setItemSubCategory(e.target.value);
                  }}
                >
                  <Option>Select Sub-Category</Option>
                  {GROCERIES_BREWERIES.map((item, id) => (
                    <Option key={id} value={item}>
                      {item}
                    </Option>
                  ))}
                </Select>
              </>
            ) : item_category === "SERVICES" ? (
              <>
                <Select
                  value={item_subcategory}
                  onChange={(e) => {
                    setItemSubCategory(e.target.value);
                  }}
                >
                  <Option>Select Sub-Category</Option>
                  {SERVICES.map((item, id) => (
                    <Option key={id} value={item}>
                      {item}
                    </Option>
                  ))}
                </Select>
              </>
            ) : item_category === "FACTORY/INDUSTRIAL/CONSTRUCTIONS" ? (
              <>
                <Select
                  value={item_subcategory}
                  onChange={(e) => {
                    setItemSubCategory(e.target.value);
                  }}
                >
                  <Option>Select Sub-Category</Option>
                  {FACTORY_INDUSTRIAL_CONSTRUCTIONS.map((item, id) => (
                    <Option key={id} value={item}>
                      {item}
                    </Option>
                  ))}
                </Select>
              </>
            ) : (
              <>
                <Select>
                  <Option>Select Sub-Category</Option>
                </Select>
              </>
            )}
            <Select
              placeholder="Item Status"
              value={item_status}
              onChange={(e) => {
                setItemStatus(e.target.value);
              }}
            >
              <Option value={""}>Item Status</Option>
              <Option value={"New"}>New</Option>
              <Option value={"Nigerian Used"}>Nigerian Used</Option>
              <Option value={"Foreign Used"}>Foreign Used</Option>
            </Select>
            <ProductChoiceSelect
              value={pickedState}
              onChange={(e) => {
                setPickedState(e.target.value);
                _getRegions(e.target.value);
              }}
            >
              <ProductOption>States</ProductOption>
              {states.map((state, id) => {
                return (
                  <ProductOption key={id} value={state}>
                    {state}
                  </ProductOption>
                );
              })}
            </ProductChoiceSelect>
            <ProductChoiceSelect
              value={pickedLocal}
              onChange={(e) => {
                setPickedLocal(e.target.value);
              }}
            >
              <ProductOption>LGA</ProductOption>
              {regions ? (
                <>
                  {regions.map((local, id) => {
                    return <ProductOption key={id}>{local}</ProductOption>;
                  })}
                </>
              ) : (
                <>
                  <ProductOption>LGA</ProductOption>
                </>
              )}
            </ProductChoiceSelect>
            <InputField
              onChange={(e) => {
                handlePictureChange(e);
                setPickFile(e.target.files);
              }}
              ref={pick}
              style={{ display: "none" }}
              type="file"
              accept="image/*"
              multiple
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
        <div>
          <img src={plus} alt="plus" />
        </div>
      </AddItemElement>
    </>
  );
};

const Items = ({ setToggleAdd }) => {
  const [loading, setLoading] = useState(Boolean);
  const [items, setItems] = useState([]);
  const { getUser } = useContext(AuthContext);
  useEffect(() => {
    setLoading(true);
    axios.get(`${api}/item/${getUser._id}`).then((res) => {
      setItems(res.data.data);
      setLoading(false);
    });
  }, [getUser._id]);

  const _deleteItem = (id) => {
    axios
      .post(`${api}/item/delete/${id}`)
      .then((res) => {
        window.location.reload()
        setToggleAdd(false)
      })
      .catch((error) => {
        console.log(error.response.data.data);
      });
  };

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
          {items.map((item, id) => (
            <ItemWrapper key={id}>
              <ItemImage source={item.item_pictures[0]}></ItemImage>
              <div></div>
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
                    <Button
                      background={"green"}
                      onCLick={() => {
                        navigate("/edit/item");
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      background={"red"}
                      onClick={() => {
                        _deleteItem(item._id);
                      }}
                    >
                      Delete
                    </Button>
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

const ProductChoiceSelect = styled.select`
  background-color: ${Colors.DIRTY_WHITE};
  width: 90%;
  font-family: Montserrat;
  padding: 15px;
  border-radius: 4px;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.17);
  margin-top: 10px;
`;

const ProductOption = styled.option`
  font-family: Montserrat;
  color: ${Colors.PRIMARY_DEEP};
  font-size: 0.5rem;
`;

const Cancel = styled.img`
  position: absolute;
  top: 10;
  right: 0;
  width: 35px;
  height: 35px;
`;

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
  height: 35vh;
`;

const ItemImage = styled.div`
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  width: 100%;
  height: 60%;
  background: url("${(props) => props.source}");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  // flex-shrink:0;
  // -webkit-flex-shrink: 0;
  // max-width:100%;
  // max-height:150px;
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
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.CHOCOLATE};
  margin: 30px;
  margin-left: 45%;
`;

const CardWrapper = styled.div`
  box-shadow: 1px 3px 11px rgba(0, 0, 0, 0.2);
  background: ${(props) => props.background};
  height: stretch;
  color: ${(props) => props.color};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const Select = styled.select`
  background-color: ${Colors.DIRTY_WHITE};
  width: 90%;
  font-family: Montserrat;
  padding: 15px;
  border-radius: 4px;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.17);
  margin-top: 10px;
`;

const Option = styled.option`
  font-family: Montserrat;
  color: ${Colors.PRIMARY_DEEP};
  font-size: 0.5rem;
`;
