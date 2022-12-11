import Box from '../cstyled/Box'
import Imagem from '../cstyled/Imagem'
import Pessoausuaria_Rafiki from '../../assets/img/Pessoausuaria_Rafiki.svg'
function PessoaUsuaria(){
    return (
    <> 
        <Box>
            <h2>Pessoa Usuária</h2>
            <p className="borderLeft">A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento realizado por profissionais de qualidade e que atendam às suas necessidades de forma segura e acolhedora.</p>
        </Box>
        <Box>
            <Imagem src={Pessoausuaria_Rafiki} alt="pessoal sentadas em volta a um celular, mexendo no celular"/>
        </Box>
            
    </>
        
    )
}

export default PessoaUsuaria