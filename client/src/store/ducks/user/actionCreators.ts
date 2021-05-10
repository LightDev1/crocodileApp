import { Action } from "redux";

export enum UserActionsType {
    SET_NAME = 'user/SET_NAME',
    SET_MESSAGE = 'user/SET_MESSAGE',
    SET_JOINED = 'user/SET_JOINED',
}

export interface SetNameActionInterface extends Action<UserActionsType> {
    type: UserActionsType.SET_NAME;
    payload: string;
}

export interface SetJoinedActionInterface extends Action<UserActionsType> {
    type: UserActionsType.SET_JOINED;
    payload: boolean;
}

export interface SetMessageActionInterface extends Action<UserActionsType> {
    type: UserActionsType.SET_MESSAGE;
    payload: string;
}

export const setName = (payload: string): SetNameActionInterface => ({
    type: UserActionsType.SET_NAME,
    payload,
});

export const setJoined = (payload: boolean): SetJoinedActionInterface => ({
    type: UserActionsType.SET_JOINED,
    payload,
});

export const setMessage = (payload: string): SetMessageActionInterface => ({
    type: UserActionsType.SET_MESSAGE,
    payload,
});

export type UserAction = SetNameActionInterface | SetJoinedActionInterface | SetMessageActionInterface;