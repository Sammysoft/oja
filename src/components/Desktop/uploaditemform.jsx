/* eslint-disable */


import React, { useEffect, useState, useRef, useContext } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"
import { Colors } from "../../assets/styles";
import plus from "../../assets/svg/plus_circle.svg";
import { Categories } from "../../data";
import { AUTOMOBILE } from "../../data";
import { AuthContext } from "../../loginContext";
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
import { Loader } from "semantic-ui-react";
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

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  overflow-y: scroll;
`;

const InputField = styled.input`
  border: 2px solid ${Colors.PRIMARY_DEEP};
  background-color: ${Colors.DIRTY_WHITE};
  width: 90%;
  font-family: Montserrat;
  padding: 15px;
  border-radius: 4px;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.17);
  margin-top: 10px;
`;

const InputSelectField = styled.select`
  background-color: ${Colors.DIRTY_WHITE};
  width: 90%;
  font-family: Montserrat;
  padding: 15px;
  border-radius: 4px;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.17);
  margin-top: 10px;
`;
const TextareaField = styled.textarea`
  border: 2px solid ${Colors.PRIMARY_DEEP};
  padding: 15px;
  font-family: Montserrat;
  width: 100%;
  border-radius: 4px;
  margin-top: 5vh;
  height: 25vh;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.17);
  background-color: ${Colors.DIRTY_WHITE};
`;

const Button = styled.div`
  background-color: ${Colors.PRIMARY};
  color: white;
  border-radius: 8px;
  text-align: center;
  font-family: Montserrat;
  font-weight: 800;
  padding: 10px 20px;
  margin-top: 2vh;
  width: 90%;
  cursor: pointer;
`;

const Body = styled.div`
  height: 60%;
  width: 100%;
`;

const Option = styled.option`
  font-family: Montserrat;
  color: ${Colors.PRIMARY_DEEP};
`;

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
  grid-template-columns: auto auto auto auto auto auto;
  gap: 5px;
  align-items: center;
  height: 15vh;
  width: 80%;
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

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

const UploadItemForm = ({ setShowModal, setToggleAdd }) => {
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
  const navigate = useNavigate()

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

  useEffect(() => {
    setStates(NaijaStates.states());
  }, []);

  const _getRegions = (state) => {
    setRegions(NaijaStates.lgas(state).lgas);
  };

  const _submitForm = () => {
    setLoading(true);
    if (!getUser.profile_picture) {
      setLoading(false)
      navigate("/profile")
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
          setShowModal(false);
          // Swal.fire({
          //   title: `Uploaded ${res.data.data.item_name}`,
          //   text: `${res.data.data.item_name} has been uploaded to ${res.data.data.item_category} category`,
          //   position: "top",
          //   timer: 1500,
          // });
          window.location.reload()
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

  return (
    <>
      <FormWrapper>
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
          onChange={(e) => {
            handlePictureChange(e);
            setPickFile(e.target.files);
            // if (picture.length === 4 || picture.length === 5) {
            //   uploadFile(e.target.files);
            // }
          }}
          ref={pick}
          style={{ display: "none" }}
          type="file"
          accept="image/*"
          multiple
        />
        <InputWrapper>
          <InputField
            placeholder="Item name"
            type="text"
            value={item_name}
            onChange={(e) => {
              setItemName(e.target.value);
            }}
          />
          <InputSelectField
            value={item_category}
            onChange={(e) => {
              setItemCategory(e.target.value);
            }}
          >
            <option>Select Item Category</option>
            {Categories.map((item, id) => (
              <option key={id} value={item}>
                {item}
              </option>
            ))}
          </InputSelectField>
        </InputWrapper>

        <InputWrapper>
          {item_category === "AUTOMOBILE" ? (
            <>
              <InputSelectField
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
              </InputSelectField>
            </>
          ) : item_category === "LANDED PROPERTIES" ? (
            <>
              <InputSelectField
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
              </InputSelectField>
            </>
          ) : item_category === "PHONES/COMPUTERS AND ACCESSORIES" ? (
            <>
              <InputSelectField
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
              </InputSelectField>
            </>
          ) : item_category === "ELECTRONICS/ACCESSORIES" ? (
            <>
              <InputSelectField
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
              </InputSelectField>
            </>
          ) : item_category === "MEDICALS/COSMETICS/BEAUTIES" ? (
            <>
              <InputSelectField
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
              </InputSelectField>
            </>
          ) : item_category === "ANIMALS/LIVESTOCK/AGRICULTURE" ? (
            <>
              <InputSelectField
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
              </InputSelectField>
            </>
          ) : item_category === "HOME DECORS" ? (
            <>
              <InputSelectField
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
              </InputSelectField>
            </>
          ) : item_category === "FASHION" ? (
            <>
              <InputSelectField
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
              </InputSelectField>
            </>
          ) : item_category === "SPORTS" ? (
            <>
              <InputSelectField
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
              </InputSelectField>
            </>
          ) : item_category === "KIDDIES/BABIES" ? (
            <>
              <InputSelectField
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
              </InputSelectField>
            </>
          ) : item_category === "GROCERIES/BREWERIES" ? (
            <>
              <InputSelectField
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
              </InputSelectField>
            </>
          ) : item_category === "SERVICES" ? (
            <>
              <InputSelectField
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
              </InputSelectField>
            </>
          ) : item_category === "FACTORY/INDUSTRIAL/CONSTRUCTIONS" ? (
            <>
              <InputSelectField
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
              </InputSelectField>
            </>
          ) : (
            <>
              <InputSelectField>
                <Option>Select Sub-Category</Option>
              </InputSelectField>
            </>
          )}

          <InputSelectField
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
          </InputSelectField>
        </InputWrapper>
        <InputWrapper>
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
        </InputWrapper>

        <InputWrapper>
          <TextareaField
            type="text"
            placeholder="item description"
            value={item_description}
            onChange={(e) => {
              setItemDescription(e.target.value);
            }}
          ></TextareaField>
          <div
            style={{
              height: "25vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "5vh",
            }}
          >
            <InputField
              placeholder="Asking Price"
              type="text"
              value={item_price}
              onChange={(e) => {
                setItemPrice(e.target.value);
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
                <>Post Item</>
              )}
            </Button>
          </div>
        </InputWrapper>
      </FormWrapper>
    </>
  );
};
export default UploadItemForm;
