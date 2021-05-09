import produce, { Draft } from 'immer';
import { UserActionsType } from './actionCreators';
import { UserState } from './contracts/state';

const initiaUserState: UserState = {
    name: '',
    messages: []
};

export const userReducer = produce((draft: Draft<UserState>, action: any) => {
    if (action.type === UserActionsType.SET_NAME) {
        draft.name = action.payload;
    }

    if (action.type === UserActionsType.SET_MESSAGE) {
        draft.messages = action.payload;
    }
}, initiaUserState);