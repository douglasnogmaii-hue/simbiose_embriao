// bridge.js
// Responsável por conectar o app_main.js com johnson.js e gerenciar a comunicação

import { callChatGPT } from './johnson.js';
import fs from 'fs';

const logFile = './log/bridge_log.txt';

export async function sendMessage(message) {
    try {
        const response = await callChatGPT(message);
        logMessage(`Mensagem enviada: ${message}`);
        logMessage(`Resposta recebida: ${response}`);
        return response;
    } catch (err) {
        logMessage(`Erro ao enviar mensagem: ${err}`);
        throw err;
    }
}

function logMessage(text) {
    const timestamp = new Date().toISOString();
    const line = `[${timestamp}] ${text}\n`;
    fs.appendFileSync(logFile, line, 'utf8');
}
