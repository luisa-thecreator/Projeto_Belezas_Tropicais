const catalogo = document.getElementById("catalogo")
const body = document.getElementById("fundo")
const paginas = document.getElementById("link")

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

function resposta() {
  document.getElementById('text3').style.backgroundColor = "#c4840f"
  document.getElementById("text3").innerText = "Adicionado ao carrinho"
}


function resposta2() {
  document.getElementById('text6').style.backgroundColor = "#c4840f"
  document.getElementById("text6").innerText = "Adicionado ao carrinho"
}


function resposta3() {
  document.getElementById('text9').style.backgroundColor = "#c4840f"
  document.getElementById("text9").innerText = "Adicionado ao carrinho"
}

function resposta4() {
  document.getElementById('text12').style.backgroundColor = "#c4840f"
  document.getElementById("text12").innerText = "Adicionado ao carrinho"
}


function resposta5() {
  document.getElementById('text16').style.backgroundColor = "#c4840f"
  document.getElementById("text16").innerText = "Adicionado ao carrinho"
}


function resposta6() {
  document.getElementById('text18').style.backgroundColor = "#c4840f"
  document.getElementById("text18").innerText = "Adicionado ao carrinho"
}


function resposta7() {
  document.getElementById('text21').style.backgroundColor = "#c4840f"
  document.getElementById("text21").innerText = "Adicionado ao carrinho"
}


function resposta8() {
  document.getElementById('text24').style.backgroundColor = "#c4840f"
  document.getElementById("text24").innerText = "Adicionado ao carrinho"
}


function resposta9() {
  document.getElementById('text28').style.backgroundColor = "#c4840f"
  document.getElementById("text28").innerText = "Adicionado ao carrinho"
}
function resposta10() {
  document.getElementById('text31').style.backgroundColor = "#c4840f"
  document.getElementById("text31").innerText = "Adicionado ao carrinho"
}


function resposta11() {
  document.getElementById('text34').style.backgroundColor = "#c4840f"
  document.getElementById("text34").innerText = "Adicionado ao carrinho"
}


function resposta12() {
  document.getElementById('text37').style.backgroundColor = "#c4840f"
  document.getElementById("text37").innerText = "Adicionado ao carrinho"
}


function resposta13() {
  document.getElementById('text41').style.backgroundColor = "#c4840f"
  document.getElementById("text41").innerText = "Adicionado ao carrinho"
}

function resposta14() {
  document.getElementById('text44').style.backgroundColor = "#c4840f"
  document.getElementById("text44").innerText = "Adicionado ao carrinho"
}


function resposta15() {
  document.getElementById('text47').style.backgroundColor = "#c4840f"
  document.getElementById("text47").innerText = "Adicionado ao carrinho"
}
function resposta16() {
  document.getElementById('text50').style.backgroundColor = "#c4840f"
  document.getElementById("text50").innerText = "Adicionado ao carrinho"
}

