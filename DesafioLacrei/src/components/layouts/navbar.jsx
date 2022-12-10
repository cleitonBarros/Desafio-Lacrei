import {Link} from 'react-router-dom'
import Header from '../cstyled/Header'
function Navbar(){
    return(
        <Header >
            <nav className="nav">
                <Link  className="logo" to='/'>Lacrei</Link>
                <ul className="list">
                    <li className="item"><Link to='/'>Home</Link></li>
                    <li className="item"><Link to='/PessoaUsuaria'>Pessoa usuaria</Link></li>
                    <li className="item"><Link to='/Profissional'>Profissional</Link></li>
                </ul>   
            </nav>
        </Header>
    )
}
export default Navbar