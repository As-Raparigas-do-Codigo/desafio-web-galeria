function calcularTotal() {
    // Extrair cada linha da tabela de produtos
    var linhas = document.getElementsByClassName("linha");

    var total = 0;
    for (var i = 0; i < linhas.length; i++) {
        var linha = linhas[i];

        // Extrair quantidade
        var quantidade = linha.getElementsByClassName("quantidade")[0].value;

        // Extrair preço
        var preco = linha.getElementsByClassName("preco")[0].innerHTML;
        preco = preco.replace('€', '');

        // Calcular valor do produto em cada linha
        var totalLinha = linha.getElementsByClassName("totalLinha")[0];
        var valor = quantidade * preco;
        total += valor; // Somar total da linha ao total a pagar
        valor = valor.toFixed(2);

        // Atribuir valor total da linha
        totalLinha.innerHTML = valor + "€";   
    }

    document.getElementsByClassName("total")[0].innerHTML = "Total: " + total.toFixed(2) + "€";
}

function limparTabela() {
    // Extrair cada linha da tabela de produtos
    var linhas = document.getElementsByClassName("linha");

    for (var i = 0; i < linhas.length; i++) {
        var linha = linhas[i];

        // Igualar quantidade a zero
        linha.getElementsByClassName("quantidade")[0].value = 0;

        // Igualar total de cada linha a zero
        linha.getElementsByClassName("totalLinha")[0].innerHTML = '0.00€';
    }

    document.getElementsByClassName("total")[0].innerHTML = "Total: 0.00€";
}

calcularTotal();
