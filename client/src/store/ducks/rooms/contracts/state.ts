export interface Room {
    rounds: number,
    time: number,
    words: Array<string>,
    messages: Array<string>,
}

export interface RoomState {
    item: Room;
}