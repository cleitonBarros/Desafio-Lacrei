import Box from '../cstyled/Box'
import Imagem from '../cstyled/Imagem'
import Profissional_Rafiki from '../../assets/img/profissional.svg'

import {Fade, Slide} from 'react-awesome-reveal'


function Profissional(){
    return (
        <> 
        <Box>
            <Fade  triggerOnce={true} delay={1e2} cascade damping={0.4}>

                <h2>Profissional</h2>
                <p className="borderLeft">Buscamos recrutar pessoas profissionais da saúde que entendam as necessidades e se comprometam com o bem-estar da comunidade LGBTQIAPN+</p>
            </Fade>
        </Box>
        <Box>
            <Slide triggerOnce={true} direction={"right"}>
                <Imagem src={Profissional_Rafiki} alt="pessoal sentadas em volta a um celular, mexendo no celular"/>
            </Slide>
        </Box>
            
    </>

    )
}

export default Profissional