import React from 'react';

const Sobre = () => {
    return (
        <div className="container py-5">
            <div className="row">
                {/* Coluna para espaçamento em telas grandes */}
                <div className="col-12 col-md-2"></div>

                {/* Coluna principal de conteúdo */}
                <div className="col-12 col-md-8">
                    <h2 className="mb-4">Sistema de Patrimônio da Secretaria de Saúde</h2>
                    <p>
                        O Sistema de Patrimônio da Secretaria de Saúde foi criado
                        para gerenciar os bens patrimoniais da Secretaria, oferecendo
                        funcionalidades como cadastro, controle e emissão de relatórios detalhados.
                        Ele passou por diversas evoluções ao longo dos anos, com melhorias
                        contínuas para atender às demandas específicas do setor público.
                    </p>

                    <h3 className="mt-4">Histórico de Versões</h3>

                    <div className="mb-4">
                        <h4>Versão 1.0 (Desktop - OUT/2019)</h4>
                        <ul>
                            <li>Cadastro de bens patrimoniais e usuários.</li>
                            <li>Geração de relatório de bens permanentes por local.</li>
                        </ul>
                        <p><strong>Equipe de Desenvolvimento:</strong> Edcristo dos Santos Gonçalves - Engenheiro de Software</p>
                    </div>

                    <div className="mb-4">
                        <h4>Versão 1.1 (Desktop - NOV/2019)</h4>
                        <ul>
                            <li>Inclusão de dois tipos de relatório por local:
                                <ul>
                                    <li>Relatório Simples: Exclui campos como valor, fornecedor e empenho.</li>
                                    <li>Relatório Detalhado: Inclui todos os campos, gerado com informações completas.</li>
                                </ul>
                            </li>
                        </ul>
                        <p><strong>Equipe de Desenvolvimento:</strong> Edcristo dos Santos Gonçalves - Engenheiro de Software</p>
                    </div>

                    <div className="mb-4">
                        <h4>Versão 1.2 (Desktop - MAI/2021)</h4>
                        <ul>
                            <li>Design aprimorado.</li>
                            <li>Inclusão de novos filtros para relatórios:
                                <ul>
                                    <li>Por período (Data de Aquisição: data inicial e data final).</li>
                                    <li>Por intervalo de números de patrimônio (número inicial e número final).</li>
                                    <li>Por descrição (busca por palavras-chave nos bens).</li>
                                </ul>
                            </li>
                        </ul>
                        <p><strong>Equipe de Desenvolvimento:</strong> <a class="link-opacity-10" href="https://github.com/Edcristo">  Edcristo dos Santos Gonçalves </a> - Engenheiro de Software, Jhon Lucas Bezerra de Souza - Desenvolvedor Java</p>
                    </div>

                    <div className="mb-4">
                        <h4>Versão 2.0 (Web - NOV/2024)</h4>
                        <ul>
                            <li>Transição para a Web: Sistema migrado para uma aplicação Web, acessível via navegador por domínio.</li>
                            <li>Maior acessibilidade e modernização da plataforma.</li>
                        </ul>
                        <p><strong>Equipe de Desenvolvimento:</strong>
                            <a class="link-opacity-10" href="https://github.com/Edcristo">  Edcristo dos Santos Gonçalves </a>- Engenheiro de Software,
                            <a class="link-opacity-10" href="https://github.com/Ailton78"> Ailton Bulhões Sampaio </a>  - Desenvolvedor Java</p>
                    </div>

                    <div>
                        <h3>Visão Geral do Sistema</h3>
                        <p>
                            O sistema foi inicialmente desenvolvido como uma aplicação desktop para controle de bens permanentes da Secretaria de Saúde. Com o tempo, evoluiu para um sistema web robusto, capaz de ser acessado por diversos dispositivos e integrando funcionalidades avançadas, como relatórios personalizados e filtros dinâmicos. Essa evolução reflete o compromisso da equipe de desenvolvimento em atender às necessidades dos usuários e modernizar os processos administrativos.
                        </p>
                    </div>
                </div>

                {/* Coluna para espaçamento em telas grandes */}
                <div className="col-12 col-md-2"></div>
            </div>
        </div>
    );
}

export default Sobre;
