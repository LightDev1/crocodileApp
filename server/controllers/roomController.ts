import express from "express";
import { rooms } from "../server";

class RoomController {
    index(req: express.Request, res: express.Response) {
        try {
            const { id: roomId } = req.params;

            if (!rooms.has(roomId)) {
                return res.status(500).json({ message: 'Некорректный код комнаты' });
            }

            const obj = {
                users: [...rooms.get(roomId).get('users').values()],
                messages: [...rooms.get(roomId).get('messages').values()]
            };

            res.json(obj);
        } catch (e) {
            console.log(e);
        }
    }

    createRoom(req: express.Request, res: express.Response) {
        const { rounds, time, words, id, started } = req.body;

        console.log(rounds, time, words, id);

        if (!rooms.has(id)) {
            rooms.set(id, new Map([
                ['users', new Map()],
                ['words', words],
                ['messages', []],
                ['rounds', rounds],
                ['time', time],
                ['started', started],
            ]));
        }

        res.json('Комната была создана');
    }

    setSettings(req: express.Request, res: express.Response) {
        const { rounds, time, words, id } = req.body;

        console.log(rounds, time, words, id);

        if (rooms.has(id)) {
            rooms.set(id, new Map([
                ['users', rooms.get(id).get('users')],
                ['words', words],
                ['messages', []],
                ['rounds', rounds],
                ['time', time],
                ['started', true],
            ]));
        }

        res.json('Комната была настроена');
    };
}

export const roomCtrl = new RoomController();