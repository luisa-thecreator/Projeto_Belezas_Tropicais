const translations = {
    pt: {
      header: "Painel Administrativo",
      menuestoque: "Estoque",
      vendas: "Vendas",
      clientes: "Clientes",
      adm: "Administração",
      chatbot: "Chatbot",
      inicio1: "Clientes",
      id: "ID",
      nome: "nome",
      cod: "Código",
      email: "E-mail",
      quant: "Quantidade de vendas",
      preco: "Preço",
      meta:"Metas concluídas",
      footer: "&copy; 2024 Tropical Flores",
    },
    en: {
     header: "Administrative Panel",
     menuestoque: "Stock",
     vendas: "Sales",
     clientes: "Customers",
     adm: "Administration",
     chatbot: "Chatbot",
     inicio1: "Customers",
     id: "ID",
     nome: "name",
     cod: "Code",
     email: "E-mail",
     quant: "Sales quantity",
     preco: "price",
     meta:"Goals completed",
     footer: "&copy; 2024 Tropical Flowers",
    },
    es: {
        header: "Panel Administrativo",
        menuestoque: "Inventario",
        vendas: "Ventas",
        clientes: "Clientes",
        adm: "Administración",
        chatbot: "Chatbot",
        inicio1: "INVENTARIO",
        id: "ID",
        nome: "nombre",
        cod: "Código",
        email: "E-mail",
        quant: "Cantidad de ventas",
        preco: "Precio",
        meta:"Metas cumplidas",
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
        { id: "inicio1", key: "inicio1" },
        { id: "id", key: "id" },  
        { id: "nome", key: "nome" },
        { id: "email", key: "email" },  
        { id: "cod", key: "cod" }, 
        { id: "quant", key: "quant" }, 
        { id: "preco", key: "preco" },
        { id: "meta", key: "meta" },
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
}  


