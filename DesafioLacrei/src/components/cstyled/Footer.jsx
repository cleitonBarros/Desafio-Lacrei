import styled from "styled-components"

const Footer = styled.footer `
    margin: 0px 4rem;
    border-top: 1px solid #b0e0d3;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2rem 0px 0.5rem;
    height: 10rem;

    .list{
        list-style: none;
        display: flex;
        align-items:  center; 
        gap: 2.5rem;   
    }
    .item a{   
        font-weight: ${(props) => window.location.pathname === props.page ? "700" : "400"};
        font-size: 16px;
        line-height: 22px;
        color: #1F1F1F;
        text-decoration: none;
        transition: all 0.2s ease 0s;

    }
    & a:hover{
        opacity: 0.7;
    }

    .smallText{
        font-size:12px;
        color: #515151;
    }
 
    @media (max-width: 1040px){
        margin: 0px 2rem;
    }
    @media (max-width: 550px){
        margin: 0px 1rem;
        padding-top: 1rem;

        .list{
            display: flex;
            flex-direction: column;
            align-items:  flex-start; 
            gap: 0rem;   
        }
        .item a{   
            font-size: 14px;
            line-height: 20px;
       
        }
    }

`;

export default Footer