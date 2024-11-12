import React, { useEffect, useState } from 'react';
import useFetch from '../hooks/userFetch'; // Importando o seu hook useFetch

const Home = () => {
    const url = "http://localhost:8080/home"; // URL da sua API
    const { data, loading, error } = useFetch(url); // Usando o hook useFetch

    if (loading) {
        return <div className="text-center"><p>Carregando...</p></div>; // Mensagem de carregamento
    }

    if (error) {
        return <div className="text-center"><p>Erro: {error}</p></div>; // Mensagem de erro
    }

    // Verificando se há dados e criando a tabela
    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4">Tabela de Patrimonios</h1>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Descrição</th>
                        <th>Nº Patrimônio</th>
                        <th>Valor</th>
                        <th>Data de Aquisição</th>
                        <th>Fornecedor</th>
                        <th>Empenho</th>
                        <th>Local</th>
                        <th>Data de Cadastro</th>
                        <th>Usuário</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.descricao}</td>
                            <td>{item.numeroPatrimoni}</td>
                            <td>{item.valor.toFixed(2)}</td> {/* Formatação de valor */}
                            <td>{new Date(item.dataAquisicao).toLocaleDateString()}</td> {/* Formatação da data */}
                            <td>{item.fornecedor}</td>
                            <td>{item.empenho}</td>
                            <td>{item.local}</td>
                            <td>{new Date(item.dataCadastro).toLocaleDateString()}</td> {/* Formatação da data */}
                            <td>{item.usuario.nome}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Home;
