var cartaJogador1 = {
  nome: "Rimuru Tenpesuto - Rank A/B",
  imagem: "https://static.wikia.nocookie.net/tensei-shitara-slime-datta-ken/images/3/34/Rimuru_Slime_Anime.png/revision/latest?cb=20180922214304",
  atributos: {
      ataque: 200000,
      defesa: 150000,
      magia: 200000
  }
}

var cartaJogador2 = {
  nome: "Rimuru Tenpesuto - Rank A",
  imagem: "http://pm1.narvii.com/7001/2b707b1872d34857126e16703962c9bfe2ffd25dr1-640-451v2_00.jpg",
  atributos: {
      ataque: 560000,
      defesa: 400000,
      magia: 600000
  }
}

var cartaJogador3 = {
  nome: "Rimuru Tenpesuto - Rank S",
  imagem: "https://vignette.wikia.nocookie.net/vsbattles/images/9/96/TSSDK_Anime_Rimuru2.png/revision/latest?cb=20190603233625",
  atributos: {
      ataque: 2200000,
      defesa: 1500000,
      magia: 2000000
  }
}

var cartaJogador4 = {
  nome: "Rimuru Tenpesuto - Rank SS",
  imagem: "https://vignette.wikia.nocookie.net/vsbattles/images/9/96/TSSDK_Anime_Rimuru2.png/revision/latest?cb=20190603233625",
  atributos: {
      ataque: 5500000,
      defesa: 5000000,
      magia: 5000000
  }
}

var cartaJogador5 = {
  nome: "Benimaru - rank SS",
  imagem: "https://static.wikia.nocookie.net/tensura/images/b/bd/Benimaru_Anime.png/revision/latest/scale-to-width-down/272?cb=20181210142049&path-prefix=pt-br",
  atributos: {
      ataque: 5500000,
      defesa: 5200000,
      magia: 5000000
  }
}

var cartaJogador6 = {
  nome: "Shion - rank SS",
  imagem: "https://static.wikia.nocookie.net/tensura/images/b/b7/Shion_Anime.png/revision/latest/scale-to-width-down/272?cb=20181217203332&path-prefix=pt-br",
  atributos: {
      ataque: 4000000,
      defesa: 4500000,
      magia: 0
  }
}

var cartaJogador7 = {
  nome: "Ranga - Rank S",
  imagem: "https://static.wikia.nocookie.net/tensura/images/e/ef/Ranga_Anime.png/revision/latest/scale-to-width-down/272?cb=20190109211221&path-prefix=pt-br",
  atributos: {
      ataque: 2500000,
      defesa: 1800000,
      magia: 2000000
  }
}

var ccartaJogador8 = {
  nome: "Capitã Marvel",
  imagem: "https://cinepop.com.br/wp-content/uploads/2018/09/capitamarvel21.jpg",
  atributos: {
      ataque: 90,
      defesa: 80,
      magia: 0
  }
}

var cartaMaquina;
var cartaJogador;
var cartas = [cartaJogador1, cartaJogador2, cartaJogador3, cartaJogador4, cartaJogador5, cartaJogador6, cartaJogador7, ccartaJogador8];
//            0           1           2          3         4            5            6           7     

var pontosJogador = 0;
var pontosMaquina = 0;

atualizaPlacar();
atualizaQuantidadeCartas()

function atualizaQuantidadeCartas() {
  var divQuantidadeCartas = document.getElementById('quantidade-cartas');
  var html = "Quantidade de cartas no jogo: " + cartas.length;

  divQuantidadeCartas.innerHTML = html;
}

function atualizaPlacar() {
  var divPlacar = document.getElementById("placar");
  var html = "Jogador " + pontosJogador + "/" + pontosMaquina + " Máquina"

  divPlacar.innerHTML = html;
}

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * cartas.length)
  cartaMaquina = cartas[numeroCartaMaquina]
  cartas.splice(numeroCartaMaquina, 1);

  var numeroCartaJogador = parseInt(Math.random() * cartas.length);
  cartaJogador = cartas[numeroCartaJogador];
  console.log(cartaJogador);
  cartas.splice(numeroCartaJogador, 1);

  document.getElementById('btnSortear').disabled = true
  document.getElementById('btnJogar').disabled = false

  exibeCartaJogador()
}


function exibeCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador")
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
  var opcoesTexto = ""

  for (var atributo in cartaJogador.atributos) {
      opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
  }

  var html = "<div id='opcoes' class='carta-status'>"

  divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function obtemAtributoSelecionado() {
  var radioAtributo = document.getElementsByName('atributo')
  for (var i = 0; i < radioAtributo.length; i++) {
      if (radioAtributo[i].checked) {
          return radioAtributo[i].value
      }
  }
}

function jogar() {
  var divResultado = document.getElementById("resultado")
  var atributoSelecionado = obtemAtributoSelecionado()

  if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
      htmlResultado = '<p class="resultado-final">Venceu</p>';
      pontosJogador++;
  } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
      htmlResultado = '<p class="resultado-final">Perdeu</p>'
      pontosMaquina++;
  } else {
      htmlResultado = '<p class="resultado-final">Empatou</p>';
  }

  if(cartas.length == 0) {
    alert("Fim de jogo!");
    if (pontosJogador > pontosMaquina) {
      htmlResultado = "<p class='resultado-final'>Venceu!</p>";
    } else if(pontosMaquina > pontosJogador) {
      htmlResultado = "<p class='resultado-final'>Perdeu!</p>";
    } else {
      htmlResultado = "<p class='resultado-final'>Empatou!</p>";
    }
  } else {
    document.getElementById('btnProximaRodada').disabled = false;
  }

  divResultado.innerHTML = htmlResultado;
  document.getElementById('btnJogar').disabled = true;

  atualizaPlacar();
  exibeCartaMaquina();
  atualizaQuantidadeCartas();
}

function exibeCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina")
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
  var opcoesTexto = ""

  for (var atributo in cartaMaquina.atributos) {
      console.log(atributo)
      opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
  }

  var html = "<div id='opcoes' class='carta-status --spacing'>"

  divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function proximaRodada() {
  var divCartas = document.getElementById('cartas');

  divCartas.innerHTML = `<div id="carta-jogador" class-"carta"></div> <div id="carta-maquina" class="carta"></div>`;
  document.getElementById('btnSortear').disabled = false;
  document.getElementById('btnJogar').disabled = true;
  document.getElementById('btnProximaRodada').disabled = true;

  var divResultado = document.getElementById('resultado')
  divResultado.innerHTML = "";
}