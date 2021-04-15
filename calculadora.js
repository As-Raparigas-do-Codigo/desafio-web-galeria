const produtos = [
    {nome: 'Poster 1', preço: 20.30},
    {nome: 'Poster 2', preço: 9.99}
];

function calcularTotal() {
    var linhas = document.getElementsByClassName("linha");

    var total = 0;
    for (var i = 0; i < linhas.length; i++) {
        var linha = linhas[i];

        // Extrair quantidade
        var quantidade = linha.getElementsByClassName("quantidade")[0].value;
        var nome = linha.getElementsByClassName("nome")[0].innerHTML;
        var preco = linha.getElementsByClassName("preco")[0].innerHTML;
        preco = preco.replace('€', '');
        var totalLinha = linha.getElementsByClassName("totalLinha")[0];
        var valor = quantidade * preco;
        total += valor;
        valor = valor.toFixed(2);
        totalLinha.innerHTML = valor + "€";   
    }

    document.getElementsByClassName("total")[0].innerHTML = "Total: " + total.toFixed(2) + "€";
}

calcularTotal();