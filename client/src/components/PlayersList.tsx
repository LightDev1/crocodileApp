import React from 'react';
import { useSelector } from 'react-redux';
import avatar from '../images/avatar.png';
import { selectUsers } from '../store/ducks/rooms/selectors';

export const PlayersList: React.FC = () => {
    const users = useSelector(selectUsers);

    return (
        <div className="players__container">
            <h2>Игроки</h2>
            <div className="players__list">
                {
                    users.map(user => (
                        <div className="player" key={user}>
                            <img src={avatar} alt="Аватар пользователя" />
                            <span>{user}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

