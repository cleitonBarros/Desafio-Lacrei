import {Link} from 'react-router-dom'
import Header from '../cstyled/Header'
import Menu from './menu'
import { Fade , Slide} from "react-awesome-reveal";

function Navbar(){
    return(
        <Header >
            <nav  className="nav">
                <Fade triggerOnce={true}>
                    <Link  className="logo" to="/">Lacrei</Link>    
                </Fade>
             

                    <Menu  /> 
             
            </nav>
        </Header>
    )
}
export default Navbar