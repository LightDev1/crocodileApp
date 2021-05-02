import { Action } from "redux";
import { Canvas } from "./contracts/state";

export enum CanvasActionsType {
    SET_COLOR = 'canvas/SET_COLOR',
    SET_TOOL = 'canvas/SET_TOOL',
    SET_RADIUS = 'canvas/SET_RADIUS',
    SET_TO_CLEAR = 'canvas/SET_TO_CLEAR',
}

export interface SetColorActionInterface extends Action<CanvasActionsType> {
    type: CanvasActionsType.SET_COLOR;
    payload: Canvas;
}

export interface SetToolActionInterface extends Action<CanvasActionsType> {
    type: CanvasActionsType.SET_TOOL;
    payload: Canvas;
}

export interface SetRadiusButtonActionInterface extends Action<CanvasActionsType> {
    type: CanvasActionsType.SET_RADIUS;
    payload: Canvas;
}

export interface SetToClearActionInterface extends Action<CanvasActionsType> {
    type: CanvasActionsType.SET_TO_CLEAR;
    payload: Canvas;
}

export const setColor = (payload: Canvas): SetColorActionInterface => ({
    type: CanvasActionsType.SET_COLOR,
    payload,
});

export const setTool = (payload: Canvas): SetToolActionInterface => ({
    type: CanvasActionsType.SET_TOOL,
    payload,
});

export const setRadiusButton = (payload: Canvas): SetRadiusButtonActionInterface => ({
    type: CanvasActionsType.SET_RADIUS,
    payload,
});

export const setToClear = (payload: Canvas): SetToClearActionInterface => ({
    type: CanvasActionsType.SET_TO_CLEAR,
    payload,
});

export type CanvasAction = SetColorActionInterface | SetToolActionInterface | SetRadiusButtonActionInterface | SetToClearActionInterface;