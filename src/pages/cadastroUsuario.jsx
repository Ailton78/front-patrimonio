import React from 'react'

const CadastroUsuario = () => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-md-6 col-lg-4">
                    <form>

                        <h2 className="text-center mb-4">Cadastro</h2>

                        {/* Campo Nome */}
                        <div className="mb-3">
                            <label htmlFor="nome" className="form-label">Nome</label>
                            <input
                                type="text"
                                className="form-control"
                                id="nome"
                                placeholder="Digite seu nome"
                                required
                            />
                        </div>

                        {/* Campo Usuário */}
                        <div className="mb-3">
                            <label htmlFor="usuario" className="form-label">Usuário</label>
                            <input
                                type="text"
                                className="form-control"
                                id="usuario"
                                placeholder="Digite seu nome de usuário"
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

                        {/* Botão Enviar */}
                        <div className="d-grid gap-2">
                            <button type="submit" className="btn btn-primary btn-lg">Cadastrar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CadastroUsuario