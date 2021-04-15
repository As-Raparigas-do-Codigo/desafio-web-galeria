const imagens = ["imagens/margaret_hamilton.jpg", 
                 "imagens/hedy_lamarr.jpg",
                 "imagens/carol_shaw.png", 
                 "imagens/betty_holberton.jpg",
                 "imagens/joan_clarke.jpg", 
                 "imagens/sally_ride_e_mae_jemison.jpg",
                 "imagens/angie_jones.jpg", 
                 "imagens/joy_buolamwini.jpg",
                 "imagens/amanda_rousseau.png",
                 "imagens/kaori_ogino.jpg",
                 "imagens/reshma_saujani.png", 
                 "imagens/gitanjali-rao.png"
                 ]
const nomes = [ "margaret_hamilton",
                "hedy_lamarr",

                ]

var currentIndex = 0;
var carrinho = [];
function adicionarCarrinho(i) {
    carrinho.append(i);
}

function changeImage() {
    document.getElementById("sliderImage").src = imagens[currentIndex];
}

function previousImage() {
    currentIndex--;
    if (currentIndex < 0)
        currentIndex = imagens.length-1;

    changeImage();
}

function nextImage() {
    currentIndex++;
    if (currentIndex >= imagens.length)
        currentIndex = 0;

    changeImage();
}

function setImage(i) {
    currentIndex = i;
    changeImage();
}

changeImage();
