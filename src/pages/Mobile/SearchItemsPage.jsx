import React from "react";
import styled from "styled-components";
import NavBar from "../../components/Mobile/navbar";
// import { Colors } from "../../assets/styles";
// import man_hair from "../../assets/man_hair.png";
// import Footer from "../../components/Mobile/footer";
// import Advert from "../../components/Mobile/advert";
import SearchItems from "../../components/Mobile/SearchItems";

const SearchItemPage = () => {
  return (
    <>
      <PageWrapper>
        <NavBar />
      </PageWrapper>
      <SearchItems />
      <br/><br/><br/>
      {/* <Advert
        background={Colors.DIRTY_GREEN}
        text={"Find the style that fits YOU!"}
        image={man_hair}
        button={"Go to fashion"}
        orientation={false}
      />
      <Footer /> */}
    </>
  );
};

export default SearchItemPage;


const PageWrapper = styled.div`
width: 100%;
height: fit-content:
padding: 0px;
box-sizing: border-bpx;
`;