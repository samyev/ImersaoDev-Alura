var cartaJogador1 = {
  nome: "Rimuru Tenpesuto",
  atributos: {
    ataque: 500.000,
    defesa: 500.000,
    magia: 600.000
  }
}
  
var cartaJogador2 = {
  nome: "Benimaru",
  atributos: {
    ataque: 300.000,
    defesa: 200.000,
    magia: 400.000
  }
}

var cartaJogador3 = {
  nome: "Lorde Demônio Milin",
  atributos: {
    ataque: 600.000,
    defesa: 500.000,
    magia: 800.000
  }
}

var cartaMaquina
var cartaJogador

var cartas = [cartaJogador1, cartaJogador2, cartaJogador3]

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 3)
  cartaMaquina = cartas[numeroCartaMaquina]
  
  var numeroCartaJogador = parseInt(Math.random() * 3)
  while (numeroCartaJogador == numeroCartaMaquina) {
    numeroCartaJogador = parseInt(Math.random() * 3)
  }
  cartaJogador = cartas[numeroCartaJogador]
  console.log(cartaJogador)
  
  document.getElementById('btnSortear').disabled = true
  document.getElementById('btnJogar').disabled = false
  exibirOpcoes()
}

function exibirOpcoes() {
  var opcoes = document.getElementById('opcoes')
  var opcoesTexto = ""
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo
  }
  opcoes.innerHTML = opcoesTexto
}

function obtemAtributo() {
  var radioAtributo = document.getElementsByName('atributo')
  for (var i = 0; i < radioAtributo.length; i++) {
    if (radioAtributo[i].checked) {
      return radioAtributo[i].value
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributo()
  
  if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) { 
    alert('Venceu a carta máquina')
  } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
    alert('Perdeu')
  } else {
    alert ("Empatou")
  }
  console.log(cartaMaquina)
}
  
  