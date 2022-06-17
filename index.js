//variaveis?
// dados de entrada?
// dados de saida?

const elementoResposta = document.querySelector ("#resposta")
const inputDaPergunta = document.querySelector ("#inputDaPergunta")
const resposta = [
"Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim.",
]

// clicar em fazer pergunta
function fazerPergunta() {
  if(inputDaPergunta.value == "") { alert("Digite sua pergunta")
  return
  }
buttonPerguntar.setAttribute("disabled", true)
const pergunta = "<div>" + inputDaPergunta.value + "</div>"

//gerar numero aleatorio

const totalRespostas = resposta.length
const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

elementoResposta.innerHTML = pergunta + resposta[numeroAleatorio]

//sumir a pergunta depois de 3 segundos
setTimeout (function() {
  elementoResposta.style.opacity = 0;
    buttonPerguntar.removeAttribute("disabled")
}, 3000)
}


