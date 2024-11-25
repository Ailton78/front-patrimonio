import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null); // Para armazenar os dados da API
    const [loading, setLoading] = useState(true); // Para gerenciar o estado de carregamento
    const [error, setError] = useState(null); // Para gerenciar erros

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true); // Inicia o carregamento
            setError(null); // Limpa o erro anterior

            try {
                const response = await fetch(url); // Realiza a requisição
                if (!response.ok) {
                    throw new Error(`Erro: ${response.status} ${response.statusText}`);
                }

                const result = await response.json(); // Converte a resposta para JSON
                setData(result); // Atualiza o estado com os dados recebidos
            } catch (err) {
                setError(err.message || 'Erro desconhecido'); // Em caso de erro, armazena a mensagem
            } finally {
                setLoading(false); // Finaliza o carregamento, independentemente do sucesso ou falha
            }
        };

        fetchData(); // Chama a função para buscar os dados
    }, [url]); // A dependência aqui é a URL, se mudar a URL, o efeito será disparado novamente

    return { data, loading, error }; // Retorna o estado com os dados, o estado de carregamento e o erro
};

export default useFetch;
