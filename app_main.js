// app_main.js
// Versão simplificada para integração com bridge.js

// Importa a função do bridge.js
const { enviar_para_API } = require('./bridge.js');

// Função de inicialização do app
function inicializar_app() {
    console.log("Aplicativo iniciando...");
    enviar_para_API("Olá, aqui é o Embryon fazendo um teste");
    console.log("Aplicativo iniciado com sucesso.");
}

// Chama a função de inicialização
inicializar_app();
