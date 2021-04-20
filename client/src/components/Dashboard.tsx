import React from 'react';

import avatar from '../images/avatar.png';

export const Dashboard: React.FC = () => {
    return (
        <div className="dashboard">
            <div className="player__block">
                <div className="spot">
                    <h3>#1</h3>
                </div>
                <div className="player">
                    <img src={avatar} alt="Аватар пользователя" />
                    <span>Игрок 1</span>
                </div>
                <div className="score">
                    <h3>100</h3>
                </div>
            </div>
            <div className="player__block">
                <div className="spot">
                    <h3>#2</h3>
                </div>
                <div className="player">
                    <img src={avatar} alt="Аватар пользователя" />
                    <span>Игрок 2</span>
                </div>
                <div className="score">
                    <h3>100</h3>
                </div>
            </div>
            <div className="player__block">
                <div className="spot">
                    <h3>#3</h3>
                </div>
                <div className="player">
                    <img src={avatar} alt="Аватар пользователя" />
                    <span>Игрок 3</span>
                </div>
                <div className="score">
                    <h3>100</h3>
                </div>
            </div>

        </div>
    );
};
