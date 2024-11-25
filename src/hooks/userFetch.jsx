import { useState, useEffect } from 'react';

const useFetch = (url, page = 0, size = 10) => {
    const [data, setData] = useState(null); // Dados da página atual
    const [loading, setLoading] = useState(true); // Indicador de carregamento
    const [error, setError] = useState(null); // Mensagem de erro
    const [pagination, setPagination] = useState({
        totalPages: 0,
        currentPage: 0,
        totalItems: 0,
    }); // Dados de paginação

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await fetch(`${url}?page=${page}&size=${size}`);
                if (!response.ok) {
                    throw new Error(`Erro: ${response.status} ${response.statusText}`);
                }

                const result = await response.json();
                setData(result.content); // Dados da página atual
                setPagination({
                    totalPages: result.totalPages,
                    currentPage: result.number,
                    totalItems: result.totalElements,
                }); // Dados de paginação
            } catch (err) {
                setError(err.message || 'Erro desconhecido');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url, page, size]); // A dependência inclui 'page' e 'size'

    return { data, loading, error, pagination };
};

export default useFetch;
