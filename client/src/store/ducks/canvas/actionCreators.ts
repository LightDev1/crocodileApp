import { Action } from "redux";

export enum CanvasActionsType {
    SET_COLOR = 'canvas/SET_COLOR',
    SET_TOOL = 'canvas/SET_TOOL',
    SET_RADIUS = 'canvas/SET_RADIUS',
    SET_TO_CLEAR = 'canvas/SET_TO_CLEAR',
}

export interface SetColorActionInterface extends Action<CanvasActionsType> {
    type: CanvasActionsType.SET_COLOR;
    payload: string;
}

export interface SetToolActionInterface extends Action<CanvasActionsType> {
    type: CanvasActionsType.SET_TOOL;
    payload: string;
}

export interface SetRadiusButtonActionInterface extends Action<CanvasActionsType> {
    type: CanvasActionsType.SET_RADIUS;
    payload: number;
}

export interface SetToClearActionInterface extends Action<CanvasActionsType> {
    type: CanvasActionsType.SET_TO_CLEAR;
    payload: boolean;
}

export const setColor = (payload: string): SetColorActionInterface => ({
    type: CanvasActionsType.SET_COLOR,
    payload,
});

export const setTool = (payload: string): SetToolActionInterface => ({
    type: CanvasActionsType.SET_TOOL,
    payload,
});

export const setRadius = (payload: number): SetRadiusButtonActionInterface => ({
    type: CanvasActionsType.SET_RADIUS,
    payload,
});

export const setToClear = (payload: boolean): SetToClearActionInterface => ({
    type: CanvasActionsType.SET_TO_CLEAR,
    payload,
});

export type CanvasAction = SetColorActionInterface | SetToolActionInterface | SetRadiusButtonActionInterface | SetToClearActionInterface;