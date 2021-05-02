import { RootState } from "../../store";
import { Canvas } from "./contracts/state";

export const selectCanvas = (state: RootState): Canvas => state.canvas;

export const selectColor = (state: RootState) => selectCanvas(state).color;

export const selectTool = (state: RootState) => selectCanvas(state).tool;

export const selectRadius = (state: RootState) => selectCanvas(state).radius;

export const selectToClear = (state: RootState) => selectCanvas(state).toClear;


