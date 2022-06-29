//VARIÁVEIS
var palavras = ["BRASIL", "ARGENTINA", "CANADA", "CHILE", "PORTUGAL", "EGITO", "CHINA", "IRLANDA", "ESPANHA", "ANGOLA", "RUSSIA", "ISRAEL", "AUSTRIA", "URUGUAI", "PERU", "POLONIA", "TAIWAN", "GRECIA", "LITUANIA", "PANAMA"];
var letras = [];
var letrasPalavraSecreta = [];
var letrasCorretas = [];
var palavraCorreta = "";
var palavraSecreta = "";
var erros = 6;
var valorPalavra = "";
var inputAddPalavra = document.getElementById("add-palavra");


//SEÇÕES
var telaInicial = document.getElementById("tela-inicio");
var secaoInput = document.getElementById("secao-input");
var secaoJogo = document.getElementById("main-id");
var footer = document.getElementById("footer");
var paginaAtual = telaInicial;


//BOTÕES
var iniciaJogoBtn = document.getElementById("inicia-jogo");
var adicionaPlavraBtn = document.getElementById("adiciona-palavra");
var btnSalvarPalavra = document.getElementById("salvar-palavra");
var btnSalvaInicia = document.getElementById("salva-e-inicia");
var btnCancelar = document.getElementById("cancela-btn");
var btnNovoJogo = document.getElementById("novo-jogo-btn");
var btnDesistir = document.getElementById("desistir-btn");


//FUNÇÕES

// FUNÇÃO PARA VERIFICAR SE A PALAVRA DO INPUT É VÁLIDA
function verificaPalavraDoInput() {
    valorPalavra = (inputAddPalavra.value).toUpperCase();
        if ((valorPalavra.length < 4) || (valorPalavra.length > 8)){
            alert("Digite o nome de um PAÍS válido e com até 8 letras!");
            inputAddPalavra.value = "";
            inputAddPalavra.focus();

        }
        else if (palavras.includes(valorPalavra)) {
            alert("Esse país já está na lista, tente outro!")
            inputAddPalavra.value = "";
            inputAddPalavra.focus();
        }
        else{
            palavras.push(valorPalavra);
            alert("Palavra adicionada com sucesso!");
            inputAddPalavra.value = "";
            console.log(palavras);
        }
}

//LÓGICA PARA ESCOLHER PALAVRAS
function escolherPalavraSecreta(){
    var palavra = palavras[Math.floor(Math.random() * palavras.length)];
    letrasPalavraSecreta = palavra.split('');
    palavraSecreta = palavra;
    console.log(palavra);
    return palavra;
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
    }
}

// CAPTURA DO TECLADO
document.addEventListener("keydown", escutaTeclado = (e) => {
  var letra = e.key.toUpperCase();
  var codigo = e.keyCode;

  if((somenteLetras(codigo)) && (!verificarLetraCorreta(e.key))) {
    if(palavraSecreta.includes(letra)){
      adicionarLetraCorreta(palavraSecreta.indexOf(letra))
             for(let i = 0; i < palavraSecreta.length; i++) {
                 if(palavraSecreta[i] === letra) {
                     escreverLetraCorreta(i);
                     letrasCorretas.push(letra);
                     verificaVitoria();
                 }

             }
    }
    else if (!(palavraSecreta.includes(letra))){
             adicionarLetraIncorreta(letra);
             escreverLetraIncorreta(letra, erros);
             desenhaEnforcado(erros);
    }
  }
});



// RECARREGANDO A PÁGINA INICIAL
function retornaPaginaInicial() {
    window.location.reload();
}

// FUNÇÃO QUE INICIA O JOGO
function iniciaJogo() {
    limpaCanvas();
    letras = [];
    letrasCorretas = [];
    palavraCorreta = "";
    palavraSecreta = "";

    erros = 6;
    escreverTracinhos(escolherPalavraSecreta());
    telaInicial.classList.add("hide");
    footer.classList.add("hide");
    secaoJogo.classList.remove("hide");
    paginaAtual = secaoJogo;
}

function somenteLetras(codigo) {
  return codigo >= 65 && codigo <= 90;
}

function verificaVitoria() {
    if(letrasCorretas.length == letrasPalavraSecreta.length){
        vitoria();
        console.log(letrasCorretas.length);
        console.log(letrasPalavraSecreta.length);
        document.removeEventListener("keydown", escutaTeclado);
    }
}
