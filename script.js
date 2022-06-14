//VARIÁVEIS
var palavras = ["BRASIL", "ARGENTINA", "CANADA", "CHILE", "PORTUGAL", "EGITO", "CHINA", "IRLANDA", "ESPANHA", "ANGOLA"];
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

iniciaJogoBtn.addEventListener("click", function(){
    limpaCanvas();
    letras = [];
    palavraCorreta = "";
    palavraSecreta = "";

    erros = 6;
    escreverTracinhos(escolherPalavraSecreta());
    telaInicial.classList.add("hide");
    secaoJogo.classList.remove("hide");
    paginaAtual = secaoJogo;

    document.onkeydown = (e) => {
        var letra = e.key.toUpperCase();
         if(!verificarLetraCorreta(e.key)) {
             if(palavraSecreta.includes(letra)) {
                 adicionarLetraCorreta(palavraSecreta.indexOf(letra));
                 for(let i = 0; i < palavraSecreta.length; i++) {
                     if(palavraSecreta[i] === letra) {
                         escreverLetraCorreta(i);
                         letrasCorretas.push(letra);
                         verificaVitoria();
                     }
                 }
             }
             else {
                 if(!verificarLetraCorreta(e.key))
                 return
                 adicionarLetraIncorreta(letra);
                 escreverLetraIncorreta(letra, erros);  
                 desenhaEnforcado(erros);  
             }
         } 
    } 
    

});


adicionaPlavraBtn.addEventListener("click", function() {
    telaInicial.classList.add("hide");
    secaoInput.classList.remove("hide");
    inputAddPalavra.focus();
    paginaAtual = secaoInput;
});


//VERIFICANDO E INCLUINDO A PALAVRA DO INPUT
btnSalvarPalavra.addEventListener("click", function() {
    verificaPalavraDoInput();
});

btnSalvaInicia.addEventListener("click", function() {
    limpaCanvas();
    letras = [];
    letrasCorretas = [];
    palavraCorreta = "";
    palavraSecreta = "";

    erros = 6;
    escreverTracinhos(escolherPalavraSecreta());
    secaoInput.classList.add("hide");
    secaoJogo.classList.remove("hide");
    paginaAtual = secaoJogo;

    document.onkeydown = (e) => {
        var letra = e.key.toUpperCase();
         if(!verificarLetraCorreta(e.key)) {
             if(palavraSecreta.includes(letra)) {
                 adicionarLetraCorreta(palavraSecreta.indexOf(letra));
                 for(let i = 0; i < palavraSecreta.length; i++) {
                     if(palavraSecreta[i] === letra) {
                         escreverLetraCorreta(i);
                         letrasCorretas.push(letra);
                         verificaVitoria();
                     }
                 }
             }
             else {
                 if(!verificarLetraCorreta(e.key))
                 return
                 adicionarLetraIncorreta(letra);
                 escreverLetraIncorreta(letra, erros);  
                 desenhaEnforcado(erros);  
             }
         } 
    } 
    
});

btnNovoJogo.addEventListener("click", function() {
    limpaCanvas();
    letras = [];
    letrasCorretas = [];
    palavraCorreta = "";
    palavraSecreta = "";

    erros = 6;
    escreverTracinhos(escolherPalavraSecreta());
    telaInicial.classList.add("hide");
    secaoJogo.classList.remove("hide");
    paginaAtual = secaoJogo;

    document.onkeydown = (e) => {
        var letra = e.key.toUpperCase();
         if(!verificarLetraCorreta(e.key)) {
             if(palavraSecreta.includes(letra)) {
                 adicionarLetraCorreta(palavraSecreta.indexOf(letra));
                 for(let i = 0; i < palavraSecreta.length; i++) {
                     if(palavraSecreta[i] === letra) {
                         escreverLetraCorreta(i);
                         letrasCorretas.push(letra);
                         verificaVitoria();
                     }
                 }
             }
             else {
                 if(!verificarLetraCorreta(e.key))
                 return
                 adicionarLetraIncorreta(letra);
                 escreverLetraIncorreta(letra, erros);  
                 desenhaEnforcado(erros);  
             }
         } 
    } 
    
});

btnDesistir.addEventListener("click", function() {
    retornaPaginaInicial();
    
});

btnCancelar.addEventListener("click", function() {
    retornaPaginaInicial();
});


function verificaPalavraDoInput() {
    valorPalavra = (inputAddPalavra.value).toUpperCase();
        if ((valorPalavra.length < 4) || (valorPalavra.length > 8)){
            alert("Digite o nome de um país válido e de até 8 letras");
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

document.onkeydown = (e) => {
    var letra = e.key.toUpperCase();
     if(!verificarLetraCorreta(e.key)) {
         if(palavraSecreta.includes(letra)) {
             adicionarLetraCorreta(palavraSecreta.indexOf(letra))
             for(let i = 0; i < palavraSecreta.length; i++) {
                 if(palavraSecreta[i] === letra) {
                     escreverLetraCorreta(i);     
                 }
                 letrasCorretas.push(letra);
             }
             
         }
         else {
             if(!verificarLetraCorreta(e.key))
             return
             adicionarLetraIncorreta(letra);
             escreverLetraIncorreta(letra, erros);
             desenhaEnforcado(erros); 
         }
     } 
} 

function verificaVitoria() {
    if(letrasCorretas.length == letrasPalavraSecreta.length){
        vitoria();
        console.log(letrasCorretas.length);
        console.log(letrasPalavraSecreta.length);
        document.onkeydown = (e) => {
            e.stopPropagation();
          }
    }
}


function retornaPaginaInicial() {
    window.location.reload();
}
