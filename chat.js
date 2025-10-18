// chat.js - Versão pronta para o chat do Embrião

document.addEventListener("DOMContentLoaded", () => {
    const sendButton = document.getElementById("sendButton");
    const messageInput = document.getElementById("messageInput");
    const chatBox = document.getElementById("chatBox");
    const passwordInput = document.getElementById("passwordInput");

    // Função para adicionar mensagem na tela
    function appendMessage(sender, text) {
        const messageElement = document.createElement("div");
        messageElement.textContent = `${sender}: ${text}`;
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight; // rola para a última mensagem
    }

    // Evento do botão enviar
    sendButton.addEventListener("click", async () => {
        const password = passwordInput.value.trim();
        const message = messageInput.value.trim();

        if (!password) {
            alert("Digite a senha!");
            return;
        }
        if (!message) {
            alert("Digite uma mensagem!");
            return;
        }

        appendMessage("Você", message);

        try {
            const response = await fetch("https://SEU-SERVIDOR-DO-EMBRIAO.onrender.com/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${password}`
                },
                body: JSON.stringify({ message })
            });

            if (!response.ok) {
                throw new Error("Erro na conexão com o Embrião");
            }

            const data = await response.json();
            appendMessage("Embrião", data.reply);
        } catch (error) {
            appendMessage("Erro", error.message);
        }

        messageInput.value = ""; // limpa o input
    });

    // Permitir enviar mensagem pressionando Enter
    messageInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") sendButton.click();
    });
});