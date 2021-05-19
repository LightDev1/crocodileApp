import { UserState } from "../../user/contracts/state";
import { Message } from "../actionCreators";

export interface Room {
    id: string;
    started: boolean;
    rounds: number;
    time: number;
    words: string;
    messages: Array<Message>;
    users: Array<UserState>;
}

export interface RoomState {
    item: Room;
}