import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import socket from '../socket';
import { setRoomId } from '../store/ducks/rooms/actionCreators';
import { selectRoomId } from '../store/ducks/rooms/selectors';
import { selectName } from '../store/ducks/user/selectors';

export const JoinModal: React.FC = () => {
    const dispatch = useDispatch();
    const roomId = useSelector(selectRoomId);
    const username = useSelector(selectName);

    const joinInRoom = () => {
        socket.emit('ROOM:JOIN', {
            roomId,
            username,
        });
    };

    return (
        <div className="join__container">
            <label htmlFor="join-input">Присоединяйся к друзьям!</label>
            <input
                type="text"
                placeholder="Вставьте код комнаты"
                value={roomId}
                onChange={(event) => { dispatch(setRoomId(event.target.value)) }}
            />
            <button
                className="join-btn"
                onClick={joinInRoom}
            >
                Присоединиться
            </button>
        </div>
    );
};
