import React, { useState } from 'react';

import ListaSimples from './ListaSimples';
import Listas from './Listas';

const Relatorios = () => {
    // Estado para controlar qual tipo de relatório foi selecionado
    const [selectedReport, setSelectedReport] = useState('completo'); // 'completo' é o valor inicial

    // Funções para atualizar o estado baseado na seleção do relatório
    const handleBtCompleto = () => {
        setSelectedReport('completo');
    }

    const handleBtSimples = () => {
        setSelectedReport('simples');
    }

    return (
        <div className='container'>
            {/* Grupo de botões de rádio */}

            <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                {/* Botão de Rádio para Relatório Completo */}
                <input
                    type="radio"
                    className="btn-check"
                    id="btnradio1"
                    name="btnradio"
                    autoComplete="off"
                    checked={selectedReport === 'completo'} // Verifica se 'completo' é o selecionado
                    onChange={handleBtCompleto} // Atualiza o estado para 'completo' quando clicado
                />
                <label className="btn btn-outline-primary" htmlFor="btnradio1">
                    Relatório Completo
                </label>

                {/* Botão de Rádio para Relatório Simples */}
                <input
                    type="radio"
                    className="btn-check"
                    id="btnradio2"
                    name="btnradio"
                    autoComplete="off"
                    checked={selectedReport === 'simples'} // Verifica se 'simples' é o selecionado
                    onChange={handleBtSimples} // Atualiza o estado para 'simples' quando clicado
                />
                <label className="btn btn-outline-primary" htmlFor="btnradio2">
                    Relatório Simples
                </label>

            </div>

            {/* Exibe o componente de relatório baseado na seleção */}
            <div>

                {selectedReport === 'completo' ? <Listas /> : <ListaSimples />}
            </div>
        </div>
    );
}

export default Relatorios;
