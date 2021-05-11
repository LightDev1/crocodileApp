import React from 'react';
import { useSelector } from 'react-redux';

import avatar from '../images/avatar.png';
import { selectUsers } from '../store/ducks/rooms/selectors';

export const Dashboard: React.FC = () => {
    const users = useSelector(selectUsers);

    return (
        <div className="dashboard">
            {
                users.map((user, index) => (
                    <div className="player__block" key={user + index}>
                        <div className="spot">
                            <h3>#{index + 1}</h3>
                        </div>
                        <div className="player">
                            <img src={avatar} alt="Аватар пользователя" />
                            <span>{user}</span>
                        </div>
                        <div className="score">
                            <h3>100</h3>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};
