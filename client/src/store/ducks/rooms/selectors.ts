import { RootState } from "../../store";
import { RoomState } from "./contracts/state";

export const selectRoom = (state: RootState): RoomState => state.room;

export const selectRoomId = (state: RootState) => selectRoom(state).item.id;

export const selectRounds = (state: RootState) => selectRoom(state).item.rounds;

export const selectTime = (state: RootState) => selectRoom(state).item.time;

export const selectWords = (state: RootState) => selectRoom(state).item.words;

export const selectUsers = (state: RootState) => selectRoom(state).item.users;