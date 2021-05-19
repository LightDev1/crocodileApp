import produce, { Draft } from 'immer';
import { UserActionsType } from './actionCreators';
import { UserState } from './contracts/state';

const initiaUserState: UserState = {
    name: '',
    avatarBlob: '',
    joined: false,
    host: false,
    message: ''
}

export const userReducer = produce((draft: Draft<UserState>, action: any) => {
    if (action.type === UserActionsType.SET_NAME) {
        draft.name = action.payload;
    }

    if (action.type === UserActionsType.SET_JOINED) {
        draft.joined = action.payload;
    }

    if (action.type === UserActionsType.SET_HOST) {
        draft.host = action.payload;
    }

    if (action.type === UserActionsType.SET_MESSAGE) {
        draft.message = action.payload;
    }
}, initiaUserState);