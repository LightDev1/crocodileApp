import React from 'react';
import avatar from '../images/avatar.png';

export const PlayersList: React.FC = () => {
    return (
        <div className="players__container">
            <h2>Игроки</h2>
            <div className="players__list">
                <div className="player">
                    <img src={avatar} alt="Аватар пользователя" />
                    <span>Игрок</span>
                </div>
                <div className="player">
                    <img src={avatar} alt="Аватар пользователя" />
                    <span>Игрок</span>
                </div>
                <div className="player">
                    <img src={avatar} alt="Аватар пользователя" />
                    <span>Игрок</span>
                </div>
                <div className="player">
                    <img src={avatar} alt="Аватар пользователя" />
                    <span>Игрок</span>
                </div>
                <div className="player">
                    <img src={avatar} alt="Аватар пользователя" />
                    <span>Игрок</span>
                </div>
            </div>
        </div>
    );
};
