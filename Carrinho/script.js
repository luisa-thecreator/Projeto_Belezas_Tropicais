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



//tradutor//
const translations = {
  en: {
    arranjos: "Arrangements",
    oferta: "Offer",
    carrinho: "YOUR CART",
    text1: "Alpinias Vase for Events",
    text2: "Arrangement of Yellow Heliconias",
    preco1: "$350.00",
    preco2: "$200.00",
    text3: "Continue Shopping",
    text4: "Checkout"
  },
  es: {
    arranjos: "Arreglos",
    oferta: "Oferta",
    carrinho: "TU CARRITO",
    text1: "Jarrón de Alpinias para Eventos",
    text2: "Arreglo de Heliconias Amarillas",
    preco1: "€350,00",
    preco2: "€200,00",
    text3: "Seguir Comprando",
    text4: "Finalizar Compra"
  },
  pt: {
    arranjos: "Arranjos",
    oferta: "Oferta",
    carrinho: "SEU CARRINHO",
    text1: "Vaso de Alpinias para Eventos",
    text2: "Arranjo de Heliconias Amarelas",
    preco1: "R$ 350,00",
    preco2: "R$ 200,00",
    text3: "Continuar Comprando",
    text4: "Finalizar Compra"
  }
};

function changeLanguage(language) {
  const translation = translations[language];


  // Substitui os textos pelos valores correspondentes
  const elements = [
    { id: "arranjos", key: "arranjos" },
    { id: "Novas-flores", key: "oferta" },
    { id: "carrinho", key: "carrinho" },
    { id: "text1", key: "text1" },
    { id: "text2", key: "text2" },
    { id: "text3", key: "text3" },
    { id: "text4", key: "text4" },
    { id: "preco1", key: "preco1" },
    { id: "preco2", key: "preco2" }
  ];

  elements.forEach(({ id, key }) => {
    const element = document.getElementById(id);
    if (element && translation[key]) {
      element.textContent = translation[key];
    }
  });
}

//aumentar e diminuir texto//

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

/*responsividade*/

function responsividade() {
  let menuMobile = document.querySelector(".mobile-menu");
  if (menuMobile.classList.contains('open')) {
    menuMobile.classList.remove('open');
    document.querySelector('.icon').src = isDarkMode ? "Menu_Branco.png" : "Menu_Preto.png";
  } else {
    menuMobile.classList.add('open');
    document.querySelector('.icon').src = isDarkMode ? "Fechar_Branco.png" : "Fechar.png";
}
}

  

  
  
