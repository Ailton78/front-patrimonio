import React from 'react';
import { Link, Outlet } from 'react-router-dom';

import img1 from "../assets/Relatorio.png";
import img2 from "../assets/cadastroUser.png";
import img3 from "../assets/cadastro.png";

function Home() {
    return (
        <div className="container mt-4 ">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 ">
                {/* Card Relatórios */}
                <div className="col">
                    <div className="card text-center">
                        <div>
                            <img src={img1} className="card-img-top" alt="Relatórios" style={{ width: '10' + 'rem' }} />
                        </div>
                        <div className="card-body">
                            <Link to="/relatorios" class="btn btn-primary">
                                Relatórios
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Card Cadastro de Usuários */}
                <div className="col">
                    <div className="card text-center">
                        <div>
                            <img src={img2} className="card-img-top rounded mx-auto d-block" alt="Cadastro de Usuários" style={{ width: '10' + 'rem' }} />
                        </div>
                        <div className="card-body">
                            <Link to="/usuario" class="btn btn-primary">
                                Cadastro de Usuários
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Card Cadastro de Patrimônio */}
                <div className="col">
                    <div className="card text-center">
                        <div>
                            <img src={img3} className="card-img-top rounded mx-auto d-block" alt="Cadastro de Patrimônio" style={{ width: '10' + 'rem' }} />
                        </div>
                        <div className="card-body">
                            <Link to="/patrimonio" class="btn btn-primary" >
                                Cadastro de Patrimônio
                            </Link>
                        </div>
                    </div>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default Home;
