//CANVAS 

var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');


//FORCA

desenhaLinha(300, 420, 50, 420);
desenhaLinha(91, 422, 90, 100);
desenhaLinha(88, 101, 200, 101);
desenhaLinha(200, 99, 200, 145);

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
   pincel.stroke()
   
}

//CIRCULO

function desenhaCirculo(x, y, raio, cor) {
	pincel.fillStyle = cor;
	pincel.beginPath();
	pincel.arc(x, y, raio, 0, 2 * Math.PI);
	pincel.fill();
}
