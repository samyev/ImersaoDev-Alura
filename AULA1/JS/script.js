var valorEmDolar = prompt("Qual valor em dolar que você deseja converter?");
valorEmDolar = parseFloat(valorEmDolar);

var valorEmReal = valorEmDolar * 5.51;
var valorRealFixado = valorEmReal.toFixed(2);

alert("A Conversão do valor " +valorEmDolar+ " em real é: " +valorRealFixado);