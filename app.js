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
    resultadoElement.innerHTML = "EMPATE!";
    resultadoElement.className = "result draw";
  } else if (
    (escolhaJogador == 1 && escolhaComputador == 3) ||
    (escolhaJogador == 2 && escolhaComputador == 1) ||
    (escolhaJogador == 3 && escolhaComputador == 2)
  ) {
    resultadoElement.innerHTML = `VOCÊ VENCEU!<br>${nomes[escolhaJogador]} vence ${nomes[escolhaComputador]}`;
    resultadoElement.className = "result win";
  } else {
    resultadoElement.innerHTML = `COMPUTADOR VENCEU!<br>${nomes[escolhaComputador]} vence ${nomes[escolhaJogador]}`;
    resultadoElement.className = "result lose";
  }

  // Esconder opções e mostrar botão de reinício
  opcoesJogo.style.display = "none";
  btnReiniciar.style.display = "block";

  // Efeito de animação
  resultadoElement.style.animation = "none";
  setTimeout(() => {
    resultadoElement.style.animation = "fadeIn 0.5s ease-out";
  }, 10);
}

function reiniciarJogo() {
  document.getElementById("resultado").textContent = "";
  document.getElementById("resultado").className = "result";
  document.getElementById("escolha-computador").textContent = "";
  document.getElementById("opcoes-jogo").style.display = "flex";
  document.getElementById("btn-reiniciar").style.display = "none";
}

// Adiciona animação de fadeIn
const style = document.createElement("style");
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(style);
