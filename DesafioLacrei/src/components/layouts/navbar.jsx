import {Link} from 'react-router-dom'
import Header from '../cstyled/Header'
import Menu from './menu'
function Navbar(){
    return(
        <Header >
            <nav className="nav">
                <Link  className="logo" to='/'>Lacrei</Link>
                <Menu /> 
            </nav>
        </Header>
    )
}
export default Navbar