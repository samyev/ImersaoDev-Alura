var movies = []

function buildMovie(nomeFilme, anoLanc, imagem, anoCron, linkPag, linkTrailer) {
  var movie = {
    nome: nomeFilme,
    anoLancamento: anoLanc,
    linkImagem: imagem,
    anoCronologico: anoCron,
    linkPagina: linkPag,
    linkTrailer: linkTrailer
  }

  return movie;
}

movies.push(buildMovie("Kimetsu no Yaiba",
                       2019,
                       "https://animeshouse.net/wp-content/uploads/2021/03/Screenshot_1318-250x350.jpg",
                       //"https://uploads.jovemnerd.com.br/wp-content/uploads/2020/10/maratona-harry-potter.jpg",
                       2021,
                       "https://animeshouse.net/anime/kimetsu-no-yaiba/",
                       ""))

movies.push(buildMovie("Monogatari Series",
                       2018,
                       "https://animeshouse.net/wp-content/uploads/2021/02/1AaY4G3sPKZVRWzVj1U9BXKgzqT-250x350.jpg",
                       2017,
                       "https://animeshouse.net/anime/monogatari-series-completo/",
                       ""))

movies.push(buildMovie("Mushoku Tensei: Isekai Ittara Honki Dasu",
                       2008,
                       "https://animeshouse.net/wp-content/uploads/2021/01/103585l-250x350.jpg",
                       2011,
                       "https://animeshouse.net/anime/mushoku-tensei-isekai-ittara-honki-dasu/"))

movies.push(buildMovie("Horimiya",
                       2008,
                       "https://animeshouse.net/wp-content/uploads/2021/01/110336l-250x350.jpg",
                       2010,
                       "https://animeshouse.net/anime/horimiya/"))

movies.push(buildMovie("Tatoeba Last Dungeon Mae no Mura no Shounen",
                       2010,
                       "https://animeshouse.net/wp-content/uploads/2021/01/Pic_147-250x350.jpg",
                       2011,
                       "https://animeshouse.net/anime/tatoeba-last-dungeon-mae-no-mura-no-shounen-ga-joban-no-machi-de-kurasu-youna-monogatari/",
                       ""))

movies.push(buildMovie("Jujutsu Kaisen",
                       2013,
                       "https://animeshouse.net/wp-content/uploads/2020/09/9MSNijZyyUGoRv01aUKkEYxccWB-250x350.jpg",
                       2012,
                       "https://animeshouse.net/anime/jujutsu-kaisen/",
                       ""))

movies.push(buildMovie("Dr. Stone",
                       2011,
                       "https://animeshouse.net/wp-content/uploads/2019/07/Pic_188-250x350.jpg",
                       2011,
                       "https://animeshouse.net/anime/dr-stone/",
                       ""))

movies.push(buildMovie("Kimi to Boku no Saigo no Senjou",
                       2013,
                       "https://animeshouse.net/wp-content/uploads/2020/10/wCL3MkW9QNnBKpeFC9O3i0mpiIb-250x350.jpg",
                       2013,
                       "https://animeshouse.net/anime/kimi-to-boku-no-saigo-no-senjou/",
                       ""))

movies.push(buildMovie("Majo no Tabitabi",
                       2017,
                       "https://animeshouse.net/wp-content/uploads/2020/10/4DlztdILPzMn4gOWCX4WdWa1Ur8-250x350.jpg",
                       2017,
                       "https://animeshouse.net/anime/majo-no-tabitabi/",
                       ""))

movies.push(buildMovie("Wotaku ni Koi wa Muzukashii",
                       2011,
                       "https://animeshouse.net/wp-content/uploads/2018/04/93518l-250x350.jpg",
                       1943,
                       "https://animeshouse.net/anime/wotaku-ni-koi-wa-muzukashii/",
                       ""))

movies.push(buildMovie("Gotoubun no Hanayome",
                       2014,
                       "https://animeshouse.net/wp-content/uploads/2019/04/gWd8yTF-250x350.jpg",
                       2014,
                       "https://animeshouse.net/anime/bokutachi-wa-benkyou-ga-dekinai/",
                       ""))

movies.push(buildMovie("Bungou Stray Dogs",
                       2016,
                       "https://animeshouse.net/wp-content/uploads/2016/04/100463l-250x350.jpg",
                       2016,
                       "https://animeshouse.net/anime/bungou-stray-dogs/",
                       ""))

movies.push(buildMovie("One Piece",
                       2014,
                       "https://animeshouse.net/wp-content/uploads/1999/10/Wano.jpg",
                       2014,
                       "https://animeshouse.net/anime/one-piece/",
                       ""))

