import React from "react";
import styled from "styled-components";
import bug from "../../assets/svg/bug.svg"

const ErrorPage =()=>{
    return(
        <>
            <ErrorPageWrapper>
                <img src={bug} alt="error-display" />
                <ErrorName>Error 404</ErrorName>
                <ErrorType>Page does not exist</ErrorType>
            </ErrorPageWrapper>
        </>
    )
}

const ErrorPageWrapper = styled.div`
width: 100vw;
height: 70vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
`

const ErrorName = styled.div`
font-family: Montserrat;
font-weight: 900;
font-size: 2rem;
`

const ErrorType = styled.div`
font-family: Montserrat;
font-weight: 700;
font-size: 1.5rem;
`

export default ErrorPage;