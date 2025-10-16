// app-main.js - versão final para Render
const express = require('express');
const { enviarParaAPI } = require('./bridge.js'); // import da função do bridge

const app = express();
const PORT = process.env.PORT || 10000;

// Rota de teste
app.get('/', (req, res) => {
  res.send('Olá, aqui é o Embryon fazendo um teste!');
  console.log('Mensagem enviada para API: Olá, aqui é o Embryon fazendo um teste');
  enviarParaAPI('Olá, aqui é o Embryon fazendo um teste'); // envia para API simulada
});

// Inicializa o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
