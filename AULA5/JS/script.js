function adicionarFilme() {
  var campoFilmeFavorito = document.querySelector('#filme');
  var filmeFavorito = campoFilmeFavorito.value;
  if (filmeFavorito.endsWith('.jpg')) {
    listarFilmesNaTela(filmeFavorito);
  } else if (filmeFavorito.endsWith('.png')) {
    listarFilmesNaTela(filmeFavorito);
  } else {
    alert("Imagem Inválida!!")
  }
  campoFilmeFavorito.value = "";
}

function listarFilmesNaTela(filme) {
  var listaFilmes = document.querySelector('#listaFilmes');
  var elementoFilme = "<img src=" +filme+ ">";
  console.log(elementoFilme);
  listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme;
}