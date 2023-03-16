import React from "react";
import styled from "styled-components";
import { Colors } from "../../assets/styles";

const About = () => {
  return (
    <>
      <Wrapper>
        <Header>About Us</Header>
        <Body>
          OJA is a subscription based system, built to scale-up a free
          enterprise solution; an online market platform for sellers and buyers,
          brands and corporate entities, seeking a channel to reach mass
          consumer markets, or sell that one item for a quick cash. Ojaonline.ng
          is a secured user-friendly marketing tool with a turnaround time for
          subscription happening in real-time, reinforced through custom
          programming interface, application topographies and flexibility to
          end-users. With OJA the result is always what you sought.
        </Body>
        <Header>Vision</Header>
        <Body>
          Our vision is to create tailored-made cybernetic free get-up-and-go
          solution for Africa trade-hub and global exchange with B2B interactive
          enabler platform for all salable and industrial activities.
        </Body>
        <Header>Mission</Header>
        <Body>
          Build the next global online marketplace for individual, commercial,
          and industrial assimilation.
        </Body>
      </Wrapper>
    </>
  );
};
export default About;

const Wrapper = styled.div`
  margin-top: 10vh;
`;

const Body = styled.div`
  width: 90%;
  height: 100%;
  font-family: Montserrat;
  font-size: 1rem;
  text-align: justify;
  padding: 10px;
  line-height: 2rem;
  margin: 5%;
`;
const Header = styled.div`
  font-family: Montserrat;
  font-size: 1.5rem;
  width: 90%;
  font-weight: 700;
  text-align: left;
  padding: 20px;
  margin: 5%;
  border-bottom: 2px solid ${Colors.PRIMARY_DEEP};
`;
