import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import socket from '../socket';
import { setRoomId, setUsers } from '../store/ducks/rooms/actionCreators';
import { selectRoomId } from '../store/ducks/rooms/selectors';
import { setJoined } from '../store/ducks/user/actionCreators';
import { selectName } from '../store/ducks/user/selectors';

export const JoinModal: React.FC = () => {
    const dispatch = useDispatch();
    const roomId = useSelector(selectRoomId);
    const name = useSelector(selectName);
    const username = useSelector(selectName);

    const joinInRoom = async () => {
        try {
            if (roomId && name) {
                await socket.emit('ROOM:JOIN', {
                    roomId,
                    username,
                });

                const { data } = await axios.get(`/api/room_data/${roomId}`);

                dispatch(setUsers(data.users));

                dispatch(setJoined(true));
            } else {
                alert('Введите имя и ID комнаты');
            }
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        socket.on('ROOM:ERROR', (error) => {
            alert(error.message);
        });
    }, []);

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
