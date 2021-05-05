import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import { roomCtrl } from './controllers/roomController';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.json());

export const rooms = new Map();

app.post('/api/create_room', roomCtrl.createRoom);
app.post('/api/set_settigs', roomCtrl.setSettings);

io.on('connection', (socket: any) => {
    console.log('Пользователь подключился, socket:', socket.id);
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`Сервер был запущен на порте ${PORT}`);
});
