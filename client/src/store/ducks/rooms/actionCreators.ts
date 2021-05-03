import { Action } from "redux";
import { RoomState } from "./contracts/state";

export enum RoomsActionsType {
    CREATE_ROOM = 'rooms/CREATE_ROOM',
    SET_ROOM_ID = 'rooms/SET_ROOM_ID',
    SET_ROUNDS = 'rooms/SET_ROUNDS',
    SET_TIME = 'rooms/SET_TIME',
    SET_WORDS = 'rooms/SET_WORDS',
}

export interface CreateRoomActionInterface extends Action<RoomsActionsType> {
    type: RoomsActionsType.CREATE_ROOM;
    payload: RoomState;
}

export interface SetRoomIdActionInterface extends Action<RoomsActionsType> {
    type: RoomsActionsType.SET_ROOM_ID;
    payload: string;
}

export interface SetRoundsActionInterface extends Action<RoomsActionsType> {
    type: RoomsActionsType.SET_ROUNDS;
    payload: number;
}

export interface SetTimeActionInterface extends Action<RoomsActionsType> {
    type: RoomsActionsType.SET_TIME;
    payload: number;
}

export interface SetWordsActionInterface extends Action<RoomsActionsType> {
    type: RoomsActionsType.SET_WORDS;
    payload: string;
}

export const createRoom = (payload: RoomState): CreateRoomActionInterface => ({
    type: RoomsActionsType.CREATE_ROOM,
    payload,
});

export const setRoomId = (payload: string): SetRoomIdActionInterface => ({
    type: RoomsActionsType.SET_ROOM_ID,
    payload,
});

export const setRounds = (payload: number): SetRoundsActionInterface => ({
    type: RoomsActionsType.SET_ROUNDS,
    payload,
});

export const setTime = (payload: number): SetTimeActionInterface => ({
    type: RoomsActionsType.SET_TIME,
    payload,
});

export const setWords = (payload: string): SetWordsActionInterface => ({
    type: RoomsActionsType.SET_WORDS,
    payload,
});

export type RoomAction = CreateRoomActionInterface | SetRoomIdActionInterface | SetRoundsActionInterface | SetTimeActionInterface | SetWordsActionInterface;