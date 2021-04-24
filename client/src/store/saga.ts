import { all } from 'redux-saga/effects'
import { createRoomSaga } from './ducks/rooms/sagas';


export default function* rootSaga() {
    yield all([
        createRoomSaga(),
    ]);
};