import SocialMedia  from '../cstyled/SocialMedia'

import  FacebookLogo from "../../assets/icons/FacebookLogo.svg"
import  InstagramLogo  from "../../assets/icons/InstagramLogo.svg"
import  LinkedinLogo  from "../../assets/icons//LinkedinLogo.svg"


function Socialmedia(){
    return(
        <SocialMedia>
            <a target="_blank" href="https://www.instagram.com/lacrei.saude/">
                <img src={InstagramLogo} alt="Logo facebook"/> 
            </a>
            <a  target="_blank" href="https://www.facebook.com/lacrei.saude/"> 
                <img src={FacebookLogo} alt="Logo facebook"/>  
            </a><a  target="_blank" href="https://www.Linkedin.com/company/lacrei/"> 
                <img src={ LinkedinLogo } alt="Logo facebook"/> 
            </a>
        </SocialMedia>
       
    )
}
export default Socialmedia