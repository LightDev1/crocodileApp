import { Action } from "redux";
import { RoomState } from "./contracts/state";

export enum RoomsActionsType {
    CREATE_ROOM = 'rooms/CREATE_ROOM',
}

export interface CreateRoomActionInterface extends Action<RoomsActionsType> {
    type: RoomsActionsType.CREATE_ROOM;
    payload: RoomState;
}

export const createRoom = (payload: RoomState): CreateRoomActionInterface => ({
    type: RoomsActionsType.CREATE_ROOM,
    payload,
});

export type RoomAction = CreateRoomActionInterface;