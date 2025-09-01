//Função Responsivo
function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    const isDarkMode = document.body.classList.contains('dark-mode'); // Verifica o modo escuro
    
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = isDarkMode ? "Menu_Branco.png" : "Menu_Preto.png";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = isDarkMode ? "Fechar_Branco.png" : "Fechar.png";
    }
}   
//Dark Mode
function toggleDarkMode() {
     const moonIcon = document.getElementById("moon");
    document.body.classList.toggle('dark-mode');
    if (moonIcon.textContent === "bedtime") {
        moonIcon.textContent = "light_mode";
    } else {
        moonIcon.textContent = "bedtime"; 
    }
}

//Mudar Idioma

const translations = {
    en: {
        catalogo: "Catalog",
        arranjos: "Arrangements",
        NovasFlores: "New Flowers",
        oferta: "Offer",
        title: "Finalize Purchase",
        produto: "Products",
        title3: "Vase alpinia events",
        estoquealpinia: "Available",
        strongalpinia: "Stock:",
        title3heliconia:"Arrangement of yellow heliconias.",
        strongHeliconia: "Stock:",
        estoqueHeliconia: "Available",
        title3resumo:"Purchase Summary",
        envio:"shipping:",
        cupomdesconto:"Discount coupon:",
        usar:"Use Coupon",
        desconto:"Discount",
        total:"total",
        finalizar:"Finalize Purchase",
        mobilecatalogo:"Catalog",
        mobilearranjos:"Arrangements",
        mobilenovasflores:"New Flowers",
        mobileoferta:"Offer",
    },
    es: {
        catalogo: "Catalogar",
        arranjos: "Preparativos",
        NovasFlores: "Nuevas flores",
        oferta: "Oferta",
        title: "Finalizar compra",
        produto: "Productos",
        title3: "Jarrón eventos alpinia",
        estoquealpinia: "Disponible",
        strongalpinia: "Existencias:",
        title3heliconia:"Arreglo de heliconias amarillas.",
        strongHeliconia: "Existencias:",
        estoqueHeliconia: "Disponible",
        title3resumo:"Resumen de compra",
        envio:"envío:",
        cupomdesconto:"Cupón de descuento:",
        usar:"Usar cupón",
        desconto:"Descuento",
        total:"total",
        finalizar:"Finalizar compra",
        mobilecatalogo:"Catalogar",
        mobilearranjos:"Preparativos",
        mobilenovasflores:"Nuevas flores",
        mobileoferta:"Oferta",
    },
    pt: {
        catalogo: "Catálogo",
        arranjos: "Arranjos",
        NovasFlores: "Novas Flores",
        oferta: "Oferta",
        title: "Finalizar Compra",
        produto: "Produtos",
        title3: "Vaso alpinia eventos",
        estoquealpinia: "Disponível",
        strongalpinia: "Estoque:",
        title3heliconia:"Arranjo de heliconias amarelas",
        strongHeliconia: "Estoque:",
        estoqueHeliconia: "Disponível",
        title3resumo:"Resumo da Compra",
        envio:"Envio:",
        cupomdesconto:"Cupom de desconto:",
        usar:"Usar Cupom",
        desconto:"Desconto",
        total:"total",
        finalizar:"Finalizar Compra",
        mobilecatalogo:"Catálogo",
        mobilearranjos:"Arranjos",
        mobilenovasflores:"Novas Flores",
        mobileoferta:"Oferta",
    },
};

function changeLanguage(language) {
    // Textos no menu principal
    document.getElementById("catalogo").textContent = translations[language].catalogo;
    document.getElementById("arranjos").textContent = translations[language].arranjos;
    document.getElementById("Novas-flores").textContent = translations[language].NovasFlores;
    document.getElementById("oferta").textContent = translations[language].oferta;
    document.getElementById("title").textContent = translations[language].title;
    document.getElementById("Produtos").textContent = translations[language].produto;
    document.getElementById("title3").textContent = translations[language].title3;

    // Estoque e disponibilidade
    document.getElementById("strongalpinia").textContent = translations[language].strongalpinia;
    document.getElementById("estoquealpinia").lastChild.textContent = ` ${translations[language].estoquealpinia}`;
    document.getElementById("title3heliconia").textContent = translations[language].title3heliconia;
    document.getElementById("strong-heliconia").textContent = translations[language].strongHeliconia;
    document.getElementById("estoque-heliconia").textContent = translations[language].estoqueHeliconia;

    //Resumo da Compra
    document.getElementById("strong-heliconia").textContent = translations[language].strongHeliconia;
    document.getElementById("estoque-heliconia").textContent = translations[language].estoqueHeliconia;
    document.getElementById("title3resumo").textContent = translations[language].title3resumo;
    document.getElementById("envio").textContent = translations[language].envio;
    document.getElementById("cupomdesconto").textContent = translations[language].cupomdesconto;
    document.getElementById("usar").textContent = translations[language].usar;
    document.getElementById("desconto").textContent = translations[language].desconto;
    document.getElementById("total").textContent = translations[language].total;
    document.getElementById("finalizar").textContent = translations[language].finalizar;

    //Modo Responsivo
    document.getElementById("mobilecatalogo").textContent = translations[language].mobilecatalogo;
    document.getElementById("mobilearranjos").textContent = translations[language].mobilearranjos;
    document.getElementById("mobilenovasflores").textContent = translations[language].mobilenovasflores;
    document.getElementById("mobileoferta").textContent = translations[language].mobileoferta;
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
