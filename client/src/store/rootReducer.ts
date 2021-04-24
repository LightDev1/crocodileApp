import { combineReducers } from 'redux';
import { roomReducer } from './ducks/rooms/reducer';

export const rootReducer = combineReducers({
    room: roomReducer,
});