const translations = {

  pt: {
    catalogo1: "CATALOGO",
    catalogo: "Catálogo",
    arranjos: "Arranjos",
    NovasFlores: "Novas Flores",
    oferta: "Oferta",
    text1: "Arranjo de heliconias simples",
    text2: "R$ 180,00",
    text3: "Adicionar ao carrinho",
    text4: "Arranjo de heliconias amarelas",
    text5: "R$ 180,00",
    text6: "Adicionar ao carrinho",
    text7: "Arranjo de heliconias eventos",
    text8: "R$ 360,00",
    text9: "Adicionar ao carrinho",
    text10: "Arranjo de heliconias decoração",
    text11: "R$ 360,00",
    text12: "Adicionar ao carrinho",
    text13: "Alpinia",
    text14: "Vaso alpinia eventos",
    text15: "R$ 360,00",
    text16: "Adicionar ao carrinho",
    text52: "Arranjo alpinia lilás",
    text17: "R$ 200,00",
    text18: "Adicionado ao carrinho",
    text19: "Arranjo de alpinia simples",
    text20: "R$ 200,00",
    text21: "Adicionar ao carrinho",
    text22: "Arranjo de heliconias simples",
    text23: "R$ 360,00",
    text24: "Adicionar ao carrinho",
    text25: "10% OFF",
    text26: "Arranjo de heliconias simples",
    text27: "R$ 180,00",
    text28: "Adicionar ao carrinho",
    text29: "Vaso de antunias simples",
    text30: "R$180,00",
    text31: "Adicionar ao carrinho",
    text32: "Arranjo de anturias eventos",
    text33: "R$ 324,00",
    text34: "Adicionar ao carrinho",
    text35: "Arranjo de flores tropicais completo",
    text36: "R$ 324,00",
    text37: "Adicionar ao carrinho",
    text38: "ARRANJOS DE FLORES",
    text39: "Arranjo de flores tropicais completo",
    text40: "R$ 360,00",
    text41: "Adicionar ao carrinho",
    text42: "Arranjo de heliconias simples",
    text43: "R$ 360,00",
    text44: "Adicionar ao carrinho",
    text45: "Arranjos heliconias e alpinias",
    text46: "R$ 360,00",
    text47: "Adicionar ao carrinho",
    text48: "Arranjos heliconias alpinias e anturias",
    text49: "R$ 360,00",
    text50: "Adicionar ao carrinho",
  },


  en: {
    catalogo1: "CATALOG",
    catalogo: "Catalog",
    arranjos: "Arrangements",
    NovasFlores: "New Flowers",
    oferta: "Offer",
    text1: "Simple heliconia arrangement",
    text2: "R$ 180.00",
    text3: "Add to cart",
    text4: "Yellow heliconia arrangement",
    text5: "R$ 180.00",
    text6: "Add to cart",
    text7: "Heliconia event arrangement",
    text8: "R$ 360.00",
    text9: "Add to cart",
    text10: "Heliconia decoration arrangement",
    text11: "R$ 360.00",
    text12: "Add to cart",
    text13: "Alpinia",
    text14: "Alpinia vase for events",
    text15: "R$ 360.00",
    text16: "Add to cart",
    text52: "Lilac alpinia arrangement",
    text17: "R$ 200.00",
    text18: "Added to cart",
    text19: "Simple alpinia arrangement",
    text20: "R$ 200.00",
    text21: "Add to cart",
    text22: "Simple heliconia arrangement",
    text23: "R$ 360.00",
    text24: "Add to cart",
    text25: "10% OFF",
    text26: "Simple heliconia arrangement",
    text27: "R$ 180.00",
    text28: "Add to cart",
    text29: "Simple anthurium vase",
    text30: "R$ 180.00",
    text31: "Add to cart",
    text32: "Anthurium event arrangement",
    text33: "R$ 324.00",
    text34: "Add to cart",
    text35: "Complete tropical flower arrangement",
    text36: "R$ 324.00",
    text37: "Add to cart",
    text38: "FLOWER ARRANGEMENTS",
    text39: "Complete tropical flower arrangement",
    text40: "R$ 360.00",
    text41: "Add to cart",
    text42: "Simple heliconia arrangement",
    text43: "R$ 360.00",
    text44: "Add to cart",
    text45: "Heliconia and alpinia arrangements",
    text46: "R$ 360.00",
    text47: "Add to cart",
    text48: "Heliconia, alpinia, and anthurium arrangements",
    text49: "R$ 360.00",
    text50: "Add to cart",
  },


  es: {
    catalogo1:"CATALOGAR",
    catalogo: "Catalogar",
    arranjos: "Preparativos",
    NovasFlores: "Nuevas flores",
    oferta: "Oferta",
    text1: "Arreglo de heliconias simples",
    text2: "R$ 180,00",
    text3: "Agregar al carrito",
    text4: "Arreglo de heliconias amarillas",
    text5: "R$ 180,00",
    text6: "Agregar al carrito",
    text7: "Arreglo de heliconias para eventos",
    text8: "R$ 360,00",
    text9: "Agregar al carrito",
    text10: "Arreglo de heliconias para decoración",
    text11: "R$ 360,00",
    text12: "Agregar al carrito",
    text13: "Alpinia",
    text14: "Jarrón de alpinia para eventos",
    text15: "R$ 360,00",
    text16: "Agregar al carrito",
    text52: "Arreglo de alpinia lila",
    text17: "R$ 200,00",
    text18: "Agregado al carrito",
    text19: "Arreglo de alpinia simple",
    text20: "R$ 200,00",
    text21: "Agregar al carrito",
    text22: "Arreglo de heliconias simples",
    text23: "R$ 360,00",
    text24: "Agregar al carrito",
    text25: "10% DE DESCUENTO",
    text26: "Arreglo de heliconias simples",
    text27: "R$ 180,00",
    text28: "Agregar al carrito",
    text29: "Jarrón de anturios simples",
    text30: "R$ 180,00",
    text31: "Agregar al carrito",
    text32: "Arreglo de anturios para eventos",
    text33: "R$ 324,00",
    text34: "Agregar al carrito",
    text35: "Arreglo completo de flores tropicales",
    text36: "R$ 324,00",
    text37: "Agregar al carrito",
    text38: "ARREGLOS FLORALES",
    text39: "Arreglo completo de flores tropicales",
    text40: "R$ 360,00",
    text41: "Agregar al carrito",
    text42: "Arreglo de heliconias simples",
    text43: "R$ 360,00",
    text44: "Agregar al carrito",
    text45: "Arreglos de heliconias y alpinias",
    text46: "R$ 360,00",
    text47: "Agregar al carrito",
    text48: "Arreglos de heliconias, alpinias y anturios",
    text49: "R$ 360,00",
    text50: "Agregar al carrito",
  },
}

