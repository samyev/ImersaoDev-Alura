var numeroSecreto = parseInt(Math.random() * 10)
var tentativas = 3

while (tentativas > 0) {
  var chute = parseInt(prompt("Digite um número entre 0 e 10"))
  
  if(parseInt(numeroSecreto) == chute) {
    console.log("Acertou!!")
    break
  } else if (chute > numeroSecreto) {
    console.log("O número secreto é menor!!")
    tentativas = tentativas - 1
  } else if (chute < numeroSecreto) {
    console.log("O número secreto é maior!!")
    tentativas = tentativas - 1
  } 
}
 
if (chute != numeroSecreto) {
  console.log("Você não acertou, o número secreto era: " +numeroSecreto)
}
