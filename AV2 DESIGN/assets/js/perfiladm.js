const catalogo = document.getElementById("inicio1")
const body = document.getElementById("body")
const paginas = document.getElementById("link")
const menu = document.getElementById("mobile")
// Seleciona os ícones de sol e lua
const sunIcon = document.querySelector('#menu-responsivo .icon-sun'); // Ajuste o seletor conforme necessário
const moonIcon = document.querySelector('#menu-responsivo .icon-moon');

// Seleciona o botão do

function toggleDarkMode() {
  const body = document.body;
  const icon = document.getElementById("modo");

  // Alterna o modo noturno
  body.classList.toggle('dark-mode');

  // Verifica o estado atual e altera o ícone
  if (body.classList.contains('dark-mode')) {
    icon.textContent = "light_mode"; // Ícone de sol
  } else {
    icon.textContent = "bedtime"; // Ícone de lua
  }
}



function responsividade() {
  let menuMobile = document.querySelector(".mobile-menu");
  if (menuMobile.classList.contains('open')) {
    menuMobile.classList.remove('open');
  } else {
    menuMobile.classList.add('open')
  }
}
let currentFontSize = 16; // Tamanho base da fonte em pixels

function alterarFonte(delta) {
  // Seleciona todos os elementos que devem ser afetados
  const elementos = document.querySelectorAll("body, body *");

  // Atualiza o tamanho da fonte
  currentFontSize += delta;

  // Aplica o novo tamanho em todos os elementos
  elementos.forEach(element => {
    const computedStyle = window.getComputedStyle(element);
    const fontSize = parseFloat(computedStyle.fontSize);
    if (fontSize) {
      element.style.fontSize = (fontSize + delta) + "px";
    }
  });
}

function aumentarLetra() {
  alterarFonte(2); // Aumenta 2px
}

function diminuirLetra() {
  alterarFonte(-2); // Diminui 2px
}

