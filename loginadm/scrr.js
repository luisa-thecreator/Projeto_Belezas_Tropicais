function sla(){
    document.getElementById("texto5").style.backgroundColor="#f69904"
}

function noturno(){
    document.getElementById("fundo").style.backgroundColor="#000000"
    document.getElementById("texto1").style.color="#ffffff"
    document.getElementById("texto2").style.color="#ffffff"
    document.getElementById("texto3").style.color="#ffffff"
    document.getElementById("texto4").style.color="#ffffff"
    document.getElementById("texto5").style.color="#ffffff"
    document.getElementById("texto9").style.color="#ffffff"
    document.getElementById("icones").style.color="#ffffff"
    document.getElementById("links").style.color="#ffffff"
}

function toggleDarkMode() {
    const body = document.getElementById("fundo");
    body.classList.toggle("dark-mode");
}

//código de bia

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

const translations = {
  en: {
    catalogo: "Catalog",
    arranjos: "Arrangements",
    NovasFlores: "New Flowers",
    oferta: "Offer",
    texto9: "LOGIN",
    texto1: "Email",
    texto2: "Password",
    texto3: "don't have an account ",
    texto4:"Create account",
    texto5:"Enter"
  },
 

  pt: {
    catalogo: "Catálogo",
    arranjos: "Arranjos",
    NovasFlores: "Novas Flores",
    oferta: "Oferta",
    texto9: "LOGIN",
    texto1: "Email",
    texto2: "Senha",
    texto3: "Não tem conta ",
    texto4:"Criar conta",
    texto5:"Entrar"
  },
 
  es: {
    catalogo: "Catalogar",
    arranjos: "Preparativos",
    NovasFlores: "Nuevas flores",
    oferta: "Oferta",
    texto9: "LOGIN",
    texto1: "Email",
    texto2: "contraseña",
    texto3: "don't have an account ",
    texto4:"Create account",
    texto5:"Enter"
  },

}


function changeLanguage(language) {
    // Atualiza os textos no menu principal
    document.getElementById("catalogo").textContent = translations[language].catalogo;
    document.getElementById("arranjos").textContent = translations[language].arranjos;
    document.getElementById("NovasFlores").textContent = translations[language].NovasFlores;
    document.getElementById("oferta").textContent = translations[language].oferta;

    // Atualiza os textos do formulário
    document.getElementById("texto9").textContent = translations[language].texto9;
    document.getElementById("texto1").textContent = translations[language].texto1;
    document.getElementById("texto2").textContent = translations[language].texto2;
    document.getElementById("texto3").textContent = translations[language].texto3;
    document.getElementById("texto4").textContent = translations[language].texto4;
    document.getElementById("texto5").textContent = translations[language].texto5;

    // Atualiza os placeholders
    const emailInput = document.querySelector("input[type='email']");
    const phoneInput = document.querySelector("input[type='text']:nth-of-type(1)");
    const passwordInput = document.querySelector("input[type='text']:nth-of-type(2)");
    const confirmPasswordInput = document.querySelector("input[type='text']:nth-of-type(3)");

    emailInput.placeholder = translations[language].texto1;
    phoneInput.placeholder = translations[language].texto2;
    passwordInput.placeholder = translations[language].texto3;
    confirmPasswordInput.placeholder = translations[language].texto4;
}


function responsividade(){
    let menuMobile=document.querySelector(".mobile-menu");
    if(menuMobile.classList.contains('open')){
      menuMobile.classList.remove('open');
    }else {
     menuMobile.classList.add('open')
    }
}