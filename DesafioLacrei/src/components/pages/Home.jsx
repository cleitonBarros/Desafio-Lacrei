import Box from '../cstyled/Box'
import Imagem from '../cstyled/Imagem'
import {Link} from 'react-router-dom'
import Home_Rafiki from '../../assets/img/Home_Rafiki.svg'

function Home(){
  
    return (
    <>
        <Box>
            <h2>Boas vindas a Lacrei Saúde</h2>
            <p>Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+</p>
            <Box className="buttonsBox">
                <Link className="button btnUser" to='/PessoaUsuaria'> Pessoa Usuária</Link>
                <Link  className="button btnPro"   to='/Profissional'> Profissional</Link>
            </Box>
        </Box>
        <Box>
            <Imagem src={Home_Rafiki} alt="imageHome" />
        </Box>
        
        
    </>   
    )
}

export default Home



