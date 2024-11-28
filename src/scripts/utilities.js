export function formattedAmount(valor) {
    let valorAlterado = valor;
    valorAlterado = valorAlterado.replace(/\D/g, ""); // Remove todos os não dígitos
    valorAlterado = valorAlterado.replace(/(\d+)(\d{2})$/, "$1,$2"); // Adiciona a parte de centavos
    valorAlterado = valorAlterado.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1."); // Adiciona pontos a cada três dígitos
    valorAlterado = "R$ " + valorAlterado; // Adiciona o prefixo 'R$'
    return valorAlterado;
}

export function formattedNumber(valor) {
    let valorAlterado = valor;
    valorAlterado = valorAlterado.replace(/\D/g, ""); // Remove todos os não dígitos
    return valorAlterado;
}

export function formattedDateTime(date) {
    if (date) {
        const dateObj = new Date(date);

        // Verifica se a data é válida
        if (isNaN(dateObj.getTime())) {
            return 'Data inválida';
        }

        // Formata a data no formato DD/MM/YYYY e a hora no formato HH:MM:SS
        const dataFormatada = dateObj.toLocaleDateString('pt-BR');
        const horaFormatada = dateObj.toLocaleTimeString('pt-BR', { hour12: false });

        // Retorna data e hora formatadas
        return `${dataFormatada} ${horaFormatada}`;
    }
    return 'Data não disponível';
}
export function formattedDate(date) {
    if (date) {
        const dateObj = new Date(date);

        // Verifica se a data é válida
        if (isNaN(dateObj.getTime())) {
            return 'Data inválida';
        }

        // Formata a data no formato DD/MM/YYYY e a hora no formato HH:MM:SS
        const dataFormatada = dateObj.toLocaleDateString('pt-BR');

        // Retorna data e hora formatadas
        return `${dataFormatada}`;
    }
    return 'Data não disponível';
}

export function formatValue(value) {
    if (value) {
        return `R$${value.toFixed(2).replace('.', ',')}`;
    }
    return 'Não disponível';
}