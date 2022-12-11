import Box from '../cstyled/Box'
import Imagem from '../cstyled/Imagem'
import Profissional_Rafiki from '../../assets/img/profissional.svg'

function Profissional(){
    return (
        <> 
        <Box>
            <h2>Profissional</h2>
            <p className="borderLeft">Buscamos recrutar pessoas profissionais da saúde que entendam as necessidades e se comprometam com o bem-estar da comunidade LGBTQIAPN+</p>
        </Box>
        <Box>
            <Imagem src={Profissional_Rafiki} alt="pessoal sentadas em volta a um celular, mexendo no celular"/>
        </Box>
            
    </>

    )
}

export default Profissional