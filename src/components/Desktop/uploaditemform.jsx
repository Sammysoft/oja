import React from "react";
import styled from "styled-components";
import { Colors } from "../../assets/styles";
import plus from "../../assets/svg/plus_circle.svg";

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Head = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 55%;
  width: 100%;
  height: 30vh;
`;
const LeftHeadElementWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 40%;
  height: 100%;
`;
const PostItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  justify-content: space-between;
  text-align: center;
  height: 100%;
`;

const PostItem = styled.div`
  background-color: ${Colors.CHOCOLATE};
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  justify-content: space-between;
  padding: 20px;
  text-align: center;
  border-radius: 5px;
  height: 70%;
  font-family: Montserrat;
`;

const PostItemIndicatorWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const PostItemIndicator = styled.div`
  background-color: ${Colors.CHOCOLATE};
  color: white;
  border-radius: 5px;
  padding: 10px 15px;
  font-family: Montserrat;
  text-align: center;
`;

const RightHeadElementWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 100%;
  width: 60%;
`;

const InputField = styled.input`
  border: 2px solid ${Colors.PRIMARY_DEEP};
  padding: 15px;
  font-family: Montserrat;
  width: 100%;
  border-radius: 8px;
`;

const InputSelectField = styled.select`
  border: 2px solid ${Colors.PRIMARY_DEEP};
  padding: 15px;
  font-family: Montserrat;
  width: 100%;
  border-radius: 8px;
`;
const TextareaField = styled.textarea`
  border: 2px solid ${Colors.PRIMARY_DEEP};
  padding: 15px;
  font-family: Montserrat;
  width: 100%;
  border-radius: 8px;
  margin-top: 5vh;
  height: 25vh;
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
`;

const Body = styled.div`
  height: 60%;
  width: 100%;
`;

const UploadItemForm = ({ setShowModal }) => {

    return (
    <>
      <FormWrapper>
        <Head>
          <LeftHeadElementWrapper>
            <PostItemWrapper>
              <PostItem>
                <img src={plus} alt="add" />
                <span>Upload Items (up to 5)</span>
              </PostItem>
              <PostItemIndicatorWrapper>
                <PostItemIndicator>1</PostItemIndicator>
                <PostItemIndicator>2</PostItemIndicator>
                <PostItemIndicator>3</PostItemIndicator>
                <PostItemIndicator>4</PostItemIndicator>
              </PostItemIndicatorWrapper>
            </PostItemWrapper>
          </LeftHeadElementWrapper>
          <RightHeadElementWrapper>
            <InputField placeholder="Item name" type="text" />
            <InputSelectField>
              <option>Select Item Category</option>
            </InputSelectField>
            <InputSelectField>
              <option>Select Item Sub-Category</option>
            </InputSelectField>
          </RightHeadElementWrapper>
        </Head>
        <Body>
          <TextareaField
            type="text"
            placeholder="item description"
          ></TextareaField>
          <InputField placeholder="Asking Price" type="text" />
          <Button
            onClick={() => {
              setShowModal(false);
              window.location.reload()
            }}
          >
            Post My Item
          </Button>
        </Body>
      </FormWrapper>
    </>
  );
};
export default UploadItemForm;
