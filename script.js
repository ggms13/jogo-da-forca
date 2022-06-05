//VARIÁVEIS
var palavras = ["BRASIL", "ARGENTINA", "CANADA", "CHILE", "PORTUGAL", "EGITO", "CHINA", "IRLANDA", "ESPANHA", "ANGOLA"];
var tabuleiro = document.getElementById('forca').getContext('2d');
var letras = [];
var palavraCorreta = "";
var erros = 6;

//SEÇÕES
var telaInicial = document.getElementById("tela-inicio");
var secaoInput = document.getElementById("secao-input");
var secaoJogo = document.getElementById("main-id");
var paginaAtual = telaInicial;


//BOTÕES
var iniciaJogoBtn = document.getElementById("inicia-jogo");
var adicionaPlavraBtn = document.getElementById("adiciona-palavra");
var btnSalvaContinua = document.getElementById("salva-continua");
var btnCancelar = document.getElementById("cancela-btn");
var btnNovoJogo = document.getElementById("novo-jogo-btn");
var btnDesistir = document.getElementById("desistir-btn");


//FUNÇÕES

iniciaJogoBtn.addEventListener("click", iniciaJogo);


adicionaPlavraBtn.addEventListener("click", function() {
    telaInicial.classList.toggle("hide");
    secaoInput.classList.toggle("hide");
    paginaAtual = secaoInput;

});

btnNovoJogo.addEventListener("click", function() {
    window.location.reload();
})

btnDesistir.addEventListener("click", function() {
    paginaAtual.classList.toggle("hide");
    telaInicial.classList.toggle("hide");
    paginaAtual = telaInicial;
    
});



btnCancelar.addEventListener("click", function() {
    paginaAtual.classList.toggle("hide");
    telaInicial.classList.toggle("hide");
    paginaAtual = telaInicial;
})


function iniciaJogo() {
    escreverTracinhos(escolherPalavraSecreta());
    paginaAtual.classList.toggle("hide");
    secaoJogo.classList.toggle("hide");
    paginaAtual = secaoJogo;

} 


//LÓGICA PARA ESCREVER PALAVRAS


function escolherPalavraSecreta(){
    var palavra = palavras[Math.floor(Math.random() * palavras.length)];
    palavraSecreta = palavra;
    console.log(palavra);
    return palavra;
} 

function escreverTracinhos(){
    tabuleiro.lineWidth = 6;
    tabuleiro.lineCap = "round";
    tabuleiro.lineJoin = "round";
    tabuleiro.strokeStyle = "#0A3871";
    tabuleiro.beginPath();
    var eixo = 600/palavraSecreta.length;
    for(let i = 0; i < palavraSecreta.length; i++) {
        tabuleiro.moveTo(500 + (eixo * i), 360);
        tabuleiro.lineTo(550 + (eixo * i), 360);
    }
    tabuleiro.stroke();
    tabuleiro.closePath();
}

function escreverLetraCorreta(index) {
    tabuleiro.font = "bold 52px Inter";
    tabuleiro.lineWidth = 6;
    tabuleiro.lineCap = "round";
    tabuleiro.lineJoin = "round";
    tabuleiro.fillStyle = "#0A3871";

    var eixo = 600/palavraSecreta.length;
    tabuleiro.fillText(palavraSecreta[index], 505 + (eixo * index), 340);
    tabuleiro.stroke();
}

function escreverLetraIncorreta(letra, errorsLeft){
    tabuleiro.font = 'bold 40px Inter';
    tabuleiro.lineWidth = 6
    tabuleiro.lineCap = "round"
    tabuleiro.ineJoin = "round"
    tabuleiro.fillStyle = "#495057"
    tabuleiro.fillText(letra, 300+(40*(10-errorsLeft)),430,40)

}


function verificarLetraCorreta(key) {
    if(letras.length < 1 || letras.indexOf(key) < 0) {
        console.log(key);
        letras.push(key);
        return false;
    } 
    else {
        letras.push(key.toUpperCase());
        return true;
    }
}

function adicionarLetraCorreta(i) {
    palavraCorreta += palavraSecreta[i].toUpperCase();
}

function adicionarLetraIncorreta(letter) {
    if(palavraSecreta.indexOf(letter) <= 0) {
        erros -= 1;
        desenhaForca();
    }
}

//DESENHANDO O ENFORCADO

function desenhaForca() {
    if(erros == 5) {
        desenhaCabeca();
    }
    if(erros == 4) {
        //CORPO
        desenhaLinha(200, 170, 200, 250);
    }
    if(erros == 3) {
        //BRAÇO ESQ
        desenhaLinha(200, 175, 170, 220);
        console.log(erros);
    }
    if(erros == 2) {
        //BRAÇO DIR
        desenhaLinha(200, 175, 230, 220);
    }
    if(erros == 1) {
        //PERNA ESQ
        desenhaLinha(200, 249, 170, 320);
    }
    if(erros == 0) {
        //PERNA DIR
        desenhaLinha(200, 249, 230, 320);
        document.getElementById("h2-msg-id").textContent = "Você Perdeu!";
    } return;
}

// CAPTURA DO TECLADO

document.onkeydown = (e) => {
     var letra = e.key.toUpperCase();
     if(!verificarLetraCorreta(e.key)) {
         if(palavraSecreta.includes(letra)) {
             adicionarLetraCorreta(palavraSecreta.indexOf(letra));
             for(let i = 0; i < palavraSecreta.length; i++) {
                 if(palavraSecreta[i] === letra) {
                     escreverLetraCorreta(i);
                 }
             }
         }
         else {
             if(!verificarLetraCorreta(e.key))
             return
             adicionarLetraIncorreta(letra);
             escreverLetraIncorreta(letra, erros);
         }
     } 
}


//LIMPA TELA

function limpaTela() {
    var tabuleiro = document.getElementById('forca')
    var pincel = tabuleiro.getContext('2d');
   pincel.clearRect(0, 580, 1200, 140);
}





