import styled from "styled-components"

const Box= styled.div `
    max-width: 540px;

    h2{
        font-size: 48px;
        color: #1f1f1f;
        font-weight: bold;
    }

    p{
        line-height: 32px;
        margin-top: 32px;
        margin-bottom: 32px;
        font-size: 24px;
        color: #515151;

    }
    .borderLeft{
        padding-left: 16px;
        border-left: 5px solid #018762;
        
    }
    .buttonsBox{
        display: flex;  
        justify-content: space-between;
        align-items: center;
        padding-top: 3rem;
        max-width: 450px;
    }
    .button{
        text-decoration: none;
        font-size: 18px;
        font-weight: 700;

        border-radius: 0.5rem;
        box-shadow: rgb(0 0 0 / 25%) 0px 4px 4px;
        transition: all 0.2s ease 0s;
    }

    .btnUser{
        padding: 0.75rem 2rem;
        background-color: #018762;
        color: #ffffff;
    }


    .btnPro{
        padding: 0.625rem 2.75rem;
        color: #018762 !important;
        background-color: #ffffff;
        border: 2px solid #018762;
    }
    .btnUser a, .btnPro a{
        text-decoration:  none;
    }
    .btnUser:hover, .btnPro:hover{
        opacity: 0.7;
    }

    @media (max-width: 1040px){
        h2{
            font-size: 32px;
        }

        p{
            line-height: 24px;
            margin-top: 16px;
            font-size: 16px;
        }
    }
    @media (max-width: 550px){
        h2{
            font-size: 24px;
        }

        p{
            line-height: 20px;
            margin-top: 14px;
            font-size: 14px;
        }
        .buttonsBox{

        flex-direction: column;
        gap: 1rem;

        }
      
    }
`;

export default Box