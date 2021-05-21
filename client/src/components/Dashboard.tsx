import React from 'react';
import { useSelector } from 'react-redux';

import { selectUsers } from '../store/ducks/rooms/selectors';

import avatar from '../images/avatar.png';

export const Dashboard: React.FC = () => {
    const users = useSelector(selectUsers);

    return (
        <div className="dashboard">
            {users && (
                users.map((user, index) => (
                    <div className="player__block" key={user.name + index}>
                        <div className="spot">
                            <h3>#{index + 1}</h3>
                        </div>
                        <div className="player">
                            <img src={user.avatar ? user.avatar : avatar} alt="Аватар пользователя" />
                            <span>{user.name}</span>
                        </div>
                        <div className="score">
                            <h3>100</h3>
                        </div>
                    </div>
                ))
            )
            }
        </div>
    );
};
