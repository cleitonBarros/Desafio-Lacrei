import styled from "styled-components"

const Header = styled.header `
    
    display: flex;
    justify-content: space-between;
    background: #EEEEEE;
    padding: 0.5rem 4rem;
   
    
    .logo{
        
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        line-height: 44px;
        color: #018762;
        display: flex;
        align-items: center;
        
    }
    & a{
        transition: all 0.2s ease 0s;
        text-decoration: none;    
    }
    .logo:hover{
        opacity: 0.7;
    }
    
    .nav{
        width: 1500px;
        display: flex;
        justify-content: space-between;
        margin:0 auto;
        flex-wrap: wrap;
        

    }
    .list{
        display: flex;
        list-style: none;
        align-items:  center;
    }
    .item{
       gap: 2rem
    }
    & a{
        
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 22px;
        color: #1F1F1F;
        text-decoration: none;
    }
    & a:hover{
        color:#018762;
    }
    @media(max-width: 1040px) {
        padding: 0.5rem 2rem;

        
   
    }   
    @media(max-width: 550px) {
        padding: 0.5rem 1rem;

        .nav{
            flex-direction:  column;
            align-items:center
        }
         .item{
      
       }
   
    }   

`;

export default Header