import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: "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",
});

const response = openai.responses.create({
  model: "gpt-5-nano",
  input: "write a haiku about ai",
  store: true,
});

response.then((result) => console.log(result.output_text));
