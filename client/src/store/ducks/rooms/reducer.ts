import produce, { Draft } from 'immer';
import { RoomAction, RoomsActionsType } from './actionCreators';
import { RoomState } from './contracts/state';

const initialRoomState: RoomState = {
    item: {
        id: '',
        started: false,
        rounds: 2,
        time: 30,
        words: '',
        messages: [],
        users: [],
    }
};

export const roomReducer = produce((draft: Draft<RoomState>, action: RoomAction) => {
    if (action.type === RoomsActionsType.CREATE_ROOM) {
        draft.item = action.payload.item;
    }

    if (action.type === RoomsActionsType.SET_ROOM_SETTINGS) {
        draft.item = action.payload.item;
    }

    if (action.type === RoomsActionsType.SET_ROOM_ID) {
        draft.item.id = action.payload;
    }

    if (action.type === RoomsActionsType.SET_STARTED) {
        draft.item.started = action.payload;
    }

    if (action.type === RoomsActionsType.SET_ROUNDS) {
        draft.item.rounds = action.payload;
    }

    if (action.type === RoomsActionsType.SET_TIME) {
        draft.item.time = action.payload;
    }

    if (action.type === RoomsActionsType.SET_USERS) {
        draft.item.users = action.payload;
    }

    if (action.type === RoomsActionsType.SET_MESSAGES) {
        draft.item.messages = [...draft.item.messages, action.payload];
    }

    if (action.type === RoomsActionsType.SET_WORDS) {
        draft.item.words = action.payload;
    }
}, initialRoomState);

