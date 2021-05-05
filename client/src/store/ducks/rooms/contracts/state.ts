export interface Room {
    id: string;
    users: Array<string>;
    rounds: number;
    time: number;
    words: string;
    messages: Array<string>;
}

export interface RoomState {
    item: Room;
}