function jogar(escolhaJogador) {
  const escolhaComputador = Math.floor(Math.random() * 3) + 1;
  const resultadoElement = document.getElementById("resultado");
  const escolhaCompElement = document.getElementById("escolha-computador");
  const btnReiniciar = document.getElementById("btn-reiniciar");
  const opcoesJogo = document.getElementById("opcoes-jogo");

  // Converter números para nomes
  const nomes = {
    1: "👊 Pedra",
    2: "✋ Papel",
    3: "✌️ Tesoura",
  };

  // Mostrar escolha do computador
  escolhaCompElement.innerHTML = `<strong>Computador escolheu:</strong> ${nomes[escolhaComputador]}`;

  // Verificar resultado
  if (escolhaJogador == escolhaComputador) {
    resultadoElement.innerHTML =
      "<span style='color: #FFD700; font-size: 24px;'>EMPATE!</span>";
  } else if (
    (escolhaJogador == 1 && escolhaComputador == 3) ||
    (escolhaJogador == 2 && escolhaComputador == 1) ||
    (escolhaJogador == 3 && escolhaComputador == 2)
  ) {
    resultadoElement.innerHTML = `<span style='color: #00FF00; font-size: 24px;'>VOCÊ VENCEU! ${nomes[escolhaJogador]} vence ${nomes[escolhaComputador]}</span>`;
  } else {
    resultadoElement.innerHTML = `<span style='color: #FF0000; font-size: 24px;'>COMPUTADOR VENCEU! ${nomes[escolhaComputador]} vence ${nomes[escolhaJogador]}</span>`;
  }

  // Esconder opções e mostrar botão de reinício
  opcoesJogo.style.display = "none";
  btnReiniciar.style.display = "inline-block";
}

function reiniciarJogo() {
  document.getElementById("resultado").textContent = "";
  document.getElementById("escolha-computador").textContent = "";
  document.getElementById("opcoes-jogo").style.display = "block";
  document.getElementById("btn-reiniciar").style.display = "none";
}
