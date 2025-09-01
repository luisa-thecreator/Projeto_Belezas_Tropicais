let currentIndex = 0;

function updateCarousel() {
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.slide');
    const slideWidth = slides[0].clientWidth; 
    carousel.style.transform = `translateX(${-currentIndex * slideWidth}px)`;

 
    toggleArrows();
}


function responsividade() {
  let menuMobile = document.querySelector(".mobile-menu");
  if (menuMobile.classList.contains('open')) {
    menuMobile.classList.remove('open');
  } else {
    menuMobile.classList.add('open')
  }
}



function prevSlide() {
    const totalSlides = document.querySelectorAll('.slide').length;
    currentIndex = Math.max(0, currentIndex - 1); 
    updateCarousel();
}

function nextSlide() {
    const totalSlides = document.querySelectorAll('.slide').length;
    const visibleSlides = Math.floor(document.querySelector('.container').clientWidth / document.querySelector('.slide').clientWidth); // Número de slides visíveis
    const maxIndex = totalSlides - visibleSlides; 

    if (currentIndex < maxIndex) {
        currentIndex++;
    }
    updateCarousel();
}


function toggleArrows() {
    const totalSlides = document.querySelectorAll('.slide').length;
    const visibleSlides = Math.floor(document.querySelector('.container').clientWidth / document.querySelector('.slide').clientWidth);
    const maxIndex = totalSlides - visibleSlides;

  
    document.querySelector('.left-arrow').disabled = currentIndex === 0;


    document.querySelector('.right-arrow').disabled = currentIndex === maxIndex;
}


window.addEventListener('resize', updateCarousel);


updateCarousel();





let currentFontSize = 16; 

function alterarFonte(delta) {
 
    const elementos = document.querySelectorAll("body, body *");

    currentFontSize += delta;

  
    elementos.forEach(element => {
        const computedStyle = window.getComputedStyle(element);
        const fontSize = parseFloat(computedStyle.fontSize);
        if (fontSize) {
            element.style.fontSize = (fontSize + delta) + "px";
        }
    });
}

function aumentarLetra() {
    alterarFonte(2); 
}

function diminuirLetra() {
    alterarFonte(-2); 
}











function noturno() {
    const body = document.body;


    body.classList.toggle("dark-mode");


    const elements = document.querySelectorAll(
        ".container, .botones, .email-input, .cuadrado-verde, #ver a, #principal, .arranjos, .ava, header, .cards, .search, footer, .footer-column, button, a , div.Laranja, nav.parte-de-cima, nav .links, .icones,nav.parte-de-cima, .compraragr, .compraragr a, nav.verde, .line-fina, .slide, .inicio-off"
    );
    elements.forEach(element => element.classList.toggle("dark-mode"));


    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("dark-mode", "enabled");
    } else {
        localStorage.setItem("dark-mode", "disabled");
    }
}


document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem("dark-mode") === "enabled") {
        noturno();
    }
});









