import Box from '../cstyled/Box'
import Imagem from '../cstyled/Imagem'
import Pessoausuaria_Rafiki from '../../assets/img/Pessoausuaria_Rafiki.svg'

import {Fade, Slide} from 'react-awesome-reveal'

function PessoaUsuaria(){
    return (
    <> 
        <Box>
        <Fade delay={1e2} cascade damping={0.4}>

            <h2>Pessoa Usuária</h2>
            <p className="borderLeft">A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento realizado por profissionais de qualidade e que atendam às suas necessidades de forma segura e acolhedora.</p>
        </Fade>
        </Box>
        <Box >
            <Slide triggerOnce={true} direction={"right"}>
                <Imagem src={Pessoausuaria_Rafiki} alt="pessoal sentadas em volta a um celular, mexendo no celular"/>
            </Slide>
        </Box>
            
    </>
        
    )
}

export default PessoaUsuaria