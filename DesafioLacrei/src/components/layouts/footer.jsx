
import CFooter from "../cstyled/Footer"
import Menu from './menu'
import Socialmedia from  "./socialmedia"

import {Fade} from 'react-awesome-reveal'




function Footer(){
    
    return (
        <CFooter  >
            <Fade triggerOnce={true} delay={900} cascade damping={0.3}>
                <Menu />
                <Socialmedia />
                <p className="smallText" >Desafio Front-end Lacrei.</p>
            </Fade>
        </CFooter>

    )
}
export default Footer