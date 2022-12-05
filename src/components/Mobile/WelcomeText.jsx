import styled from "styled-components";
import { Colors } from "../../assets/styles";

const AdvertUpperText = styled.div`
  font-family: Montserrat;
  width: 100vw;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 13vh;
`;

const DeepText = styled.div`
  font-weight: 900;
  font-family: Montserrat;
  font-size: 1.7rem;
  color: ${Colors.PRIMARY_DEEP};
  width: 90%;
  line-height: 2.5rem;
`;

// const LightText = styled.div`
//   font-size: 1rem;
//   font-family: Montserrat;
//   width: 95%;
//   margin-top: 3vh;
// `;
export const Welcome = () => {
  return (
    <>
      <AdvertUpperText>
        <DeepText>
          Welcome to Oja.
          <br /> Your Online Marketplace.
        </DeepText>
        {/* <LightText>
         OJA an online market platform for sellers and buyers, brands and corporate
          entities, seeking a channel to reach mass consumer markets, or sell
          that one item for a quick cash.
        </LightText> */}
      </AdvertUpperText>
    </>
  );
};
