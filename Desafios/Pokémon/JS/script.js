const pokemon = 'Espeon, eevee';
const botao = document.querySelector("button");
const section = document.querySelector("section");

function verificaPokemon() {
  const h3 = document.querySelector("h3");
  const chute = document.querySelector("input").value;

  section.classList.add('active');
  if (pokemon == chute) {
    h3.textContent = "Você acertou!!";
    h3.classList.remove("error")
  } else {
    h3.classList.add("error")
    h3.textContent = "Você errou!!";
  }
}

function fechaModal() {
  section.classList.remove('active');
}

function clicaForaFechaModal(event) {
  console.log(event.target);

  if (event.target.tagName == "SECTION") {
    section.classList.remove("active");
  }
}

botao.onclick = verificaPokemon;

section.querySelector("button").onclick = fechaModal;
section.onclick = clicaForaFechaModal;
