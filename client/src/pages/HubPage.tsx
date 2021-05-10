import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { JoinModal } from '../components/JoinModal';
import socket from '../socket';
import avatar from '../images/avatar.png';
import { createRoom, setUsers } from '../store/ducks/rooms/actionCreators';
import { generateMD5 } from '../utils/generateHash';
import { selectName } from '../store/ducks/user/selectors';
import { selectUsers } from '../store/ducks/rooms/selectors';
import { setJoined, setName } from '../store/ducks/user/actionCreators';
import axios from 'axios';

export const HubPage: React.FC = () => {
    const dispatch = useDispatch();
    const roomId = generateMD5(Date.now().toString());
    const users = useSelector(selectUsers);
    const name = useSelector(selectName);

    const createRoomRequest = async () => {
        if (name) {
            await dispatch(createRoom({
                item: {
                    id: roomId,
                    rounds: 2,
                    time: 30,
                    words: '',
                    messages: [],
                    users
                }
            }));

            await socket.emit('ROOM:JOIN', {
                roomId,
                username: name,
            });

            const { data } = await axios.get(`/api/room_data/${roomId}`);

            dispatch(setUsers(data.users));

            dispatch(setJoined(true));
        } else {
            alert('Введите имя');
        }
    };

    useEffect(() => {
        socket.on('ROOM:SET_USERS', (users) => {
            dispatch(setUsers(users));
            console.log(users);
        });
    }, [dispatch]);

    return (
        <div className="hub__container">
            <div className="logo__container">
                <h1>scratch.io</h1>
            </div>
            <div className="form__container">
                <input
                    type="text"
                    placeholder="Введите имя"
                    value={name}
                    onChange={(event) => { dispatch(setName(event.target.value)) }}
                />
                <div className="avatar-choose__container">
                    <img src={avatar} alt="Аватар пользователя" />
                    <button className="upload-btn">Загрузить</button>
                </div>
                <div className="create-room__container">
                    <h3>Создать комнату:</h3>
                    <button onClick={createRoomRequest} className="create__private">Приватная</button>
                </div>
                <JoinModal />
            </div>
        </div>
    );
};
