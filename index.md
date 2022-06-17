 1. variavel
let estachovendo = true
const meuNome = "Bruno"

let pode mudar o valor 
const a variavel é constante no meu codigo inteiro

2. tipos de dados
string cadeia de dados 
"" textos
''texto

number
 - inteiros integer (+ -)
 quebrados float (+  - )

 boolean
 true ou false

 undefined - indefinido

 3 operadores
 atribuicao de valor ex( = )
 atribui valor
 let n1 = 12 let n1 recebe o valor de 12
 let n2 = 3 let n2 recebe o valor de 3

 aritmeticos (ex: * / + -)
 calculos matematicos simples

 concatenacao de string (+) exemplo console.log ("25" + 4 + "abc") // 234abc

 comparacao (ex > < == )
 transforma expressao em true ou false
 const maiorQue = 1 > 2 // false
const igualA = 1 == 1 // true

4 condicional (if/else)
const idade = 17
const maiorDeDezoito = idade >= 18   sinal >= so digitar  o sinal e em seguida = 

if(maiorDeDezioto) {
  alert("pode tirar carteira de motorista")
} else {
  alert("não pode tirar")
}

5 estrutura de dados
array - vetor - lista
array -----           0      1   2  3 
const temperatura = [23.3, 32.2, 1, 5]

object
const pessoa = {
nome: "Bruno"
idade: 20,
filhos: ["k", "E", "J", "L", "G" ]
}
console.log (pessoa.filhos[2])

6 function
1 criacao
function nomedafuncao() {
  console.log ('codigo dentro da funcao')
}

2 execucao
nomeDaFuncao()


parametros
function soma (a, b) {
  console.log (a + b)
}
soma (34,45)
soma(90,54)

retorno
function soma (a, b) {
  return a + b
}

const multiplica = soma (2, 2) * 4
console.log(multiplica)

console.log(soma(2, 2))


7 extensoes da linguagem (ex: math, date ....)

math.random() gera um numero aleatorio entre 0 e 1
math.floor(1.2) arredonda o numero pra baixo
math.ceil(1.2) arredonda o numero para cima
math.pi mostra o numero do pí

8 DOM document object model

window
window.alert("alerta")
document
document.write("texto")
manipular elementos
document.documentElement.style.background = "black"

