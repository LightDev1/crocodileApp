import React from 'react';

export const Chat: React.FC = () => {
    return (
        <div className="chat__container">
            <div className="messages__container">
                <div className="message__container">
                    <span className="from">
                        Игрок 1:
                    </span>
                    <div className="message">Гвоздь</div>
                </div>
                <div className="message__container">
                    <span className="from">
                        Игрок 2:
                    </span>
                    <div className="message">Кроссовки</div>
                </div>
                <div className="message__container">
                    <span className="from">
                        Игрок 3:
                    </span>
                    <div className="message">Змея</div>
                </div>
            </div>
            <div className="input__container">
                <input type="text" placeholder="Введите слово" />
            </div>
        </div>
    );
};
