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
      email: "E-mail",
      tel: "Telefone",
      quant: "Quantidade de compras",
      preco: "Preço total",
      data: "Data da última compra",
      nota:"Nota Fiscal",
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
     email: "E-mail",
     tel: "Phone",
     quant: "Purchase quantity",
     preco: "Total price",
     data: "Date of last purchase",
     nota:"Invoice",
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
        email: "E-mail",
        tel: "teléfono",
        quant: "Cantidad de compra",
        preco: "Precio total",
        data: "Data da última compra",
        nota:"Factura",
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
      { id: "tel", key: "tel" }, 
      { id: "quant", key: "quant" }, 
      { id: "preco", key: "preco" },
      { id: "data", key: "data" },
      { id: "nota", key: "nota" },
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