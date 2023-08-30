function verificarRespostas() {
  const inputElement = document.getElementById("respostaInput");
  const resultadoElement = document.getElementById("resultado");

  const resposta = inputElement.value.toLowerCase();

  if(resposta === "sim") {
    resultadoElement.textContent = "Classificado";
  }else if (resposta === "não") {
    resultadoElement.textContent = "Desclassificado";
  }else {
    resultadoElement.textContent = "Resposta inválida. Por favor, digite 'sim' ou 'não'.";
  }

}



function verficarIdade() {
  const input = document.getElementById("respostaIdade");
  const resultadoIdade = document.getElementById("resultado2");

  const resultado = parseInt(input.value); /* converte o valor do input para inteiro */

  if(resultado >= 18) {
    resultadoIdade.textContent = "Aprovado";
  }else if(resultado < 18) {
    resultadoIdade.textContent = "Desclassificado";
  }else {
    resultadoIdade.textContent = "Resposta inválida. Por favor, digite sua idade.";
  }
}

/* Em vez de verificar o valor de texto da resposta, estamos verificando se um dos botões de rádio está marcado (inputMasculino.checked ou inputFeminino.checked) para determinar a escolha do usuário. Isso é mais apropriado quando você está lidando com botões de rádio em formulários. Se o botão masculino estiver marcado, exibimos "Aprovado", se o botão feminino estiver marcado, exibimos "Desclassificado" e, se nenhum estiver marcado, exibimos a mensagem para selecionar uma opção. */

function verificarSexo() {
  const inputMasculino = document.getElementById("respostaMasculino");
  const inputFeminino = document.getElementById("respostaFeminino");
  const respostaSexo = document.getElementById("resultado3");

  if (inputMasculino.checked) {
    respostaSexo.textContent = "Aprovado";
  } else if (inputFeminino.checked) {
    respostaSexo.textContent = "Desclassificado";
  } else {
    respostaSexo.textContent = "Por favor, selecione uma opção.";
  }
}

