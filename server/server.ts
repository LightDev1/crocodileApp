import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.json());

const rooms = new Map();

app.post('/api/create_room', (req: express.Request, res: express.Response) => {
    const { rounds, time, words, id } = req.body;

    console.log(rounds, time, words, id);

    if (!rooms.has(id)) {
        rooms.set(id, new Map([
            ['users', new Map()],
            ['words', words],
            ['messages', []],
            ['rounds', rounds],
            ['time', time],
        ]));
    }

    res.json('Good');
});

io.on('connection', (socket: any) => {
    console.log('Пользователь подключился, socket:', socket.id);
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`Сервер был запущен на порте ${PORT}`);
});

