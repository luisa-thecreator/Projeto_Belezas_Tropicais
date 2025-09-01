const translations = {
  pt: {
    header: "Painel Administrativo",
    menuestoque: "Estoque",
    vendas: "Vendas",
    clientes: "Clientes",
    adm: "Administração",
    chatbot: "Chatbot",
    inicio1: "Vendas",
    estoque: "ESTOQUE",
    heliconia: "HELICONIA",
    alpinia: "ALPINIA",
    flores: "ARRANJOS DE FLORES",
    adicionar: "Adicionar",
    text1: "Arranjo de heliconias simples",
    text2: "Arranjo de heliconias amarelas",
    text3: "Arranjo de heliconias eventos",
    text4: "Arranjo de heliconias decoração",
    text5: "Vaso alpinia eventos",
    text6: "Arranjo alpinia lilás",
    text7: "Arranjo de alpinia simples",
    text8: "Arranjo de flores tropicais completo",
    text9: "Arranjo de heliconias simples",
    text10: "Arranjos heliconias e alpinias",
    text11: "Arranjos heliconias alpinias e anturias",
    footer: "&copy; 2024 Tropical Flores",
  },
  en: {
    header: "Administrative Panel",
    menuestoque: "Stock",
    vendas: "Sales",
    clientes: "Clients",
    adm: "Administration",
    chatbot: "Chatbot",
    estoque: "STOCK",
    heliconia: "HELICONIA",
    alpinia: "ALPINIA",
    flores: "FLOWER ARRANGEMENTS",
    adicionar: " To add",
    text1: "Simple heliconia arrangement",
    text2: "Yellow heliconia arrangement",
    text3: "Event heliconia arrangement",
    text4: "Decoration heliconia arrangement",
    text5: "Event alpinia vase",
    text6: "Lilac alpinia arrangement",
    text7: "Simple alpinia arrangement",
    text8: "Complete tropical flower arrangement",
    text9: "Simple heliconia arrangement",
    text10: "Heliconia and alpinia arrangements",
    text11: "Heliconia, alpinia, and anthurium arrangements",
    footer: "&copy; 2024 Tropical Flowers",
  },
  es: {
    header: "Panel Administrativo",
    menuestoque: "Inventario",
    vendas: "Ventas",
    clientes: "Clientes",
    adm: "Administración",
    chatbot: "Chatbot",
    estoque: "INVENTARIO",
    heliconia: "HELICONIA",
    alpinia: "ALPINIA",
    flores: "ARREGLOS FLORALES",
    adicionar: "Agregar",
    text1: "Arreglo de heliconias simples",
    text2: "Arreglo de heliconias amarillas",
    text3: "Arreglo de heliconias para eventos",
    text4: "Arreglo de heliconias para decoración",
    text5: "Jarrón de alpinias para eventos",
    text6: "Arreglo de alpinias lilas",
    text7: "Arreglo de alpinias simples",
    text8: "Arreglo completo de flores tropicales",
    text9: "Arreglo de heliconias simples",
    text10: "Arreglos de heliconias y alpinias",
    text11: "Arreglos de heliconias, alpinias y anturios",
    footer: "&copy; 2024 Flores Tropicales",
  },
};

function changeLanguage(language) {
  // Atualiza elementos específicos pelo ID
  const elementsById = [
    { id: "estoque", key: "menuestoque" },
    { id: "vendas", key: "vendas" },
    { id: "clientes", key: "clientes" },
    { id: "adm", key: "adm" },
    { id: "chatbot", key: "chatbot" },
    { id: "inicio1", key: "estoque" }, // Altera somente o texto do início
  ];

  elementsById.forEach(({ id, key }) => {
    const element = document.getElementById(id);
    if (element) {
      element.textContent = translations[language][key];
    }
  });

  // Atualiza o header preservando sua estrutura
  const header = document.querySelector("header h1");
  if (header) {
    header.textContent = translations[language].header;
  }

  // Atualiza o conteúdo do rodapé preservando o HTML
  const footer = document.querySelector("footer p");
  if (footer) {
    footer.innerHTML = translations[language].footer;
  }

  // Atualiza outros textos específicos
  const textElements = [
    { id: "adicionar", key: "adicionar"},
    { id: "texto", key: "heliconia" },
    { id: "texto2", key: "alpinia" },
    { id: "texto3", key: "flores" },
    { id: "text1", key: "text1" },
    { id: "text2", key: "text2" },
    { id: "text3", key: "text3" },
    { id: "text4", key: "text4" },
    { id: "text5", key: "text5" },
    { id: "text6", key: "text6" },
    { id: "text7", key: "text7" },
    { id: "text8", key: "text8" },
    { id: "text9", key: "text9" },
    { id: "text10", key: "text10" },
    { id: "text11", key: "text11" },
  ];

  textElements.forEach(({ id, key }) => {
    const element = document.getElementById(id);
    if (element) {
      element.textContent = translations[language][key];
    }
  });
}



