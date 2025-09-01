
  function toggleVisibility(inputId) {
    const input = document.getElementById(inputId);
    if (input) {
        if (input.type === 'password') {
            input.type = 'text';
        } else {
            input.type = 'password';
        }
    }
}


// Aumentar Letras

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


function toggleDarkMode() {
    const moonIcon = document.getElementById("moon");
    document.body.classList.toggle('dark-mode');
    if (moonIcon.textContent === "bedtime") {
        moonIcon.textContent = "light_mode";
    } else {
        moonIcon.textContent = "bedtime"; 
    }

    document.getElementById("").style.backgroundColor="#000000"
}

const translation = {
en: {
    catalogo: "Catalog",
    arranjos:  "Arrangents",
    NovasFlores: " New Flowers",
    oferta: "Offer",
    texto1:  "Choose your payment",
    texto2:   "Other payment options",
    texto3: "Debit",
    texto4: "Credit",
    texto5: "Pix",
    texto6: "Card type",
    texto7: "Card number",
    texto8: "Validity",
    texto9: "CVC",
    texto10: "Pay",
},


pt: {
        catalogo: "Catalogo",
        arranjos:  "Arranjos",
        NovasFlores: " Novas Folres",
        oferta: "Oferta",
        texto1:  "Escolha o pagamento",
        texto2:   "Outras opções de pagamento",
        texto3: "Débito",
        texto4: "Crédito",
        texto5: "Pix",
        texto6: "Nome do cartão",
        texto7: "Número no cartão",
        texto8: "Validade",
        texto9: "CVC",
        texto10: "Pagar",
},

es: {
    catalogo: "Catalogar",
    arranjos:  "Preparativos",
    NovasFlores: "Nuevas flores",
    oferta: "Oferta",
    texto1:  "Elige pago",
    texto2:   "Otras opciones de pago",
    texto3: "Deuda",
    texto4: "Crédito",
    texto5: "Pix",
    texto6: "Nombre de la tarjeta",
    texto7: "Número en la tarjeta",
    texto8: "Validez",
    texto9: "CVC",
    texto10: "Pagar",
},


}
function changeLanguage(language){
    document.getElementById("catalogo").textContent =translation[language].catalogo;
    document.getElementById("arranjos").textContent =translation[language].arranjos;
    document.getElementById("NovasFlores").textContent =translation[language].NovasFlores;
    document.getElementById("oferta").textContent =translation[language].oferta;
    document.getElementById("texto1").textContent =translation[language].texto1;
    document.getElementById("texto2").textContent =translation[language].texto2;
    document.getElementById("texto3").textContent =translation[language].texto3;
    document.getElementById("texto4").textContent =translation[language].texto4;
    document.getElementById("texto5").textContent =translation[language].texto5;
    document.getElementById("texto6").textContent =translation[language].texto6;
    document.getElementById("texto7").textContent =translation[language].texto7;
    document.getElementById("texto8").textContent =translation[language].texto8;
    document.getElementById("texto9").textContent =translation[language].texto9;
    document.getElementById("texto10").textContent =translation[language].texto10;
}


function responsividade(){
    let menuMobile=document.querySelector(".mobile-menu");
    if(menuMobile.classList.contains('open')){
      menuMobile.classList.remove('open');
    }else {
     menuMobile.classList.add('open')
    }
}














