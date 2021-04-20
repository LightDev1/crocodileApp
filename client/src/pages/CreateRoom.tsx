import React from 'react';

import { Invite } from '../components/Invite';
import { PlayersList } from '../components/PlayersList';

export const CreateRoom: React.FC = () => {
    return (
        <div className="create__container">
            <div className="first-grid">
                <div className="form__container">
                    <h2>Лобби</h2>
                    <div className="rounds__container">
                        <label htmlFor="rounds">Количество раундов</label>
                        <select className="rounds" id="rounds">
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                        </select>
                    </div>
                    <div className="time__container">
                        <label htmlFor="time">Время на рисование (в сек.)</label>
                        <select className="time" id="time">
                            <option>30</option>
                            <option>40</option>
                            <option>50</option>
                            <option>60</option>
                            <option>70</option>
                            <option>80</option>
                            <option>90</option>
                            <option>100</option>
                            <option>110</option>
                            <option>120</option>
                            <option>130</option>
                            <option>140</option>
                            <option>160</option>
                        </select>
                    </div>
                    <label className="customs-check">
                        <input type="checkbox" />
                    Использовать кастомные слова
                </label>
                    <div className="custom-words__container">
                        <label className="custom-words" htmlFor="custom-words">Пользовательские слова</label>
                        <textarea name="custom-words" id="custom-words" placeholder="Здесь вы можете написать свои слова и играть с ними (минимум 4 слова)"></textarea>
                    </div>
                    <div className="btn__container">
                        <button className="start-btn">Начать игру</button>
                    </div>
                </div>
                <PlayersList />
            </div>
            <div className="second-grid">
                <Invite />
            </div>
        </div>
    );
};
