import { Routes, Route } from "react-router-dom";
// Componentes
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// Páginas
import CadastroPatrimonio from "./pages/CadastroPatrimonio";
import Login from "./pages/Login";
import CadastroUsuario from "./pages/cadastroUsuario";
import Error404 from "./pages/Erro404";
import Home from "./pages/Home";
import Listas from "./pages/Listas";

export default function App() {
  return (
    <div>
      {/* Componente Navbar estará presente em todas as páginas */}
      <Navbar />

      <Routes>
        {/* Rota para Login, com rotas aninhadas para outras páginas */}
        <Route path="/" element={<Login />} />
        <Route path="/patrimonio" element={<CadastroPatrimonio />} />
        <Route path="/usuario" element={<CadastroUsuario />} />
        <Route path="/home" element={<Listas />} />

        {/* Rota para página de erro 404, para qualquer caminho desconhecido */}
        <Route path="*" element={<Error404 />} />
      </Routes>

      {/* Componente Footer estará presente em todas as páginas */}
      <Footer />
    </div>
  );
}
