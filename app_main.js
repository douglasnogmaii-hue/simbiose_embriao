// app_main.js
import express from "express";
import OpenAI from "openai";

// Insira aqui a sua API Key do OpenAI
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const app = express();
app.use(express.json());

const PORT = 10000;

// Rota de teste
app.post("/test", async (req, res) => {
    try {
        const userInput = req.body.input || "Olá, Embryon!";
        console.log("Mensagem enviada para API:", userInput);

        const response = await openai.chat.completions.create({
            model: "gpt-5",
            messages: [{ role: "user", content: userInput }],
        });

        const botMessage = response.choices[0].message.content;
        console.log("Resposta do ChatGPT:", botMessage);

        res.json({ reply: botMessage });
    } catch (err) {
        console.error("Erro ao conectar com a API do OpenAI:", err);
        res.status(500).json({ error: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
    console.log("Aplicativo iniciado com sucesso.");
});
// --- Rota principal (página inicial) ---
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Embrião Conectado</title>
        <style>
          body {
            background-color: #0b0b0c;
            color: #f4f4f4;
            font-family: Arial, sans-serif;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
          }
          h1 {
            color: #ffd700;
            font-size: 2em;
          }
          p {
            margin-top: 10px;
            font-size: 1.1em;
          }
        </style>
      </head>
      <body>
        <h1>🌱 Embrião conectado com sucesso!</h1>
        <p>Servidor ativo e sincronizado com o ChatGPT.</p>
        <p>Endpoint: /api/chat pronto para uso.</p>
      </body>
    </html>
  `);
});
