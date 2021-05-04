import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { JoinModal } from '../components/JoinModal';
import { useSocket } from '../socket';

import avatar from '../images/avatar.png';
import { createRoom } from '../store/ducks/rooms/actionCreators';
import { generateMD5 } from '../utils/generateHash';

export const HubPage: React.FC = () => {
    const dispatch = useDispatch();
    const { connectToSocket } = useSocket();

    const createRoomRequest = () => {
        dispatch(createRoom({
            item: {
                id: generateMD5(Date.now().toString()),
                rounds: 2,
                time: 30,
                words: '',
                messages: [],
            }
        }));
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
                <input type="text" placeholder="Введите имя" />
                <div className="avatar-choose__container">
                    <img src={avatar} alt="Аватар пользователя" />
                    <button className="upload-btn">Загрузить</button>
                </div>
                <div className="create-room__container">
                    <h3>Создать комнату:</h3>
                    <NavLink to="/create" onClick={createRoomRequest}>Приватная</NavLink>
                </div>
                <JoinModal />
            </div>
        </div>
    );
};