movies.push(buildMovie("Boku dake ga Inai Machi",
                       2017,
                       "https://animeshouse.net/wp-content/uploads/2016/01/76932l-250x350.jpg",
                       2014,
                       "https://animeshouse.net/anime/boku-dake-ga-inai-machi/",
                       ""))

movies.push(buildMovie("Boku no Hero Academia: Ikinokore! Kesshi no Survival Kunren",
                       2016,
                       "https://animeshouse.net/wp-content/uploads/2020/08/108741l-250x350.jpg",
                       2016,
                       "https://animeshouse.net/anime/boku-no-hero-academia-ikinokore-kesshi-no-survival-kunren/",
                       ""))

movies.push(buildMovie("Cardcaptor Sakura: Clear Card-hen",
                       2018,
                       "https://animeshouse.net/wp-content/uploads/2018/01/90338l-250x350.jpg",
                       2017,
                       "https://animeshouse.net/anime/cardcaptor-sakura-clear-card-hen/",
                       ""))

// movies.push(buildMovie("Captain Marvel",
//                        2019,
//                        "https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_UX182_CR0,0,182,268_AL_.jpg",
//                        1995,
//                        "https://www.imdb.com/title/tt4154664?ref_=nv_sr_srsg_0",
//                        ""))

// movies.push(buildMovie("Spider-Man: Homecoming",
//                        2017,
//                        "https://m.media-amazon.com/images/M/MV5BNTk4ODQ1MzgzNl5BMl5BanBnXkFtZTgwMTMyMzM4MTI@._V1_UX182_CR0,0,182,268_AL_.jpg",
//                        2016,
//                        "https://www.imdb.com/title/tt2250912?ref_=nv_sr_srsg_0",
//                        ""))

// movies.push(buildMovie("Spider-Man: Far from Home",
//                        2019.2,
//                        "https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg",
//                        2024,
//                        "https://www.imdb.com/title/tt6320628?ref_=nv_sr_srsg_0",
//                        ""))

// movies.push(buildMovie("The Avengers",
//                        2012,
//                        "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg",
//                        2012,
//                        "https://www.imdb.com/title/tt0848228?ref_=nv_sr_srsg_0",
//                        ""))

// movies.push(buildMovie("Avengers: Age of Ultron",
//                        2015,
//                        "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_UX182_CR0,0,182,268_AL_.jpg",
//                        2015,
//                        "https://www.imdb.com/title/tt2395427?ref_=nv_sr_srsg_0",
//                        ""))

// movies.push(buildMovie("Avengers: Infinity War",
//                        2018,
//                        "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_UX182_CR0,0,182,268_AL_.jpg",
//                        2017,
//                        "https://www.imdb.com/title/tt4154756?ref_=nv_sr_srsg_0",
//                        ""))

// movies.push(buildMovie("Avengers: End Game",
//                        2019.1,
//                        "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_UX182_CR0,0,182,268_AL_.jpg",
//                        2018,
//                        "https://www.imdb.com/title/tt4154796?ref_=nv_sr_srsg_0",
//                        ""))

// movies.push(buildMovie("Spider-Man: No Way Home",
//                        2021,
//                        "https://m.media-amazon.com/images/M/MV5BNTMxOGI4OGMtMTgwMy00NmFjLWIyOTUtYjQ0OGQ4Mjk0YjNjXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg",
//                        2024,
//                        "https://www.imdb.com/title/tt10872600/?ref_=nv_sr_srsg_0",
//                        ""))




ordenar()
imprime()

function ordenar() {
  var ordem = document.getElementById("ordenarFilmes").value

  if (ordem == "anoCronologico") {
    arraySort(movies, "anoLancamento")
  }

  arraySort(movies, ordem)
  imprime()
}

function arraySort(vet, x) {
  vet.sort(function compare(a, b) {
    return a[x] < b[x] ? -1 : a[x] > b[x] ? 1 : 0
  })

  return vet
}

function imprime() {
  var ordem = document.getElementById("ordenarFilmes").value
  var filtro = ordem == "anoCronologico" ? "Cronologia: " : "Lançamento: "
  var div = document.querySelector('.container-total') //Mapeia o HTML em busca de um elemento com a classe '.container-total'
  div.innerHTML = ""

  for (movie of movies) {
    // Criação dos elementos
    var tagA = document.createElement('a')
    var tagDivFilme = document.createElement('div')
    var tagH2 = document.createElement('h2')
    var tagImage = document.createElement('img')

    // Anexando os elementos filhos aos elementos pais
    tagA.appendChild(tagDivFilme)
    tagDivFilme.appendChild(tagH2)
    tagDivFilme.appendChild(tagImage)
    div.appendChild(tagA)

    tagA.href = movie.linkPagina
    tagA.target = "_blank"

    tagDivFilme.classList.add('container-movies') //Adiciono uma classe ao elemento

    tagH2.innerHTML = movie.nome + "<br>" + filtro + 
      parseInt(ordem == "anoCronologico" ? movie.anoCronologico : movie.anoLancamento)

    tagImage.src = movie.linkImagem
    tagImage.alt = movie.nome
  }
}

