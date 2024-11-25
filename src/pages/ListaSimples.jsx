
import generatePDF, { Margin } from 'react-to-pdf';
import useFetch from '../hooks/userFetch'; // Importando hook useFetch
import Logo from "../assets/LogoCapanema.png"

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

const ListaSimples = () => {
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
                    <div className='col-3'>
                        <figure className="figure">
                            <img src={Logo} className="figure-img img-fluid rounded" alt="..." />
                            <figcaption className="figure-caption"></figcaption>
                        </figure>
                    </div>

                    <h1 className="text-center mb-4">Tabela de Patrimônios</h1>
                    <table className="table table-bordered table-striped">
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
                                    <td>{new Date(item.dataAquisicao).toLocaleDateString()}</td> {/* Formatação da data */}
                                    <td>{item.formaDeAquisicao}</td>
                                    <td>{item.localPatrimonio}</td>
                                    <td>{new Date(item.dataCadastro).toLocaleDateString()}</td> {/* Formatação da data */}

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

export default ListaSimples;
