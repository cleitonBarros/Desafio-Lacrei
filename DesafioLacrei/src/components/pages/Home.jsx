import Box from '../cstyled/Box'
import Imagem from '../cstyled/Imagem'
import {Link} from 'react-router-dom'
import Home_Rafiki from '../../assets/img/Home_Rafiki.svg'

import { Fade, Slide } from "react-awesome-reveal";
function Home(){
  
    return (
    <> 
    
        <Box>
            <Fade triggerOnce={true} delay={1e2} cascade damping={0.4}>
                <h2>Boas vindas a Lacrei Saúde</h2>
                <p>Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+</p>
                <Box className="buttonsBox">
                    <Link className="button btnUser" to='/PessoaUsuaria'> Pessoa Usuária</Link>
                    <Link  className="button btnPro"   to='/Profissional'> Profissional</Link>
                </Box>
            </Fade>
        </Box>
       

            <Box >
                <Slide triggerOnce={true}  direction={"right"} >
                    <Imagem src={Home_Rafiki} alt="imageHome" />
                </Slide>
            </Box>
      
        
        
    </>   
    )
}

export default Home



