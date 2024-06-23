// websocket-server/index.js
const express = require('express');
const { Server } = require('ws');

const app = express();
const port = 3003;

const server = app.listen(port, () => {
    console.log(`WebSocket server is running on http://localhost:${port}`);
});

const wss = new Server({ server });

wss.on('connection', (ws) => {
    console.log('Client connected');

    setInterval(() => {
        ws.send(`${new Date().getMilliseconds()} From Server`);
    }, 1000);

    ws.on('message', (message) => {
        console.log(`Received: ${message}`);
        ws.send(`Echo: got you`);
    });

    ws.on('close', () => {
        console.log('Client disconnected');
    });
});
