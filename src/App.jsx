import { useState } from 'react'
import './App.css'

// Componentes
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
//config react Router
import { Route, BrowserRouter, Routes } from "react-router-dom";

//pages
import Login from './pages/login.jsx'
import CadastroPatrimonio from './pages/CadastroPatrimonio.jsx'
import CadastroUsuario from './pages/cadastroUsuario.jsx'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>

        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/cadastro/patrimonio' element={<CadastroPatrimonio />} />
          <Route path='/cadastro/usuario' element={<CadastroUsuario />} />
          <Route path='/cadastro/sobre' element={<Home />} />
        </Routes>

        <Footer></Footer>
      </BrowserRouter>

    </>
  )
}

export default App
