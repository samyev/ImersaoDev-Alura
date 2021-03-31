var cartaJogador1 = {
  nome: "Rimuru Tenpesuto - Rank A",
  imagem: "https://i.pinimg.com/originals/2e/4d/91/2e4d915965a74bd2f18a41bec4a15bbf.jpg",
  atributos: {
    ataque: 500000,
    defesa: 500000,
    magia: 600000
  },
};

var cartaJogador1 = {
  nome: "Rimuru Tenpesuto - Rank A/B",
  imagem: "http://pm1.narvii.com/7001/2b707b1872d34857126e16703962c9bfe2ffd25dr1-640-451v2_00.jpg",
  atributos: {
    ataque: 200000,
    defesa: 150000,
    magia: 250000
  }
};

var cartaJogador1 = {
  nome: "Rimuru Tenpesuto - Rank SS",
  imagem: "https://www.kaorinusantara.or.id/wp-content/uploads/2019/03/2nd_teaser_Rimuru_toric_k-768x1086.jpg",
  atributos: {
    ataque: 200000,
    defesa: 150000,
    magia: 250000
  }
};
  
var cartaJogador2 = {
  nome: "Benimaru",
  imagem: "https://i.imgur.com/Qd7hYk6.jpg",
  atributos: {
    ataque: 300000,
    defesa: 200000,
    magia: 400000
  }
};

var cartaJogador3 = {
  nome: "Shion",
  imagem: "https://i.imgur.com/5KAooF3.jpg",
  atributos: {
    ataque: 225000,
    defesa: 150000,
    magia: 200000
  }
};

var cartaMaquina;
var cartaJogador;
var cartas = [cartaJogador1, cartaJogador2, cartaJogador3];
// 0          1           2

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 3);
    cartaMaquina = cartas[numeroCartaMaquina];

    var numeroCartaJogador = parseInt(Math.random() * 3);
    while (numeroCartaJogador == numeroCartaMaquina) {
        numeroCartaJogador = parseInt(Math.random() * 3);
    }
    cartaJogador = cartas[numeroCartaJogador];
    console.log(cartaJogador);

    document.getElementById('btnSortear').disabled = true;
    document.getElementById('btnJogar').disabled = false;
    
    exibeCartaJogador();
}

function exibeCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  
  divCartaJogador.style.backgroundImage=`url(${cartaJogador.imagem})`;
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;
  
  var opcoesTexto = "";
  for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>";
    }
  
  var html = "<div id='opcoes' class='carta-status'>";
  
  divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + '</div>';
}

function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo');
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value;
        }
    }
}

function jogar() {
    var divResultado = document.getElementById("resultado");
    var atributoSelecionado = obtemAtributoSelecionado();

    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class = "resultado-final">Venceu</p>'
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
      htmlResultado = '<p class = "resultado-final">Perdeu</p>'
    } else {
      htmlResultado = '<p class = "resultado-final">Empatou</p>'
    }

    divResultado.innerHTML = htmlResultado;
    exibeCartaMaquina()
}

function exibeCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  
  divCartaMaquina.style.backgroundImage=`url(${cartaMaquina.imagem})`;
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
  var opcoesTexto = "";
  
  for (var atributo in cartaMaquina.atributos) {
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>";
  }
  
  var html = "<div id='opcoes' class='carta-status'>";
  
  divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '</div>';
}