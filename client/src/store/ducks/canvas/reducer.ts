import produce, { Draft } from 'immer';
import { CanvasAction, CanvasActionsType } from './actionCreators';
import { Canvas } from './contracts/state';

const initialCanvasState: Canvas = {
    color: '#444444',
    tool: 'brush',
    radius: 10,
    toClear: false,
};

export const canvasReducer = produce((draft: Draft<Canvas>, action: CanvasAction) => {
    if (action.type === CanvasActionsType.SET_COLOR) {
        draft.color = action.payload.color
    }

    if (action.type === CanvasActionsType.SET_TOOL) {
        draft.tool = action.payload.tool;
    }

    if (action.type === CanvasActionsType.SET_RADIUS) {
        draft.radius = action.payload.radius;
    }

    if (action.type === CanvasActionsType.SET_TO_CLEAR) {
        draft.toClear = action.payload.toClear;
    }
}, initialCanvasState);

