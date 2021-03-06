import React from 'react';
import { useSelector } from 'react-redux';
import { selectUsers } from '../store/ducks/rooms/selectors';

import avatar from '../images/avatar.png';

export const PlayersList: React.FC = () => {
    const users = useSelector(selectUsers);

    return (
        <div className="players__container">
            <h2>Игроки</h2>
            <div className="players__list">
                {users && (
                    users.map(user => (
                        <div className="player" key={user.name}>
                            <img src={user.avatar ? user.avatar : avatar} alt="Аватар пользователя" />
                            <span>{user.name}</span>
                        </div>
                    ))
                )
                }
            </div>
        </div>
    );
};

