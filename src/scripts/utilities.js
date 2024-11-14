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