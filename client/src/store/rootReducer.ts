import { combineReducers } from 'redux';
import { canvasReducer } from './ducks/canvas/reducer';
import { roomReducer } from './ducks/rooms/reducer';
import { userReducer } from './ducks/user/reducer';

export const rootReducer = combineReducers({
    room: roomReducer,
    canvas: canvasReducer,
    user: userReducer,
});