function changeLanguage(language) {

  // Atualiza os textos no menu principal
  document.getElementById("catalogo").textContent = translations[language].catalogo;
  document.getElementById("arranjos").textContent = translations[language].arranjos;
  document.getElementById("Novas-flores").textContent = translations[language].NovasFlores;
  document.getElementById("oferta").textContent = translations[language].oferta;
  document.getElementById("text1").textContent = translations[language].text1;
  document.getElementById("text2").textContent = translations[language].text2;
  document.getElementById("text3").textContent = translations[language].text3;
  document.getElementById("text4").textContent = translations[language].text4;
  document.getElementById("text5").textContent = translations[language].text5;
  document.getElementById("text6").textContent = translations[language].text6;
  document.getElementById("text7").textContent = translations[language].text7;
  document.getElementById("text8").textContent = translations[language].text8;
  document.getElementById("text9").textContent = translations[language].text9;
  document.getElementById("text10").textContent = translations[language].text10;
  document.getElementById("text11").textContent = translations[language].text11;
  document.getElementById("text12").textContent = translations[language].text12;
  document.getElementById("text13").textContent = translations[language].text13;
  document.getElementById("text14").textContent = translations[language].text14;
  document.getElementById("text15").textContent = translations[language].text15;
  document.getElementById("text16").textContent = translations[language].text16;
  document.getElementById("text17").textContent = translations[language].text17;
  document.getElementById("text18").textContent = translations[language].text18;
  document.getElementById("text19").textContent = translations[language].text19;
  document.getElementById("text20").textContent = translations[language].text20;
  document.getElementById("text21").textContent = translations[language].text21;
  document.getElementById("text22").textContent = translations[language].text22;
  document.getElementById("text23").textContent = translations[language].text23;
  document.getElementById("text24").textContent = translations[language].text24;
  document.getElementById("text25").textContent = translations[language].text25;
  document.getElementById("text26").textContent = translations[language].text26;
  document.getElementById("text27").textContent = translations[language].text27;
  document.getElementById("text28").textContent = translations[language].text28;
  document.getElementById("text29").textContent = translations[language].text29;
  document.getElementById("text30").textContent = translations[language].text30;
  document.getElementById("text31").textContent = translations[language].text31;
  document.getElementById("text32").textContent = translations[language].text32;
  document.getElementById("text33").textContent = translations[language].text33;
  document.getElementById("text34").textContent = translations[language].text34;
  document.getElementById("text35").textContent = translations[language].text35;
  document.getElementById("text36").textContent = translations[language].text36;
  document.getElementById("text37").textContent = translations[language].text37;
  document.getElementById("text38").textContent = translations[language].text38;
  document.getElementById("text39").textContent = translations[language].text39;
  document.getElementById("text40").textContent = translations[language].text40;
  document.getElementById("text41").textContent = translations[language].text41;
  document.getElementById("text42").textContent = translations[language].text42;
  document.getElementById("text43").textContent = translations[language].text43;
  document.getElementById("text44").textContent = translations[language].text44;
  document.getElementById("text45").textContent = translations[language].text45;
  document.getElementById("text46").textContent = translations[language].text46;
  document.getElementById("text47").textContent = translations[language].text47;
  document.getElementById("text48").textContent = translations[language].text48;
  document.getElementById("text49").textContent = translations[language].text49;
  document.getElementById("text50").textContent = translations[language].text50;
  document.getElementById("catalogo1").textContent = translations[language].catalogo1;
}




