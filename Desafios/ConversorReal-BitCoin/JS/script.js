var valorEmReal = prompt("Qual valor em bitcoin que você deseja converter?");

valorEmReal = parseFloat(valorEmReal);

var valorEmBitCoin = valorEmReal * 0.0000033;
var valorBitCoinFixado = valorEmBitCoin.toFixed(7);

alert("A Conversão do valor " +valorEmReal+ " em bitcoin é: " +valorBitCoinFixado);
