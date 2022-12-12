import styled from "styled-components"

const Main = styled.main `
    width: 100%;
    padding: 4rem 4rem 0px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;


    @media(max-width: 1040px) {
        flex-direction: column;
        align-items: center;
        padding: 2rem 2rem 0px;


    }   
    @media(max-width: 550px) {
        padding: 1rem 1rem 0px;
       
    }   


`;

export default Main