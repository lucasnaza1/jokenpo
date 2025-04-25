function jogar(escolhaJogador) {
  const escolhaComputador = Math.floor(Math.random() * 3) + 1;
  const resultadoElement = document.getElementById("resultado");
  const escolhaCompElement = document.getElementById("escolha-computador");

  // Converter números para nomes
  const nomes = {
    1: "Pedra",
    2: "Papel",
    3: "Tesoura",
  };

  // Mostrar escolha do computador
  escolhaCompElement.textContent = `O computador escolheu: ${nomes[escolhaComputador]}`;

  // Verificar resultado
  if (escolhaJogador == escolhaComputador) {
    resultadoElement.textContent = "EMPATE!";
    resultadoElement.style.color = "yellow";
  } else if (
    (escolhaJogador == 1 && escolhaComputador == 3) || // Pedra > Tesoura
    (escolhaJogador == 2 && escolhaComputador == 1) || // Papel > Pedra
    (escolhaJogador == 3 && escolhaComputador == 2) // Tesoura > Papel
  ) {
    resultadoElement.textContent = `Você venceu! ${nomes[escolhaJogador]} vence ${nomes[escolhaComputador]}`;
    resultadoElement.style.color = "green";
  } else {
    resultadoElement.textContent = `Computador venceu! ${nomes[escolhaComputador]} vence ${nomes[escolhaJogador]}`;
    resultadoElement.style.color = "red";
  }
}
