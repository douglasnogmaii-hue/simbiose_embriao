/**
 * app-main.js
 * Embryon - integração completa com OpenAI GPT-5
 * Node.js + Render compatível
 */

import OpenAI from "openai"; // Importa SDK oficial OpenAI
import express from "express"; // Para criar um servidor HTTP simples
import bodyParser from "body-parser";

// --- Configurações básicas ---
const app = express();
app.use(bodyParser.json());

// Porta padrão (Render define via variável de ambiente PORT)
const PORT = process.env.PORT || 10000;

// --- Configuração do OpenAI ---
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// --- Função para enviar mensagens para OpenAI ---
async function enviarParaOpenAI(mensagem) {
  try {
    const response = await client.responses.create({
      model: "gpt-5-mini",
      input: mensagem
    });
    console.log(`Mensagem enviada para OpenAI: "${mensagem}"`);
    console.log("Resposta recebida:", response.output_text || response.output[0]?.content[0]?.text || "Sem resposta");
    return response.output_text || "Sem resposta";
  } catch (error) {
    console.error("Erro ao enviar para OpenAI:", error.message || error);
    return `Erro: ${error.message || error}`;
  }
}

// --- Endpoint de teste ---
app.post("/api/mensagem", async (req, res) => {
  const { mensagem } = req.body;
  if (!mensagem) return res.status(400).json({ error: "Mensagem não enviada" });

  const resposta = await enviarParaOpenAI(mensagem);
  res.json({ resposta });
});

// --- Inicia servidor ---
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  console.log("Use POST /api/mensagem para testar a integração com OpenAI");
});
