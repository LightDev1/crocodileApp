import { Action } from "redux";

export enum UserActionsType {
    SET_NAME = 'user/SET_NAME',
    SET_MESSAGE = 'user/SET_MESSAGE',
}

export interface SetNameActionInterface extends Action<UserActionsType> {
    type: UserActionsType.SET_NAME;
    payload: string;
}

export interface SetMessageActionInterface extends Action<UserActionsType> {
    type: UserActionsType.SET_MESSAGE;
    payload: string;
}

export const setName = (payload: string): SetNameActionInterface => ({
    type: UserActionsType.SET_NAME,
    payload,
});

export const setMessage = (payload: string): SetMessageActionInterface => ({
    type: UserActionsType.SET_MESSAGE,
    payload,
});

export type UserAction = SetNameActionInterface | SetMessageActionInterface;