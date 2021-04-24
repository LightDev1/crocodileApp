import React from 'react';
import { NavLink } from 'react-router-dom';

import { JoinModal } from '../components/JoinModal';

import avatar from '../images/avatar.png';

export const HubPage: React.FC = () => {


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
                    <NavLink to="/create">Приватная</NavLink>
                </div>
                <JoinModal />
            </div>
        </div>
    );
};
