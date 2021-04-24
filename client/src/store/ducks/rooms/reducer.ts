import produce, { Draft } from 'immer';
import { RoomAction, RoomsActionsType } from './actionCreators';
import { RoomState } from './contracts/state';

const initialRoomState: RoomState = {
    item: {
        rounds: 2,
        time: 30,
        words: [],
        messages: [],
    }
};

export const roomReducer = produce((draft: Draft<RoomState>, action: RoomAction) => {
    if (action.type === RoomsActionsType.CREATE_ROOM) {
        console.log(draft);
        draft.item = action.payload.item;
    }
}, initialRoomState);

