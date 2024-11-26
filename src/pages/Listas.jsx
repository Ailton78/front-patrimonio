import React, { useState } from 'react';
import generatePDF, { Margin } from 'react-to-pdf';
import useFetch from '../hooks/userFetch'; // Importando o hook atualizado
import Logo from "../assets/LogoCapanema.png";

const personalizacao = {
    method: 'open',
    page: {
        margin: Margin.SMALL,
        format: 'A4',
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

    // Função para formatar valores monetários
    const formatarValor = (valor) => {
        if (valor) {
            return `R$${valor.toFixed(2).replace('.', ',')}`;
        }
        return 'Não disponível';
    }

    // Função para formatar datas
    const formatarData = (data) => {
        if (data) {
            const dateObj = new Date(data);

            // Verifica se a data é válida
            if (isNaN(dateObj.getTime())) {
                return 'Data inválida';
            }

            // Formata a data no formato DD/MM/YYYY (você pode alterar para outro formato se necessário)
            return dateObj.toLocaleDateString('pt-BR');
        }
        return 'Data não disponível';
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

                <h1 className="text-center mb-4">Tabela de Patrimônios</h1>
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
                                    <td>{formatarValor(item.valor)}</td>
                                    <td>{formatarData(item.dataAquisicao)}</td>
                                    <td>{item.formaDeAquisicao || 'Não disponível'}</td>
                                    <td>{item.fornecedor || 'Não disponível'}</td>
                                    <td>{item.empenho || 'Não disponível'}</td>
                                    <td>{item.localPatrimonio || 'Não disponível'}</td>
                                    <td>{formatarData(item.dataCadastro)}</td>
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
            {/* Navegação de página */}
            <div className="d-flex justify-content-between">
                <button className="btn btn-secondary" onClick={handlePreviousPage} disabled={page === 0}>
                    Anterior
                </button>
                <button className="btn btn-secondary" onClick={handleNextPage} disabled={page === pagination.totalPages - 1}>
                    Próxima
                </button>
            </div>

            <div className="text-center mt-4">
                <button
                    className="btn btn-primary"
                    onClick={() => generatePDF(recuperadorConteudoPdf, personalizacao)}
                >
                    Gerar PDF
                </button>
            </div>
        </div>
    );
};

export default Listas;
