import { Message } from "../actionCreators";

export interface Room {
    id: string;
    started: boolean;
    rounds: number;
    time: number;
    words: string;
    messages: Array<Message>;
    users: Array<string>;
}

export interface RoomState {
    item: Room;
}