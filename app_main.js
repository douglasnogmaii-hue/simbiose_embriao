// app_main.js
// Versão simplificada para ponte com bridge.js

// Importa a função do bridge.js
const { enviarParaAPI } = require('./bridge.js');

// Função de inicialização do app
function inicializarApp() {
    console.log("Aplicativo inicializando...");

    // Teste de envio de mensagem para API
    enviarParaAPI("Olá, aqui é o Embryon fazendo um teste.");

    console.log("Aplicativo iniciado com sucesso.");
}

// Inicializa o app
inicializarApp();
