/**
> node server.js
> откройте http://localhost:9000 в вашем браузере
*/

const WebSocket = require('ws');
const wsServer = new WebSocket.Server({ port: 9000 });

wsServer.on('connection', onConnect);

function onConnect(wsClient) {
    console.log('Новый пользователь');
    

    wsClient.on('close', function() {
        console.log('Пользователь вышел');
    });

    wsClient.on('message', function(message) {
        console.log(message);
        try {
            const jsonMessage = JSON.parse(message);
                    wsClient.send("Ты вроде пишешь "+jsonMessage.data);
         } catch (error) {
            console.log('Ошибка', error);
        }
    });
}

console.log('Сервер запущен на 9000 порту');