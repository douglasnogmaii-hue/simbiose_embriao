// app_main.js - versão final simplificada para ponte com bridge.js

// Importa a função do bridge.js
const { enviarParaAPI } = require('./bridge.js');

// Função de inicialização do app
function inicializarApp() {
    console.log("Aplicativo inicializado com sucesso.");

    // Lista de demos para simulação de ingestão
    const demos = ['demo1.txt','demo2.txt','demo3.txt','demo4.txt','demo5.txt','demo6.txt'];

    // Simula leitura e ingestão dos demos
    demos.forEach(demo => {
        try {
            console.log(`Ingestão do ${demo} simulada.`);
            // Aqui você poderia adicionar a leitura real do arquivo, se necessário
        } catch (err) {
            console.log(`Erro ao processar ${demo}: ${err}`);
        }
    });

    console.log("Todos os demos ingeridos, estado persistido.");

    // Teste de envio para API via bridge.js
    enviarParaAPI("Olá, aqui é o Embryon fazendo um teste.");
}

// Executa a inicialização
inicializarApp();
