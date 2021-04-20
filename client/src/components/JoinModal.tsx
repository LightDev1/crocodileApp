import React from 'react';

export const JoinModal: React.FC = () => {
    return (
        <div className="join__container">
            <label htmlFor="join-input">Присоединяйся к друзьям!</label>
            <input type="text" placeholder="Вставьте код комнаты" />
            <button className="join-btn">Присоединиться</button>
        </div>
    );
};