function habilitaContainerCadastro() {
  document.querySelector('.container-cadastro').classList.add('ativo')
}

function desabilitaContainerCadastro() {
  document.querySelector('.container-cadastro').classList.remove('ativo')
  limparCamposCadastro()
}

function salvarFilme() {
  var nomeFilme = document.querySelector('#nomeFilme').value
  var anoLancamento = document.querySelector('#anoLancamentoFilme').value
  var imagem = document.querySelector('#linkImagemFilme').value
  var anoCronologico = document.querySelector('#anoCronologiaFilme').value
  var linkPagina = document.querySelector('#linkImdbFilme').value
  var linkTrailer = document.querySelector('#linkTrailerFilme').value

  var validacao = validaDadosCadastro(nomeFilme, anoLancamento, imagem, anoCronologico, linkPagina, linkTrailer)

  if (validacao.status) {
    movies.push(buildMovie(nomeFilme, anoLancamento, imagem, anoCronologico, linkPagina))
    // tocarSom()
    desabilitaContainerCadastro()
    ordenar()
    imprime()
  } else {
    imprimeErro(validacao.mensagem)
  }
}

function limparCamposCadastro() {
  document.querySelector('#nomeFilme').value = ""
  document.querySelector('#anoLancamentoFilme').value = ""
  document.querySelector('#linkImagemFilme').value = ""
  document.querySelector('#anoCronologiaFilme').value = ""
  document.querySelector('#linkImdbFilme').value = ""
  document.querySelector('#linkTrailerFilme').value = ""
}

function validaDadosCadastro(nome, anoLancamento, enderecoImagem, anoCronologico, enderecoResumo, enderecoTrailer) {
  var validacao = {
    status: true,
    mensagem: ""
  }

  if (nome == "") {
    validacao.status = false
    validacao.mensagem = "Informe o nome do filme"
    return validacao
  }
  if (isNaN(parseFloat(anoLancamento))) {
    validacao.status = false
    validacao.mensagem = "Ano de lançamento inválido"
    return validacao
  }
  if (isNaN(parseFloat(anoCronologico))) {
    validacao.status = false
    validacao.mensagem = "Ano cronológico inválido"
    return validacao
  }
  if (!isValidHttpUrl(enderecoTrailer)) {
    validacao.status = false
    validacao.mensagem = "Endereço do trailer inválido"
    return validacao
  }
  if (!isValidHttpUrl(enderecoImagem)) {
    validacao.status = false
    validacao.mensagem = "Endereço da imagem inválido"
    return validacao
  }
  if (!(enderecoImagem.endsWith(".jpg") ||
        enderecoImagem.endsWith(".png") ||
        enderecoImagem.endsWith(".jfif"))) {

    validacao.status = false
    validacao.mensagem = "Imagem com formato inválido"
    return validacao
  }
  if (!isValidHttpUrl(enderecoResumo)) {
    validacao.status = false
    validacao.mensagem = "Endereço resumo inválido"
    return validacao
  }

  return validacao
}

function isValidHttpUrl(endereco) {
  let url

  try {
    url = new URL(endereco)
  } catch (_) {
    return false
  }

  return url.protocol === "http:" || url.protocol === "https:"
}

// function tocarSom() {
//   // var audio = new Audio("https://protettordelinks.com/wp-content/baixar/mario_moeda_efeito_sonoro_toquesengracadosmp3.com.mp3")
//   // var audio = new Audio("https://www.myinstants.com/media/sounds/avengers_assemble_l.mp3")
//   audio.play()
// }

function imprimeErro(mensagem) {
  var tagBody = document.querySelector('body')

  // Criação dos elementos
  var tagDiv = document.createElement('div')
  var tagSpan = document.createElement('span')

  // Anexando os elementos filhos aos elementos pais
  tagDiv.appendChild(tagSpan)
  tagBody.appendChild(tagDiv)

  tagDiv.setAttribute('id', 'modalErro') //id = atributo, modal = o valor do atributo

  tagSpan.innerHTML = mensagem
  tagSpan.classList.add('animate__animated')
  tagSpan.classList.add('animate__tada')
  //tagDiv.addEventListener('click', fechaModalErro)

  setTimeout(() => {
    tagDiv.remove()
  }, 2750)
}