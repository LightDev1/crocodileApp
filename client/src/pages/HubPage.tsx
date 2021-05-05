import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { JoinModal } from '../components/JoinModal';
import { useSocket } from '../socket';

import avatar from '../images/avatar.png';
import { createRoom } from '../store/ducks/rooms/actionCreators';
import { generateMD5 } from '../utils/generateHash';

export const HubPage: React.FC = () => {
    const dispatch = useDispatch();
    const { connectToSocket } = useSocket();
    const [name, setName] = useState('');
    const history = useHistory();

    const createRoomRequest = () => {
        if (name) {
            const users = [name];

            dispatch(createRoom({
                item: {
                    id: generateMD5(Date.now().toString()),
                    rounds: 2,
                    time: 30,
                    words: '',
                    messages: [],
                    users,
                }
            }));

            history.push('/create');
        } else {
            alert('Введите имя');
        }

    };

    useEffect(() => {
        connectToSocket();
    }, [connectToSocket]);

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
                    onChange={(event) => { setName(event.target.value) }}
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
