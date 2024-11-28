import React, { useState } from 'react';
import generatePDF, { Margin } from 'react-to-pdf';
import useFetch from '../hooks/userFetch'; // Importando o hook atualizado
import Logo from "../assets/LogoCapanema.png";
import { formattedDate, formattedDateTime, formatValue } from '../scripts/utilities';


const personalizacao = {
    method: 'open',
    page: {
        // margin is in MM, default is Margin.NONE = 0
        margin: Margin.SMALL,
        // default is 'A4'
        format: 'A4',
        // default is 'portrait'
        orientation: 'landscape',
    },
}

const recuperadorConteudoPdf = () => document.getElementById('conteudo');

const Listas = () => {
    const url = "http://localhost:8080/patrimonio"; // URL da sua API
    const [page, setPage] = useState(0); // Página atual
    const [size, setSize] = useState(10); // Itens por página

    // Chamando o hook com a URL da API
    const { data, loading, error, pagination } = useFetch(url, page, size);

    const handleNextPage = () => {
        if (page < pagination.totalPages - 1) {
            setPage(page + 1);
        }
    };

    const handlePreviousPage = () => {
        if (page > 0) {
            setPage(page - 1);
        }
    };

    if (loading) {
        return <div className="text-center"><p>Carregando...</p></div>;
    }

    if (error) {
        return <div className="text-center"><p>Erro: {error}</p></div>;
    }

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
                            <th>Valor</th>
                            <th>Data de Aquisição</th>
                            <th>Forma de Aquisição</th>
                            <th>Fornecedor</th>
                            <th>Empenho</th>
                            <th>Local</th>
                            <th>Data de Cadastro</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.length > 0 ? (
                            data.map(item => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.descricao || 'Não disponível'}</td>
                                    <td>{item.numeroPatrimonio || 'Não disponível'}</td>
                                    <td>{formatValue(item.valor)}</td>
                                    <td>{formattedDate(item.dataAquisicao)}</td>
                                    <td>{item.formaDeAquisicao || 'Não disponível'}</td>
                                    <td>{item.fornecedor || 'Não disponível'}</td>
                                    <td>{item.empenho || 'Não disponível'}</td>
                                    <td>{item.localPatrimonio || 'Não disponível'}</td>
                                    <td>{formattedDateTime(item.dataCadastro)}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="10" className="text-center">Nenhum item disponível.</td>
                            </tr>
                        )}
                    </tbody>
                </table>

            </div>
            <div className="col-12">
                <div className="d-flex justify-content-center mt-4"> {/* Centraliza o botão */}
                    <button
                        className="btn btn-primary" // Estilo do botão
                        onClick={() => generatePDF(recuperadorConteudoPdf, personalizacao)}
                    >
                        Gerar PDF
                    </button>
                </div>
            </div>
            {/* Navegação de página */}
            <div className="d-flex justify-content-between">
                <button className="btn btn-secondary" onClick={handlePreviousPage} disabled={page === 0}>
                    Anterior
                </button>
                <button className="btn btn-secondary" onClick={handleNextPage} disabled={page === pagination.totalPages - 1}>
                    Próxima
                </button>
            </div>

        </div>
    );
};

export default Listas;
