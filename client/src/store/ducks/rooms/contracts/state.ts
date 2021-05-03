export interface Room {
    id: string;
    rounds: number;
    time: number;
    words: string;
    messages: Array<string>;
}

export interface RoomState {
    item: Room;
}