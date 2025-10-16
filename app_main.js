// appmain.js - Versão Final Integrada

// Importações
import express from 'express';
import bodyParser from 'body-parser';
import { enviarParaAPI } from './bridge.js';
import { handleJSON } from './jonson.js';
import OpenAI from 'openai';

// Configurações do Express
const app = express();
const PORT = process.env.PORT || 10000; // Porta padrão ou variável do Render
app.use(bodyParser.json());

// Inicialização do OpenAI usando Environment Variable
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// Endpoint de teste básico
app.post('/mensagem', async (req, res) => {
  const { mensagem } = req.body;

  try {
    // Envia para função do Bridge
    enviarParaAPI(mensagem);

    // Chamada ao OpenAI
    const response = await openai.responses.create({
      model: 'gpt-5-mini',
      input: mensagem
    });

    // Processa retorno do Jonson
    const processed = handleJSON(response);

    res.json({ success: true, resposta: processed });
  } catch (err) {
    console.error('Erro no processamento da mensagem:', err);
    res.status(500).json({ success: false, erro: err.message });
  }
});

// Endpoint para teste simples
app.get('/teste', (req, res) => {
  res.send('Servidor Embryon rodando. Conectado ao OpenAI!');
});

// Inicialização do servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
