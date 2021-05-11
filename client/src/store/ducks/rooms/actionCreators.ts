import { Action } from "redux";
import { RoomState } from "./contracts/state";

export enum RoomsActionsType {
    CREATE_ROOM = 'rooms/CREATE_ROOM',
    SET_ROOM_SETTINGS = 'rooms/SET_ROOM_SETTINGS',
    SET_ROOM_ID = 'rooms/SET_ROOM_ID',
    SET_STARTED = 'rooms/SET_STARTED',
    SET_ROUNDS = 'rooms/SET_ROUNDS',
    SET_TIME = 'rooms/SET_TIME',
    SET_WORDS = 'rooms/SET_WORDS',
    SET_MESSAGES = 'rooms/SET_MESSAGES',
    SET_USERS = 'rooms/SET_USERS',
}

export interface Message {
    username: string;
    text: string;
}

export interface CreateRoomActionInterface extends Action<RoomsActionsType> {
    type: RoomsActionsType.CREATE_ROOM;
    payload: RoomState;
}

export interface SetSettingsRoomActionInterface extends Action<RoomsActionsType> {
    type: RoomsActionsType.SET_ROOM_SETTINGS;
    payload: RoomState;
}

export interface SetRoomIdActionInterface extends Action<RoomsActionsType> {
    type: RoomsActionsType.SET_ROOM_ID;
    payload: string;
}

export interface SetStartedActionInterface extends Action<RoomsActionsType> {
    type: RoomsActionsType.SET_STARTED;
    payload: boolean;
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

export interface SetMessagesActionInterface extends Action<RoomsActionsType> {
    type: RoomsActionsType.SET_MESSAGES;
    payload: Message;
}

export interface SetUsersActionInterface extends Action<RoomsActionsType> {
    type: RoomsActionsType.SET_USERS;
    payload: Array<string>;
}

export const createRoom = (payload: RoomState): CreateRoomActionInterface => ({
    type: RoomsActionsType.CREATE_ROOM,
    payload,
});

export const setRoomSettings = (payload: RoomState): SetSettingsRoomActionInterface => ({
    type: RoomsActionsType.SET_ROOM_SETTINGS,
    payload,
});

export const setRoomId = (payload: string): SetRoomIdActionInterface => ({
    type: RoomsActionsType.SET_ROOM_ID,
    payload,
});

export const setStarted = (payload: boolean): SetStartedActionInterface => ({
    type: RoomsActionsType.SET_STARTED,
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

export const setMessages = (payload: Message): SetMessagesActionInterface => ({
    type: RoomsActionsType.SET_MESSAGES,
    payload,
});

export const setUsers = (payload: Array<string>): SetUsersActionInterface => ({
    type: RoomsActionsType.SET_USERS,
    payload,
});

export type RoomAction = CreateRoomActionInterface
    | SetSettingsRoomActionInterface
    | SetRoomIdActionInterface
    | SetStartedActionInterface
    | SetRoundsActionInterface
    | SetTimeActionInterface
    | SetWordsActionInterface
    | SetMessagesActionInterface
    | SetUsersActionInterface;