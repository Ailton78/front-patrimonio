import { useState } from 'react'
import './components/Header'

import './App.css'

// Componentes
import Header from './components/Header'
import Footer from './components/Footer.jsx'

//pages
import Login from './pages/login.jsx'
import CadastroUsuario from './pages/cadastroUsuario.jsx'
import CadastroPatrimonio from './pages/CadastroPatrimonio.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Header></Header>

      <CadastroPatrimonio></CadastroPatrimonio>



      <Footer></Footer>
    </>
  )
}

export default App
