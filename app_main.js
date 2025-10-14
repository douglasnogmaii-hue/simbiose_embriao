// app_main.js
// Versão estável para Render + GitHub
// Ponte com bridge.js para envio de mensagens à API

const { enviarParaAPI } = require("./bridge.js");

// Função principal de inicialização
function inicializarApp() {
  console.log("Aplicativo iniciando...");
  enviarParaAPI("Olá, aqui é o Embryon fazendo um teste.");
  console.log("Aplicativo iniciado com sucesso.");
}

// Inicia o app
inicializarApp();

// Mantém o processo ativo (impede 'Exited Early')
setInterval(() => {}, 1000);
