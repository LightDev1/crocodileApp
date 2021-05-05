import express from "express";
import { rooms } from "../server";

class RoomController {
    createRoom(req: express.Request, res: express.Response) {
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

        res.json('Комната была создана');
    }

    setSettings(req: express.Request, res: express.Response) {
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

        res.json('Комната была настроена');
    };
}

export const roomCtrl = new RoomController();