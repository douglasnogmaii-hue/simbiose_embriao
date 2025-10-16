// Importa funções do bridge.js
const { enviarParaAPI } = require('./bridge.js');
const express = require('express');
const app = express();

// Inicialização do Embryon
function inicializarApp() {
  console.log('Aplicativo inicializando...');
  
  // Teste de envio para API
  enviarParaAPI('Olá, aqui é o Embryon fazendo um teste');
  console.log('Aplicativo iniciado com sucesso.');
}

// Chama a inicialização
inicializarApp();

// Configura servidor para Render
const PORT = process.env.PORT || 3000; // Render define a porta
app.get('/', (req, res) => {
  res.send('Embryon está vivo e funcionando!');
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
