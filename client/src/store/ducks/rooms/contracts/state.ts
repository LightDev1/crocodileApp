export interface Room {
    id: string;
    rounds: number;
    time: number;
    words: string;
    messages: Array<string>;
    users: Array<string>;
}

export interface RoomState {
    item: Room;
}