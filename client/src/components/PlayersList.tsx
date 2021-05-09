import React from 'react';
// eslint-disable-next-line
import avatar from '../images/avatar.png';

export const PlayersList: React.FC = () => {

    return (
        <div className="players__container">
            <h2>Игроки</h2>
            <div className="players__list">
                {
                    /* {users.map(user => (
                        <div className="player" key={user}>
                            <img src={avatar} alt="Аватар пользователя" />
                            <span>{user}</span>
                        </div>
                    )
                    )} */
                }
            </div>
        </div>
    );
};
