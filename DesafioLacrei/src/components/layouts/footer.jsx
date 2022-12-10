
import CFooter from "../cstyled/Footer"
import Menu from './menu'
import Socialmedia from  "./socialmedia"

function Footer(){
    return (
        <CFooter>
            <Menu />
            <Socialmedia />
            <p className="smallText" >Desafio Front-end Lacrei.</p>
        </CFooter>

    )
}
export default Footer