import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica de login pode ser adicionada aqui
        console.log("Formulário enviado!");
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-md-6 col-lg-4">
                    <form onSubmit={handleSubmit} className="border p-4 rounded shadow">
                        <h2 className="text-center mb-4">Login</h2>

                        {/* Campo Usuário */}
                        <div className="mb-3">
                            <label htmlFor="usuario" className="form-label">Usuário</label>
                            <input
                                type="text"
                                className="form-control"
                                id="usuario"
                                placeholder="Digite seu usuário"
                                required
                            />
                        </div>

                        {/* Campo Senha */}
                        <div className="mb-3">
                            <label htmlFor="senha" className="form-label">Senha</label>
                            <input
                                type="password"
                                className="form-control"
                                id="senha"
                                placeholder="Digite sua senha"
                                required
                            />
                        </div>

                        {/* Botão Login */}
                        <div className="d-grid gap-2">
                            <button type="submit" className="btn btn-primary btn-lg">Entrar</button>
                        </div>

                        {/* Link para recuperação de senha */}
                        <div className="mt-3 text-center">
                            <Link to="#!" className="small">Esqueceu sua senha?</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
