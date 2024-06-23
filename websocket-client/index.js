// websocket-client/index.js
const express = require('express');
const WebSocket = require('ws');

const app = express();
const port = 3004;
const wsUrl = 'ws://localhost:3003';

const ws = new WebSocket(wsUrl);

ws.on('open', () => {
    console.log('Connected to WebSocket server');
    setInterval(() => { ws.send((new Date()).getMilliseconds()) }, 1000);
    ws.send('Hello Server 3');
});

ws.on('message', (message) => {
    console.log(`Received: ${message}`);
});

ws.on('close', () => {
    console.log('Disconnected from WebSocket server');
});

app.listen(port, () => {
    console.log(`Client server is running on http://localhost:${port}`);
});
