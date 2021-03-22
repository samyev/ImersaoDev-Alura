var valorEmReal = prompt("Qual valor em bitcoin que você deseja converter?");
valorEmReal = parseFloat(valorEmReal);

var valorEmBitCoin = valorEmReal * 300520.69;
var valorBitCoinFixado = valorEmBitCoin.toFixed(2);

alert("A Conversão do valor " +valorEmReal+ " em real é: " +valorBitCoinFixado);
