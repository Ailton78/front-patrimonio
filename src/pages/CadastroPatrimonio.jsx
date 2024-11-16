import React from 'react';
import { useState } from 'react';
import { formattedNumber, formattedAmount } from '../scripts/utilities';

const CadastroPatrimonio = () => {

    // Definindo o estado para armazenar o valor do campo de texto
    const [amount, setAmount] = useState(''); // Para o valor monetário
    const [assetNumber, setAssetNumber] = useState(''); // Para o número do patrimônio

    // Função que é chamada toda vez que o valor do campo "valor" mudar
    const handleAmountChange = (e) => {
        const amountFormatted = formattedAmount(e.target.value)
        setAmount(amountFormatted); // Atualiza o valor
    }

    const handleAssetNumberChange = (e) => {
        const numberFormatted = formattedNumber(e.target.value)
        setAssetNumber(numberFormatted); // Atualiza o número do patrimônio
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica de envio do formulário pode ser adicionada aqui
        console.log("Formulário enviado!");
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-6">
                    <form onSubmit={handleSubmit} className="border p-4 rounded shadow">
                        <h2 className="text-center mb-4"> Cadastro de Patrimônio</h2>
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
                                    value={assetNumber} // O valor do campo é controlado pelo estado
                                    onChange={handleAssetNumberChange} // Chama a função sempre que o campo mudar
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
                                    value={amount} // O valor do campo é controlado pelo estado
                                    onChange={handleAmountChange} // Chama a função sempre que o campo mudar
                                />
                            </div>
                        </div>
                        <div className='row'>

                            {/* Campo Data de Aquisição */}
                            <div className="col-5">
                                <label htmlFor="dataAquisicao" className="form-label">Data de Aquisição</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    id="dataAquisicao"
                                    required
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
                                />
                            </div>

                        </div>


                        <div className="mb-3">
                            <label htmlFor="descricao" className="form-label">Descrição</label>
                            <input
                                type="text"
                                className="form-control"
                                id="descricao"
                                placeholder="Descrição"
                                required
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
                            />
                        </div>
                        {/* Forma de Aquisição*/}
                        <div className="mb-3">
                            <label htmlFor="froma-aquisicao" className="form-label">Forma de Aquisição</label>
                            <input
                                type="text"
                                className="form-control"
                                id="froma-aquisicao"
                                placeholder="Forma de Aquisição"
                                required
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
                            />
                        </div>
                        {/* Botão de Enviar */}
                        <div className="d-grid gap-2">
                            <button type="submit" className="btn btn-primary btn-lg">Cadastrar Patrimônio</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CadastroPatrimonio;
