import { call, takeEvery } from 'redux-saga/effects';
import { RoomApi } from '../../../services/api/roomApi';
import { CreateRoomActionInterface, RoomsActionsType } from './actionCreators';

export function* createRoomRequest({ payload }: CreateRoomActionInterface): Generator {
    try {
        const data = yield call(RoomApi.createRoom, payload.item);
        console.log(data);
    } catch (e) {
        console.log(e);
    }
}

export function* setRoomSettingsRequest({ payload }: CreateRoomActionInterface): Generator {
    try {
        const data = yield call(RoomApi.setRoomSettings, payload.item);
        console.log(data);
    } catch (e) {
        console.log(e);
    }
}

export function* createRoomSaga() {
    yield takeEvery(RoomsActionsType.CREATE_ROOM, createRoomRequest);
    yield takeEvery(RoomsActionsType.SET_ROOM_SETTINGS, setRoomSettingsRequest);
}

