import express from "express";
import OpenAI from "openai";

const app = express();
const port = process.env.PORT || 10000;

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

app.get("/", async (req, res) => {
  try {
    const completion = await client.responses.create({
      model: "gpt-5",
      input: "Olá! Aqui é o Embrião realizando um teste de integração."
    });
    res.send(completion.output_text);
  } catch (error) {
    console.error("Erro ao conectar à OpenAI:", error);
    res.status(500).send("Erro ao conectar à OpenAI.");
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
