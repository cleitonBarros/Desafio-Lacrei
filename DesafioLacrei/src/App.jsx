
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from "./components/pages/Home"
import PessoaUsuaria from "./components/pages/PessoaUsuaria"
import Profissional from "./components/pages/Profissional"

import Container from "./components/layouts/container"



function App() {
  return ( 
    <Router>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/PessoaUsuaria'>Pessoa usuaria</Link>
        <Link to='/Profissional'>Profissional</Link>
        
      </div>
      <Container>
        <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/PessoaUsuaria' element={<PessoaUsuaria />} />
        <Route exact path='/Profissional' element={<Profissional />} />
        </Routes>
      </Container>
      <footer>Footer</footer>
    </Router>
  )
}

export default App
