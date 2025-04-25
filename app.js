let idade = parseInt(prompt("Digite sua idade: "));
if (idade < 18) {
  alert("Jogo permitido para maiores de idade");
}

if (idade >= 18) {
  escolhaJogador = prompt("1-Pedra, 2-papel ou 3-tesoura");
  escolhaComputador = Math.floor(Math.random() * 3) + 1;

  //Jogador e Computador escolhem a mesma opção ---> EMPATE!!!!!
  if (escolhaJogador == escolhaComputador) {
    alert("EMPATE!");
  }

  if (escolhaJogador == 1) {
    /*Pedra*/ if (escolhaComputador == 3) {
      //Jogador escolhe pedra, computador escolhe tesoura ---> jogador vence!!!!!
      alert("O Jogador venceu, computador tesoura!!");
    }
    //Jogador escolhe pedra, computador escolhe papel ---> computador vence!!!!!
    if (escolhaComputador == 2) {
      alert("O computador venceu, computador papel");
    }
  }
  if (escolhaJogador == 2) {
    /*Papel*/ //Jogador escolhe tesoura, computador escolhe pedra ---> computador vence!!!!!
    if (escolhaComputador == 1) {
      alert("Jogador venceu, computador pedra");
    }
    if (escolhaComputador == 3) {
      //Jogador escolhe tesoura, computador escolhe papel ---> computador vence!!!!!
      alert("Computador venceu, computador tesoura");
    }
  }
  if (escolhaJogador == 3) {
    /*Tesoura*/ if (escolhaComputador == 2) {
      //Jogador escolhe papel, computador escolhe pedra ---> computador vence!!!!!
      alert("Computador venceu, computador pedra");
    }
    if (escolhaComputador == 3) {
      //Jogador escolhe papel, computador escolhe tesoura ---> computador vence!!!!!
      alert("Jogador venceu, computador papel");
    }
  }
  alert("A escolha do computador foi " + escolhaComputador);
}
