function verificarRespostas() {
  const inputElement = document.getElementById("respostaValor");
  const resultadoElement = document.getElementById("resultado");

  const resposta = inputElement.value.toLowerCase();
  let mensagem = "";

  switch (resposta) {
    case "branco":
    mensagem = "Você é um pessoa que almeja muito a paz";
    break;
    case "azul":
      mensagem = "Você gosta do Oceano"; 
      break;
      case "preto":
      mensagem = "Você gosta da noite"; 
      break;
      case "amarelo":
      mensagem = "Você gosta dos raios de sol"; 
      break;
      case "cinza":
      mensagem = "Você gosta da neblina"; 
      break;
      case "laranja":
      mensagem = "Você gosta de riqueza"; 
      break;
      case "vermelho":
      mensagem = "Você gosta de se apaixonar"; 
      break;
      case "rosa":
      mensagem = "Você gosta das flores"; 
      break;
      case "lilás":
      mensagem = "Você gosta de festas"; 
      break;
      case "roxo":
      mensagem = "Você gosta de brigas"; 
      break;
      case "marrom":
      mensagem = "Você gosta de comer"; 
      break;
      case "verde":
      mensagem = "Você gosta da floresta"; 
      break;
      default:
        mensagem = "Por favor, escreva uma cor";
  }
  resultadoElement.textContent = mensagem;
}