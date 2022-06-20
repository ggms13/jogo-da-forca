//CANVAS 
var tabuleiro = document.getElementById('forca').getContext('2d');
var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');

//DESENHANDO O BONECO

function desenhaEnforcado(erros) {
  if (erros == 5) {
    desenhaCabeca();
    erros -=1;
    return;
  } else if (erros == 4) {
    //CORPO
    desenhaLinha(200, 170, 200, 250);
    erros -=1;
    return;
  } else if (erros == 3) {
    //BRAÇO ESQ
    desenhaLinha(200, 175, 170, 220);
    erros -=1;
    return;
  } else if (erros == 2) {
    //BRAÇO DIR
    desenhaLinha(200, 175, 230, 220);
    erros -=1;
    return;
  } else if (erros == 1) {
    //PERNA ESQ
    desenhaLinha(200, 249, 170, 320);    
    erros -=1;
    return;
} else if (erros == 0) {
    //PERNA DIR
    desenhaLinha(200, 249, 230, 320);
    erros -=1;
    derrota();
    document.removeEventListener("keydown", escutaTeclado);
  }
return;
    
}

  //FORCA
function desenhaForca() {
    desenhaLinha(300, 420, 50, 420);
    desenhaLinha(90, 422, 90, 100);
    desenhaLinha(88, 100, 200, 101);
    desenhaLinha(200, 99, 200, 145);
}


// CABEÇA
function desenhaCabeca(x, y, raio, cor) {
   desenhaCirculo(200, 146, 25, "#0A3871");
   desenhaCirculo(200, 146, 20, "#739DFF");
}

//LINHA

function desenhaLinha(xa, ya, xb, yb) {
    pincel.beginPath();
    pincel.moveTo(xa, ya);
    pincel.lineTo(xb, yb);
    pincel.lineWidth = 5;
    pincel.strokeStyle = "#0A3871";
    pincel.stroke();
    
 }
 
 //CIRCULO
 
 function desenhaCirculo(x, y, raio, cor) {
     pincel.fillStyle = cor;
     pincel.beginPath();
     pincel.arc(x, y, raio, 0, 2 * Math.PI);
     pincel.fill();
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

//LIMPA CANVAS
function limpaCanvas() {
 pincel.clearRect(150, 120, 100, 290);
 pincel.clearRect(400, 300, 900, 200);
 pincel.clearRect(370, 75, 700, 150);
 desenhaForca();
}


