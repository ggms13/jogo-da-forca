// BOTÃO CANCELAR
btnCancelar.addEventListener("click", function() {
    retornaPaginaInicial();
});

// BOTÃO NOVO JOGO
btnNovoJogo.addEventListener("click", function() {
    iniciaJogo(); 
});

// BOTÃO DESISTIR
btnDesistir.addEventListener("click", function() {
    retornaPaginaInicial(); 
});

// INICIANDO JOGO NA PAGINA INICIAL
iniciaJogoBtn.addEventListener("click", function(){
    iniciaJogo();
});

// BOTÃO DE ADICIONAR PALAVRA
adicionaPlavraBtn.addEventListener("click", function() {
    telaInicial.classList.add("hide");
    footer.classList.add("hide");
    secaoInput.classList.remove("hide");
    inputAddPalavra.focus();
    paginaAtual = secaoInput;
});

// SALVANDO A PALAVRA DO INPUT NA ARRAY
btnSalvarPalavra.addEventListener("click", function() {
    verificaPalavraDoInput();
});

// INICIANDO JOGO A PARTIR DA TELA DE INPUT
btnSalvaInicia.addEventListener("click", function() {
    limpaCanvas();
    letras = [];
    letrasCorretas = [];
    palavraCorreta = "";
    palavraSecreta = "";

    erros = 6;
    escreverTracinhos(escolherPalavraSecreta());
    secaoInput.classList.add("hide");
    footer.classList.add("hide");
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
