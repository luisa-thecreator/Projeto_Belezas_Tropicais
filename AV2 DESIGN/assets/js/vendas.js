// Objeto com as traduções
const translations = {
  pt: {
    header: "Painel Administrativo",
    menuestoque: "Estoque",
    vendas: "Vendas",
    clientes: "Clientes",
    adm: "Administração",
    chatbot: "Chatbot",
    inicio1: "Vendas",
    footer: "© 2024 Tropical Flores",
  },
  en: {
    header: "Admin Panel",
    estoque: "Stock",
    vendas: "Sales",
    clientes: "Customers",
    adm: "Administration",
    chatbot: "Chatbot",
    inicio1: "Sales",
    footer: "© 2024 Tropical Flowers",
  },
  es: {
    header: "Panel Administrativo",
    estoque: "Inventario",
    vendas: "Ventas",
    clientes: "Clientes",
    adm: "Administración",
    chatbot: "Chatbot",
    inicio1: "Ventas",
    footer: "© 2024 Flores Tropicales",
  },
};

function changeLanguage(language) {
  const elementsById = [
    { id: "header", key: "header" },
    { id: "estoque", key: "estoque" },
    { id: "vendas", key: "vendas" },
    { id: "clientes", key: "clientes" },
    { id: "adm", key: "adm" },
    { id: "chatbot", key: "chatbot" },
    { id: "inicio1", key: "inicio1" },
    { id: "footer", key: "footer" },
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
}

