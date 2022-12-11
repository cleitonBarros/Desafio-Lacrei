import {Link} from 'react-router-dom'


function Menu(){
  
    return(
        <ul className="list">
            <li className="item"><Link  to='/'>Home</Link></li>
            <li className="item"><Link  to='/PessoaUsuaria'>Pessoa Usária</Link></li>
            <li className="item"><Link to='/Profissional'>Profissional</Link></li>
        </ul>   
    )
}
export default Menu