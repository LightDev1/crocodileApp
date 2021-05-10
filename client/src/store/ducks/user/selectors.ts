import { RootState } from "../../store";
import { UserState } from "./contracts/state";

export const selectUser = (state: RootState): UserState => state.user;

export const selectName = (state: RootState) => selectUser(state).name;

export const selectJoined = (state: RootState) => selectUser(state).joined;

export const selectMessages = (state: RootState) => selectUser(state).messages;