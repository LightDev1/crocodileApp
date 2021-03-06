import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import http from 'http';
import multer from 'multer';
import { Server, Socket } from 'socket.io';
import { roomCtrl } from './controllers/roomController';
import { uploadFileCtrl } from './controllers/uploadFileController';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const storage = multer.memoryStorage();
const upload = multer({ storage });

app.use(express.json());

export const rooms = new Map();

app.post('/api/create_room', roomCtrl.createRoom);
app.post('/api/set_settigs', roomCtrl.setSettings);
app.get('/api/room_data/:id', roomCtrl.index);

app.post('/api/upload', upload.single('image'), uploadFileCtrl.upload);

io.on('connection', (socket: Socket) => {
    socket.on('ROOM:JOIN', ({ roomId, user }) => {
        try {
            socket.join(roomId);
            rooms.get(roomId).get('users').set(socket.id, user);

            const users = [...rooms.get(roomId).get('users').values()];

            socket.broadcast.to(roomId).emit('ROOM:SET_USERS', users);
        } catch (e) {
            console.log(e);
            socket.emit('ROOM:ERROR', { message: 'Комнаты с таким кодом не существует' });
        }
    });

    socket.on('ROOM:READY', ({ roomId }) => {
        socket.broadcast.to(roomId).emit('ROOM:START');

        // if (rooms.get(roomId).get('started')) {
        //     console.log('Игра начинается');
        // }
    });

    socket.on('ROOM:DRAW', ({ saveableCanvas, roomId }) => {
        try {
            socket.broadcast.to(roomId).emit('ROOM:DRAW', saveableCanvas);
        } catch (e) {
            console.log(e);
        }
    });

    socket.on('ROOM:NEW_MESSAGE', ({ roomId, user, text }) => {
        const message = {
            username: user.name,
            text,
        };

        rooms.get(roomId).get('messages').push(message);
        socket.broadcast.to(roomId).emit('ROOM:NEW_MESSAGE', message);
    });

    socket.on('disconnect', () => {
        try {
            rooms.forEach((value, roomId) => {
                if (value.get('users').delete(socket.id)) {
                    const users = [...value.get('users').values()];
                    socket.broadcast.to(roomId).emit('ROOM:SET_USERS', users);
                }
            });
        } catch (e) {
            console.log(e);
        }
    });

    console.log('Пользователь подключился, socket:', socket.id);
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`Сервер был запущен на порте ${PORT}`);
});
