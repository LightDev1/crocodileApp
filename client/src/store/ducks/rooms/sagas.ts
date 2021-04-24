import { takeEvery } from 'redux-saga/effects';
import { RoomsActionsType } from './actionCreators';

export function* createRoom() {
    yield console.log('test');
}

export function* createRoomSaga() {
    yield takeEvery(RoomsActionsType.CREATE_ROOM, createRoom);
}