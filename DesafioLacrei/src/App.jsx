
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./components/pages/Home"
import PessoaUsuaria from "./components/pages/PessoaUsuaria"
import Profissional from "./components/pages/Profissional"

import Container from "./components/layouts/container"
import Navbar from "./components/layouts/navbar"
import Footer from "./components/layouts/Footer"


function App() {
  return ( 
    <Router>
      <Navbar />
      <Container >
        <Routes>
        <Route exact path='/' element={<Home  />} />
        <Route exact path='/PessoaUsuaria' element={<PessoaUsuaria />} />
        <Route exact path='/Profissional' element={<Profissional />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  )
}

export default App