const translations = {
    "pt": {
        "titulo": "Tela Principal",
        "frete-gratis": "FRETE GRÁTIS NAS COMPRAS A PARTIR DE 150 REAIS",
        "catalogo": "Catálogo",
        "arranjos": "Arranjos",
        "novas-flores": "Novas Flores",
        "oferta": "Oferta",


        "searchInput": "Procure por produtos...",


        "deixe-seu": "DEIXE SEU",
        "momento-ser": "MOMENTO SER",
        "mais-tropical": "MAIS TROPICAL",
        "encontra-variedade": "Onde você encontra a maior variedade de ",
        "tropicais-do-brasil": "flores tropicais do Brasil",
        "localizacao": "Localização",
        "entrega-para": "Entrega para",
        "todo-o-brasil": "todo o Brasil",
        "off": "DESCONTO DE %10",
        "tipos-flores": "Tipos de flores",
        "eventos": "Eventos",
        "ver-tudo": "Ver tudo",
        "arranjos-especiais": "Arranjos Especiais",
        "avaliacoes": "AVALIAÇÕES",
        "fique-atualizado-sobre": "FIQUE ATUALIZADO SOBRE ",
        "nossas-ofertas": "NOSSAS OFERTAS",
   


        "subscribe": "se-inscreva",
        "email": "Digite seu e-mail",


        "experiencia": "Melhor experiência para você!",
        "company": "COMPANY",
        "about": "Sobre",
        "features": "Recursos",
        "works": "Como funciona",
        "careers": "Carreiras",
        "help": "AJUDA",
        "customer-support": "Atendimento ao Cliente",
        "delivery-details": "Detalhes da Entrega",
        "terms-conditions": "Termos e Condições",
        "privacy-policy": "Política de Privacidade",
        "faq": "FAQ",
        "account": "Conta",
        "manage-deliveries": "Gerenciar Entregas",
        "orders": "Pedidos",
        "payments": "Pagamentos",
        "resources": "RECURSOS",
        "free-ebooks": "eBooks Gratuitos",
        "development-tutorial": "Tutorial de Desenvolvimento",
        "how-to-blog": "Como - Blog",
        "youtube-playlist": "Playlist no YouTube",
        "review-sarah": "Comprei flores para um evento e todos amaram!! Muito lindas!!",
        "review-marcus": "Ótimos valores, com qualidade excelente! O atendimento é muito bom, recomendaria.",
        "review-maria": "Já comprei várias vezes e nunca me arrependi. Definitivamente, melhores flores que existem no mercado.",
        "review-vinicius": "Comprei tantas vezes que já perdi a conta, são belíssimas!",
        "review-glinda": "Nunca vi flores tão populares! Só não são tão populares quanto eu. Muito obrigada, adorei!!!",
        "review-elphaba": "Minha irmã amou a surpresa que fiz para ela!! Ficou perfeito.",
        "heliconias-laranja": "Heliconias Laranja",
        "heliconias-amarelas": "Heliconias Amarelas",
        "arranjo-simples-1": "Arranjo Simples",
        "arranjo-simples-2": "Arranjo Simples",
        "arranjo-simples-3": "Arranjo Simples", 
        "arranjo-mixto": "Arranjo Mixto", 
        "arranjo-eventos": "Arranjo para Eventos",
         "arranjo-heliconias": "Arranjo de Heliconias"

    },
    "en": {
        "titulo": "Main Page",
        "frete-gratis": "FREE SHIPPING ON PURCHASES OVER 150 REAIS",
        "catalogo": "Catalog",
        "arranjos": "Arrangements",
        "novas-flores": "New Flowers",
        "oferta": "Offer",



        "searchInput": "Search for products...",



        "deixe-seu": "LET YOUR",
        "momento-ser": "MOMENT BE",
        "mais-tropical": "MORE TROPICAL",
        "encontra-variedade": "Where you find the largest variety of",
        "tropicais-do-brasil": "tropical flowers in Brazil",
        "localizacao": "Location",
        "entrega-para": "Delivery through",
        "todo-o-brasil": "all Brazil",
        "off": "OFF %10",
        "tipos-flores": "Types of flowers",
        "eventos": "Events",
        "ver-tudo": "See all",
        "arranjos-especiais": "Special Arrangements",
        "avaliacoes": "REVIEWS",
        "fique-atualizado-sobre": "STAY UPDATED ON",
        "nossas-ofertas": "OUR OFFERS",
        "onde-voce-encontra-a-maior-variedade-de-flores": " where you find the largest variety of tropical flowers in Brazil",

        "subscribe": "Subscribe",
        "email": "Write your e-mail",

        "experiencia": "Best experience for you!",
        "company": "COMPANY",
        "about": "About",
        "features": "Features",
        "works": "Works",
        "careers": "Careers",
        "help": "HELP",
        "customer-support": "Customer Support",
        "delivery-details": "Delivery Details",
        "terms-conditions": "Terms and Conditions",
        "privacy-policy": "Privacy Policy",
        "faq": "FAQ",
        "account": "Account",
        "manage-deliveries": "Manage Deliveries",
        "orders": "Orders",
        "payments": "Payments",
        "resources": "RESOURCES",
        "free-ebooks": "Free eBooks",
        "development-tutorial": "Development Tutorial",
        "how-to-blog": "How to - Blog",
        "youtube-playlist": "Youtube Playlist",
        "review-sarah": "I bought flowers for an event and everyone loved them!! Very beautiful!!",
        "review-marcus": "Great prices, with excellent quality! The service is very good, I would recommend.",
        "review-maria": "I have bought many times and never regretted it. Definitely the best flowers on the market.",
        "review-vinicius": "I bought so many times that I've lost count, they are beautiful!",
        "review-glinda": "I've never seen such popular flowers! They're just not as popular as I am. Thank you very much, I loved it!!!",
        "review-elphaba": "My sister loved the surprise I made for her!! It was perfect.",
        "heliconias-laranja": "Orange Heliconias",
        "heliconias-amarelas": "Yellow Heliconias",
        "arranjo-simples-1": "Simple Arrangement",
        "arranjo-simples-2": "Simple Arrangement",
        "arranjo-simples-3": "Simple Arrangement", 
        "arranjo-mixto": "Mixed Arrangement", 
        "arranjo-eventos": "Event Arrangement", 
        "arranjo-heliconias": "Heliconias Arrangement"

    },
    "es": {
        "titulo": "Página Principal",
        "frete-gratis": "ENVÍO GRATIS EN COMPRAS SUPERIORES A 150 REAIS",
        "catalogo": "Catálogo",
        "arranjos": "Arreglos",
        "novas-flores": "Flores Nuevas",
        "oferta": "Oferta",



        "searchInput": "Buscar productos...",


        "deixe-seu": "DEJA QUE TU",
        "momento-ser": "MOMENTO SEA",
        "mais-tropical": "MAS TROPICAL",
        "encontra-variedade": "Donde encontraras la mayor variedad de ",
        "tropicais-do-brasil": "flores tropicales en Brasil",
        "localizacao": "Ubicación",
        "entrega-para": "Entregas para",
        "todo-o-brasil": "todo Brasil",
        "tipos-flores": "Tipos de flores",
        "eventos": "Eventos",
        "off": "DESCUENTO DE %10",
        "arranjo-simples": "Ramo Simple",
        "ver-tudo": "Ver todo",
        "arranjos-especiais": "Arreglos Especiales",
        "avaliacoes": "EVALUACIONES",
        "fique-atualizado-sobre": "MANTENTE ACTUALIZADO",
        "nossas-ofertas": "SOBRE NUESTRAS OFERTAS",


        "subscribe": "Suscribirse",
        "email": "Escriba su correo electronico",


        "experiencia": "Mejor experiencia para ti!",
        "company": "COMPANY",
        "about": "Sobre",
        "features": "Características",
        "works": "Cómo funciona",
        "careers": "Carreras",
        "help": "AYUDA",
        "customer-support": "Atención al Cliente",
        "delivery-details": "Detalles de Entrega",
        "terms-conditions": "Términos y Condiciones",
        "privacy-policy": "Política de Privacidad",
        "faq": "FAQ",
        "account": "Cuenta",
        "manage-deliveries": "Gestionar Entregas",
        "orders": "Pedidos",
        "payments": "Pagos",
        "resources": "RECURSOS",
        "free-ebooks": "eBooks Gratis",
        "development-tutorial": "Tutorial de Desarrollo",
        "how-to-blog": "Cómo - Blog",
        "youtube-playlist": "Lista de Reproducción en YouTube",
        "review-sarah": "Compré flores para un evento y todos las amaron!! Muy hermosas!!",
        "review-marcus": "¡Excelentes precios, con calidad excelente! El servicio es muy bueno, lo recomendaría.",
        "review-maria": "He comprado muchas veces y nunca me he arrepentido. Definitivamente, las mejores flores que existen en el mercado.",
        "review-vinicius": "¡He comprado tantas veces que he perdido la cuenta, son bellísimas!",
        "review-glinda": "¡Nunca he visto flores tan populares! Solo que no son tan populares como yo. ¡Muchas gracias, me encantaron!!!",
        "review-elphaba": "¡A mi hermana le encantó la sorpresa que le hice!! Quedó perfecto.",
        "heliconias-laranja": "Heliconias Naranjas",
        "heliconias-amarelas": "Heliconias Amarillas",
        "arranjo-simples-1": "Arreglo Simple",
        "arranjo-simples-2": "Arreglo Simple",
        "arranjo-simples-3": "Arreglo Simple",
         "arranjo-mixto": "Arreglo Mixto", 
         "arranjo-eventos": "Arreglo para Eventos",
          "arranjo-heliconias": "Arreglo de Heliconias"
    }
};


function changeLanguage(lang) {
    document.querySelectorAll('[id]').forEach(element => {
        const key = element.id;
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}
