var valorEmAnoLuz = prompt("Qual valor em ano luz que você deseja converter?");
valorEmAnoLuz = parseFloat(valorEmAnoLuz);

var valorEmKm = valorEmAnoLuz / 0.00000000000010570;
var valorKmFixado = valorEmKm.toFixed(17);

alert("A Conversão do valor " +valorEmAnoLuz+ " em KM é: " +valorKmFixado+ "km");