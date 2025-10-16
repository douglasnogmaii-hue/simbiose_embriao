/**
 * bridge.js
 * Embryon - ponte entre o app e a OpenAI
 * Importável como módulo
 */

import fetch from "node-fetch"; // Para fazer requisições HTTP

// --- Função de envio para a API do Embryon ---
export async function enviarParaAPI(mensagem) {
  if (!mensagem) {
    console.error("Nenhuma mensagem fornecida para enviar");
    return;
  }

  try {
    // URL do seu servidor Render
    const url = process.env.EMBRYON_API_URL || "http://localhost:10000/api/mensagem";

    // Envia a mensagem
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ mensagem })
    });

    const data = await response.json();

    if (response.ok) {
      console.log(`Mensagem enviada para API: "${mensagem}"`);
      console.log("Resposta recebida:", data.resposta);
      return data.resposta;
    } else {
      console.error("Erro da API:", data.error || data);
      return `Erro da API: ${data.error || data}`;
    }

  } catch (error) {
    console.error("Falha ao enviar para API:", error.message || error);
    return `Erro: ${error.message || error}`;
  }
}

// --- Exemplo de uso rápido ---
if (import.meta.url === process.argv[1] || import.meta.url === `file://${process.argv[1]}`) {
  (async () => {
    await enviarParaAPI("Olá, aqui é o Embryon fazendo um teste");
  })();
}
