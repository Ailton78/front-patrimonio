import React, { useState } from 'react';  // Importando useState
import generatePDF, { Margin } from 'react-to-pdf';
import useFetch from '../hooks/userFetch';  // Importando hook useFetch
import Logo from "../assets/LogoCapanema.png";
import { formattedDate, formattedDateTime } from '../scripts/utilities';


// Configuração do PDF
const personalizacao = {
    method: 'open',
    page: {
        margin: Margin.SMALL,
        format: 'A4',
        orientation: 'landscape',
    },
};

const recuperadorConteudoPdf = () => document.getElementById('conteudo');

const ListaSimples = () => {
    const url = "http://localhost:8080/patrimonio"; // URL da sua API
    const [page, setPage] = useState(0);  // Página atual
    const [size, setSize] = useState(10);  // Itens por página

    // Chamando o hook com a URL da API
    const { data, loading, error, pagination } = useFetch(url, page, size);

    if (loading) {
        return <div className="text-center"><p>Carregando...</p></div>;
    }

    if (error) {
        return <div className="text-center"><p>Erro: {error}</p></div>;
    }

    // Funções para navegação entre as páginas
    const handleNextPage = () => {
        if (pagination && page < pagination.totalPages - 1) {
            setPage(page + 1);
        }
    };

    const handlePreviousPage = () => {
        if (pagination && page > 0) {
            setPage(page - 1);
        }
    };


    return (
        <div className="container mt-4">
            <div id="conteudo">
                <div className='col-3'>
                    <figure className="figure">
                        <img src={Logo} className="figure-img img-fluid rounded" alt="Logo" />
                        <figcaption className="figure-caption"></figcaption>
                    </figure>
                </div>

                <h3 className="text-center mb-4">Tabela de Patrimônios</h3>
                <table className="table  table-striped">
                    <thead>
                        <tr>
                            <th>Código</th>
                            <th>Descrição</th>
                            <th>Nº Patrimônio</th>
                            <th>Data de Aquisição</th>
                            <th>Forma de Aquisição</th>
                            <th>Local Destino</th>
                            <th>Data de Cadastro</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.descricao}</td>
                                <td>{item.numeroPatrimonio}</td>
                                <td>{formattedDate(item.dataAquisicao)}</td>
                                <td>{item.formaDeAquisicao}</td>
                                <td>{item.localPatrimonio}</td>
                                <td>{formattedDateTime(item.dataCadastro)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="col-12">
                <div className="d-flex justify-content-center mt-4">
                    <button
                        className="btn btn-primary"
                        onClick={() => generatePDF(recuperadorConteudoPdf, personalizacao)}
                    >
                        Gerar PDF
                    </button>
                </div>
            </div>

            <div className="d-flex justify-content-between mt-4">
                <button className="btn btn-secondary" onClick={handlePreviousPage} disabled={page === 0}>
                    Anterior
                </button>
                <button className="btn btn-secondary" onClick={handleNextPage} disabled={pagination && page === pagination.totalPages - 1}>
                    Próxima
                </button>
            </div>
        </div>
    );
};

export default ListaSimples;
