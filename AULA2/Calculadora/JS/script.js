var primeiroValor = parseInt(prompt("Insira o primeiro valor: "))
var segundoValor = parseInt(prompt("Digite o segundo valor: "))

var operacao = prompt("Escolha a operação desejada: digite 1 para Somar | digite 2 para Subtrair | digite 3 para Mutiplicar | digite 4 para dividir")

if (operacao == 1) {
  var resultado = primeiroValor + segundoValor
  document.write("<h2>" +primeiroValor+ " + " +segundoValor+ " = " +resultado+ "</h2>")
} else if (operacao == 2) {
  var resultado = primeiroValor - segundoValor
  document.write("<h2>" +primeiroValor+ " - " +segundoValor+ " = " +resultado+ "</h2>")
} else if (operacao == 3) {
  var resultado = primeiroValor * segundoValor
  document.write("<h2>" +primeiroValor+ " * " +segundoValor+ " = " +resultado+ "</h2>")
} else if (operacao == 4) {
  var resultado = primeiroValor / segundoValor
  document.write("<h2>" +primeiroValor+ " / " +segundoValor+ " = " +resultado+ "</h2>")
} else {
  document.write("<h2>Opção Inválida!</h2>")
}
