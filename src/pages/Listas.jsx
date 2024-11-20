
import generatePDF, { Margin } from 'react-to-pdf';
import useFetch from '../hooks/userFetch'; // Importando hook useFetch


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
    const { data, loading, error } = useFetch(url); // Usando o hook useFetch

    if (loading) {
        return <div className="text-center"><p>Carregando...</p></div>; // Mensagem de carregamento
    }

    if (error) {
        return <div className="text-center"><p>Erro: {error}</p></div>; // Mensagem de erro
    }

    // Verificando se há dados e criando a tabela
    return (
        <>
            <div className="container mt-4">
                <div id="conteudo">

                    <h1 className="text-center mb-4">Tabela de Patrimônios</h1>
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
                                <th>Forma/Aquisição</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.map(item => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.descricao}</td>
                                    <td>{item.numeroPatrimonio}</td>
                                    <td>R$ {item.valor.toFixed(2)}</td> {/* Formatação de valor */}
                                    <td>{new Date(item.dataAquisicao).toLocaleDateString()}</td> {/* Formatação da data */}
                                    <td>{item.fornecedor}</td>
                                    <td>{item.empenho}</td>
                                    <td>{item.local}</td>
                                    <td>{new Date(item.dataCadastro).toLocaleDateString()}</td> {/* Formatação da data */}
                                    <td>{item.usuario.nome}</td>
                                    <td>{item.formaDeAquisicao}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <button onClick={() => generatePDF(recuperadorConteudoPdf, personalizacao)}>Gerar PDF</button>
            </div>

        </>
    );
};

export default Listas;
