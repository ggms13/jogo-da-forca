  function vitoria() {
  pincel.beginPath()
  pincel.fillStyle = '#FFFFFF';
  pincel.font = "bold 30px 'Inter'";
  pincel.fillText('Parabéns, você venceu!', 405, 100);
  pincel.fillText('Clique em novo jogo se quiser jogar de novo', 405, 150);
}

function derrota() {
  escrevePalavraSecreta();
  pincel.beginPath()
  pincel.fillStyle = '#FFFFFF';
  pincel.font = "bold 30px 'Inter'";
  pincel.fillText('Você perdeu! A palavra era:', 405, 100);
  pincel.fillText('Clique em novo jogo se quiser tentar de novo', 405, 150);
  
}

function escrevePalavraSecreta() {
  pincel.beginPath()
  pincel.font = "bold 30px 'Inter'";
  pincel.fillStyle = '#FF7D12';
  pincel.fillText(palavraSecreta, 802,100);
}