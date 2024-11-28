import React, { useState } from 'react';
import { formattedNumber, formattedAmount } from '../scripts/utilities';

const CadastroPatrimonio = () => {
    // Definindo o estado para armazenar os valores dos campos
    const [amount, setAmount] = useState(''); // Para o valor monetário
    const [assetNumber, setAssetNumber] = useState(''); // Para o número do patrimônio
    const [acquisitionDate, setAcquisitionDate] = useState(''); // Para a data de aquisição
    const [supplier, setSupplier] = useState(''); // Para o fornecedor
    const [description, setDescription] = useState(''); // Para a descrição
    const [commitment, setCommitment] = useState(''); // Para o empenho
    const [acquisitionType, setAcquisitionType] = useState(''); // Para a forma de aquisição
    const [location, setLocation] = useState(''); // Para o local de armazenamento
    const [loading, setLoading] = useState(false); // Para controlar o estado de carregamento
    const [error, setError] = useState(null); // Para armazenar erros

    // Estado para o valor numérico, sem formatação
    const [rawAmount, setRawAmount] = useState('');

    // Funções para lidar com os campos formatados
    const handleAmountChange = (e) => {
        const rawValue = e.target.value;

        // Remove o símbolo "R$" e espaços em branco, e formata o valor
        let formatted = rawValue.replace('R$', '').trim();
        formatted = formatted.replace(',', '.'); // Troca a vírgula por ponto
        formatted = formatted.replace(/\./g, ''); // Remove separadores de milhar

        // Atualiza o valor formatado
        setAmount(formattedAmount(formatted));

        // Atualiza o valor numérico (sem formatação)
        const numericValue = formatted.replace(/\D/g, ''); // Remove não numéricos
        setRawAmount(numericValue);
    };

    // Função para enviar os dados do formulário
    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);  // Inicia o carregamento
        setError(null);  // Limpa erros anteriores

        // Cria o objeto com os dados do formulário
        const data = {
            descricao: description,
            numeroPatrimonio: assetNumber,
            formaDeAquisicao: acquisitionType,
            valor: parseFloat(rawAmount) / 100,
            dataAquisicao: acquisitionDate,
            fornecedor: supplier,
            empenho: commitment,
            localPatrimonio: location,
            usuarioId: 1

        };

        // Configurações para a requisição POST
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data), // Converte os dados do formulário em JSON
        };

        try {
            const response = await fetch('http://localhost:8080/patrimonio', options);

            if (!response.ok) {
                throw new Error('Erro ao cadastrar patrimônio. Tente novamente.');
            }

            const result = await response.json(); // Processa a resposta da API
            console.log('Patrimônio cadastrado com sucesso:', result);
            alert('Patrimônio cadastrado com sucesso!');
        } catch (err) {
            setError(err.message || 'Erro desconhecido');
            console.error('Erro ao cadastrar patrimônio:', err);
        } finally {
            setLoading(false); // Finaliza o carregamento
        }

        setAmount('');
        setAssetNumber('');
        setAcquisitionDate('');
        setSupplier('');
        setDescription('');
        setCommitment('');
        setAcquisitionType('');
        setLocation('');
        setLoading('');
        setError('');

    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col col-md-8 col-lg-6">
                    <form onSubmit={handleSubmit} className="border p-4 rounded shadow">
                        <h2 className="text-center mb-4">Cadastro de Patrimônio</h2>

                        {/* Exibição de erro */}
                        {error && <div className="alert alert-danger">{error}</div>}

                        <div className="row">
                            {/* Campo Número do Patrimônio */}
                            <div className="col">
                                <label htmlFor="numeroPatrimonio" className="form-label">Número do Patrimônio</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="numeroPatrimonio"
                                    placeholder="Número do patrimônio"
                                    required
                                    value={assetNumber}
                                    onChange={(e) => setAssetNumber(e.target.value.toUpperCase())}
                                />
                            </div>

                            {/* Campo Valor */}
                            <div className="col">
                                <label htmlFor="valor" className="form-label">Valor</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="valor"
                                    placeholder="Valor do patrimônio"
                                    required
                                    value={amount}
                                    onChange={handleAmountChange} // Formata o valor ao digitar
                                />
                            </div>
                        </div>

                        <div className="row">
                            {/* Campo Data de Aquisição */}
                            <div className="col-5">
                                <label htmlFor="dataAquisicao" className="form-label">Data de Aquisição</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    id="dataAquisicao"
                                    required
                                    value={acquisitionDate}
                                    onChange={(e) => setAcquisitionDate(e.target.value)}
                                />
                            </div>

                            {/* Campo Fornecedor */}
                            <div className="col">
                                <label htmlFor="fornecedor" className="form-label">Fornecedor</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="fornecedor"
                                    placeholder="Nome do fornecedor"
                                    required
                                    value={supplier}
                                    onChange={(e) => setSupplier(e.target.value.toUpperCase())}
                                />
                            </div>
                        </div>

                        {/* Campo Descrição */}
                        <div className="mb-3">
                            <label htmlFor="descricao" className="form-label">Descrição</label>
                            <input
                                type="text"
                                className="form-control"
                                id="descricao"
                                placeholder="Descrição"
                                required
                                value={description}
                                onChange={(e) => setDescription(e.target.value.toUpperCase())}
                            />
                        </div>

                        {/* Campo Empenho */}
                        <div className="mb-3">
                            <label htmlFor="empenho" className="form-label">Empenho</label>
                            <input
                                type="text"
                                className="form-control"
                                id="empenho"
                                placeholder="Número do empenho"
                                required
                                value={commitment}
                                onChange={(e) => setCommitment(e.target.value.toUpperCase())}
                            />
                        </div>

                        {/* Forma de Aquisição */}
                        <div className="mb-3">
                            <label htmlFor="formaAquisicao" className="form-label">Forma de Aquisição</label>
                            <input
                                type="text"
                                className="form-control"
                                id="formaAquisicao"
                                placeholder="Forma de Aquisição"
                                required
                                value={acquisitionType}
                                onChange={(e) => setAcquisitionType(e.target.value.toUpperCase())}
                            />
                        </div>

                        {/* Campo Local */}
                        <div className="mb-3">
                            <label htmlFor="local" className="form-label">Local</label>
                            <input
                                type="text"
                                className="form-control"
                                id="local"
                                placeholder="Local de armazenamento"
                                required
                                value={location}
                                onChange={(e) => setLocation(e.target.value.toUpperCase())}
                            />
                        </div>

                        {/* Botão de Enviar */}
                        <div className="d-grid gap-2">
                            <button type="submit" className="btn btn-primary btn-lg" disabled={loading}>
                                {loading ? 'Cadastrando...' : 'Cadastrar Patrimônio'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CadastroPatrimonio;
