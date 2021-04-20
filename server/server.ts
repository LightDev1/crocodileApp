import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const rooms = new Map();

io.on('connection', (socket: any) => {
    console.log(`Пользователь подключился, socket: ${socket}`);
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`Сервер был запущен на порте ${PORT}`);
});

